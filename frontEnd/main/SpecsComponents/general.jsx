import React from "react";
import AdditionalComponents from "./SpecsSubComponents/eachAdditionalComponent.jsx";

/*
[COMPONENT] Component list
[INFO] Component List Maps through a list of "Key Components" and passes the data
down to Additional Component and Additonal Component maps through the information provided
for each sub category. 

Component Structure:
Component List 
-> Additional Components
  ->Sub categories

note:
This was not my focus component, its static, and renders the same information everytime.
The code inside may not be... Factored properly
*/
const ComponentList = (props) =>
  props.component.map((eachcomponent, i) => {
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
