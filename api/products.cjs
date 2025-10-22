const productsData = require('../db.json');

module.exports = function handler(req, res) {
  res.status(200).json(productsData.products);
}