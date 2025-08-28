#! /usr/bin/env node

const { Client } = require("pg");

const SQL = `
CREATE TABLE IF NOT EXISTS messages (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  username VARCHAR ( 255 ),
  text VARCHAR ( 255 )
);

INSERT INTO messages (username) 
VALUES
  ('Horace'),
  ('Gwen'),
  ('Yeti');

INSERT INTO messages (text) 
VALUES
  ('Hello'),
  ('Greetings'),
  ('Yo');
`;

async function main() {
  console.log("seeding...");
  const client = new Client({
    connectionString: "postgresql://postgres:fwcgKctjLrornqIEYxShWgCVvJfXwTEh@postgres.railway.internal:5432/railway",
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}

main();