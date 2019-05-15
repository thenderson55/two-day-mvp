const knex = require("knex");
// const knexfile = require("../knexfile")

// const user = process.env.USER || "postgres";
const user = process.env.USER || "postgres";
const db = knex({
  client: "pg",
  connection:
    process.env.DATABASE_URL || `postgres://${user}@127.0.0.1:5432/monthly-rentals`,
  searchPath: "public",
});

// const db = knex(
//   knexfile
  
// );

module.exports = db;