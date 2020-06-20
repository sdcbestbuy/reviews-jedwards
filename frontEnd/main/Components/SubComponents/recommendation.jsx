import React from 'react';

const Recommendation = (props) => {
  return (
    <div id='Reccomendation'>
      <div>
        <h3 id='RecommendPercent'>{Math.round(Math.random()*100)}%</h3>
      </div>
      <p id='RecommendComment'>would recommend to a friend</p>
    </div>
  )
  }
  
  export default Recommendation;