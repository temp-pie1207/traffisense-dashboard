import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const data = require('./data.json');

export default function handler(req, res) {
  res.setHeader('Content-Type', 'application/json');
  const { id } = req.query || {};
  if (id) {
    const analysis = data.analyses.find(a => a.id === id);
    if (!analysis) return res.status(404).json({ detail: 'Analysis not found' });
    const analysisFindings = data.findings.filter(f => f.analysis_id === id);
    const analysisChallans = data.challans.filter(c => c.analysis_id === id);
    return res.status(200).json({
      ...analysis,
      findings: analysisFindings,
      challans: analysisChallans
    });
  }
  return res.status(200).json(data.analyses);
}
