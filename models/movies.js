// SET UP getMovies function

// import { movies } from "../libs/movies.js";
import pg from "pg";
import { pool } from "../db/index.js";

export async function getMovies() {
  const response = await pool.query("SELECT * FROM movies;");
  console.log(response);
  return response.rows;
}

export async function searchMoviesByTitle() {
  const response = await pool.query(
    `SELECT * FROM books WHERE title LIKE "${req.params.name}%";`
    );


  console.log(req.params.name);
  return response.rows;
}