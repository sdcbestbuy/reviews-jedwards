import React from 'react';

const makeRandNum = ()=>{
  return Math.round(Math.random()*15)
}

const dontReset = (event) =>{
  event.preventDefault();
  console.log(event)
}

const QnAPeopleAsking = props =>{
  return(
    <div className="QnAPeopleAskingMain">
      <span className="QnAPeopleAskingText">People are asking about</span>
      <div className="QnAPeopleAskingBtns">
        <button onClick={(e)=>dontReset(e)} className="QnAIndivBtns">Apps ({makeRandNum()})</button>
        <button onClick={(e)=>dontReset(e)} className="QnAIndivBtns">Stand ({makeRandNum()})</button>
        <button onClick={(e)=>dontReset(e)} className="QnAIndivBtns">Picture ({makeRandNum()})</button>
        <button onClick={(e)=>dontReset(e)} className="QnAIndivBtns">Refresh Rate ({makeRandNum()})</button>
        <button onClick={(e)=>dontReset(e)} className="QnAIndivBtns">Hdmi input ({makeRandNum()})</button>
        <button onClick={(e)=>dontReset(e)} className="QnAIndivBtns">Bluetooth ({makeRandNum()})</button>
        <button onClick={(e)=>dontReset(e)} className="QnAIndivBtns">Cable service ({makeRandNum()})</button>
        <button onClick={(e)=>dontReset(e)} className="QnAIndivBtns">Set up ({makeRandNum()})</button>
      </div>
    </div>
  )
}

export default QnAPeopleAsking;