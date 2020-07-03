import React from 'react';
import StarRating from './MainStarHeader.jsx'


// The upper left of best buy reviews
const CustomerRating = (props) => {
  return (
    <div className="bILPCustomerContainer">
      {/* Title */}
      <h5 id='bILPCustomerRatingTag'>Customer rating</h5>
      {/* Average Rating */}
      <h2 id='bILPCustomerRatingNum'>{props.rating[0].customer_review_AVG}</h2>
      {/* Star Rating */}
      <span id='bILPCustomerStars'><StarRating rating={props.rating} /></span>
      {/* Amount of Reviews */}
      <p id='bILPCustomerAmtOfReviews'>({props.rating[0].customerReviewCount} Reviews)</p>
      {/* Sub title */}
      <p id='bILPCustomerSeeAll'>See all customer reviews</p>
    </div>
  )
}

export default CustomerRating;