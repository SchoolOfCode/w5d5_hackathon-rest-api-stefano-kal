import express from "express";
const router = express.Router();

import { getMovies } from "../models/movies.js";

/* movies endpoints go here */

router.get("/", async function (req, res) {
  const result = await getMovies();
  console.log(result);
  res.json({ success: true, payload: result });
});

export default router;
