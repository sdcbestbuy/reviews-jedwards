import React from 'react';
import ReviewsNameArea from './reviewsNameSection.jsx'
import ReviewsCommentArea from './reviewsCommentSection.jsx'


const Review = (props) => {
  return (
    <div id='OneReview'>
      <div id="ReviewNamesSection">
        <ReviewsNameArea />
      </div>
      <div id="ReviewCommentSection">
        < ReviewsCommentArea elprops={props}/>
      </div>
    </div>
  )
}

export default Review;