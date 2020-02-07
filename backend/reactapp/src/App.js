import React, { useState, useEffect } from 'react';
import './App.css';
import './Fonts.css';
//component
import WishList from './components/wishList';
import MovieTiles from './components/moviesTiles';
import Footer from './components/footer';

//reactstraps
import { Button, Popover, PopoverHeader, PopoverBody, ListGroup  } from 'reactstrap';

//fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

function App(props) {
  //POPHOVER
  const [popoverOpen, setPopoverOpen] = useState(false);
  const toggle = () => setPopoverOpen(!popoverOpen);
  //POPHOVER

  //HOOKS
  //movies list from api
  const [moviesList, setMoviesList] = useState([]);
  const [likesCnt, setLikesCnt] = useState(0);
  const [wishList, setWishList] = useState([]);
  const [likeMovie, setLikeMovie] = useState(false);
  //HOOKS /end

  //EFFECT (GET DATA)
  //get movies from api
  useEffect(() => {
    var fetchData = async () => {
      var rawRes = await fetch('/new-movies');
      var res = await rawRes.json();
      setMoviesList(res.movies);

      var rawWishRes = await fetch('/wishlist-movie');
      var wishRes = await rawWishRes.json();
      setWishList(wishRes.movies);
    }
    fetchData();
  }, []);

  //EFFECT (GET DATA) /end

  //HANDLE USER REQUEST
  const addMovie = async(name, pic) => {
    setLikesCnt(likesCnt+1)

    await fetch('/wishlist-movie', {
      method: 'POST',
      headers: {'Content-Type':'application/x-www-form-urlencoded'},
      body: `name=${name}&pic=${pic}`
    });
    var rawWishRes = await fetch('/wishlist-movie');
      var wishRes = await rawWishRes.json();
      setWishList(wishRes.movies);
  }

  var suppMovie = async (name) => {
    setLikesCnt(likesCnt-1)
    
    await fetch(`/wishlist-movie`, {
      method: 'DELETE',
      headers: {'Content-Type':'application/x-www-form-urlencoded'},
      body: `name=${name}`
     });
  }

  const wishRmv = async (name) => {
    setLikesCnt(likesCnt-1);
    setWishList( wishList.filter((e)=>(e.name !== name)));
    
    await fetch(`/wishlist-movie`, {
      method: 'DELETE',
      headers: {'Content-Type':'application/x-www-form-urlencoded'},
      body: `name=${name}`
     });
  }
  //HANDLE USER REQUEST /end

  
  const reduceTxt = (text) => {
    return text.substr(0, 200);
  }

  var moviesDis = moviesList.map(function(movie, i) {
    var isLiked = false;

    var isInWishList = wishList.filter((e)=>(e.title !== movie.title));
    if(isInWishList[0]){
      isLiked = true;
    } else {
      isLiked = false;
    }

    
    return <MovieTiles pos={i} setIsLiked={setLikeMovie} LIKE={isLiked} likeBtnRemove={suppMovie} likeBtnAdd={addMovie} globalCountRating={movie.vote_count} globalRating={Math.round(movie.vote_average / 2)} movieName={movie.title} movieImg={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`} movieText={reduceTxt(movie.overview)} />
  });

  var wishListDis = wishList.map(function(wishList, i) {return <WishList wishRmv={wishRmv} wishPos={i} name={moviesList.name} removeFromWishList={suppMovie} movieImg={wishList.pic} movieTitle={wishList.name} />}).reverse();
  
  return (
    <div id="all" className="all">
      <div className="container">
        <div className="row">
          <div className="col-12 header">
            <div>
              <a href="#all"><img className="headerItem" alt="logo.png" src="/logo.png" /></a>
              <span className="headerItem headerTxt">Last released</span>
            </div>
            <div className="headerItem">
            <Button id="Popover1" type="button">{wishList.length} <FontAwesomeIcon style={{color: "#fd6861"}} icon={faHeart} /></Button>
              <Popover placement="bottom" isOpen={popoverOpen} target="Popover1" toggle={toggle}>
                <PopoverHeader>Liked Movies</PopoverHeader>
                <PopoverBody>
                <ListGroup>
                  {wishListDis}
                </ListGroup>
                </PopoverBody>
              </Popover>
            </div>
          </div>
        </div>
        <div className="row">
        {moviesDis}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;