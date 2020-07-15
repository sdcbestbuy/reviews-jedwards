// // const db = require('./db/queries');

// const getReviewData = async (columnData) => {

//     try {
//         const review = await reviews2.findOne({user: columnData});
//         res.json(review);
//     } catch(err) {
//         res.status(500).json({message: err.message});
//     }
// }

// const createReviewData = async (reviewData) => {

//     const review = new reviews2({
//         user: reviewData.user,
//         revCount: reviewData.revCount,
//         revAvg: reviewData.revAvg,
//         revTitle: reviewData.revTitle,
//         review: reviewData.review
//     })

//     try {
//         const newReview = await review.save()
//         res.status(201).json(newReview)
//     } catch(err) {
//         res.status(400).json({message: err.message});
//     }
// }

// module.exports = {

//     getReviewData,
//     createReviewData
// }

