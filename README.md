# TraffiSense Web Dashboard — AI Traffic Violation & E-Challan Operations Console

<div align="center">

  [![Live Dashboard](https://img.shields.io/badge/Live_Dashboard-TraffiSense_Cloud-00E5FF?style=for-the-badge&logo=vercel&logoColor=black)](https://traffisense-dashboard.vercel.app)
  [![3D Digital Twin](https://img.shields.io/badge/3D_Simulator-PRAVAH_Twin-FF6D00?style=for-the-badge&logo=three.js&logoColor=white)](https://pravah-3d-simulator.vercel.app)
  [![Core CV Engine](https://img.shields.io/badge/Core_Engine-TraffiSense_CV-blue?style=for-the-badge&logo=pytorch&logoColor=white)](https://github.com/temp-pie1207/traffic-violation-system)
  [![React 18](https://img.shields.io/badge/React-18.x-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
  [![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
  [![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](LICENSE)

  <p align="center">
    <strong>A mission-critical traffic operations console for law enforcement and traffic management authorities. Real-time telemetry, automated e-challan generation, human-in-the-loop verification, and 3D digital twin signal simulation.</strong>
  </p>

  <p align="center">
    <a href="https://traffisense-dashboard.vercel.app"><strong>⚡ Launch Live Production Dashboard (Vercel) ↗</strong></a> •
    <a href="https://pravah-3d-simulator.vercel.app">3D PRAVAH Simulator</a> •
    <a href="https://github.com/temp-pie1207/traffic-violation-system">Core Vision Engine Repo</a>
  </p>

</div>

---

## ✦ System Architecture & Workflows

TraffiSense Dashboard bridges low-latency edge computer vision with official administrative traffic management workflows:

```
                               ┌────────────────────────────────┐
                               │   CCTV Stream / Traffic Video  │
                               └──────────────┬─────────────────┘
                                              │
                                              ▼
                               ┌────────────────────────────────┐
                               │   TraffiSense AI Core Engine   │
                               │   • YOLO11s (IDD fine-tuned)   │
                               │   • Helmet / Triple-riding     │
                               │   • OCR Plate Reader (99.4%)   │
                               │   • Emergency Vehicle CLIP     │
                               └──────────────┬─────────────────┘
                                              │
                   ┌──────────────────────────┴──────────────────────────┐
                   ▼                                                     ▼
      Confidence >= Threshold                               Confidence < Threshold
     [AUTOMATED E-CHALLAN]                                   [HUMAN REVIEW QUEUE]
           │                                                     │
           ▼                                                     ▼
┌───────────────────────┐                             ┌───────────────────────┐
│ Challans Operations   │                             │ Verification Portal   │
│ • Legal MVA Section   │                             │ • Multi-angle Zoom    │
│ • High-Res Crop Proof │                             │ • 1-Click Approve     │
│ • Fine Calculation    │                             │ • False Alert Reject  │
└──────────┬────────────┘                             └──────────┬────────────┘
           │                                                     │
           └──────────────────────────┬──────────────────────────┘
                                      ▼
                        ┌───────────────────────────┐
                        │   TraffiSense Dashboard   │
                        │   Analytics, 3D Twin &    │
                        │   Signal Control Telemetry│
                        └───────────────────────────┘
```

---

## ✦ Dashboard Features & Modules

### 1. 📊 Central Operations Overview (`/dashboard`)
- Live violation feed tracking helmet infractions, triple riders, red light runners, and speeding.
- Real-time infraction rate charts, peak hour heatmaps, and camera health telemetry.

### 2. 📑 Official E-Challan Registry (`/challans`)
- Motor Vehicles Act section mapping (Sec 129, Sec 128, Sec 112).
- Automatic penalty computation, vehicle registration search, and PDF challan generation.

### 3. 🔍 Evidence Inspection Console (`/evidence`)
- High-resolution cropped license plates and rider bounding boxes.
- Temporal timeline scrubbing showing vehicle trajectory before and after the violation.

### 4. ⚖️ Human-in-the-Loop Review Portal (`/review`)
- Dedicated triage desk for low-confidence inferences.
- Side-by-side comparison of automated bounding boxes with manual override controls.

### 5. 🚦 3D Digital Twin & PRAVAH Controller (`/twin` & `/signal-sim`)
- Integrated interactive 3D WebGL junction simulation.
- Real-time density-driven adaptive traffic signal timing comparing fixed-time cycles against PRAVAH algorithms.

### 6. 🛣️ Lane Estimation & Video Calibration (`/lanes` & `/video-guide`)
- Virtual stop line calibration and lane direction mapping.
- Camera mounting guides for perspective distortion correction.

---

## ✦ Technology Stack

| Domain | Technology | Purpose |
|:---|:---|:---|
| **Frontend Framework** | [React 18](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/) | Reactive state management, strict typing |
| **Build Tool** | [Vite](https://vitejs.dev/) | Fast development server and optimized rollup packaging |
| **Styling** | [Tailwind CSS](https://tailwindcss.com/) + Custom CSS | Glassmorphism dark HUD interface |
| **Icons & UI** | [Lucide React](https://lucide.dev/) | Clean operational iconography |
| **3D Integration** | [Three.js](https://threejs.org/) | Embedded WebGL digital twin viewport |
| **Deployment** | [Vercel](https://vercel.com/) | Edge cloud static CDN deployment |

---

## ✦ Getting Started Locally

### Prerequisites
- Node.js 18+ (Node 20+ recommended)
- npm or yarn

### 1. Clone & Install
```bash
git clone https://github.com/temp-pie1207/traffisense-dashboard.git
cd traffisense-dashboard
npm install
```

### 2. Run Development Server
```bash
npm run dev
```
Open **`http://localhost:5173`** in your browser.

### 3. Production Build
```bash
npm run build
```

---

## ✦ Live Deployments

- **Production Dashboard**: [https://traffisense-dashboard.vercel.app](https://traffisense-dashboard.vercel.app)
- **3D Digital Twin Simulator**: [https://pravah-3d-simulator.vercel.app](https://pravah-3d-simulator.vercel.app)

---

## ✦ Author & Maintainer

**Naman Kashyap**
- 🐙 GitHub: [@temp-pie1207](https://github.com/temp-pie1207)
- 🌐 Echo Portfolio: [naman-portfolio-theta.vercel.app](https://naman-portfolio-theta.vercel.app)
- 💼 Davies Portfolio: [davies-ten.vercel.app](https://davies-ten.vercel.app)
- 💻 LeetCode: [Naman_1207](https://leetcode.com/u/Naman_1207/)
- 📧 Email: [namankashyap484@gmail.com](mailto:namankashyap484@gmail.com)

---

## ✦ License

This project is licensed under the [MIT License](LICENSE).
