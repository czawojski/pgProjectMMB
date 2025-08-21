const pool = require("./pool");

async function getAllUsernames() {
  const { rows } = await pool.query("SELECT * FROM usernames");
  return rows;
}

async function insertUsername(username) {
  await pool.query("INSERT INTO usernames (username) VALUES ($1)", [username]);
}

// added 8-12-25
async function deleteUsername(username) {
  await pool.query("DELETE FROM usernames WHERE username=($1)", [username]);
}

// added 8-13-25
async function searchUsername(username) {
  const { rows } = await pool.query("SELECT * FROM usernames WHERE LOWER(username) LIKE LOWER(($1))", ["%" + username + "%"]);
  return rows;
}

module.exports = {
  getAllUsernames,
  insertUsername,
  deleteUsername,
  searchUsername,
};