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

// Read all the films, filtered by minimum-duration if the query param exists
router.get('/', function (req, res) {
    const minimumFilmDuration = req?.query
      ? parseInt(req.query['minimum-duration'])
      : undefined;
    if (
      minimumFilmDuration &&
      (typeof minimumFilmDuration !== 'number' || minimumFilmDuration <= 0)
    )
      return res.sendStatus(400);
  
    if (!minimumFilmDuration) return res.json(films);
  
    const filmsReachingMinimumDuration = films.filter(
      (film) => film.duration >= minimumFilmDuration
    );
    return res.json(filmsReachingMinimumDuration);
  });


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
    const link =req?.body?.content?.trim().length !== 0 ? req.body.link : undefined;
    const duration =
    typeof req?.body?.duration !== 'number' || req.body.duration < 0
      ? undefined
      : req.body.duration;
  const budget =
    typeof req?.body?.budget !== 'number' || req.body.budget < 0
      ? undefined
      : req.body.budget;
  
    console.log('POST /films');
  
    if (!title || !link || !duration || !budget) return res.sendStatus(400); // error code '400 Bad request'
  
    const lastItemIndex = FILM?.length !== 0 ? FILM.length - 1 : undefined;
    const lastId = lastItemIndex !== undefined ? FILM[lastItemIndex]?.id : 0;
    const nextId = lastId + 1;
  
    const newFilm = { id: nextId, title, link, duration, budget };

    FILM.push(newFilm);
  
    res.json(newFilm);
});

// Delete a film
router.delete('/:id', function (req, res) {
    const indexOfFilmFound = FILM.findIndex((film) => film.id == req.params.id);
  
    if (indexOfFilmFound < 0) return res.sendStatus(404);
  
    const itemsRemoved = FILM.splice(indexOfFilmFound, 1);
    const itemRemoved = itemsRemoved[0];
  
    return res.json(itemRemoved);
});

// Update a film identified by its id
router.patch('/:id', function (req, res) {
    const title = req?.body?.title;
    const link = req?.body?.link;
    const duration = req?.body?.duration;
    const budget = req?.body?.budget;
  
    if (
      !req.body ||
      (title && !title.trim()) ||
      (link && !link.trim()) ||
      (duration && (typeof req?.body?.duration !== 'number' || duration < 0)) ||
      (budget && (typeof req?.body?.budget !== 'number' || budget < 0))
    )
      return res.sendStatus(400);
  
    const indexOfFilmFound = FILM.findIndex((film) => film.id == req.params.id);
  
    if (indexOfFilmFound < 0) return res.sendStatus(404);
  
    const filmPriorToChange = FILM[indexOfFilmFound];
    const objectContainingPropertiesToBeUpdated = req.body;
  
    const updatedFilm = {
      ...filmPriorToChange,
      ...objectContainingPropertiesToBeUpdated,
    };
  
    FILM[indexOfFilmFound] = updatedFilm;
  
    return res.json(updatedFilm);
  });

module.exports = router;