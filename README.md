# IO Insight Quest - I/O Bottleneck Analyzer

## Project Overview

IO Insight Quest is an interactive disk I/O performance visualization dashboard that uses simulated metrics to demonstrate throughput, latency, disk utilization and potential I/O bottlenecks. It helps students understand operating system I/O concepts through visual analysis.

## 📌 Project Status

- **Status:** Completed Prototype
- **Data Source:** Simulated Disk I/O Metrics
- **Deployment:** Local Development

This project uses simulated data to demonstrate
disk I/O performance visualization and bottleneck
analysis. It does not currently collect live disk
metrics from an operating system.


## ✨ Key Features

- Interactive disk I/O performance dashboard
- Visualization of disk throughput and latency
- Disk utilization analysis using simulated metrics
- Queue and performance trend visualization
- CPU I/O wait analysis demonstration
- Graphical representation of potential bottlenecks
- Interactive charts for understanding system performance


## Features

- **Real-time Monitoring**: Continuous collection of disk I/O metrics using `iostat`, `vmstat`, and `/proc` filesystem.
- **Bottleneck Detection**: Automated identification of I/O bottlenecks using threshold-based analysis.
- **Visual Dashboard**: Interactive charts for throughput, latency, and utilization.
- **CPU I/O Wait Analysis**: Track CPU time spent waiting for I/O operations.
- **DSA Implementation**: Practical application of queues, priority queues, sliding windows, and graphs.

## Technologies Used

- **Frontend**: React, TypeScript, Vite
- **Styling**: Tailwind CSS, shadcn-ui
- **Icons**: Lucide React
- **Charts**: Recharts

## Getting Started

### Prerequisites

- Node.js & npm

### Installation

1. Clone the repository:
   ```sh
  git clone https://github.com/Sakshi8017/I-O-Bottleneck-Analyzer-Disk-Access-Visualizer.git
   ```

2. Navigate to the project directory:
   ```sh
   cd I-O-Bottleneck-Analyzer-Disk-Access-Visualizer
   ```

3. Install dependencies:
   ```sh
   npm install
   ```

4. Start the development server:
   ```sh
   npm run dev
   ```

