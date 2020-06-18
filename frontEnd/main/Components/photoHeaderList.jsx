import React from 'react';
import Photos from './SubComponents/Photos.jsx'



const PhotoHeaderList = (props) =>(
  props.allPhotos.map((photo)=>{
    return (
      <div>
        <Photos />
      </div>
    )
  })
)

export default PhotoHeaderList;