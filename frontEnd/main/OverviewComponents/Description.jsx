import React from "react";

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
