import React from "react";
import IndivFeatureSubCats from "./IndivFeatureSubCats.jsx";

//This components purpose is to map out the number of featured categories
const FeaturesSubCats = (props) =>
  props.subDes.categoryDescriptors.map((catDes, i) => {
    return (
      <div key={i}>
        <div className="bILPFeaturesEachCat">
          <IndivFeatureSubCats info={catDes} />
        </div>
      </div>
    );
  });

export default FeaturesSubCats;
