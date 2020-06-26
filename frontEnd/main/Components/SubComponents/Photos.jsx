import React from 'react';

const Photos = (props) => {
  // console.log(props)
  return (
    <div id='bILPindivPhoto'>
      <img src={props.elPhoto.thumbnailImage}></img>
    </div>
  )
}


export default Photos;