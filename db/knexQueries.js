const faker = require('faker');

// create the connection to the posgres database
const knex = require('knex')({
    client: 'postgres',
    connection: {
        host: '127.0.0.1',
        user:     'postgres',
        password: 'V3rdilith1!',
        database: 'allReviews'
    }
});

async function getReviews() {

    let response;

    try {

        response = await knex('reviews').select('*').where('_id', '5f08faf2d91666444a1b070f');
    } catch (error) {

        throw error;
    }
    return response;
}

async function postReviews() {

     let response;

    try {

        response = await knex('Reviews')
            .insert({name: 'Butthead', review: 'this is a test'});
    } catch (error) {

        throw error;
    }
    return response;
}

module.exports = {

    getReviews,
    postReviews
}
