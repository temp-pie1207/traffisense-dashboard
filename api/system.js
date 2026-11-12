export default function handler(req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.status(200).json({
    models: [
      { name: 'YOLO11s-Traffic-IDD', task: 'Vehicle & Motorcycle Detection', device: 'NVIDIA RTX 4050 GPU', fps: 70.9, latency_ms: 14.1 },
      { name: 'Pose-Helmet-Classifier-v2', task: 'Rider & Pillion Helmet Compliance', accuracy: '96.4%', latency_ms: 4.2 },
      { name: 'FastPlateOCR-HSRP', task: 'Indian License Plate Recognition (ANPR)', accuracy: '94.8%', latency_ms: 8.5 },
      { name: 'OpenCLIP-ViT-B32', task: 'Emergency Vehicle Zero-Shot Exemption', accuracy: '99.1%', latency_ms: 12.0 }
    ],
    system: {
      gpu: 'NVIDIA GeForce RTX 4050 Laptop GPU (6GB VRAM)',
      cuda: '12.4',
      pytorch: '2.6.0+cu124',
      os: 'Ubuntu 24.04 LTS (x86_64)',
      runtime: 'FastAPI + Asynchronous Worker Queue + WebSockets'
    }
  });
}
