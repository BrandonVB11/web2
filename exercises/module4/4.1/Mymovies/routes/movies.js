var express = require('express');
var router = express.Router();

const FILM = [
  {
    id: 1,
    title: 'Rapide & Furieux',
    duration: 240,
    budget: 10,
    link:"https://kinepolis.be/fr/?main_section=tous%20les%20films",
  },
  {
    id: 2,
    title: 'le meilleur fusil',
    duration: 120,
    budget: 30,
    link:"https://kinepolis.be/fr/?main_section=tous%20les%20films",
  },
  {
    id: 3,
    title: 'Rocky100',
    duration: 300,
    budget: 40,
    link:"https://kinepolis.be/fr/?main_section=tous%20les%20films",
  },
];

// Read all the movies from the menu
router.get('/', (req, res, next) => {
  console.log('GET /films');
  res.json(FILM);
});


// Read the movie identified by an id in the menu
router.get('/:id', (req, res) => {
    console.log(`GET /films/${req.params.id}`);
  
    const indexOfFilmFound = FILM.findIndex((movie) => movie.id == req.params.id);
  
    if (indexOfFilmFound < 0) return res.sendStatus(404);
  
    res.json(FILM[indexOfFilmFound]);
});

// Create a film to be added to the menu.
router.post('/', (req, res) => {
    const title = req?.body?.title?.length !== 0 ? req.body.title : undefined;
    const duration = req?.body?.duration !== 0 ? req.body.duration : undefined;
    const budget = req?.body?.budget !== 0 ? req.body.budget : undefined;
  
    console.log('POST /films');
  
    if (!title || !duration || !budget) return res.sendStatus(400); // error code '400 Bad request'
  
    const lastItemIndex = FILM?.length !== 0 ? FILM.length - 1 : undefined;
    const lastId = lastItemIndex !== undefined ? FILM[lastItemIndex]?.id : 0;
    const nextId = lastId + 1;
  
    const newMovie = {
      id: nextId,
      title: title,
      duration: duration,
      budget:budget,
      link:"https://kinepolis.be/fr/?main_section=tous%20les%20films",
    };
  
    FILM.push(newMovie);
  
    res.json(newMovie);
});

module.exports = router;