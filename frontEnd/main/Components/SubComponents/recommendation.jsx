import React from 'react';

const Recommendation = (props) => {
  return (
    <div id='bILPReccomendation'>
      <div>
        <h3 id='bILPRecommendPercent'>{Math.round(Math.random()*100)}%</h3>
      </div>
      <p id='bILPRecommendComment'>would recommend to a friend</p>
    </div>
  )
  }
  
  export default Recommendation;