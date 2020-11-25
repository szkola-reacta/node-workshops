const moviesRoutes = require('./movies/routes');
// const placesRoutes = require('./places');
// const eventsRoutes = require('./events');

module.exports = (app) => {
  app.use(`/v1/movies`, moviesRoutes)

  // GET /v1/movies
  // POST /v1/movies
  // GET /v1/movies/ping
}
