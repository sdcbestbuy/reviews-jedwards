import React from "react";
import IndivFeatureSubCats from './IndivFeatureSubCats.jsx'

const FeaturesSubCats = (props) => (
  props.subDes.categoryDescriptors.map((catDes)=>{
    return (
      <div>
        <div className="bILPFeaturesEachCat"><IndivFeatureSubCats info={catDes}/></div>
      </div>
    );
  })
);

export default FeaturesSubCats;
