import React from 'react';
import CustomizedProgressBars from './CustomerReviewProgressBar.jsx';
import Checkbox from './checkboxes.jsx';

const buildSomeReviewData = (props) => {
  console.log(props)
}
/* {https://stackoverflow.com/questions/7190898/progress-bar-with-html-and-css}
 how to make a progress bar */

const CustomerRatingVisualizer = (props) => {
  console.log(props.ratings[0])
  return (
      <ul id='bILPcustomerRatingVisualization'>
        <li className="miniLI"><Checkbox /> 5 <span className="fa fa-star insideMiniLi"></span> <span ><CustomizedProgressBars value={75} /></span> XXXX </li>
        <li className="miniLI"><Checkbox /> 4 <span className="fa fa-star insideMiniLi"></span> <span ><CustomizedProgressBars value={20} /></span> XXXX </li>
        <li className="miniLI"><Checkbox /> 3 <span className="fa fa-star insideMiniLi"></span> <span ><CustomizedProgressBars value={30} /></span> XXXX </li>
        <li className="miniLI"><Checkbox /> 2 <span className="fa fa-star insideMiniLi"></span> <span ><CustomizedProgressBars value={0} /> </span>XXXX </li>
        <li className="miniLI"><Checkbox /> 1 <span className="fa fa-star insideMiniLi"></span> <span ><CustomizedProgressBars value={10} /></span> XXXX </li>
      </ul>
  )
}

export default CustomerRatingVisualizer;

