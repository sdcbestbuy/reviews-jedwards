import React from "react";

/*
[COMPONENT] QnA Header
[INFO] It's a small component that displays the amount of questions being displayed

Component Structure:
QnA Header

note:
This was not my focus component, its static, and renders the same information everytime.
The code inside may not be... Factored properly
*/
const QnAHeader = (props) => {
  return (
    <div>
      <span className="QnAHeaderQuestions">
        Showing <strong>1-6</strong> of {Math.round(Math.random() * 500) + 6}{" "}
        questions
      </span>
    </div>
  );
};

export default QnAHeader;
