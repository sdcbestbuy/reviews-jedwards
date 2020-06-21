import React from 'react';

const CustomerRatingVisualizer = (props) => {
  return (
    <div>
      {/* {https://stackoverflow.com/questions/7190898/progress-bar-with-html-and-css} */}
      {/* how to make a progress bar */}
      <ul id='customerRatingVisualization'>
        <li><input type='checkbox'/> 5 <span className="fa fa-star checked"></span> <span id='progress5star'> [---------Just Some Filler------] </span> <span>Amount of 5 star Reviews</span> </li>
        <li><input type='checkbox'/> 4 <span className="fa fa-star checked"></span> <span id='progress4star'> [---------Just Some Filler------] </span> <span>Amount of 4 star Reviews</span> </li>
        <li><input type='checkbox'/> 3 <span className="fa fa-star checked"></span> <span id='progress3star'> [---------Just Some Filler------] </span> <span>Amount of 3 star Reviews</span> </li>
        <li><input type='checkbox'/> 2 <span className="fa fa-star checked"></span> <span id='progress2star'> [---------Just Some Filler------] </span> <span>Amount of 2 star Reviews</span> </li>
        <li><input type='checkbox'/> 1 <span className="fa fa-star checked"></span> <span id='progress1star'> [---------Just Some Filler------] </span> <span>Amount of 1 star Reviews</span> </li>
      </ul>
    </div>
  )
  }
  
  export default CustomerRatingVisualizer;