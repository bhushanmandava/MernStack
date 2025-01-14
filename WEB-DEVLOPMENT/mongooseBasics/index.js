const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/moviesdb');
    console.log('conection established');

    // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}
const movieSchema = new mongoose.Schema({
    title: String,
    year: Number,
    score: Number,
    rating: String
})
const Movie = mongoose.model('Movie', movieSchema);
const rrr = new Movie({
    title: 'rrr',
    year: 1986,
    score: 9.2,
    rating: "ok"
})
Movie.insertMany([
    { title: 'Movie A', year: 1985, score: 8.7, rating: 'PG' },
    { title: 'Movie B', year: 1990, score: 9.1, rating: 'R' },
    { title: 'Movie C', year: 1995, score: 8.9, rating: 'PG-13' },
    { title: 'Movie D', year: 2000, score: 9.3, rating: 'G' },
    { title: 'Movie E', year: 2005, score: 8.8, rating: 'PG' },
    { title: 'Movie F', year: 2010, score: 9.0, rating: 'R' },
    { title: 'Movie G', year: 2015, score: 9.2, rating: 'PG-13' }
])
    .then(data => {
        console.log('it worked')
        console.log(data)
    })