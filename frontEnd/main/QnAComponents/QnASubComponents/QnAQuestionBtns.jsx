import React from "react";

// This little component displays two buttons
// Ask a question
// See all questions
const QnAQuestionBtns = (props) => {
  return (
    <div className="QnAQuestionBtnsMain">
      <button className="QnAAskAQuestionBtn">Ask a Question</button>
      <button className="QnASeeAllBtn">See All Questions</button>
    </div>
  );
};

export default QnAQuestionBtns;
