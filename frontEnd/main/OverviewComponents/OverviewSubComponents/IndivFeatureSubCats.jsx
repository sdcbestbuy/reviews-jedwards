import React from "react";

//This components purpose is to display the features title and a short description
const IndivFeatureSubCats = (props) => {
  return (
    <div className="bILPFeaturesEachSubCat">
      <div className="bILPFeaturesEachSubCatName">
        <span>{props.info.descriptionName}</span>
      </div>
      <div className="bILPFeaturesEachSubAnswer">
        <span>{props.info.descriptionAnswers.answer}</span>
      </div>
    </div>
  );
};

export default IndivFeatureSubCats;
