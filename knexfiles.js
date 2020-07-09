module.exports = {
    development: {
        client: "posgresql",
        connection: `postgres://localhost:5432/${dbname}`,
        migrations: {
            directory: __dirname + "/migrations"
        },
        seeds: {
            directory: __dirname + "/seeds"
        }
    }
}