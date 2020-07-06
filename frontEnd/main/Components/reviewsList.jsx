import React from "react";
import Review from "./SubComponents/reviews.jsx";

/*
[COMPONENT] Review List
[INFO] Review list is showcasing five reviews

Component Structure:
Review List
  -> Review
    -> Reviews Name Area
    -> Reviews Comment Area
      -> Star Rating
*/
const ReviewsList = (props) => {
  return (
    <div id="bILPAllReviewsSection">
      <p>
        Showing <strong>5</strong> of 5 reviews of{" "}
        {Math.round(Math.random() * 1000)} reviews
      </p>
      <Review thisProductsData={props} img={props.thumbnailImages[0]} />
      <Review thisProductsData={props} img={props.thumbnailImages[1]} />
      <Review thisProductsData={props} img={props.thumbnailImages[2]} />
      <Review thisProductsData={props} img={props.thumbnailImages[3]} />
      <Review thisProductsData={props} img={props.thumbnailImages[4]} />
    </div>
  );
};

export default ReviewsList;
