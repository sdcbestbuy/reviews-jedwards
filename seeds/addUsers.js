const faker = require('faker');

const createReview = () => ({

  user: faker.name.firstName(),
  revCount: 20,
  revAvg: 4.5,
  revTitle: faker.lorem.words(),
  review: faker.lorem.words()
});

exports.seed = async function(knex, Promise) {

  var reviewData = [];

  var dataEntries = 10000000;

  for(let i = 1; i < dataEntries; i += 1) {
    reviewData.push(createReview(i));
    if(i % 1000 === 0) {
      await knex('Reviews').insert(reviewData);
      reviewData = [];
    }
  }
};

// for(i = 0; i < dataEntries; i++) {

//   reviewData.push(createReview());
// }

// await knex('reviews')
//   .insert(reviewData)