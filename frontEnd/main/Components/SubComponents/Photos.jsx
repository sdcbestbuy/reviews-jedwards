import React from 'react';

// Simple photo Thumbnail component, shows tiny image
const Photos = (props) => {
  return (
    <div id='bILPindivPhoto'>
      <img src={props.elPhoto.thumbnailImage}></img>
    </div>
  )
}


export default Photos;