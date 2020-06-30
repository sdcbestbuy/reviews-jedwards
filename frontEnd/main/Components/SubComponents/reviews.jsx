import React from 'react';
import ReviewsNameArea from './reviewsNameSection.jsx'
import ReviewsCommentArea from './reviewsCommentSection.jsx'


const Review = (props) => {
  return (
    <div id='bILPOneReview'>
      <div id='bILPReviewNamesSection'>
        <ReviewsNameArea />
      </div>
      <div id='bILPReviewCommentSection'>
        < ReviewsCommentArea elprops={props}/>
      </div>
    </div>
  )
}

export default Review;

/*
In the Stars

<ul className="review">
                    <li className="liReviews">
                        <div className="liDiv">
                            <i className="stars">
                                <Rating name="half-rating-read"
                                        value={props.data.customer_review_AVG}
                                        precision={0.1}
                                        size="small"
                                        emptyIcon={<GradeOutlinedIcon fontSize="inherit" />}
                                        readOnly
                                />
                            </i>
                        <span className="totalReviews">{'(' + props.data.customerReviewCount + ')'}</span>
                        </div>
                    </li>
                </ul>


CSS --------- CSS --------- CSS --------- CSS --------- CSS

.review {
  grid-area: review;
  padding: 0px;
}
.ulReviews {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  padding-left: 0;
  list-style: none;
  margin-bottom: 0;
  font-size: 8px;
}
.liDiv {
  font-size: .75em;
  display: flex;
  justify-content: start;
  align-items: center;
  right: 5px;
}
.liReviews {
  border-right: none;
  position: relative;
  right: 10px;
  list-style: none;
}
.stars {
  position: relative;
  left: 0;
  right: 10px;
  display: inline-flex;
  transform: scale(0.80);
}
.totalReviews {
  float: right;
  font-size: 11px;
  color: #0457C8;
  cursor: pointer;
  text-align: -webkit-match-parent;
}
.itemRating {
  box-sizing:border-box;
  color:rgb(4, 87, 200);
  cursor:pointer;
  display:block;
  font-family:'Nunito', Arial, Helvetica, sans-serif;
  font-size:11px;
  height: auto;
  line-height:normal;
  list-style-image:none;
  list-style-position:outside;
  list-style-type:none;
  text-align:right;
  text-size-adjust: 100%;
  visibility:visible;
  white-space:normal;
  width: 50%;
  -webkit-tap-highlight-color:rgba(0, 0, 0, 0);
}


*/