import React from "react";
import SubCategories from "./subcategories.jsx";

// Maps through the information of this Catgory
const AdditionalComponents = (props) =>
  props.categoryDescriptions.map((eachSubCategory, i) => {
    return (
      <div key={i} className="bILPSpecsAdditionalComponentMain">
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
