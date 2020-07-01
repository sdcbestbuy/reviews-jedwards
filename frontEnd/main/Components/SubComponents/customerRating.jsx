import React from 'react';
import StarRating from './MainStarHeader.jsx'



const CustomerRating = (props) => {
return (
  <div>
    <h5 id='bILPCustomerRatingTag'>Customer rating</h5>
    <h2 id='bILPCustomerRatingNum'>{props.rating[0].customer_review_AVG}</h2>
    {/* {This is where the amount of stars needs to render based on customer_review_AVG} */}
    <span id='bILPCustomerStars'><StarRating rating={props.rating}/></span>
    <p id='bILPCustomerAmtOfReviews'>({props.rating[0].customerReviewCount} Reviews)</p>
    <p id='bILPCustomerSeeAll'>See all customer reviews</p>
  </div>
)
}

export default CustomerRating;