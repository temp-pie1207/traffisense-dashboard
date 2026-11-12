import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const data = require('./data.json');

export default function handler(req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.status(200).json({
    analyses_done: data.analyses.length,
    processing: 0,
    findings: data.findings.length,
    confirmed: data.findings.filter(f => f.route === 'confirmed').length,
    challans: data.challans.length,
    challans_reviewed: 4,
    pending_review: data.findings.filter(f => f.status === 'pending_review').length,
    exempt: data.findings.filter(f => f.route === 'exempt').length
  });
}
