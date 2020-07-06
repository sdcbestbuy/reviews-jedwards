import React from "react";
import CustomerRating from "./SubComponents/customerRating.jsx";
import CustomerRatingVisualizer from "./SubComponents/customerRatingVisualizer.jsx";
import Recommendation from "./SubComponents/recommendation.jsx";

// Function that will pass down number of ratings and average rating to next function
const buildReviewNumbers = (props) => {
  let amtOfReviews = props.thisProductsData[0].customerReviewCount;
  let avgOfReviews = props.thisProductsData[0].customer_review_AVG;
  return buildSomeNums(avgOfReviews, amtOfReviews);
};

// Function that builds a number of votes based on review average and number of votes
function buildSomeNums(avg, numberofvotes) {
  avg = Math.round(avg);
  let votes = {
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
  };
  //percentageOfVote aka each votes is worth ___% of the bar graph
  let percentageOfVote = numberofvotes / 100;
  if (numberofvotes <= 4) {
    votes[avg] = 100;
    return votes;
  }
  if (numberofvotes > 4) {
    // -------------- Handling Averages ----------
    //1 or 5
    if (avg === 1 || avg === 5) {
      votes[avg] = numberofvotes / percentageOfVote;
      return votes;
    }
    //2
    if (avg === 2) {
      votes[1] = Math.round(numberofvotes * 0.2) / percentageOfVote;
      votes[avg] = Math.round(numberofvotes * 0.6) / percentageOfVote;
      votes[3] = Math.round(numberofvotes * 0.15) / percentageOfVote;
      votes[4] = Math.round(numberofvotes * 0.05) / percentageOfVote;
    }
    //3
    if (avg === 3) {
      votes[1] = Math.round(numberofvotes * 0.05) / percentageOfVote;
      votes[2] = Math.round(numberofvotes * 0.15) / percentageOfVote;
      votes[avg] = Math.round(numberofvotes * 0.6) / percentageOfVote;
      votes[4] = Math.round(numberofvotes * 0.15) / percentageOfVote;
      votes[5] = Math.round(numberofvotes * 0.05) / percentageOfVote;
    }
    //4
    if (avg === 4) {
      votes[2] = Math.round(numberofvotes * 0.05) / percentageOfVote;
      votes[3] = Math.round(numberofvotes * 0.15) / percentageOfVote;
      votes[avg] = Math.round(numberofvotes * 0.6) / percentageOfVote;
      votes[5] = Math.round(numberofvotes * 0.2) / percentageOfVote;
    }
    return votes;
  }
}

/*
[COMPONENT] Summary Main
[INFO] Passes data down to three sub components.

Component Structure:
Summary Main
  -> Customer Rating
    -> Star Rating
  -> Customer Rating Visualiser
  -> Recommendation
*/
const SummaryMain = (props) => {
  return (
    <div className="bILPSummaryMain">
      <div id="bILPCustomerRatingSection">
        <CustomerRating rating={props.thisProductsData} />
      </div>
      <div id="bILPCustomerRatingVisualizerSection">
        <CustomerRatingVisualizer
          starRatings={buildReviewNumbers(props)}
          ratings={props.thisProductsData}
        />
      </div>
      <div id="bILPBumper"></div>
      <div id="bILPRecommendationSection">
        <Recommendation ratings={props.thisProductsData} />
      </div>
    </div>
  );
};

export default SummaryMain;
