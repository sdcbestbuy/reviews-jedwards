import React from 'react';
import Photos from './SubComponents/Photos.jsx'


// Photo Section Underneath Summary Main
// If you are reading this I meant to map over a number of photos but this was a quick ugly fix at the time (I'll fix this if we end up using more photos per product)
const PhotoHeaderList = (props) => {
  return (
    <div id='bILPPhotoSection'>
      <h4 id='bILPCustomerImagesLine'>Customer images</h4>
      <div id='bILPLineofPhotos'>
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

export default PhotoHeaderList;