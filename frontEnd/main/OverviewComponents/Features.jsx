import React from "react";
import FeaturesSubCats from "./OverviewSubComponents/FeaturesSubCats.jsx";

const Features = (props) =>
  props.data.map((subCategory,i) => {
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
