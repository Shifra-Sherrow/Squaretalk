const clients = require('../data/client.json');

class Client {
  static list() {
    return Promise.resolve(clients);
  }
};

module.exports = Client;
