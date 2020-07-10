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

        response = await knex('Reviews').select('*').where('id', 9000000);
    } catch (error) {
        throw error;
    }
    
    return response;
}

module.exports = {

    getReviews
}

// async function getReviews() {

//     let response;

//     try {
//         response = await connection.query('SELECT * FROM reviews WHERE id= 8997650');
//     } catch (error) {
//         throw error;
//     }
    
//     return response;
// }