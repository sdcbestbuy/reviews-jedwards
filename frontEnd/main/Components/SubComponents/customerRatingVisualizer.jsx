import React from 'react';
import CustomizedProgressBars from './CustomerReviewProgressBar.jsx';
import Checkbox from './checkboxes.jsx';

const buildSomeReviewData = (props) => {
  console.log(props)
}

const CustomerRatingVisualizer = (props) => {
  return (
    <div>
      {/* {https://stackoverflow.com/questions/7190898/progress-bar-with-html-and-css} */}
      {/* how to make a progress bar */}
      <ul id='bILPcustomerRatingVisualization'>
        <li><Checkbox /> 5 <span className="fa fa-star"></span> <span id='progress5star'> <CustomizedProgressBars value={75} /> </span> <span>Amount of 5 star Reviews</span> </li>
        <li><Checkbox /> 4 <span className="fa fa-star"></span> <span id='progress4star'> <CustomizedProgressBars value={20} /> </span> <span>Amount of 4 star Reviews</span> </li>
        <li><Checkbox /> 3 <span className="fa fa-star"></span> <span id='progress3star'> <CustomizedProgressBars value={30} /> </span> <span>Amount of 3 star Reviews</span> </li>
        <li><Checkbox /> 2 <span className="fa fa-star"></span> <span id='progress2star'> <CustomizedProgressBars value={0} /> </span> <span>Amount of 2 star Reviews</span> </li>
        <li><Checkbox /> 1 <span className="fa fa-star"></span> <span id='progress1star'> <CustomizedProgressBars value={10} /> </span> <span>Amount of 1 star Reviews</span> </li>
      </ul>
    </div>
  )
}

export default CustomerRatingVisualizer;

