import React from "react";
import ReviewsNameArea from "./reviewsNameSection.jsx";
import ReviewsCommentArea from "./reviewsCommentSection.jsx";

// Reviews Component broken down in to the Name area and the Comment Area
const Review = (props) => {
  return (
    <div id="bILPOneReview">
      <div id="bILPReviewNamesSection">
        <ReviewsNameArea />
      </div>
      <div id="bILPReviewCommentSection">
        <ReviewsCommentArea elprops={props} />
      </div>
    </div>
  );
};

export default Review;
