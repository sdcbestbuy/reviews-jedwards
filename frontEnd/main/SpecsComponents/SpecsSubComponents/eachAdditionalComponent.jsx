import React from "react";
import SubCategories from "./subcategories.jsx";

const AdditionalComponents = (props) =>
  props.categoryDescriptions.map((eachSubCategory) => {
    return (
      <div className="bILPSpecsAdditionalComponentMain">
        <div className="bILPSpecssubCategoriesName">
          <p>{eachSubCategory.descriptionName}</p>
        </div>
        <div className="bILPSpecssubCategoriesAnswers">
          <SubCategories answers={eachSubCategory.descriptionAnswers} />
        </div>
      </div>
    );
  });

export default AdditionalComponents;
