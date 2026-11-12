import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const data = require('./data.json');

export default function handler(req, res) {
  res.setHeader('Content-Type', 'application/json');
  const { id } = req.query || {};
  if (id) {
    const c = data.challans.find(item => item.id === id);
    if (!c) return res.status(404).json({ detail: 'Challan not found' });
    return res.status(200).json(c);
  }
  return res.status(200).json(data.challans);
}
