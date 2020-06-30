import React from 'react';
import CustomerRating from './SubComponents/customerRating.jsx';
import CustomerRatingVisualizer from './SubComponents/customerRatingVisualizer.jsx';
import Recommendation from './SubComponents/recommendation.jsx';



const SummaryMain = (props)=>{
    return (
      <div className='bILPSummaryMain'>
        <div id='bILPCustomerRatingSection'>
          {/* Customer rating is mostly done */}
          {/* Needs stars underneath customer rating  */}
          <CustomerRating ratings={props.thisProductsData}/>
        </div>
        <div id='bILPCustomerRatingVisualizerSection'>
          {/* */}
          <CustomerRatingVisualizer ratings={props.thisProductsData}/>
        </div>
        <div id="bILPBumper"></div>
        <div id='bILPRecommendationSection'>
          <Recommendation ratings={props.thisProductsData}/>
        </div>
      </div>
    )
  }

export default SummaryMain;