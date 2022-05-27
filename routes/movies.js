import express from "express";
const router = express.Router();

import {
  getMovies,
  searchMoviesByTitle,
  //   deleteMovieById,
} from "../models/movies.js";

/* movies endpoints go here */

router.get("/", async function (req, res) {
  console.log(req.query.title);
  if (req.query.title !== undefined) {
    const result = await searchMoviesByTitle(req.query.title);
    return res.json({ success: true, payload: result });
  }
});

// router.delete("/:id", function (req, res) {
//   const id = Number(req.params.id);
//   const result = deleteMovieById(req.params.id);
//   res.json({ success: true, payload: result });
// });

router.get("/", async function (req, res) {
  const result = await getMovies();
  res.json({ success: true, payload: result });
});

export default router;
