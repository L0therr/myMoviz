import React, {useState} from 'react';
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
  //POPHOVER
  const [popoverOpen, setPopoverOpen] = useState(false);
  const toggle = () => setPopoverOpen(!popoverOpen);
  //POPHOVER


  const [likesCnt, setLikesCnt] = useState(0);
  const [wishList, setWishList] = useState([]);
  const [likeMovie, setLikeMovie] = useState(false);

  const addMovie = (pos) => {
    setLikesCnt(likesCnt+1);
    setLikeMovie(true);
    setWishList([...wishList, movies[pos]])
  }
  const suppMovie = (name) => {
    setLikesCnt(likesCnt-1);
    setLikeMovie(false);
    setWishList( wishList.filter((e)=>(e.name !== name)));
  }

  const wishRmv = (pos) => {
    setLikesCnt(likesCnt-1);
    setLikeMovie(false);
    setWishList( wishList.filter((e)=>(wishList.indexOf(e) !== pos)));
  }

  var moviesDis = movies.map(function(movie, i) {
    var isLiked;
    wishList.find((e)=>(e.name === movie.name)) ? isLiked = true : isLiked = false;
    return <MovieTiles pos={i} setIsLiked={setLikeMovie} isLiked={isLiked} likeBtnRemove={suppMovie} likeBtnAdd={addMovie} globalCountRating={movie.globalCountRating} globalRating={movie.globalRating} movieName={movie.name} movieImg={movie.img} movieText={movie.description} />
  });
  var wishListDis = wishList.map(function(wishList, i) {return <WishList wishRmv={wishRmv} wishPos={i} name={movies.name} removeFromWishList={suppMovie} movieImg={wishList.img} movieTitle={wishList.name} />});
  
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
            <Button id="Popover1" type="button">{likesCnt} <FontAwesomeIcon style={{color: "#fd6861"}} icon={faHeart} /></Button>
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