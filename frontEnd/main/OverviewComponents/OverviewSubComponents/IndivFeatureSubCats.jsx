import React from "react";

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
