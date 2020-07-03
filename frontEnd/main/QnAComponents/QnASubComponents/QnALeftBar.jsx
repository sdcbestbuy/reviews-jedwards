import React from "react";
import QnAPeopleAsking from "./QnAPeopleAsking.jsx";
import QnAQuestionBtns from "./QnAQuestionBtns.jsx";

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
