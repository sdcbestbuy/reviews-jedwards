import React from 'react';
import QnAPeopleAsking from './QnAPeopleAsking.jsx'
import QnAQuestionBtns from './QnAQuestionBtns.jsx'

const QnALeftBar = props =>{
  return(
    <div>
      <div>
        <QnAPeopleAsking />
      </div>
      <div>
        <QnAQuestionBtns />
      </div>
    </div>
  )
}

export default QnALeftBar;