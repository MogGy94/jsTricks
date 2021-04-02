const fs = require('fs');
const fsp = require('fs').promises;
const crypto = require('crypto');
const { EventEmitter } = require("events");

const { totalMovies, categories, movies, galardon } = require('../utils/mocks.js');

const moviesRoute = `${__dirname}/../utils/movies.json`;

const codigos = {
    callWrite: "Llamar_a_Escribir",
    callRead: "Llamar_a_Leer",
}

const { callWrite, callRead } = codigos;

class MockMoviesGenerator extends EventEmitter {
    constructor() {
        super()
        this.movieGen = movieGenerator();
    }
    execute() {
        this.emit("start");
        const movGen = new MockMoviesGenerator();
        movGen.borrarBdFile(moviesRoute);
        movGen.on(callWrite, () => movGen.writeMovies());
        //movGen.on(callRead, () => movGen.readMovies());
    }

    borrarBdFile(ruta, cb) {
        fs.unlink(ruta, (err) => {
            console.log("archivo borrado correctamente");
            this.emit(callWrite);
        });
    }

    writeMovies(num = 5) {
        /*  const moviesMocks = fs.createWriteStream(moviesRoute);
         moviesMocks.write(JSON.stringify(obj));
         moviesMocks.end(); */

        const movieLen = movies.length || 10;
        const iterable = Array.from(Array(movieLen).keys());
        const obj = []
        iterable.map((i) => {
            obj.push(this.movieGen.next(i).value)
        })

        EscribirFIle(
            moviesRoute,
            JSON.stringify(obj),
            () => this.emit(callRead)
        )
    }

    readMovies() {
        try {
            console.log("reading Files");
            const mocks = require("../utils/movies.json") || [];
            //console.log(mocks);
            return mocks;
        } catch (err) {
            console.log(err);
            return [{ error: "movies File wasn read" }]
        }
    }

    getMovieById(id) {
        const mocks = this.readMovies();
        const selID = id || mocks.length - 1
        return mocks[selID];
    }

    createMovie() {
        const movieId = Math.floor(Math.random() * movies.length)
        const newMovie = this.movieGen.next(movieId);
        let moviesObj = this.readMovies();
        moviesObj.push(newMovie);

        EscribirFIle(
            moviesRoute,
            JSON.stringify(moviesObj),
            () => console.log("nueva Movie agregada")
        )
    }

    updateMovie(index) {
        const movieId = Math.floor(Math.random() * movies.length)
        const newMovie = this.movieGen.next(movieId);
        let moviesObj = this.readMovies();
        moviesObj[index] = newMovie;


        EscribirFIle(
            moviesRoute,
            JSON.stringify(moviesObj),
            () => console.log("nueva Movie agregada")
        )
    }
    removeMovie(index) {
        const movieId = Math.floor(Math.random() * movies.length)
        const newMovie = this.movieGen.next(movieId);
        let moviesObj = this.readMovies();

        moviesObj.splice(index, 1);

        EscribirFIle(
            moviesRoute,
            JSON.stringify(moviesObj),
            () => console.log("nueva Movie agregada")
        )
    }
}

const movGen = new MockMoviesGenerator();
movGen.execute();
//movGen.on(callWrite, () => console.log(movGen.getMovieById(3)));
//movGen.on(callWrite, () => movGen.createMovie());
//movGen.createMovie();
//console.log(movGen.getMovieById())


function* movieGenerator() {
    let movieId = Math.floor(Math.random() * movies.length);
    while (true) {
        console.log(movieId);
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



async function ReadFile(path, cb) {
    try {
        const data = await fsp.readFile(path);
        return data.toString();
    } catch (error) {
        console.log(error);
    }
}

async function EscribirFIle(path, content, cb) {
    try {
        await fsp.writeFile(path, content);
        console.log("Async File write correctly");
        cb();
    } catch (error) {
        console.log(error);
    }
}


function hash(secret) {
    const h = crypto.createHmac('sha256', secret).digest('hex');
    //  .update('I love cupcakes')

    return h
}

function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp
    }
    return arr
}

module.exports = { MockMoviesGenerator }



