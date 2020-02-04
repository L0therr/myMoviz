import React from 'react';
import './App.css';
import './Fonts.css';
//component
import HeaderBtn from './components/headerBtn';
import MovieTiles from './components/moviesTiles';
import Footer from './components/footer';

var movies = [
  {
    name: "Frozen",
    description: "AAAAAAAAAAAAAAAAAAAAAAAAA",
    img: "../frozen.jpg",
    globalRating: 1,
    globalCountRating: 100,
  },
  {
    name: "Jumanji",
    description: "AAAAAAAAAAAAAAAAAAAAAAAAA",
    img: "../jumanji.jpg",
    globalRating: 2,
    globalCountRating: 2,
  },
  {
    name: "Star Wars",
    description: "AAAAAAAAAAAAAAAAAAAAAAAAA",
    img: "../starwars.jpg",
    globalRating: 3,
    globalCountRating: 1000,
  },
  {
    name: "Maleficent",
    description: "AAAAAAAAAAAAAAAAAAAAAAAAA",
    img: "../maleficent.jpg",
    globalRating: 3,
    globalCountRating: 78,
  },
  {
    name: "Once Upon A Time In HollyWood",
    description: "AAAAAAAAAAAAAAAAAAAAAAAAA",
    img: "../once_upon.jpg",
    globalRating: 5,
    globalCountRating: 0,
  },
  {
    name: "Bad boyzz",
    description: "AAAAAAAAAAAAAAAAAAAAAAAAA",
    img: "../badboy3.jpg",
    globalRating: 3,
    globalCountRating: 100000000,
  },
  {
    name: "Terminator",
    description: "AAAAAAAAAAAAAAAAAAAAAAAAA",
    img: "../terminator.jpg",
    globalRating: 3,
    globalCountRating: 99,
  },
];

function App(props) {

  // <FontAwesomeIcon icon={faHeart} />

  //dinamize movies
  var moviesDis = movies.map(function(movie, i) {return <MovieTiles globalCountRating={movie.globalCountRating} globalRating={movie.globalRating} movieName={movie.name} movieImg={movie.img} movieText={movie.description} />});

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