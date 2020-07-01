import React from 'react';
import CircularStatic from './progressCircle.jsx'

// This component encompasses the review circle area
const Recommendation = (props) => {
  // startingReccomendationAmt is based on the review average. If the average is 1 it starts at 20, 2 at 40 and so on...
  let startingReccomendationAmt = (props.ratings[0].customer_review_AVG * 20) - 20;
  // CustomerRecommendation then has the opportunity to get up to 20 more points added onto startingReccomendationAmt thus giving it the feel of a real dynamic recommendation
  let CustomerRecommendation = startingReccomendationAmt + (Math.round(Math.random() * 20));
  return (
    <div id='bILPReccomendation'>
      <div>
        <div id='bILPRecommendedCircleOuter'>
          <div id="bILPRecommendedCircleInner">
            <CircularStatic value={CustomerRecommendation} />
          </div>
          <p id='bILPRecommendComment'>would recommend to a friend</p>
        </div>
      </div>
    </div>
  )
}

export default Recommendation;