var express = require('express');
var router = express.Router();

/* GET movies */
const movies = ['Crocadile Dundee', 'Back to the Future', 'Romancing the Stone', 'Star Wars', 'Ground Hog Day']
router.get('/', (req, res) => {
    res.json({ movies })
})

/* GET a single movie */
router.get('/:id', (req, res) => {
    res.json({ movie: movies[req.params.id] })
})

/* CREAT a movie */
router.post('/', (req, res) => {
    movies.push(req.body.movie)
    res.json({ movies })
})

//UPDATE a movie
router.put('/:id', (req, res) => {
    movies[req.params.id] = req.body.movie
    res.json({ movies })
})

/* Delete a movie */
router.delete('/:id', (req, res) => {
    let deletedMovie = movies.splice(req.params.id, 1)
    res.json({ movies, deletedMovie })
})





module.exports = router;