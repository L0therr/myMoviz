import React from 'react';
import {
  Card, CardImg, CardTitle, CardText, CardBody
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVideo } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';


const Example = (props) => {
  return (
    <div className="col-12 col-md-6 col-lg-4 moviesDiv"> 
          <Card>
          <div>
            <CardImg top width="100%" src={props.movieImg} alt="Card image cap" />
          </div>
          <CardBody>
            <CardTitle className="movieTitle">{props.movieName}</CardTitle>
            <CardText>{props.movieText}</CardText>
            <CardTitle><span className="cardsTitles">Likes</span> <FontAwesomeIcon className="likeIco" icon={faHeart} /></CardTitle>
            <CardTitle><span className="cardsTitles">Nombres de vues</span> <FontAwesomeIcon className="likeIco" icon={faVideo} /></CardTitle>
            <CardTitle><span className="cardsTitles">Mon avis</span> {props.userRating}</CardTitle>
            <CardTitle><span className="cardsTitles">Moyenne</span> {props.globalRating} ({props.globalCountRating})</CardTitle>
          </CardBody>
        </Card>
    </div>
  );
};

export default Example;