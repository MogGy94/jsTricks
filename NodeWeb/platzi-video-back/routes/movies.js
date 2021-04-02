
const express = require('express');
const { mocks } = require('../utils/movies.json');
const {
    execute,
    getMovieById,
    createMovie,
    updateMovie,
    removeMovie,
    readMovies
} = require('../moviesMockGen/asyncMoviesMockGen');


function moviesApi(app) {
    const router = express.Router();
    app.use("/movies", router);
    router.get("/reset", async (req, res, next) => {
        try {
            const data = await execute()
            res.status(200).json(JSON.parse(data));

        } catch (err) {
            console.log(err);
        }

    });

    router.get("/", async (req, res, next) => {
        try {
            const movies = await readMovies();
            res.status(200).json({
                message: 'movies listed',
                data: movies,
            });

        } catch (err) {
            console.log(err);
        }

    });

    router.get("/:movieId", async (req, res, next) => {
        try {
            const { movieId } = req.params
            const movies = await getMovieById(movieId);
            res.status(200).json({
                message: 'movie retrieve',
                data: movies,
            });

        } catch (err) {
            console.log(err);
        }

    });

    router.post("/", async (req, res, next) => {
        try {
            const createMovieId = await createMovie();
            res.status(201).json({
                message: 'movie create',
                data: createMovieId,
            });

        } catch (err) {
            console.log(err);
        }

    });

    router.put("/:movieId", async (req, res, next) => {
        try {
            const { movieId } = req.params;
            const delta = await updateMovie(movieId);
            res.status(200).json({
                message: 'update Movie',
                data: delta,
            });

        } catch (err) {
            console.log(err);
        }

    })

    router.delete("/:movieId", async (req, res, next) => {
        try {
            const { movieId } = req.params;
            const updatedMovieId = await removeMovie(movieId);
            res.status(200).json({
                message: 'delete Movie',
                data: updatedMovieId,
            });

        } catch (err) {
            console.log(err);
        }

    })


}

module.exports = { moviesApi }