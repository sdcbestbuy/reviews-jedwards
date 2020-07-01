import React from 'react';
import CustomizedProgressBars from './CustomerReviewProgressBar.jsx';
import Checkbox from './checkboxes.jsx';

const numberOfVotes = (props, votes) => {
  let amtOfVotes = props.ratings[0].customerReviewCount;
  if (votes === 100) {
    return amtOfVotes;
  } else {
    return Math.floor((votes * amtOfVotes) / 100);
  }
}

const CustomerRatingVisualizer = (props) => {
  return (
    <ul id='bILPcustomerRatingVisualization'>
      <li className="miniLI"><Checkbox /><span className='bILPMinorPadding'> 5 </span><span className="fa fa-star insideMiniLi"></span> <span className="miniLIProgressBar"><CustomizedProgressBars value={props.starRatings[5]} /></span><span className='bILPMinorPadding'> {numberOfVotes(props, props.starRatings[5])}</span> </li>
      <li className="miniLI"><Checkbox /><span className='bILPMinorPadding'> 4 </span><span className="fa fa-star insideMiniLi"></span> <span className="miniLIProgressBar"><CustomizedProgressBars value={props.starRatings[4]} /></span><span className='bILPMinorPadding'> {numberOfVotes(props, props.starRatings[4])}</span> </li>
      <li className="miniLI"><Checkbox /><span className='bILPMinorPadding'> 3 </span><span className="fa fa-star insideMiniLi"></span> <span className="miniLIProgressBar"><CustomizedProgressBars value={props.starRatings[3]} /></span><span className='bILPMinorPadding'> {numberOfVotes(props, props.starRatings[3])}</span> </li>
      <li className="miniLI"><Checkbox /><span className='bILPMinorPadding'> 2 </span><span className="fa fa-star insideMiniLi"></span> <span className="miniLIProgressBar"><CustomizedProgressBars value={props.starRatings[2]} /></span><span className='bILPMinorPadding'> {numberOfVotes(props, props.starRatings[2])}</span> </li>
      <li className="miniLI"><Checkbox /><span className='bILPMinorPadding'> 1 </span><span className="fa fa-star insideMiniLi"></span> <span className="miniLIProgressBar"><CustomizedProgressBars value={props.starRatings[1]} /></span><span className='bILPMinorPadding'> {numberOfVotes(props, props.starRatings[1])}</span> </li>
    </ul>
  )
}

export default CustomerRatingVisualizer;

