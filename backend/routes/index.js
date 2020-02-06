var express = require('express');
var router = express.Router();
var request = require('sync-request');

//models
var connect = require('../models/connect');
var moviesModel = require('../models/movies');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json({ message: 'reponse en JSON' });
});

router.get('/new-movies', function(req, res, next) {
  var apiData = request('GET', 'https://api.themoviedb.org/3/discover/movie?api_key=412c1c31414bcde35e99edabce98254c&language=fr&sort_by=popularity.desc&include_adult=false&include_video=false&page=10');
  apiData = JSON.parse(apiData.getBody());
  res.json({result: true,movies:apiData});
});




//WISHLIST

//get wishlist
router.get('/wishlist-movie', async function(req, res, next) {
  var toGet = await moviesModel.find();
  res.json({result:true, movies: toGet});
});

//add to wishlist
router.post('/wishlist-movie', async function(req, res, next) {
  var movieName = req.body.movieName;
  var moviePic = req.body.moviePic;

  var isExist = await moviesModel.findOne({
    name: movieName,
  });
  
  if(!isExist) {
    var newMovie = new moviesModel({
      name: movieName,
      pic: moviePic,
    });
    await newMovie.save();
    res.json({result:true, pushedName: req.body.movieName, pushedPic: req.body.moviePic});
  } else {
    console.log('ALREADY EXIT')
    res.json({result:false});
  }  
});

//remove from wishlist
router.delete('/wishlist-movie', async function(req, res, next) {

  var toDelete = req.body.movieName;
  var isExist = await moviesModel.findOne({
    name: toDelete,
  });

  if(isExist) {
    await moviesModel.deleteOne({
      name: toDelete,
    });
    res.json({result:true});
  } else {
    res.json({result:false});
  }
});

//END WISHLIST

module.exports = router;
