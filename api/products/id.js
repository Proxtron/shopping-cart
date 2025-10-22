import productsData from '../../db.json' assert { type: 'json' };

export default function handler(req, res) {
  const { id } = req.query;
  const product = productsData.products.find(p => p.id === id);
  
  if (product) {
    res.status(200).json(product);
  } else {
    res.status(404).json({ error: 'Product not found' });
  }
}