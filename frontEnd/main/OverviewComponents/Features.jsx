import React from "react";
import FeaturesSubCats from "./OverviewSubComponents/FeaturesSubCats.jsx";

/*
[COMPONENT]Features 
[INFO]It maps through an array of information pertinant to the Features of the showcase product

Component Structure:
Features -> Features Sub Cats -> IndivFeatures

note:
This was not my focus component, its static, and renders the same information everytime.
The code inside may not be... Factored properly
*/
const Features = (props) =>
  props.data.map((subCategory, i) => {
    return (
      <div key={i} className="bILPFeaturesSubCategories">
        <div className="bILPFeaturesSubCategoriesTitle">
          {props.data[0].categoryName}
        </div>
        <div className="bILPFeaturesSubCategoriesObjects">
          <FeaturesSubCats subDes={subCategory} />
        </div>
      </div>
    );
  });

export default Features;
