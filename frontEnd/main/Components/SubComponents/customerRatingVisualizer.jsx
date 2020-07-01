import React from 'react';
import CustomizedProgressBars from './CustomerReviewProgressBar.jsx';
import Checkbox from './checkboxes.jsx';

/* {https://stackoverflow.com/questions/7190898/progress-bar-with-html-and-css}
 how to make a progress bar */

const CustomerRatingVisualizer = (props) => {
  console.log(props)
  return (
      <ul id='bILPcustomerRatingVisualization'>
        <li className="miniLI"><Checkbox /> 5 <span className="fa fa-star insideMiniLi"></span> <span className="miniLIProgressBar"><CustomizedProgressBars value={props.starRatings[5]} /></span> XXXX </li>
        <li className="miniLI"><Checkbox /> 4 <span className="fa fa-star insideMiniLi"></span> <span className="miniLIProgressBar"><CustomizedProgressBars value={props.starRatings[4]} /></span> XXXX </li>
        <li className="miniLI"><Checkbox /> 3 <span className="fa fa-star insideMiniLi"></span> <span className="miniLIProgressBar"><CustomizedProgressBars value={props.starRatings[3]} /></span> XXXX </li>
        <li className="miniLI"><Checkbox /> 2 <span className="fa fa-star insideMiniLi"></span> <span className="miniLIProgressBar"><CustomizedProgressBars value={props.starRatings[2]} /> </span>XXXX </li>
        <li className="miniLI"><Checkbox /> 1 <span className="fa fa-star insideMiniLi"></span> <span className="miniLIProgressBar"><CustomizedProgressBars value={props.starRatings[1]} /></span> XXXX </li>
      </ul>
  )
}

export default CustomerRatingVisualizer;

