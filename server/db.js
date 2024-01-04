const { Pool } = require("pg");

const pool = new Pool({
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME,
});

const getAllItems = () => {
  return pool
    .query(`SELECT * FROM items`)
    .then(result => {
      console.log("getAllItems ---", JSON.stringify(result.rows));
      return result.rows;
    })
    .catch(err => {
      console.log(err.message);
    });
};

module.exports = {
  pool,
  getAllItems
};