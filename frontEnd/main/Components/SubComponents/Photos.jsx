import React from "react";

// Simple photo Thumbnail component, shows tiny image
const Photos = (props) => {
  if (props.real){
    return (
      <div id="bILPindivPhoto">
        <img id="bILPindivPhotoPhoto" src={props.elPhoto}></img>
      </div>
    );
  } else {
    return (
      <div id="bILPindivPhoto">
        <img id="bILPindivPhotoPhoto" src={props.elPhoto.thumbnailImage}></img>
      </div>
    );
  }
};

export default Photos;
