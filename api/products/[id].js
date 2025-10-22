import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default function handler(req, res) {
  const data = JSON.parse(
    readFileSync(join(__dirname, '../../db.json'), 'utf-8')
  );
  
  const { id } = req.query;
  const product = data.products.find(p => p.id === id);
  
  if (product) {
    res.status(200).json(product);
  } else {
    res.status(404).json({ error: 'Product not found' });
  }
}