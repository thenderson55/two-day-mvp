module.exports = {
  client: "pg",
  connection: {
    host: "127.0.0.1",
    database: "monthly-rentals",
    port: 5432,
  
  },

  pool: {
    min: 2,
    max: 10,
  },
  migrations: {
    tableName: "knex_migrations",
  },
  seeds: {
    directory: "./seeds",
  },
};


// const user = process.env.USER || "postgres";
// const db = knex({
//   client: "pg",
//   connection:
//     process.env.DATABASE_URL || `postgres://${user}@127.0.0.1:5432/truckstop`,
//   searchPath: "public",
// });