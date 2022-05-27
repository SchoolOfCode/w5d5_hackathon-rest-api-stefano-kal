// SET UP getMovies function

// import { movies } from "../libs/movies.js";
import pg from "pg";
import { pool } from "../db/index.js";
import express from "express";

export async function getMovies() {
  const response = await pool.query("SELECT * FROM movies;");
  return response.rows;
}

export async function searchMoviesByTitle(searchTerm) {
  const response = await pool.query(
    `SELECT * FROM movies WHERE UPPER(title) LIKE UPPER('%${searchTerm}%');`
  );
  return response.rows;
}

// export function deleteMovieById(id) {
//   const response = await pool.query(
//       `DELETE FROM movies WHERE movies_id = ${id};`
//       );
//   return response.rows;
// };
