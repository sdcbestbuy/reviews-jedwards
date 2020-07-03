import React from 'react';
import QnAQuestions from './QnAQuestions.jsx'

/*
Question
When Question was asked
Answer
When Answered by whom | Verified purchase randomizer
Button | Button | Button | Button |

*/

const QnAQuestionAndAnswers = props =>{
  return(
    <div className="QnAQuestionsMain">
      <QnAQuestions />
    </div>
  )
}

export default QnAQuestionAndAnswers;