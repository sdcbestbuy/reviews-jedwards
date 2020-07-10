import * as Knex from "knex";

exports.up = async function(knex, Promise) {
    await knex.schema.createTable('reviews', table => {
        table
            .increments('userId')
            .unsigned()
            .primary();
        table
            .string('user')
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

