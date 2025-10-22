const productsData = require('../db.json');

export default function handler(req, res) {
  res.status(200).json(productsData.products);
}