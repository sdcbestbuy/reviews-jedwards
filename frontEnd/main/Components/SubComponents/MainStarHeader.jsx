import React from "react";

// This is the star rating component
// Renders the amount of stars based on the customer average and then will render empty stars otherwise
// Stars imported from Font Awesome : https://fontawesome.com/v4.7.0/icon/star
const StarRating = (props) => {
  let reviewAvg = Math.round(props.rating[0].customer_review_AVG);
  if (reviewAvg === 1) {
    return (
      <span>
        <span className="fa fa-star"></span>
        <span className="fa fa-star-o"></span>
        <span className="fa fa-star-o"></span>
        <span className="fa fa-star-o"></span>
        <span className="fa fa-star-o"></span>
      </span>
    );
  } else if (reviewAvg === 2) {
    return (
      <span>
        <span className="fa fa-star"></span>
        <span className="fa fa-star"></span>
        <span className="fa fa-star-o"></span>
        <span className="fa fa-star-o"></span>
        <span className="fa fa-star-o"></span>
      </span>
    );
  } else if (reviewAvg === 3) {
    return (
      <span>
        <span className="fa fa-star"></span>
        <span className="fa fa-star"></span>
        <span className="fa fa-star"></span>
        <span className="fa fa-star-o"></span>
        <span className="fa fa-star-o"></span>
      </span>
    );
  } else if (reviewAvg === 4) {
    return (
      <span>
        <span className="fa fa-star"></span>
        <span className="fa fa-star"></span>
        <span className="fa fa-star"></span>
        <span className="fa fa-star"></span>
        <span className="faB fa-star-o"></span>
      </span>
    );
  } else if (reviewAvg === 5) {
    return (
      <span>
        <span className="fa fa-star"></span>
        <span className="fa fa-star"></span>
        <span className="fa fa-star"></span>
        <span className="fa fa-star"></span>
        <span className="fa fa-star"></span>
        <span className="fa fa-star"></span>
      </span>
    );
  }
};

export default StarRating;

//DEbugging issue with this component. Need to get stars to render under main
