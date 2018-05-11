// Initializes the `journals` service on path `/journals`
const createService = require('feathers-mongodb');
const hooks = require('./journals.hooks');

module.exports = function (app) {
  const paginate = app.get('paginate');
  const mongoClient = app.get('mongoClient');
  const options = { paginate };

  // Initialize our service with any options it requires
  app.use('/journals', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('journals');

  mongoClient.then(db => {
    service.Model = db.collection('journals');
  });

  service.hooks(hooks);
};
