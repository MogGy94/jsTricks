const fs = require('fs');
const fsp = require('fs').promises;
const crypto = require('crypto');

const { totalMovies, categories, movies, galardon } = require('../utils/mocks.js');
const {
    ReadFile,
    EscribirFIle,
    hash,
    shuffleArray
} = require('../utils/utilFunctions');
const moviesRoute = `${__dirname}/../utils/movies.json`;

const objMovieGenInstance = movieGenerator();

const borrarBdFile = async (ruta, cb) => {
    fs.unlink(ruta, (err) => {
        console.log("archivo borrado correctamente");
    });
}

const writeMovies = async (num = 5) => {
    /*  const moviesMocks = fs.createWriteStream(moviesRoute);
     moviesMocks.write(JSON.stringify(obj));
     moviesMocks.end(); */
    const movieLen = movies.length || 10;
    const iterable = Array.from(Array(movieLen).keys());
    const obj = []
    iterable.map((i) => {
        obj.push(objMovieGenInstance.next(i).value)
    })

    await EscribirFIle(
        moviesRoute,
        JSON.stringify(obj),
    )
}

const readMovies = async () => {
    try {
        console.log("reading Files");
        const mocks = require("./../utils/movies.json");
        console.log(mocks[0]);
        return mocks;
    } catch (err) {
        console.log(err);
        return [{ error: "movies File wasn read" }]
    }
}


const execute = async () => {
    await borrarBdFile(moviesRoute);
    await writeMovies();
    const data = await ReadFile(moviesRoute);
    console.log("nuevo Archivo de Mocks Creado");
    return data
}


async function getMovieById(id) {
    let moviesObj = await ReadFile(moviesRoute);
    moviesObj = JSON.parse(moviesObj);
    const selID = id || moviesObj.length - 1
    return {
        index: selID,
        totalMovies: moviesObj.length,
        movie: moviesObj[selID]
    }
}

async function createMovie() {
    const movieId = Math.floor(Math.random() * movies.length)
    const newMovie = objMovieGenInstance.next(movieId);
    //let moviesObj = await readMovies();
    let moviesObj = await ReadFile(moviesRoute);
    moviesObj = JSON.parse(moviesObj)
    moviesObj.push(newMovie);

    await EscribirFIle(
        moviesRoute,
        JSON.stringify(moviesObj),
        () => console.log("nueva Movie agregada")
    )

    return newMovie
}

async function updateMovie(index) {
    const movieId = Math.floor(Math.random() * movies.length)
    const newMovie = objMovieGenInstance.next(movieId);
    //let moviesObj = await readMovies();
    let moviesObj = await ReadFile(moviesRoute);
    moviesObj = JSON.parse(moviesObj)
    const oldMovie = moviesObj[index];
    moviesObj[index] = newMovie;

    await EscribirFIle(moviesRoute, JSON.stringify(moviesObj));
    console.log(`movie ${index} ha sido Modificada`);

    return { newMovie, oldMovie }
}

async function removeMovie(index) {
    console.log(index);
    //let moviesObj = await readMovies();
    let moviesObj = await ReadFile(moviesRoute);
    moviesObj = JSON.parse(moviesObj);

    const removedMovie = moviesObj[index];
    console.log(index);
    moviesObj.splice(index, 1);
    console.log(removedMovie);
    await EscribirFIle(moviesRoute, JSON.stringify(moviesObj));

    return { removedMovie }
}

//execute();


/**** */
function* movieGenerator() {
    let movieId = Math.floor(Math.random() * movies.length);
    while (true) {
        //console.log(movieId);
        const galId = Math.floor(Math.random() * galardon.length);
        const catNum = Math.floor(Math.random() * 5) + 2;
        const shuffleCategories = shuffleArray(categories);


        const movie = {
            id: hash(movies[movieId]),
            title: movies[movieId],
            galardon: galardon[galId],
            year: Math.floor(Math.random() * 80) + 1950,
            cover: "some , image",
            categories: shuffleCategories.slice(0, catNum),
            descripiton: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }

        movieId = yield movie
    }
}

module.exports = {
    execute,
    getMovieById,
    createMovie,
    updateMovie,
    removeMovie,
    readMovies
}