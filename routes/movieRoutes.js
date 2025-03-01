const express = require("express");
const {
  createMovie,
  getMovies,
  updateMovie,
  deleteMovie,
} = require("../controllers/movieController");

const router = express.Router();

router.post("/", createMovie);
router.get("/", getMovies);
router.put("/:id", updateMovie);
router.delete("/:id", deleteMovie);

module.exports = router;
