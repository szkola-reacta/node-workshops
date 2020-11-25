const express = require('express');

const schemas = require('./schemas');
const validate = require('../validate');

const Router = express.Router;
const routes = new Router();

// GET /v1/movies/
routes.get('/', (req, res) => {
  res.json({ status: 'Hello word!' }); // default: 200, text/html
});


const createPost = (req, res) => {
  console.log(JSON.stringify(req.body, null, 2));
  res.json({ ok: true });
};

// POST /v1/movies/
routes.post(
  '/',
  validate(schemas.create),
  createPost
);

// PATCH /v1/movies/
routes.patch(
  '/',
  validate(schemas.update),
  (req, res) => {
    console.log(JSON.stringify(req.body, null, 2));
    res.json({ ok: true });
  }
);

routes.get('/ping', (req, res) => {
  // res.json({ status: 'ok'});
  res.status(201).json({ status: 'ok'});
});

module.exports = routes;
