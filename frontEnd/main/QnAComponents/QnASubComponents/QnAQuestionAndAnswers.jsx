import React from "react";
import QnAQuestions from "./QnAQuestions.jsx";
import questionAndAnswers from "../../../qNaDummyData";

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

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

const QnAQuestionAndAnswers = (props) =>
  questionAndAnswers.map((oneQuestionAndAnswer) => {
    return (
      <div className="QnAQuestionsMain">
        <QnAQuestions
          questionAsker={generateName()}
          answerTeller={generateName()}
          data={oneQuestionAndAnswer}
        />
      </div>
    );
  });

export default QnAQuestionAndAnswers;
