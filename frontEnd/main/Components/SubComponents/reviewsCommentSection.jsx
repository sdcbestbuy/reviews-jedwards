import React from 'react';

const ReviewsCommentArea = (props) =>{
  return (
    <div id='ReviewMain'>
      <div id='CommentHeader'>
        <span id='CommentHeaderStars'> &#9734;&#9734;&#9734;&#9734;&#9734;</span><span id='CommentHeaderTitleText'>Nam quis nulla.</span>
      </div>
      <div id='CommentSubHeader'>
        <span>&#9745;</span><span id='VerifiedServer'>Verified Purchase  |</span><span id='CommentSubHeaderGrayText'> Posted 4 weeks ago. Owned for 1 month when reviewed.</span>
      </div>
      <div id='Comment'>
        <p id='CommentP'>Nam quis nulla. Integer malesuada. In in enim a arcu imperdiet malesuada. Sed vel lectus. Donec odio urna, tempus molestie, porttitor ut, iaculis quis, sem. Phasellus rhoncus. Aenean id metus id velit ullamcorper pulvinar. Vestibulum fermentum tortor id mi. Pellentesque ipsum. Nulla non arcu lacinia neque faucibus fringilla. Nulla non lectus sed nisl molestie malesuada. Proin in tellus sit amet ni</p>
      </div>
      <div id='CommentThumbnailImage'>
        <img src={props.elprops.thisProductsData.thisProductsData[0].thumbnailImage}></img>
      </div>
      <div id='CommentButtons'>
      <button id='buttonStyleA'>Helpful ({Math.round(Math.random()*10)})</button> <button className='buttonStyleB'>Unhelpful ({Math.round(Math.random()*10)})</button> | <button className='buttonStyleB'>Report</button> | <button className='buttonStyleB'>Post Comment</button>
      </div>
    </div>
  )
}

export default ReviewsCommentArea;