import React from "react";
/*
[COMPONENT] Description
[INFO]It holds the Category's name (description) and some text describing the product

Component Structure:
Description

note:
This was not my focus component, its static, and renders the same information everytime.
The code inside may not be... Factored properly
*/
const Description = (props) => {
  return (
    <div className="bILPDescriptionMain">
      <div className="bILPDescriptionTitle">
        <span>{props.data[0].categoryName}</span>
      </div>
      <div className="bILPDescriptionDescription">
        <span>{props.data[0].categoryDescriptors[0]}</span>
      </div>
    </div>
  );
};

export default Description;
