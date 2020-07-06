import React from "react";
//function that returns a random number between 0-15
const makeRandNum = () => {
  return Math.round(Math.random() * 15);
};
// function to prevent buttons from rerendering the component on click
const dontReset = (event) => {
  event.preventDefault();
  console.log(event);
};

// QnA People asking is a series of button showcasing the "Trending thing"
// people are asking about. It has 0 functionality.
const QnAPeopleAsking = (props) => {
  return (
    <div className="QnAPeopleAskingMain">
      <span className="QnAPeopleAskingText">People are asking about</span>
      <div className="QnAPeopleAskingBtns">
        <button onClick={(e) => dontReset(e)} className="QnAIndivBtns">
          Apps ({makeRandNum()})
        </button>
        <button onClick={(e) => dontReset(e)} className="QnAIndivBtns">
          Stand ({makeRandNum()})
        </button>
        <button onClick={(e) => dontReset(e)} className="QnAIndivBtns">
          Picture ({makeRandNum()})
        </button>
        <button onClick={(e) => dontReset(e)} className="QnAIndivBtns">
          Refresh Rate ({makeRandNum()})
        </button>
        <button onClick={(e) => dontReset(e)} className="QnAIndivBtns">
          Hdmi input ({makeRandNum()})
        </button>
        <button onClick={(e) => dontReset(e)} className="QnAIndivBtns">
          Bluetooth ({makeRandNum()})
        </button>
        <button onClick={(e) => dontReset(e)} className="QnAIndivBtns">
          Cable service ({makeRandNum()})
        </button>
        <button onClick={(e) => dontReset(e)} className="QnAIndivBtns">
          Set up ({makeRandNum()})
        </button>
      </div>
    </div>
  );
};

export default QnAPeopleAsking;
