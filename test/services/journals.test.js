const assert = require('assert');
const app = require('../../api/app');

describe('\'journals\' service', () => {
  it('registered the service', () => {
    const service = app.service('journals');

    assert.ok(service, 'Registered the service');
  });
});
