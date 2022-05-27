import express from "express";
const router = express.Router();

import { getMovies, searchMoviesByTitle } from "../models/movies.js";

/* movies endpoints go here */

router.get("/", async function (req, res) {
  const result = await getMovies();
  console.log(result);
  res.json({ success: true, payload: result });
});
router.get("/", async function (req, res) {
  if (req.query.search !== undefined) {
    const result = searchMoviesByTitle(req.query.search);
    return res.json({ success: true, payload: result });
  }
  });
export default router;
