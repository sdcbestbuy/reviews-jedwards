const faker = require('faker');

const createReview = () => ({

  id: faker.random.number,
  name: faker.internet.userName(),
  review: faker.lorem.words()

});

exports.seed = async function(knex, Promise) {

  const reviewData = [];
  const dataEntries = 10000;
  for(i = 0; i < dataEntries; i++) {

    reviewData.push(createReview());
  }

  await knex('reviews')
    .insert(reviewData)
};

// COPY review("id", "name", "review")
// FROM '/Users/joshuaedwards/Desktop/sdc/data.csv'
// WITH DELIMITER ',' CSV HEADER;