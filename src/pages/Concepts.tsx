import { 
  Cpu, 
  HardDrive, 
  Clock, 
  Gauge, 
  Activity,
  Layers,
  ArrowRight,
  AlertCircle,
  Zap,
  Timer
} from 'lucide-react';
import { SectionHeader } from '@/components/SectionHeader';
import { ConceptCard } from '@/components/ConceptCard';

const Concepts = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <SectionHeader
          title="Operating System Concepts"
          subtitle="Understanding the fundamental concepts behind I/O bottlenecks and disk performance in operating systems"
          icon={Cpu}
          badge="Core Concepts"
        />

        {/* What is I/O Bottleneck */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
            <div className="p-2 rounded-lg bg-destructive/10">
              <AlertCircle className="w-6 h-6 text-destructive" />
            </div>
            What is an I/O Bottleneck?
          </h2>
          
          <div className="glass-card p-8 mb-8">
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              An <strong className="text-foreground">I/O bottleneck</strong> occurs when the speed of input/output operations becomes the limiting factor in system performance. When the CPU has to wait for data to be read from or written to disk, it cannot execute other instructions, leading to overall system slowdown.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="p-4 rounded-lg bg-muted/30">
                <div className="flex items-center gap-2 mb-2">
                  <HardDrive className="w-5 h-5 text-primary" />
                  <span className="font-semibold">Disk Speed</span>
                </div>
                <p className="text-sm text-muted-foreground">HDDs: ~100-150 MB/s, SSDs: ~500-5000 MB/s</p>
              </div>
              <div className="p-4 rounded-lg bg-muted/30">
                <div className="flex items-center gap-2 mb-2">
                  <Cpu className="w-5 h-5 text-accent" />
                  <span className="font-semibold">CPU Speed</span>
                </div>
                <p className="text-sm text-muted-foreground">Modern CPUs: Billions of ops/second</p>
              </div>
              <div className="p-4 rounded-lg bg-muted/30">
                <div className="flex items-center gap-2 mb-2">
                  <Clock className="w-5 h-5 text-warning" />
                  <span className="font-semibold">Speed Gap</span>
                </div>
                <p className="text-sm text-muted-foreground">CPU is 10,000x faster than disk I/O</p>
              </div>
            </div>
          </div>

          {/* Visual Diagram */}
          <div className="glass-card p-8">
            <h3 className="text-lg font-semibold mb-6">I/O Bottleneck Visualization</h3>
            <div className="flex flex-col md:flex-row items-center justify-center gap-4">
              <div className="p-6 rounded-xl bg-primary/10 border border-primary/30 text-center">
                <Cpu className="w-10 h-10 text-primary mx-auto mb-2" />
                <span className="font-medium">CPU</span>
                <p className="text-xs text-muted-foreground mt-1">Fast Processing</p>
              </div>
              <div className="flex flex-col items-center">
                <ArrowRight className="w-8 h-8 text-muted-foreground rotate-90 md:rotate-0" />
                <span className="text-xs text-muted-foreground mt-1">Request</span>
              </div>
              <div className="p-6 rounded-xl bg-destructive/10 border border-destructive/30 text-center">
                <Clock className="w-10 h-10 text-destructive mx-auto mb-2" />
                <span className="font-medium">Wait</span>
                <p className="text-xs text-muted-foreground mt-1">I/O Wait State</p>
              </div>
              <div className="flex flex-col items-center">
                <ArrowRight className="w-8 h-8 text-muted-foreground rotate-90 md:rotate-0" />
                <span className="text-xs text-muted-foreground mt-1">Access</span>
              </div>
              <div className="p-6 rounded-xl bg-warning/10 border border-warning/30 text-center">
                <HardDrive className="w-10 h-10 text-warning mx-auto mb-2" />
                <span className="font-medium">Disk</span>
                <p className="text-xs text-muted-foreground mt-1">Slow I/O</p>
              </div>
            </div>
          </div>
        </section>

        {/* CPU I/O Wait */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
            <div className="p-2 rounded-lg bg-accent/10">
              <Timer className="w-6 h-6 text-accent" />
            </div>
            CPU I/O Wait (%iowait)
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="glass-card p-6">
              <h3 className="text-lg font-semibold mb-4">Definition</h3>
              <p className="text-muted-foreground mb-4">
                <strong className="text-foreground">%iowait</strong> represents the percentage of time the CPU is idle while waiting for I/O operations to complete. It's a key indicator of I/O bottlenecks.
              </p>
              <div className="p-4 rounded-lg bg-muted/30">
                <code className="text-sm font-mono text-primary">
                  %iowait = (time waiting for I/O / total CPU time) × 100
                </code>
              </div>
            </div>
            
            <div className="glass-card p-6">
              <h3 className="text-lg font-semibold mb-4">Interpretation</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <span className="w-3 h-3 rounded-full bg-success" />
                  <span className="text-muted-foreground"><strong className="text-foreground">0-5%:</strong> Normal, no I/O issues</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-3 h-3 rounded-full bg-warning" />
                  <span className="text-muted-foreground"><strong className="text-foreground">5-15%:</strong> Moderate I/O activity</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-3 h-3 rounded-full bg-destructive" />
                  <span className="text-muted-foreground"><strong className="text-foreground">&gt;15%:</strong> Potential bottleneck</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Process States */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
            <div className="p-2 rounded-lg bg-primary/10">
              <Layers className="w-6 h-6 text-primary" />
            </div>
            Process States & Blocking
          </h2>
          
          <div className="glass-card p-8">
            <div className="grid md:grid-cols-5 gap-4 mb-8">
              {[
                { state: 'New', color: 'bg-muted', desc: 'Process created' },
                { state: 'Ready', color: 'bg-primary', desc: 'Waiting for CPU' },
                { state: 'Running', color: 'bg-success', desc: 'Executing' },
                { state: 'Blocked', color: 'bg-destructive', desc: 'Waiting for I/O' },
                { state: 'Terminated', color: 'bg-muted-foreground', desc: 'Completed' },
              ].map((item, i) => (
                <div key={i} className="text-center">
                  <div className={`w-16 h-16 ${item.color} rounded-full mx-auto mb-3 flex items-center justify-center`}>
                    <span className="text-xs font-bold text-foreground">{item.state[0]}</span>
                  </div>
                  <h4 className="font-semibold text-sm">{item.state}</h4>
                  <p className="text-xs text-muted-foreground mt-1">{item.desc}</p>
                </div>
              ))}
            </div>
            
            <div className="p-4 rounded-lg bg-destructive/10 border border-destructive/20">
              <h4 className="font-semibold text-destructive mb-2">Blocking (I/O Bound)</h4>
              <p className="text-sm text-muted-foreground">
                When a process requests I/O (e.g., reading a file), it moves to the <strong className="text-foreground">Blocked</strong> state. The CPU scheduler then switches to another process. This context switching has overhead, and if many processes are I/O bound, the system becomes bottlenecked.
              </p>
            </div>
          </div>
        </section>

        {/* Disk Scheduling */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
            <div className="p-2 rounded-lg bg-warning/10">
              <Gauge className="w-6 h-6 text-warning" />
            </div>
            Disk Scheduling Algorithms
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ConceptCard
              title="FCFS (First Come First Serve)"
              description="Requests are processed in arrival order. Simple but can lead to high seek times."
              icon={Activity}
              accentColor="primary"
            >
              <div className="text-xs font-mono text-muted-foreground mt-2">
                Queue: [53, 98, 183, 37, 122]
              </div>
            </ConceptCard>
            
            <ConceptCard
              title="SSTF (Shortest Seek Time First)"
              description="Serves the request closest to current head position. May cause starvation."
              icon={Zap}
              accentColor="accent"
            >
              <div className="text-xs font-mono text-muted-foreground mt-2">
                Selects nearest track first
              </div>
            </ConceptCard>
            
            <ConceptCard
              title="SCAN (Elevator)"
              description="Head moves in one direction serving all requests, then reverses. Fair and efficient."
              icon={HardDrive}
              accentColor="success"
            >
              <div className="text-xs font-mono text-muted-foreground mt-2">
                ← ... 37, 53, 98, 122, 183 ... →
              </div>
            </ConceptCard>
          </div>
        </section>

        {/* Throughput vs Latency */}
        <section>
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
            <div className="p-2 rounded-lg bg-success/10">
              <Activity className="w-6 h-6 text-success" />
            </div>
            Throughput vs Latency
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="glass-card p-6 border-l-4 border-l-primary">
              <h3 className="text-xl font-semibold mb-4">Throughput</h3>
              <p className="text-muted-foreground mb-4">
                The amount of data transferred per unit time. Measured in MB/s or IOPS (I/O Operations Per Second).
              </p>
              <div className="p-4 rounded-lg bg-muted/30">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm">HDD</span>
                  <span className="text-sm font-mono text-primary">~150 MB/s</span>
                </div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm">SATA SSD</span>
                  <span className="text-sm font-mono text-primary">~550 MB/s</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">NVMe SSD</span>
                  <span className="text-sm font-mono text-primary">~3500 MB/s</span>
                </div>
              </div>
            </div>
            
            <div className="glass-card p-6 border-l-4 border-l-accent">
              <h3 className="text-xl font-semibold mb-4">Latency</h3>
              <p className="text-muted-foreground mb-4">
                The time delay between requesting data and receiving it. Lower is better for responsiveness.
              </p>
              <div className="p-4 rounded-lg bg-muted/30">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm">HDD (seek)</span>
                  <span className="text-sm font-mono text-accent">~5-10 ms</span>
                </div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm">SATA SSD</span>
                  <span className="text-sm font-mono text-accent">~0.1 ms</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">NVMe SSD</span>
                  <span className="text-sm font-mono text-accent">~0.02 ms</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="glass-card p-6 mt-6">
            <h4 className="font-semibold mb-3">Key Insight</h4>
            <p className="text-muted-foreground">
              High throughput doesn't always mean low latency. A system can have high bandwidth for sequential reads but poor latency for random access. For databases and interactive applications, <strong className="text-foreground">latency is often more critical</strong> than raw throughput.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Concepts;
