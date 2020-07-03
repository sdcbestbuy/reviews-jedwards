import React from "react";
import AdditionalComponents from "./SpecsSubComponents/eachAdditionalComponent.jsx";

const ComponentList = (props) =>
  props.component.map((eachcomponent) => {
    return (
      <div className="bILPSpecsmain-category">
        <div className="bILPSpecsmainCategoryName">
          <p>{eachcomponent.categoryName}</p>
        </div>
        <div className="bILPSpecsmainCategoryDescriptions">
          <AdditionalComponents
            categoryDescriptions={eachcomponent.categoryDescriptors}
          />
        </div>
      </div>
    );
  });

export default ComponentList;
