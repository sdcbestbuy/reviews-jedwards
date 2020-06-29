import React from 'react';
import CircularStatic from './progressCircle.jsx'

// Circle
//http://jsfiddle.net/Aapn8/3410/
// Color: rgb(0, 70, 190)


const Recommendation = (props) => {
  let startingReccomendationAmt = (props.ratings[0].customer_review_AVG * 20) - 20;
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