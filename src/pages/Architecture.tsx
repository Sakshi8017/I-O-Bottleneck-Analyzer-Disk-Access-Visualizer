import { 
  Layers, 
  HardDrive, 
  Cpu, 
  Database, 
  BarChart3,
  ArrowDown,
  Monitor,
  Server,
  FileCode,
  Terminal
} from 'lucide-react';
import { SectionHeader } from '@/components/SectionHeader';
import { DiagramBox } from '@/components/DiagramBox';

const Architecture = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <SectionHeader
          title="System Architecture"
          subtitle="A layered architecture showing how the I/O Bottleneck Analyzer collects, processes, and visualizes disk performance data"
          icon={Layers}
          badge="Architecture Overview"
        />

        {/* Main Architecture Diagram */}
        <section className="mb-16">
          <div className="glass-card p-8 md:p-12">
            <h2 className="text-2xl font-bold mb-8 text-center">Layered System Architecture</h2>
            
            <div className="max-w-4xl mx-auto space-y-6">
              {/* Layer 1: Visualization */}
              <div className="relative">
                <div className="p-6 rounded-xl bg-gradient-to-r from-primary/20 to-accent/20 border border-primary/30">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-lg bg-primary/20">
                      <Monitor className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-bold">Visualization Layer</h3>
                    <span className="ml-auto text-xs bg-primary/20 px-3 py-1 rounded-full text-primary">React + Recharts</span>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    <div className="p-3 rounded-lg bg-card/50 text-center">
                      <BarChart3 className="w-5 h-5 text-primary mx-auto mb-1" />
                      <span className="text-xs">Throughput Charts</span>
                    </div>
                    <div className="p-3 rounded-lg bg-card/50 text-center">
                      <Cpu className="w-5 h-5 text-accent mx-auto mb-1" />
                      <span className="text-xs">CPU I/O Wait</span>
                    </div>
                    <div className="p-3 rounded-lg bg-card/50 text-center">
                      <HardDrive className="w-5 h-5 text-warning mx-auto mb-1" />
                      <span className="text-xs">Disk Utilization</span>
                    </div>
                    <div className="p-3 rounded-lg bg-card/50 text-center">
                      <Database className="w-5 h-5 text-success mx-auto mb-1" />
                      <span className="text-xs">Alert Dashboard</span>
                    </div>
                  </div>
                </div>
                <div className="absolute left-1/2 -bottom-6 transform -translate-x-1/2">
                  <ArrowDown className="w-6 h-6 text-muted-foreground" />
                </div>
              </div>

              {/* Layer 2: Processing */}
              <div className="relative pt-4">
                <div className="p-6 rounded-xl bg-secondary/50 border border-border">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-lg bg-accent/20">
                      <Server className="w-6 h-6 text-accent" />
                    </div>
                    <h3 className="text-lg font-bold">Processing Layer</h3>
                    <span className="ml-auto text-xs bg-accent/20 px-3 py-1 rounded-full text-accent">DSA Algorithms</span>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    <div className="p-3 rounded-lg bg-card/50 text-center">
                      <span className="text-xs font-mono text-primary">Queue</span>
                      <p className="text-xs text-muted-foreground mt-1">Request buffering</p>
                    </div>
                    <div className="p-3 rounded-lg bg-card/50 text-center">
                      <span className="text-xs font-mono text-accent">Sliding Window</span>
                      <p className="text-xs text-muted-foreground mt-1">Avg calculation</p>
                    </div>
                    <div className="p-3 rounded-lg bg-card/50 text-center">
                      <span className="text-xs font-mono text-warning">Priority Queue</span>
                      <p className="text-xs text-muted-foreground mt-1">Alert ranking</p>
                    </div>
                    <div className="p-3 rounded-lg bg-card/50 text-center">
                      <span className="text-xs font-mono text-success">Graph</span>
                      <p className="text-xs text-muted-foreground mt-1">Dependency map</p>
                    </div>
                  </div>
                </div>
                <div className="absolute left-1/2 -bottom-6 transform -translate-x-1/2">
                  <ArrowDown className="w-6 h-6 text-muted-foreground" />
                </div>
              </div>

              {/* Layer 3: Data Collection */}
              <div className="relative pt-4">
                <div className="p-6 rounded-xl bg-muted/50 border border-border">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-lg bg-warning/20">
                      <FileCode className="w-6 h-6 text-warning" />
                    </div>
                    <h3 className="text-lg font-bold">Data Collection Layer</h3>
                    <span className="ml-auto text-xs bg-warning/20 px-3 py-1 rounded-full text-warning">Linux Tools</span>
                  </div>
                  <div className="grid grid-cols-3 gap-3">
                    <div className="p-3 rounded-lg bg-card/50 text-center">
                      <Terminal className="w-5 h-5 text-warning mx-auto mb-1" />
                      <span className="text-xs font-mono">iostat</span>
                    </div>
                    <div className="p-3 rounded-lg bg-card/50 text-center">
                      <Terminal className="w-5 h-5 text-warning mx-auto mb-1" />
                      <span className="text-xs font-mono">vmstat</span>
                    </div>
                    <div className="p-3 rounded-lg bg-card/50 text-center">
                      <Terminal className="w-5 h-5 text-warning mx-auto mb-1" />
                      <span className="text-xs font-mono">/proc/diskstats</span>
                    </div>
                  </div>
                </div>
                <div className="absolute left-1/2 -bottom-6 transform -translate-x-1/2">
                  <ArrowDown className="w-6 h-6 text-muted-foreground" />
                </div>
              </div>

              {/* Layer 4: Linux Kernel */}
              <div className="pt-4">
                <div className="p-6 rounded-xl bg-gradient-to-r from-foreground/10 to-foreground/5 border border-foreground/20">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-lg bg-foreground/10">
                      <HardDrive className="w-6 h-6 text-foreground" />
                    </div>
                    <h3 className="text-lg font-bold">Linux Kernel</h3>
                    <span className="ml-auto text-xs bg-foreground/10 px-3 py-1 rounded-full text-foreground">System Level</span>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    <div className="p-3 rounded-lg bg-card/30 text-center">
                      <span className="text-xs">Block I/O Layer</span>
                    </div>
                    <div className="p-3 rounded-lg bg-card/30 text-center">
                      <span className="text-xs">I/O Scheduler</span>
                    </div>
                    <div className="p-3 rounded-lg bg-card/30 text-center">
                      <span className="text-xs">Device Drivers</span>
                    </div>
                    <div className="p-3 rounded-lg bg-card/30 text-center">
                      <span className="text-xs">Disk Hardware</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Component Details */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-8">Component Details</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Data Flow */}
            <div className="glass-card p-6">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <Database className="w-5 h-5 text-primary" />
                Data Flow
              </h3>
              <ol className="space-y-3">
                {[
                  'Linux kernel tracks all disk I/O operations',
                  'System tools (iostat, vmstat) read /proc filesystem',
                  'Collection layer parses raw data into structured format',
                  'Processing layer applies DSA for analysis',
                  'Visualization layer renders interactive charts',
                  'Alert system triggers on threshold breach'
                ].map((step, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-primary/20 text-primary text-sm flex items-center justify-center shrink-0 mt-0.5">
                      {i + 1}
                    </span>
                    <span className="text-muted-foreground text-sm">{step}</span>
                  </li>
                ))}
              </ol>
            </div>

            {/* Key Metrics */}
            <div className="glass-card p-6">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <BarChart3 className="w-5 h-5 text-accent" />
                Key Metrics Collected
              </h3>
              <div className="space-y-4">
                <div className="p-3 rounded-lg bg-muted/30">
                  <div className="flex justify-between items-center mb-1">
                    <span className="font-medium text-sm">Read Throughput</span>
                    <span className="text-xs text-muted-foreground">kB/s</span>
                  </div>
                  <p className="text-xs text-muted-foreground">Data read from disk per second</p>
                </div>
                <div className="p-3 rounded-lg bg-muted/30">
                  <div className="flex justify-between items-center mb-1">
                    <span className="font-medium text-sm">Write Throughput</span>
                    <span className="text-xs text-muted-foreground">kB/s</span>
                  </div>
                  <p className="text-xs text-muted-foreground">Data written to disk per second</p>
                </div>
                <div className="p-3 rounded-lg bg-muted/30">
                  <div className="flex justify-between items-center mb-1">
                    <span className="font-medium text-sm">%iowait</span>
                    <span className="text-xs text-muted-foreground">percentage</span>
                  </div>
                  <p className="text-xs text-muted-foreground">CPU time waiting for I/O</p>
                </div>
                <div className="p-3 rounded-lg bg-muted/30">
                  <div className="flex justify-between items-center mb-1">
                    <span className="font-medium text-sm">%util</span>
                    <span className="text-xs text-muted-foreground">percentage</span>
                  </div>
                  <p className="text-xs text-muted-foreground">Disk utilization percentage</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Technology Stack */}
        <section>
          <h2 className="text-2xl font-bold mb-8">Technology Stack</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <DiagramBox title="Linux" icon={Terminal} variant="primary">
              <p>Ubuntu/Debian based systems</p>
            </DiagramBox>
            <DiagramBox title="System Tools" icon={FileCode} variant="accent">
              <p>iostat, vmstat, iotop</p>
            </DiagramBox>
            <DiagramBox title="Frontend" icon={Monitor} variant="primary">
              <p>React + TypeScript</p>
            </DiagramBox>
            <DiagramBox title="Charts" icon={BarChart3} variant="accent">
              <p>Recharts library</p>
            </DiagramBox>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Architecture;
