import React from 'react';
import ReviewsNameArea from './reviewsNameSection.jsx'
import ReviewsCommentArea from './reviewsCommentSection.jsx'


const Review = (props) => {
  return (
    <div id='bILPOneReview'>
      <div id='bILPReviewNamesSection'>
        <ReviewsNameArea />
      </div>
      <div id='bILPReviewCommentSection'>
        < ReviewsCommentArea elprops={props}/>
      </div>
    </div>
  )
}

export default Review;