import React from "react";
import QnAQuestions from "./QnAQuestions.jsx";
import questionAndAnswers from "../../../qNaDummyData";

// function to get a random number between a given min and max
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
// function that generates a random name.
function generateName() {
  var name1 = [
    "Benjamin",
    "Jonathan",
    "Anthony",
    "Denee",
    "Roy",
    "Zubair",
    "Linden",
    "Chris",
    "Joshua",
    "Peyton",
    "Ricardo",
    "OtherBen",
    "Emily",
    "Nik",
    "Kimberly",
    "Matt",
    "Rex",
    "Brian",
    "Big",
    "Little",
    "Rich Homie Quan",
    "Le",
    "El",
    "Papa",
  ];

  var name = name1[getRandomInt(0, name1.length)];
  return name;
}

// this component maps through each Question and passed its contents down to a sub component.
const QnAQuestionAndAnswers = (props) => {
  return questionAndAnswers.map((oneQuestionAndAnswer, i) => {
    return (
      <div key={i} className="QnAQuestionsMain">
        <QnAQuestions
          questionAsker={generateName()}
          answerTeller={generateName()}
          data={oneQuestionAndAnswer}
        />
      </div>
    );
  });
};
export default QnAQuestionAndAnswers;
