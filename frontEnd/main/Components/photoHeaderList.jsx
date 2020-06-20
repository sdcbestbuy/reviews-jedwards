import React from 'react';
import Photos from './SubComponents/Photos.jsx'



const PhotoHeaderList = (props) =>{
    return (
      <div id='PhotoSection'>
        <h4 id="CustomerImagesLine">Customer images</h4>
        <div id="LineofPhotos">
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