import React from 'react';
import './App.css';
import './Fonts.css';
//component
import HeaderBtn from './components/headerBtn';
import MovieTiles from './components/moviesTiles';
import Footer from './components/footer';
//svg
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

var movies = [
  {
    name: "Frozen",
    description: "AAAAAAAAAAAAAAAAAAAAAAAAA",
    img: "../frozen.jpg",
    globalRating: 1,
    globalCountRating: 10,
  },
  {
    name: "Jumanji",
    description: "AAAAAAAAAAAAAAAAAAAAAAAAA",
    img: "../jumanji.jpg",
    globalRating: 2,
    globalCountRating: 10,
  },
  {
    name: "Star Wars",
    description: "AAAAAAAAAAAAAAAAAAAAAAAAA",
    img: "../starwars.jpg",
    globalRating: 3,
    globalCountRating: 10,
  },
  {
    name: "Maleficent",
    description: "AAAAAAAAAAAAAAAAAAAAAAAAA",
    img: "../maleficent.jpg",
    globalRating: 3,
    globalCountRating: 10,
  },
  {
    name: "Once Upon A Time In HollyWood",
    description: "AAAAAAAAAAAAAAAAAAAAAAAAA",
    img: "../once_upon.jpg",
    globalRating: 5,
    globalCountRating: 10,
  },
  {
    name: "Bad boyzz",
    description: "AAAAAAAAAAAAAAAAAAAAAAAAA",
    img: "../badboy3.jpg",
    globalRating: 3,
    globalCountRating: 10,
  },
  {
    name: "Terminator",
    description: "AAAAAAAAAAAAAAAAAAAAAAAAA",
    img: "../terminator.jpg",
    globalRating: 3,
    globalCountRating: 10,
  },
];

function App(props) {

  var starsDisplay = (starsNb) => {
    var toDis = [];
    for(var i=0;i<=5;i++){
      if(i<starsNb)
        toDis.push(<FontAwesomeIcon icon={faStar} style={{color: "#FFD700"}} />)
      else toDis.push(<FontAwesomeIcon icon={faStar} />)
    }
    return toDis;
  }

  var ratingDisplay = () => {
    var toDis = [];
    for(var i=0;i<=5;i++){
        toDis.push(<FontAwesomeIcon data-pos={i} className="ratingStars" icon={faStar} />)
    }
    return toDis;
  }

  // <FontAwesomeIcon icon={faHeart} />

  //dinamize movies
  var moviesDis = movies.map(function(movie, i) {return <MovieTiles userRating={ratingDisplay()} globalCountRating={movie.globalCountRating} globalRating={starsDisplay(movie.globalRating)} movieName={movie.name} movieImg={movie.img} movieText={movie.description} />});

  return (
    <div className="all">
      <div className="container">
        <div className="row">
          <div className="col-12 header">
            <div>
              <img className="headerItem" alt="logo.png" src="/logo.png" />
              <span className="headerItem headerTxt">Last released</span>
            </div>
            <div className="headerItem" >
            < HeaderBtn/>
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