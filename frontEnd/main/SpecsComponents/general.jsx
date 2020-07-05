import React from "react";
import AdditionalComponents from "./SpecsSubComponents/eachAdditionalComponent.jsx";

const ComponentList = (props) =>
  props.component.map((eachcomponent,i) => {
    return (
      <div key={i} className="bILPSpecsmain-category">
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
