import { Terminal, Info, ArrowRight } from 'lucide-react';
import { SectionHeader } from '@/components/SectionHeader';
import { CodeBlock } from '@/components/CodeBlock';

const Commands = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <SectionHeader
          title="Linux Commands"
          subtitle="Essential Linux commands for monitoring disk I/O performance and detecting bottlenecks"
          icon={Terminal}
          badge="Command Reference"
        />

        {/* iostat */}
        <section className="mb-16">
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-primary/10">
                <Terminal className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h2 className="text-2xl font-bold">iostat</h2>
                <p className="text-muted-foreground">I/O Statistics Reporter</p>
              </div>
            </div>

            <p className="text-muted-foreground mb-6">
              The <code className="px-1.5 py-0.5 rounded bg-muted font-mono text-sm text-primary">iostat</code> command reports CPU and I/O statistics for devices and partitions. It's part of the <code className="px-1.5 py-0.5 rounded bg-muted font-mono text-sm">sysstat</code> package.
            </p>

            <div className="grid lg:grid-cols-2 gap-6 mb-6">
              <div>
                <h3 className="font-semibold mb-3">Basic Usage</h3>
                <CodeBlock
                  title="iostat command"
                  language="bash"
                  code={`# Install sysstat (if not installed)
sudo apt install sysstat

# Basic iostat output
iostat

# Extended stats, 2 second interval
iostat -x 2

# Show specific device
iostat -x sda 1 5`}
                />
              </div>

              <div>
                <h3 className="font-semibold mb-3">Sample Output</h3>
                <CodeBlock
                  title="iostat -x output"
                  language="text"
                  code={`Device   r/s   w/s  rkB/s  wkB/s  %util  await
sda    15.32  8.45  245.6  102.3   65.2   4.23
sdb     2.10  1.20   28.4   18.6   12.8   2.15
nvme0n1 45.6  32.1 1024.5  512.8   45.6   0.85`}
                />
              </div>
            </div>

            <div className="p-4 rounded-lg bg-muted/30">
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <Info className="w-4 h-4 text-primary" />
                Key Columns Explained
              </h4>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 text-sm">
                {[
                  { col: 'r/s', desc: 'Read operations per second' },
                  { col: 'w/s', desc: 'Write operations per second' },
                  { col: 'rkB/s', desc: 'Kilobytes read per second' },
                  { col: 'wkB/s', desc: 'Kilobytes written per second' },
                  { col: '%util', desc: 'Disk utilization percentage' },
                  { col: 'await', desc: 'Average I/O wait time (ms)' },
                ].map((item) => (
                  <div key={item.col} className="flex items-start gap-2">
                    <code className="text-primary font-mono">{item.col}</code>
                    <span className="text-muted-foreground">{item.desc}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* vmstat */}
        <section className="mb-16">
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-accent/10">
                <Terminal className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h2 className="text-2xl font-bold">vmstat</h2>
                <p className="text-muted-foreground">Virtual Memory Statistics</p>
              </div>
            </div>

            <p className="text-muted-foreground mb-6">
              The <code className="px-1.5 py-0.5 rounded bg-muted font-mono text-sm text-accent">vmstat</code> command reports information about processes, memory, paging, block I/O, traps, and CPU activity.
            </p>

            <div className="grid lg:grid-cols-2 gap-6 mb-6">
              <div>
                <h3 className="font-semibold mb-3">Basic Usage</h3>
                <CodeBlock
                  title="vmstat command"
                  language="bash"
                  code={`# Basic vmstat
vmstat

# Update every 2 seconds
vmstat 2

# Show 10 updates at 1 second interval
vmstat 1 10

# Disk statistics mode
vmstat -d`}
                />
              </div>

              <div>
                <h3 className="font-semibold mb-3">Sample Output</h3>
                <CodeBlock
                  title="vmstat 1 output"
                  language="text"
                  code={`procs -----memory----- --io-- -system-- ----cpu----
r  b   swpd   free  buff   bi   bo   in   cs us sy id wa
1  0      0 245632 82456   12   45  256  512 15  5 72  8
2  1      0 243520 82512   85  120  412  845 22  8 58 12
0  2      0 241024 82580  245  280  625 1024 18 10 52 20`}
                />
              </div>
            </div>

            <div className="p-4 rounded-lg bg-muted/30">
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <Info className="w-4 h-4 text-accent" />
                I/O Related Columns
              </h4>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
                {[
                  { col: 'bi', desc: 'Blocks received from disk (blocks/s)' },
                  { col: 'bo', desc: 'Blocks sent to disk (blocks/s)' },
                  { col: 'wa', desc: 'Time waiting for I/O (CPU %)' },
                  { col: 'b', desc: 'Processes blocked waiting for I/O' },
                ].map((item) => (
                  <div key={item.col} className="flex flex-col gap-1">
                    <code className="text-accent font-mono">{item.col}</code>
                    <span className="text-muted-foreground text-xs">{item.desc}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* iotop */}
        <section className="mb-16">
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-warning/10">
                <Terminal className="w-6 h-6 text-warning" />
              </div>
              <div>
                <h2 className="text-2xl font-bold">iotop</h2>
                <p className="text-muted-foreground">I/O Top (per-process I/O usage)</p>
              </div>
            </div>

            <p className="text-muted-foreground mb-6">
              The <code className="px-1.5 py-0.5 rounded bg-muted font-mono text-sm text-warning">iotop</code> command displays I/O usage by process, similar to how <code className="px-1.5 py-0.5 rounded bg-muted font-mono text-sm">top</code> displays CPU usage.
            </p>

            <div className="grid lg:grid-cols-2 gap-6 mb-6">
              <div>
                <h3 className="font-semibold mb-3">Basic Usage</h3>
                <CodeBlock
                  title="iotop command"
                  language="bash"
                  code={`# Install iotop
sudo apt install iotop

# Run iotop (requires root)
sudo iotop

# Only show processes doing I/O
sudo iotop -o

# Batch mode (for scripting)
sudo iotop -b -n 5`}
                />
              </div>

              <div>
                <h3 className="font-semibold mb-3">Sample Output</h3>
                <CodeBlock
                  title="iotop output"
                  language="text"
                  code={`Total DISK READ:  125.45 K/s | DISK WRITE:  85.23 K/s
  TID  PRIO  USER    DISK READ  DISK WRITE  COMMAND
  1524 be/4  mysql    95.24 K/s   45.12 K/s  mysqld
  2847 be/4  www-data 28.45 K/s   12.56 K/s  nginx
  3012 be/4  root     10.32 K/s   25.84 K/s  rsync`}
                />
              </div>
            </div>

            <div className="p-4 rounded-lg bg-warning/10 border border-warning/20">
              <h4 className="font-semibold mb-2 flex items-center gap-2 text-warning">
                <Info className="w-4 h-4" />
                Pro Tip
              </h4>
              <p className="text-sm text-muted-foreground">
                Use <code className="px-1.5 py-0.5 rounded bg-muted font-mono text-xs">iotop -o -a</code> to show accumulated I/O instead of bandwidth. This helps identify which processes have done the most I/O over time.
              </p>
            </div>
          </div>
        </section>

        {/* /proc filesystem */}
        <section>
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-success/10">
                <Terminal className="w-6 h-6 text-success" />
              </div>
              <div>
                <h2 className="text-2xl font-bold">/proc Filesystem</h2>
                <p className="text-muted-foreground">Direct kernel statistics</p>
              </div>
            </div>

            <p className="text-muted-foreground mb-6">
              The <code className="px-1.5 py-0.5 rounded bg-muted font-mono text-sm text-success">/proc</code> virtual filesystem provides direct access to kernel data structures, including disk statistics.
            </p>

            <div className="space-y-6">
              <div>
                <h3 className="font-semibold mb-3">Key Files for I/O Monitoring</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <CodeBlock
                    title="/proc/diskstats"
                    language="bash"
                    code={`# View disk statistics
cat /proc/diskstats

# Sample output:
# 8  0 sda 25698 1248 458962 12456 ...
# Fields: major minor name reads_completed 
#         reads_merged sectors_read time_reading
#         writes_completed ...`}
                  />
                  <CodeBlock
                    title="/proc/stat (CPU)"
                    language="bash"
                    code={`# View CPU statistics
cat /proc/stat | head -1

# Sample output:
# cpu  12456 125 4562 125896 856 0 45 0 0 0
# Fields: user nice system idle iowait
#         irq softirq steal guest guest_nice`}
                  />
                </div>
              </div>

              <div className="p-4 rounded-lg bg-muted/30">
                <h4 className="font-semibold mb-3">Useful One-Liners</h4>
                <div className="space-y-3">
                  {[
                    { cmd: "awk '{print $5}' /proc/stat | head -1", desc: 'Get iowait ticks from CPU stats' },
                    { cmd: "cat /proc/diskstats | grep sda", desc: 'Get statistics for sda device' },
                    { cmd: "watch -n 1 'iostat -x 1 1'", desc: 'Continuously monitor disk I/O' },
                  ].map((item, i) => (
                    <div key={i} className="flex flex-col sm:flex-row sm:items-center gap-2">
                      <code className="text-xs font-mono bg-muted px-2 py-1 rounded text-success">{item.cmd}</code>
                      <ArrowRight className="w-4 h-4 text-muted-foreground hidden sm:block" />
                      <span className="text-sm text-muted-foreground">{item.desc}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Commands;
