// the necessary connection information:

const { Pool } = require("pg");

// All of the following properties should be read from environment variables
// We're hardcoding them here for simplicity
module.exports = new Pool({
  host: process.env.HOST, // or wherever the db is hosted
  user: process.env.USER,
  database: "top_users",
  password: process.env.PASSWORD,
  port: process.env.PORT // The default port
});


  // NOT WORKING 8-11-25
  // host: process.env.HOST,
  // user: process.env.USER,
  // database: process.env.DATABASE,
  // password: process.env.PASSWORD,
  // port: process.env.PORT

  // WORKS
  // host: "localhost", // or wherever the db is hosted
  // user: "czawojski",
  // database: "top_users",
  // password: "1234",
  // port: 5432 // The default port