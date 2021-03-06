import React from "react";

// QnA Questions Holds the Question, When the question was asked, The Answer, when the answer was occured, and 4 buttons
// (Helpful, Unhelpful, Report, and Answer this Question)
const QnAQuestions = (props) => {
  return (
    <div className="QnAQuestionsSection">
      <div className="QnAQuestionsSectionQuestion">Q:{props.data.Question}</div>
      <div className="QnAQuestionsSectionTimes">
        Asked {Math.round(Math.random() * 5) + 5} months ago by{" "}
        {props.questionAsker}
      </div>
      <div className="QnAQuestionsSectionAnswer">
        <span className="QnAbigA">A:</span>
        {props.data.Answer}
      </div>
      <div className="QnAQuestionsSectionTimes">
        Answered {Math.round(Math.random() * 5)} months ago by{" "}
        {props.answerTeller}
      </div>
      <div className="QnAQuestionsSectionBtns">
        <button id="bILPbuttonStyleA">
          Helpful ({Math.round(Math.random() * 10)})
        </button>{" "}
        <button className="bILPbuttonStyleB">
          Unhelpful ({Math.round(Math.random() * 10)})
        </button>{" "}
        | <button className="bILPbuttonStyleB">Report</button> |{" "}
        <button className="bILPbuttonStyleB">Answer this Question</button>
      </div>
    </div>
  );
};

export default QnAQuestions;
