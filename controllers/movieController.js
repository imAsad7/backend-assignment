const Movie = require("../models/Movie");

// Create Movie
exports.createMovie = async (req, res) => {
  const newMovie = new Movie(req.body);
  await newMovie.save();
  res.status(201).json(newMovie);
};

// Read All Movies
exports.getMovies = async (req, res) => {
  const movies = await Movie.find();
  res.json(movies);
};

// Update Movie
exports.updateMovie = async (req, res) => {
  const movie = await Movie.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(movie);
};

// Delete Movie
exports.deleteMovie = async (req, res) => {
  await Movie.findByIdAndDelete(req.params.id);
  res.json({ message: "Movie Deleted" });
};
