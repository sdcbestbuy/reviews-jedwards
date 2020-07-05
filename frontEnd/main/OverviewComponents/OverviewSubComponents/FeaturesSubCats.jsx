import React from "react";
import IndivFeatureSubCats from "./IndivFeatureSubCats.jsx";

const FeaturesSubCats = (props) =>
  props.subDes.categoryDescriptors.map((catDes,i) => {
    return (
      <div key={i}>
        <div className="bILPFeaturesEachCat">
          <IndivFeatureSubCats info={catDes} />
        </div>
      </div>
    );
  });

export default FeaturesSubCats;
