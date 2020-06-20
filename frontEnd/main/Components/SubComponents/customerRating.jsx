import React from 'react';

const CustomerRating = (props) => {
return (
  <div>
    <h5 id='CustomerRatingTag'>Customer rating</h5>
    <h2 id='CustomerRatingNum'>{props.ratings[0].customer_review_AVG}</h2>
    {/* {This is where the amount of stars needs to render based on customer_review_AVG} */}
    <span id='CustomerStars'>&#9734;&#9734;&#9734;&#9734;&#9734;</span>
    <p id='CustomerAmtOfReviews'>({props.ratings[0].customerReviewCount} Reviews)</p>
    <p id='CustomerSeeAll'>See all customer reviews</p>
  </div>
)
}

export default CustomerRating;