const faker = require('faker');

const createReview = () => ({

  id: faker.random.number(),
  name: faker.internet.userName(),
  review: faker.lorem.words()

});

exports.seed = async function(knex, Promise) {

  const reviewData = [];
  const dataEntries = 10000000;
  for(let i = 0; i < dataEntries; i++) {

    reviewData.push(createReview());
  }

  await knex('reviews')
    .insert(reviewData)
};
