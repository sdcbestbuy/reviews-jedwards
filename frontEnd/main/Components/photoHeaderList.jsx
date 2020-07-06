import React from "react";
import Photos from "./SubComponents/Photos.jsx";

/*
[COMPONENT] Photo List
[INFO] Maps through an Array of *real data* or displays the same img 9 times with 9 of the same component due to *fake data*.

Component Structure:
Review List
  -> Review
    -> Reviews Name Area
    -> Reviews Comment Area
      -> Star Rating
*/
const PhotoHeaderList = (props) => {
  //if state says this is a real product
  if (props.realProduct) {
    //map over the results of the filtering of for in loop
    return props.thumbnailImages.map((indivPhotos, i) => {
      return (
        <div key={i} id="bILPPhotoSection">
          <div id="bILPLineofPhotos">
            <Photos real={props.realProduct} elPhoto={indivPhotos} index={i} />
          </div>
        </div>
      );
    });
  } else {
    return (
      <div id="bILPPhotoSection">
        <div id="bILPLineofPhotos">
          <Photos real={props.realProduct} elPhoto={props.thisProductsData[0]} />
          <Photos real={props.realProduct} elPhoto={props.thisProductsData[0]} />
          <Photos real={props.realProduct} elPhoto={props.thisProductsData[0]} />
          <Photos real={props.realProduct} elPhoto={props.thisProductsData[0]} />
          <Photos real={props.realProduct} elPhoto={props.thisProductsData[0]} />
          <Photos real={props.realProduct} elPhoto={props.thisProductsData[0]} />
          <Photos real={props.realProduct} elPhoto={props.thisProductsData[0]} />
          <Photos real={props.realProduct} elPhoto={props.thisProductsData[0]} />
          <Photos real={props.realProduct} elPhoto={props.thisProductsData[0]} />
        </div>
      </div>
    );
  }
};

export default PhotoHeaderList;
