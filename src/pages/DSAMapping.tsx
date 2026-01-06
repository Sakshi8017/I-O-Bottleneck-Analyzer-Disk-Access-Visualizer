import { 
  Network, 
  Layers,
  ArrowRight,
  AlertTriangle,
  Clock,
  Activity,
  GitBranch
} from 'lucide-react';
import { SectionHeader } from '@/components/SectionHeader';

const DSAMapping = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <SectionHeader
          title="DSA to OS Problem Mapping"
          subtitle="Explicit mapping of data structures to solve I/O monitoring and bottleneck detection problems"
          icon={Network}
          badge="Data Structures"
        />

        {/* Queue */}
        <section className="mb-16">
          <div className="glass-card p-8">
            <div className="flex flex-col lg:flex-row gap-8">
              <div className="lg:w-1/2">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Layers className="w-6 h-6 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold">Queue (FIFO)</h2>
                </div>
                
                <h3 className="text-lg font-semibold text-primary mb-3">OS Problem: I/O Request Buffer</h3>
                <p className="text-muted-foreground mb-4">
                  Disk I/O requests arrive asynchronously and need to be processed in order. A queue maintains the FIFO ordering of incoming disk operations.
                </p>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 text-primary mt-1 shrink-0" />
                    <span className="text-sm text-muted-foreground">
                      <strong className="text-foreground">Enqueue:</strong> New I/O request arrives → add to queue
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 text-primary mt-1 shrink-0" />
                    <span className="text-sm text-muted-foreground">
                      <strong className="text-foreground">Dequeue:</strong> Disk ready → process oldest request
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 text-primary mt-1 shrink-0" />
                    <span className="text-sm text-muted-foreground">
                      <strong className="text-foreground">Queue Length:</strong> Indicator of backlog/bottleneck
                    </span>
                  </div>
                </div>

                <div className="p-4 rounded-lg bg-muted/30">
                  <code className="text-sm font-mono text-primary">
                    Time Complexity: O(1) for enqueue/dequeue
                  </code>
                </div>
              </div>
              
              <div className="lg:w-1/2">
                <div className="p-6 rounded-xl bg-card border border-border">
                  <h4 className="text-sm font-semibold mb-4 text-muted-foreground">Queue Visualization</h4>
                  <div className="flex flex-col items-center gap-2">
                    <div className="text-xs text-muted-foreground mb-2">← Dequeue (Process)</div>
                    <div className="flex items-center gap-2">
                      {['R1', 'R2', 'R3', 'R4', 'R5'].map((req, i) => (
                        <div
                          key={i}
                          className={`w-12 h-12 rounded-lg flex items-center justify-center font-mono text-sm
                            ${i === 0 ? 'bg-success/20 border-2 border-success text-success' : 'bg-primary/10 border border-primary/30 text-primary'}`}
                        >
                          {req}
                        </div>
                      ))}
                    </div>
                    <div className="text-xs text-muted-foreground mt-2">Enqueue (New Request) →</div>
                  </div>
                  <div className="mt-4 p-3 rounded bg-muted/30 text-xs text-muted-foreground">
                    Front → [R1, R2, R3, R4, R5] ← Rear
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Sliding Window */}
        <section className="mb-16">
          <div className="glass-card p-8">
            <div className="flex flex-col lg:flex-row gap-8">
              <div className="lg:w-1/2">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-accent/10">
                    <Clock className="w-6 h-6 text-accent" />
                  </div>
                  <h2 className="text-2xl font-bold">Sliding Window</h2>
                </div>
                
                <h3 className="text-lg font-semibold text-accent mb-3">OS Problem: Moving Average Calculation</h3>
                <p className="text-muted-foreground mb-4">
                  To smooth out spikes and calculate average throughput/latency over a time window (e.g., last 10 seconds), we use a sliding window approach.
                </p>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 text-accent mt-1 shrink-0" />
                    <span className="text-sm text-muted-foreground">
                      <strong className="text-foreground">Window Size:</strong> N data points (e.g., last 10 readings)
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 text-accent mt-1 shrink-0" />
                    <span className="text-sm text-muted-foreground">
                      <strong className="text-foreground">Slide:</strong> Add new value, remove oldest
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 text-accent mt-1 shrink-0" />
                    <span className="text-sm text-muted-foreground">
                      <strong className="text-foreground">Use Case:</strong> Detect sustained high I/O vs temporary spike
                    </span>
                  </div>
                </div>

                <div className="p-4 rounded-lg bg-muted/30">
                  <code className="text-sm font-mono text-accent">
                    Average = Sum of window / Window size
                  </code>
                </div>
              </div>
              
              <div className="lg:w-1/2">
                <div className="p-6 rounded-xl bg-card border border-border">
                  <h4 className="text-sm font-semibold mb-4 text-muted-foreground">Sliding Window (size=5)</h4>
                  <div className="space-y-3">
                    {[
                      { data: [45, 52, 48, 55, 50], current: true, avg: 50 },
                      { data: [52, 48, 55, 50, 60], current: false, avg: 53 },
                      { data: [48, 55, 50, 60, 58], current: false, avg: 54.2 },
                    ].map((window, i) => (
                      <div key={i} className={`flex items-center gap-2 p-2 rounded-lg ${window.current ? 'bg-accent/10' : 'bg-muted/20'}`}>
                        <span className="text-xs text-muted-foreground w-8">t{i}:</span>
                        <div className="flex gap-1">
                          {window.data.map((val, j) => (
                            <span
                              key={j}
                              className={`px-2 py-1 rounded text-xs font-mono
                                ${window.current ? 'bg-accent/20 text-accent' : 'bg-muted text-muted-foreground'}`}
                            >
                              {val}
                            </span>
                          ))}
                        </div>
                        <span className="ml-auto text-xs font-mono text-foreground">avg: {window.avg}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Priority Queue */}
        <section className="mb-16">
          <div className="glass-card p-8">
            <div className="flex flex-col lg:flex-row gap-8">
              <div className="lg:w-1/2">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-warning/10">
                    <AlertTriangle className="w-6 h-6 text-warning" />
                  </div>
                  <h2 className="text-2xl font-bold">Priority Queue (Heap)</h2>
                </div>
                
                <h3 className="text-lg font-semibold text-warning mb-3">OS Problem: Alert Prioritization</h3>
                <p className="text-muted-foreground mb-4">
                  When multiple bottleneck alerts occur simultaneously, we need to prioritize them by severity. A max-heap ensures critical alerts are handled first.
                </p>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 text-warning mt-1 shrink-0" />
                    <span className="text-sm text-muted-foreground">
                      <strong className="text-foreground">Insert:</strong> Add alert with severity score
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 text-warning mt-1 shrink-0" />
                    <span className="text-sm text-muted-foreground">
                      <strong className="text-foreground">Extract-Max:</strong> Get highest priority alert
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 text-warning mt-1 shrink-0" />
                    <span className="text-sm text-muted-foreground">
                      <strong className="text-foreground">Severity:</strong> Critical &gt; High &gt; Medium &gt; Low
                    </span>
                  </div>
                </div>

                <div className="p-4 rounded-lg bg-muted/30">
                  <code className="text-sm font-mono text-warning">
                    Time: O(log n) insert, O(1) peek, O(log n) extract
                  </code>
                </div>
              </div>
              
              <div className="lg:w-1/2">
                <div className="p-6 rounded-xl bg-card border border-border">
                  <h4 className="text-sm font-semibold mb-4 text-muted-foreground">Max-Heap (Alert Queue)</h4>
                  <div className="flex flex-col items-center">
                    {/* Heap visualization */}
                    <div className="w-16 h-16 rounded-lg bg-destructive/20 border-2 border-destructive flex items-center justify-center mb-2">
                      <div className="text-center">
                        <span className="text-xs font-bold text-destructive">95</span>
                        <p className="text-[10px] text-destructive">CRITICAL</p>
                      </div>
                    </div>
                    <div className="flex gap-8 mb-2">
                      <div className="w-14 h-14 rounded-lg bg-warning/20 border border-warning flex items-center justify-center">
                        <div className="text-center">
                          <span className="text-xs font-bold text-warning">75</span>
                          <p className="text-[10px] text-warning">HIGH</p>
                        </div>
                      </div>
                      <div className="w-14 h-14 rounded-lg bg-warning/20 border border-warning flex items-center justify-center">
                        <div className="text-center">
                          <span className="text-xs font-bold text-warning">70</span>
                          <p className="text-[10px] text-warning">HIGH</p>
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-12 h-12 rounded-lg bg-info/20 border border-info flex items-center justify-center">
                        <span className="text-xs text-info">50</span>
                      </div>
                      <div className="w-12 h-12 rounded-lg bg-info/20 border border-info flex items-center justify-center">
                        <span className="text-xs text-info">45</span>
                      </div>
                      <div className="w-12 h-12 rounded-lg bg-success/20 border border-success flex items-center justify-center">
                        <span className="text-xs text-success">30</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Graph */}
        <section>
          <div className="glass-card p-8">
            <div className="flex flex-col lg:flex-row gap-8">
              <div className="lg:w-1/2">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-success/10">
                    <GitBranch className="w-6 h-6 text-success" />
                  </div>
                  <h2 className="text-2xl font-bold">Graph</h2>
                </div>
                
                <h3 className="text-lg font-semibold text-success mb-3">OS Problem: Process-Disk Dependency</h3>
                <p className="text-muted-foreground mb-4">
                  Modeling relationships between processes and disk devices as a bipartite graph helps identify which processes are causing I/O on which disks.
                </p>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 text-success mt-1 shrink-0" />
                    <span className="text-sm text-muted-foreground">
                      <strong className="text-foreground">Nodes:</strong> Processes (P) and Disk devices (D)
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 text-success mt-1 shrink-0" />
                    <span className="text-sm text-muted-foreground">
                      <strong className="text-foreground">Edges:</strong> I/O operations between them
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 text-success mt-1 shrink-0" />
                    <span className="text-sm text-muted-foreground">
                      <strong className="text-foreground">Use:</strong> Find highest I/O contributor, detect patterns
                    </span>
                  </div>
                </div>

                <div className="p-4 rounded-lg bg-muted/30">
                  <code className="text-sm font-mono text-success">
                    BFS/DFS for traversal, Adjacency list representation
                  </code>
                </div>
              </div>
              
              <div className="lg:w-1/2">
                <div className="p-6 rounded-xl bg-card border border-border">
                  <h4 className="text-sm font-semibold mb-4 text-muted-foreground">Process-Disk I/O Graph</h4>
                  <div className="flex justify-between items-center">
                    {/* Processes */}
                    <div className="space-y-3">
                      {['mysql', 'nginx', 'rsync'].map((proc, i) => (
                        <div key={i} className="w-16 h-10 rounded-lg bg-primary/20 border border-primary/30 flex items-center justify-center">
                          <span className="text-xs font-mono text-primary">{proc}</span>
                        </div>
                      ))}
                    </div>
                    
                    {/* Edges */}
                    <div className="flex-1 px-4">
                      <svg className="w-full h-32" viewBox="0 0 100 80">
                        <line x1="0" y1="15" x2="100" y2="15" stroke="hsl(var(--primary))" strokeWidth="1" strokeDasharray="4" opacity="0.5" />
                        <line x1="0" y1="15" x2="100" y2="40" stroke="hsl(var(--primary))" strokeWidth="2" opacity="0.8" />
                        <line x1="0" y1="40" x2="100" y2="15" stroke="hsl(var(--accent))" strokeWidth="1" strokeDasharray="4" opacity="0.5" />
                        <line x1="0" y1="40" x2="100" y2="40" stroke="hsl(var(--accent))" strokeWidth="1" opacity="0.5" />
                        <line x1="0" y1="65" x2="100" y2="40" stroke="hsl(var(--success))" strokeWidth="3" opacity="1" />
                        <line x1="0" y1="65" x2="100" y2="65" stroke="hsl(var(--success))" strokeWidth="2" opacity="0.8" />
                      </svg>
                    </div>
                    
                    {/* Disks */}
                    <div className="space-y-3">
                      {['sda', 'sdb', 'nvme0'].map((disk, i) => (
                        <div key={i} className="w-16 h-10 rounded-lg bg-accent/20 border border-accent/30 flex items-center justify-center">
                          <span className="text-xs font-mono text-accent">{disk}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground text-center mt-4">
                    Edge thickness = I/O volume
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default DSAMapping;
