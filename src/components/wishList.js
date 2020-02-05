import React from 'react';

const Example = (props) => {
  return (
    <div className="wishDiv">
      <div className="wishTxtImgDiv">
        <span>{props.movieTitle}</span>
        <img className="wishImg" alt="movie pic" src={props.movieImg}  />
      </div>
    </div>
  );
}

export default Example;


          