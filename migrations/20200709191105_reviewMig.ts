import * as Knex from "knex";

exports.up = async function(knex, Promise) {
    await knex.schema.createTable('reviews', table => {
        table
            .increments('id')
            .unsigned()
            .primary();
        table
            .string('name')
            .unique()
            .notNullable();
        table
            .string('review')
            .notNullable();
    })
}


exports.down = async function(knex, Promise) {

    await knex.schema.dropTable('reviews');
};

