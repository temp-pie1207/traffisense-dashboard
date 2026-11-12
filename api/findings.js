import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const data = require('./data.json');

export default function handler(req, res) {
  res.setHeader('Content-Type', 'application/json');
  const { status, route, id } = req.query || {};
  if (id) {
    const f = data.findings.find(item => item.id === id);
    if (!f) return res.status(404).json({ detail: 'Finding not found' });
    return res.status(200).json(f);
  }
  let results = [...data.findings];
  if (status) {
    results = results.filter(f => f.status === status);
  }
  if (route) {
    results = results.filter(f => f.route === route);
  }
  return res.status(200).json(results);
}
