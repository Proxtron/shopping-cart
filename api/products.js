import productsData from '../db.json'

export default function handler(req, res) {
  res.status(200).json(productsData.products);
}