import React, {useState} from 'react';

// reactstraps
import {
  Card, CardImg, CardTitle, CardText, CardBody
} from 'reactstrap';

//fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVideo } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';


const Example = (props) => {
  
  const [watchMovie, setWatchMovie] = useState(false);
  const [watchCount, setWatchCount] = useState(0);
  const [userRating, setUserRating] = useState(0);

  //handle
  var handleWatch = () => {
    if(watchMovie === false){setWatchMovie(true);}
    setWatchCount(watchCount+1)
  }

  var cameraColor;
  if(watchMovie === true) {
    cameraColor = { color: "#fd6861" };
  }

  
  var handleLike = () => {
    if(props.isLiked === false) {props.likeBtnAdd(props.pos);} else {props.likeBtnRemove(props.movieName)};
  }

  var likeColor;
  if(props.isLiked === true) {
    likeColor = { color: "#fd6861" };
  }
  //handle end

  //user
    var userDis = [];
    for(var i=0;i<5;i++){

      var color = {};

      if(i<userRating){
        color = {color: '#f1c40f'}
      }
      let cnt = i+1;
      userDis.push(<FontAwesomeIcon icon={faStar} onClick={() => {setUserRating(cnt)}} style={color} />);
    }

    
    //global average
    var avg = (gRate,gNb,uRate) => {
      return gRate = Math.round(((gRate * gNb) + uRate) / (gNb + 1));
    }

    var globalRatingAvg;
    if(userRating !== 0) {globalRatingAvg = avg(props.globalRating, props.globalCountRating, userRating)}
    else {globalRatingAvg = props.globalRating}

    var toDis = [];
    for(var j=0;j<5;j++){
      if(j<globalRatingAvg)
        toDis.push(<FontAwesomeIcon icon={faStar} style={{color: " #f1c40f"}} />)
      else toDis.push(<FontAwesomeIcon icon={faStar} />)
    }

  return (
    <div className="col-12 col-md-6 col-lg-4 moviesDiv">
          <Card>
          <div className="cardImgDiv">
            <CardImg top width="100%" src={props.movieImg} alt="Card image cap" />
            <div className="cardInput">
              <div className="cardPictoDiv">
                <FontAwesomeIcon className="heart" onClick={()=>{handleLike()}} style={likeColor} icon={faHeart} />
              </div>
              <div className="cardPictoDiv separate"></div>
              <div className="cardPictoDiv">
                <FontAwesomeIcon onClick={()=>{handleWatch()}} style={cameraColor} icon={faVideo} /> ({watchCount})
              </div>
            </div>
          </div>
          <CardBody className="cardDiv">
            <CardTitle className="movieTitle">{props.movieName}</CardTitle>
            <CardText>{props.movieText}</CardText>
            <div className="cardDataBody">
              <div className="cardTitlesDiv">
                <span className="cardsTitles">Your rate</span>
                <span className="cardsTitles">All users rate</span>
              </div>
              <div className="cardsDataDiv">
                
                <div>{userDis}</div>
                <div>{toDis} ({props.globalCountRating})</div>
              </div>
            </div>

          </CardBody>
        </Card>
    </div>
  );
};

export default Example;