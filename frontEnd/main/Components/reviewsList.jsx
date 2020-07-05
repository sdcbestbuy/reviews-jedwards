import React from "react";
import Review from "./SubComponents/reviews.jsx";

// This is the List of reviews, it only shows 5 Reviews.
const ReviewsList = (props) => {
  return (
    <div id="bILPAllReviewsSection">
      <p>
        Showing <strong>5</strong> of 5 reviews of{" "}
        {Math.round(Math.random() * 1000)} reviews
      </p>
      <Review thisProductsData={props} img={props.thumbnailImages[0]} />
      <Review thisProductsData={props} img={props.thumbnailImages[1]}/>
      <Review thisProductsData={props} img={props.thumbnailImages[2]}/>
      <Review thisProductsData={props} img={props.thumbnailImages[3]}/>
      <Review thisProductsData={props} img={props.thumbnailImages[4]}/>
    </div>
  );
};

export default ReviewsList;
