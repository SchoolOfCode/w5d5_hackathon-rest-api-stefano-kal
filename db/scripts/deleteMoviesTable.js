import { query } from "../../db/index.js";

const sqlString = `DROP TABLE movies;`;

async function deleteMoviesTable() {
  const res = await query(sqlString);
  console.log("deleted movies table");
}

deleteMoviesTable();