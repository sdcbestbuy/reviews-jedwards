import React from "react";
import QnAPeopleAsking from "./QnAPeopleAsking.jsx";
import QnAQuestionBtns from "./QnAQuestionBtns.jsx";

// This component holds two sections, what people are talking
// and if the user would like to ask or see all questions
const QnALeftBar = (props) => {
  return (
    <div className="QnALeftBarHolder">
      <div className="QnALeftBarHolderPeopleAsking">
        <QnAPeopleAsking />
      </div>
      <div className="QnALeftBarHolderQuestionBtns">
        <QnAQuestionBtns />
      </div>
    </div>
  );
};

export default QnALeftBar;
