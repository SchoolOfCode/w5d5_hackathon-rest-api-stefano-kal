import { query } from "../../db/index.js";

const sqlString = `CREATE TABLE movies (movies_id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY, director TEXT, title TEXT, release TEXT);`;

async function createMoviesTable() {
  const res = await query(sqlString);
  console.log("created a movies table");
}

createMoviesTable();
