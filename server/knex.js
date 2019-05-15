const knex = require("knex");
const knexfile = require("../knexfile")

const user = process.env.USER || "postgres";
const db = knex(
  knexfile
);

module.exports = db;