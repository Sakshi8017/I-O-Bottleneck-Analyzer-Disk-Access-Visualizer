# IO Insight Quest - I/O Bottleneck Analyzer

## Project Overview

**IO Insight Quest** is a comprehensive tool for analyzing disk I/O performance bottlenecks in Linux systems. It leverages real-time monitoring and visualization to help system administrators and students understand I/O behavior in operating systems.

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
   git clone <YOUR_GIT_URL>
   ```

2. Navigate to the project directory:
   ```sh
   cd io-insight-quest
   ```

3. Install dependencies:
   ```sh
   npm install
   ```

4. Start the development server:
   ```sh
   npm run dev
   ```

