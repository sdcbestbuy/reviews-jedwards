import React from 'react';
import Photos from './SubComponents/Photos.jsx'



const PhotoHeaderList = (props) =>{
    return (
      <div id='bILPPhotoSection'>
        <h4 id='bILPCustomerImagesLine'>Customer images</h4>
        <div id='bILPLineofPhotos'>
        <Photos elPhoto={props.thisProductsData[0]}/>
        <Photos elPhoto={props.thisProductsData[0]}/>
        <Photos elPhoto={props.thisProductsData[0]}/>
        <Photos elPhoto={props.thisProductsData[0]}/>
        <Photos elPhoto={props.thisProductsData[0]}/>
        <Photos elPhoto={props.thisProductsData[0]}/>
        <Photos elPhoto={props.thisProductsData[0]}/>
        <Photos elPhoto={props.thisProductsData[0]}/>
        <Photos elPhoto={props.thisProductsData[0]}/>
        </div>
      </div>
    )
}

export default PhotoHeaderList;