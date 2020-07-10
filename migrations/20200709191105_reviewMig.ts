
exports.up = async function(knex, Promise) {
    await knex.schema.createTable('Reviews', table => {
        table
            .increments('id')
            .unsigned()
            .primary();
        table
            .string('name')
        table
            .string('review')
    })
}


exports.down = async function(knex, Promise) {

    await knex.schema.dropTable('Reviews');
};

