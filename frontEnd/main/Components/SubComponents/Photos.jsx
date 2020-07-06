import React from "react";

// Simple photo Thumbnail component, shows tiny image
const Photos = (props) => {
  return (
    <div id="bILPindivPhoto">
      <img id="bILPindivPhotoPhoto" src={props.elPhoto}></img>
    </div>
  );
};

export default Photos;
