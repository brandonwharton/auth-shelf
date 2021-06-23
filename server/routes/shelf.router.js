const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {rejectUnauthenticated} = require(`../modules/authentication-middleware`);
/**
 * Get all of the items on the shelf
 */
router.get('/', rejectUnauthenticated, (req, res) => {

  const queryText = `SELECT * FROM "item";`;

  pool.query(queryText)
    .then(result => {
      res.send(result.rows);
      console.log('data sent');
    })
    .catch(err => {
      console.log('Error with GET shelf in router', err);
      res.sendStatus(500);
    })
});

/**
 * Add an item for the logged in user to the shelf
 */
router.post('/', rejectUnauthenticated, (req, res) => {
  // endpoint functionality
  if(req.isAuthenticated()) { // only logged in users are authenticated 

    console.log('is authenticated', req.isAuthenticated()); // true or false, are they logged in
    console.log('user', req.user); // when logged in, which user is making the request
    console.log('req.body', req.body)

    // adding the item to the "item" table in the database
    const queryText = `INSERT INTO "item" ("description", "image_url", "user_id")
                        VALUES ($1, $2, $3)`;
    pool.query(queryText, [req.body.description, req.body.image_url, req.user.id]).then((result) => {
      res.sendStatus(201);
    }).catch((error) => {
      console.log(error);
      res.sendStatus(500);
    })
  } else {
    // if the user is not authenticated send the FORBIDDEN status (403)
      res.sendStatus(403); 
  }

});

/**
 * Delete an item if it's something the logged in user added
 */
router.delete('/:id', (req, res) => {
  console.log('Delete', req.body, req.params.id);
  res.sendStatus(200);
  
});

/**
 * Update an item if it's something the logged in user added
 */
router.put('/:id', (req, res) => {
  // endpoint functionality
});

/**
 * Return all users along with the total number of items
 * they have added to the shelf
 */
router.get('/count', (req, res) => {
  // endpoint functionality
});

/**
 * Return a specific item by id
 */
router.get('/:id', (req, res) => {
  // endpoint functionality
});

module.exports = router;
