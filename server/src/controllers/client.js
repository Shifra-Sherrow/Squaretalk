const Client = require('../models/client');

class ClientCtrl {
  static async list(req, res) {
    try {
      const clients = await Client.list();

      res.json(clients);
      res.statusCode = 200;
    } catch (err) {
      res.status(500).send(err);
    }
  }
};

module.exports = ClientCtrl;
