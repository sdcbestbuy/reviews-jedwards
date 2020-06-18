import React from 'react';
import Review from './SubComponents/reviews.jsx'


const ReviewsList = (props)  => (
  props.reviews.map((eachReview)=>{
    return(
      <div>
        <Review />
      </div>
    )
  })
)


export default ReviewsList;