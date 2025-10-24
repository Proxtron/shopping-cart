import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default function handler(req, res) {
  const data = JSON.parse(
    readFileSync(join(__dirname, '../db.json'), 'utf-8')
  );
  res.status(200).json(data.products);
}