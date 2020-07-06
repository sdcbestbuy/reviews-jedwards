import React from "react";
import QnALeftBar from "./QnASubComponents/QnALeftBar.jsx";
import QnAQuestionAndAnswers from "./QnASubComponents/QnAQuestionAndAnswers.jsx";

/*
[COMPONENT] QnA Main
[INFO] QnA Main holds two sub components. A Left Bar component that renders everything on the left of the page and 
a QnA Section that holds various Question and Answers.

Component Structure:
QnA Main 
-> QnA Question and Answers
  -> QnA Questions
-> QnA Left Bar 
  -> QnA People Asking
  -> QnA Question Buttons

note:
This was not my focus component, its static, and renders the same information everytime.
The code inside may not be... Factored properly
*/
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
