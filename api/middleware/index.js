// eslint-disable-next-line no-unused-vars
const { render } = require('./nuxt'); // <- Require the middleware

module.exports = function (app) {
  // Add your custom middleware here. Remember that
  // in Express, the order matters.
  app.use((req, res, next) => {
  switch (req.accepts('html', 'json')) {
    case 'json': {
      next();
      break;
    }
    default: {
      render(req, res, next);
    }
  }
});
};
