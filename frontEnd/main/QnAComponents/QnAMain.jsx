import React from "react";
import QnALeftBar from "./QnASubComponents/QnALeftBar.jsx";
import QnAQuestionAndAnswers from "./QnASubComponents/QnAQuestionAndAnswers.jsx";

const QnAMain = (props) => {
  return (
    <div className="QnAMainContainer">
      <div className="QnALeftBarMain">
        <QnALeftBar />
      </div>
      <div className="QnAQuestionAndAnswersMain">
        <QnAQuestionAndAnswers />
      </div>
    </div>
  );
};

export default QnAMain;
