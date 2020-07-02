import React from 'react';
import Review from './SubComponents/reviews.jsx'

// This is the List of reviews, it only shows 5 Reviews.
const ReviewsList = (props) => {
  return (
    <div id='bILPAllReviewsSection'>
      <p>Showing <strong>5</strong> of 5 reviews of {Math.round(Math.random() * 1000)} reviews</p>
      <Review thisProductsData={props} />
      <Review thisProductsData={props} />
      <Review thisProductsData={props} />
      <Review thisProductsData={props} />
      <Review thisProductsData={props} />
    </div>
  )
}


export default ReviewsList;