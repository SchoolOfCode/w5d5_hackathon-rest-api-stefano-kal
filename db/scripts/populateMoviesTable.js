import { query } from "../index.js";
import { movies } from "../../libs/movies.js";

async function populateMoviesTable() {
  for (let i = 0; i < movies.length; i++) {
    const res = await query(
      `INSERT INTO movies (director, title, release) VALUES ($1, $2, $3);`,
      [movies[i].director, movies[i].title, movies[i].release]
    );
    console.log(`populated with ${movies[i].title}`);
  }
}

populateMoviesTable();
