import React from "react";

// Simple photo Thumbnail component, shows tiny image
const Photos = (props) => {
  console.log("from photos", props);
  return (
    <div>
      <h4 id="bILPCustomerImagesLine">Customer images</h4>
      <div id="bILPLineofPhotos">
        <div id="bILPindivPhoto">
          <img src={props.elPhoto}></img>
        </div>
      </div>
    </div>
  );
};

export default Photos;
