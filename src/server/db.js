const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    password: "bugtracker",
    host: "localhost",
    port: 5432,
    database: "persoproject"
});

module.exports = pool;