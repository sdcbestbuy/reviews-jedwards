import React from "react";
import Photos from "./SubComponents/Photos.jsx";

// Photo Section Underneath Summary Main
// If you are reading this I meant to map over a number of photos but this was a quick ugly fix at the time (I'll fix this if we end up using more photos per product)
const PhotoHeaderList = (props) => {
  //if state says this is a real product
  if (props.realProduct) {
    let results = [];
    // we need to get the thumbnail image out
    for (var key in props.thumbnailImages[0]) {
      if (!Number.isInteger(props.thumbnailImages[0][key])) {
        results.push(props.thumbnailImages[0][key]);
      }
    }
    console.log('Is results otay?',results)
    //map over the results of the filtering of for in loop
    results.map((indivPhotos,i) => {
      console.log('from in indivphots',indivPhotos)
      return (
        <div key={i} id="bILPPhotoSection">
            <Photos elPhoto={indivPhotos} />
         </div>
      )
    })
  } else {
    return (
      <div id="bILPPhotoSection">
        <h4 id="bILPCustomerImagesLine">Customer images</h4>
        <div id="bILPLineofPhotos">
          <Photos elPhoto={props.thisProductsData[0]} />
          <Photos elPhoto={props.thisProductsData[0]} />
          <Photos elPhoto={props.thisProductsData[0]} />
          <Photos elPhoto={props.thisProductsData[0]} />
          <Photos elPhoto={props.thisProductsData[0]} />
          <Photos elPhoto={props.thisProductsData[0]} />
          <Photos elPhoto={props.thisProductsData[0]} />
          <Photos elPhoto={props.thisProductsData[0]} />
          <Photos elPhoto={props.thisProductsData[0]} />
        </div>
      </div>
    )
  }
};

export default PhotoHeaderList;
