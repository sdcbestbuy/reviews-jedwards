import React from 'react';
import CustomerRating from './SubComponents/customerRating.jsx';
import CustomerRatingVisualizer from './SubComponents/customerRatingVisualizer.jsx';
import Recommendation from './SubComponents/recommendation.jsx';



const SummaryMain = (props)=>{
    return (
      <div className='SummaryMain'>
        <div id='CustomerRatingSection'>
          {/* Customer rating is mostly done */}
          {/* Needs stars underneath customer rating  */}
          <CustomerRating ratings={props.thisProductsData}/>
        </div>
        <div id='CustomerRatingVisualizerSection'>
          {/* */}
          <CustomerRatingVisualizer ratings={props.thisProductsData}/>
        </div>
        <div id='RecommendationSection'>
          <Recommendation ratings={props.thisProductsData}/>
        </div>
      </div>
    )
  }

export default SummaryMain;