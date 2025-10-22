import productsData from '../db.json' assert { type: 'json' };

export default function handler(req, res) {
  res.status(200).json(productsData.products);
}