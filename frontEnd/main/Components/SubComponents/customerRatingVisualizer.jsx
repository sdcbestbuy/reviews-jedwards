import React from 'react';
import CustomizedProgressBars from './CustomerReviewProgressBar.jsx';
import Checkbox from './checkboxes.jsx';

// A function that builds the amount of votes based on percentage of votes towards that number
const numberOfVotes = (props, votes) => {
  let amtOfVotes = props.ratings[0].customerReviewCount;
  //if all 100% of votes are on current number, just return 100% of votes to number
  if (votes === 100) {
    return amtOfVotes;
  } else {
    // take the votes * amount of votes/ 100. (i.e (5 * 40 = 200 )/ 100 = 2. 2 Votes were made
    return Math.floor((votes * amtOfVotes) / 100);
  }
}

// Below is each checkbox. Starts with a checkbox, then the number corresponding the that category, then a star, then a bar graph, then the amount of votes
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

