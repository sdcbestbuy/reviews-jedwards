import React from "react";

/*
[COMPONENT] QnA Footer
[INFO]It holds the two buttons that render to the bottom of the QnA's

Component Structure:
QnA Footer

note:
This was not my focus component, its static, and renders the same information everytime.
The code inside may not be... Factored properly
*/
const QnAFooter = (props) => {
  return (
    <div id="bILPFooterMain">
      <button id="bILPShowMoreBTN">Show More</button>
      <button id="bILPWriteAReviewBTN">Ask a Question</button>
    </div>
  );
};

export default QnAFooter;
