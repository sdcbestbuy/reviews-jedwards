import React from 'react';
import Review from './SubComponents/reviews.jsx'


const ReviewsList = (props) => {
  return (
    <div id='AllReviewsSection'>
      <p>Showing <strong>5</strong> of 5 reviews of {Math.round(Math.random()*1000)} reviews</p>
      <Review thisProductsData={props}/>
      <Review thisProductsData={props}/>
      <Review thisProductsData={props}/>
      <Review thisProductsData={props}/>
      <Review thisProductsData={props}/>
    </div>
  )
}


export default ReviewsList;