import React from 'react';

const QnAHeader = props =>{
  return(
    <div>
      <span className="QnAHeaderQuestions">Showing <strong>1-6</strong> of {(Math.round(Math.random()*500)+6)} questions</span>
    </div>
  )
}

export default QnAHeader;