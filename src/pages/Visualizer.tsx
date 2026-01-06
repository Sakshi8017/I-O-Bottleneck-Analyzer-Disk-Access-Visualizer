import { useState, useEffect } from 'react';
import { 
  Activity, 
  AlertTriangle,
  CheckCircle,
  RefreshCw,
  HardDrive,
  Cpu,
  TrendingUp,
  TrendingDown
} from 'lucide-react';
import { SectionHeader } from '@/components/SectionHeader';
import { Button } from '@/components/ui/button';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  AreaChart,
  Area,
  BarChart,
  Bar,
} from 'recharts';

// Simulated data generator
const generateDataPoint = (prev: number, min: number, max: number, volatility: number = 0.3) => {
  const change = (Math.random() - 0.5) * 2 * volatility * (max - min);
  return Math.max(min, Math.min(max, prev + change));
};

const Visualizer = () => {
  const [isRunning, setIsRunning] = useState(true);
  const [throughputData, setThroughputData] = useState<Array<{ time: string; read: number; write: number }>>([]);
  const [iowaitData, setIowaitData] = useState<Array<{ time: string; value: number }>>([]);
  const [utilizationData, setUtilizationData] = useState<Array<{ time: string; value: number }>>([]);
  const [currentMetrics, setCurrentMetrics] = useState({
    readThroughput: 125,
    writeThroughput: 85,
    iowait: 8,
    utilization: 65,
  });
  const [alerts, setAlerts] = useState<Array<{ id: number; message: string; severity: 'warning' | 'critical' | 'info' }>>([]);

  useEffect(() => {
    if (!isRunning) return;

    const interval = setInterval(() => {
      const now = new Date();
      const timeStr = now.toLocaleTimeString('en-US', { hour12: false });

      // Generate new metrics
      const newRead = generateDataPoint(currentMetrics.readThroughput, 20, 250);
      const newWrite = generateDataPoint(currentMetrics.writeThroughput, 10, 180);
      const newIowait = generateDataPoint(currentMetrics.iowait, 0, 30, 0.4);
      const newUtil = generateDataPoint(currentMetrics.utilization, 20, 100);

      setCurrentMetrics({
        readThroughput: newRead,
        writeThroughput: newWrite,
        iowait: newIowait,
        utilization: newUtil,
      });

      // Update chart data
      setThroughputData((prev) => {
        const updated = [...prev, { time: timeStr, read: newRead, write: newWrite }];
        return updated.slice(-20);
      });

      setIowaitData((prev) => {
        const updated = [...prev, { time: timeStr, value: newIowait }];
        return updated.slice(-20);
      });

      setUtilizationData((prev) => {
        const updated = [...prev, { time: timeStr, value: newUtil }];
        return updated.slice(-20);
      });

      // Generate alerts based on thresholds
      if (newIowait > 15 && Math.random() > 0.7) {
        setAlerts((prev) => [
          { id: Date.now(), message: `High I/O Wait: ${newIowait.toFixed(1)}%`, severity: newIowait > 20 ? 'critical' : 'warning' },
          ...prev.slice(0, 4),
        ]);
      }

      if (newUtil > 85 && Math.random() > 0.7) {
        setAlerts((prev) => [
          { id: Date.now(), message: `Disk utilization high: ${newUtil.toFixed(1)}%`, severity: 'warning' },
          ...prev.slice(0, 4),
        ]);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [isRunning, currentMetrics]);

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <SectionHeader
          title="Live Demo & Visualizer"
          subtitle="Real-time simulation of disk I/O metrics with bottleneck detection and alerts"
          icon={Activity}
          badge="Interactive Demo"
        />

        {/* Controls */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <Button
            variant={isRunning ? 'destructive' : 'glow'}
            onClick={() => setIsRunning(!isRunning)}
          >
            {isRunning ? (
              <>
                <RefreshCw className="w-4 h-4 animate-spin" />
                Stop Simulation
              </>
            ) : (
              <>
                <Activity className="w-4 h-4" />
                Start Simulation
              </>
            )}
          </Button>
        </div>

        {/* Metric Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <MetricCard
            title="Read Throughput"
            value={`${currentMetrics.readThroughput.toFixed(1)} MB/s`}
            icon={TrendingUp}
            color="primary"
          />
          <MetricCard
            title="Write Throughput"
            value={`${currentMetrics.writeThroughput.toFixed(1)} MB/s`}
            icon={TrendingDown}
            color="accent"
          />
          <MetricCard
            title="CPU I/O Wait"
            value={`${currentMetrics.iowait.toFixed(1)}%`}
            icon={Cpu}
            color={currentMetrics.iowait > 15 ? 'warning' : 'success'}
            warning={currentMetrics.iowait > 15}
          />
          <MetricCard
            title="Disk Utilization"
            value={`${currentMetrics.utilization.toFixed(1)}%`}
            icon={HardDrive}
            color={currentMetrics.utilization > 85 ? 'warning' : 'success'}
            warning={currentMetrics.utilization > 85}
          />
        </div>

        {/* Charts Grid */}
        <div className="grid lg:grid-cols-2 gap-6 mb-8">
          {/* Throughput Chart */}
          <div className="glass-card p-6">
            <h3 className="text-lg font-semibold mb-4">Disk Throughput (MB/s)</h3>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={throughputData}>
                  <defs>
                    <linearGradient id="readGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.3} />
                      <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0} />
                    </linearGradient>
                    <linearGradient id="writeGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="hsl(var(--accent))" stopOpacity={0.3} />
                      <stop offset="95%" stopColor="hsl(var(--accent))" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="time" stroke="hsl(var(--muted-foreground))" fontSize={10} />
                  <YAxis stroke="hsl(var(--muted-foreground))" fontSize={10} />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: 'hsl(var(--card))',
                      border: '1px solid hsl(var(--border))',
                      borderRadius: '8px',
                    }}
                  />
                  <Area type="monotone" dataKey="read" stroke="hsl(var(--primary))" fill="url(#readGradient)" strokeWidth={2} name="Read" />
                  <Area type="monotone" dataKey="write" stroke="hsl(var(--accent))" fill="url(#writeGradient)" strokeWidth={2} name="Write" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
            <div className="flex justify-center gap-6 mt-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-primary" />
                <span className="text-sm text-muted-foreground">Read</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-accent" />
                <span className="text-sm text-muted-foreground">Write</span>
              </div>
            </div>
          </div>

          {/* I/O Wait Chart */}
          <div className="glass-card p-6">
            <h3 className="text-lg font-semibold mb-4">CPU I/O Wait (%)</h3>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={iowaitData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="time" stroke="hsl(var(--muted-foreground))" fontSize={10} />
                  <YAxis stroke="hsl(var(--muted-foreground))" fontSize={10} domain={[0, 30]} />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: 'hsl(var(--card))',
                      border: '1px solid hsl(var(--border))',
                      borderRadius: '8px',
                    }}
                  />
                  {/* Threshold line */}
                  <Line
                    type="monotone"
                    dataKey={() => 15}
                    stroke="hsl(var(--warning))"
                    strokeDasharray="5 5"
                    dot={false}
                    name="Threshold"
                  />
                  <Line
                    type="monotone"
                    dataKey="value"
                    stroke="hsl(var(--chart-2))"
                    strokeWidth={2}
                    dot={false}
                    name="I/O Wait"
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
            <p className="text-xs text-muted-foreground text-center mt-2">
              Dashed line: Warning threshold (15%)
            </p>
          </div>

          {/* Disk Utilization */}
          <div className="glass-card p-6">
            <h3 className="text-lg font-semibold mb-4">Disk Utilization (%)</h3>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={utilizationData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="time" stroke="hsl(var(--muted-foreground))" fontSize={10} />
                  <YAxis stroke="hsl(var(--muted-foreground))" fontSize={10} domain={[0, 100]} />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: 'hsl(var(--card))',
                      border: '1px solid hsl(var(--border))',
                      borderRadius: '8px',
                    }}
                  />
                  <Bar
                    dataKey="value"
                    fill="hsl(var(--chart-3))"
                    radius={[4, 4, 0, 0]}
                    name="Utilization"
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Alerts Panel */}
          <div className="glass-card p-6">
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-warning" />
              Bottleneck Alerts
            </h3>
            <div className="space-y-3 max-h-64 overflow-y-auto">
              {alerts.length === 0 ? (
                <div className="flex items-center gap-2 p-4 rounded-lg bg-success/10 text-success">
                  <CheckCircle className="w-5 h-5" />
                  <span>No active alerts. System performing normally.</span>
                </div>
              ) : (
                alerts.map((alert) => (
                  <div
                    key={alert.id}
                    className={`flex items-center gap-3 p-3 rounded-lg ${
                      alert.severity === 'critical'
                        ? 'bg-destructive/10 border border-destructive/30'
                        : alert.severity === 'warning'
                        ? 'bg-warning/10 border border-warning/30'
                        : 'bg-info/10 border border-info/30'
                    }`}
                  >
                    <AlertTriangle
                      className={`w-4 h-4 ${
                        alert.severity === 'critical'
                          ? 'text-destructive'
                          : alert.severity === 'warning'
                          ? 'text-warning'
                          : 'text-info'
                      }`}
                    />
                    <span className="text-sm">{alert.message}</span>
                    <span
                      className={`ml-auto text-xs px-2 py-0.5 rounded-full ${
                        alert.severity === 'critical'
                          ? 'bg-destructive/20 text-destructive'
                          : alert.severity === 'warning'
                          ? 'bg-warning/20 text-warning'
                          : 'bg-info/20 text-info'
                      }`}
                    >
                      {alert.severity.toUpperCase()}
                    </span>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>

        {/* Info Box */}
        <div className="glass-card p-6">
          <h3 className="font-semibold mb-3">About This Demo</h3>
          <p className="text-muted-foreground text-sm">
            This is a <strong className="text-foreground">simulated visualization</strong> of disk I/O metrics. In a real implementation, data would be collected from Linux system utilities like <code className="px-1.5 py-0.5 rounded bg-muted font-mono text-xs">iostat</code> and <code className="px-1.5 py-0.5 rounded bg-muted font-mono text-xs">vmstat</code>. The charts demonstrate how throughput, I/O wait, and utilization metrics would be displayed in real-time, with automatic bottleneck detection when values exceed defined thresholds.
          </p>
        </div>
      </div>
    </div>
  );
};

// Metric Card Component
interface MetricCardProps {
  title: string;
  value: string;
  icon: React.ElementType;
  color: 'primary' | 'accent' | 'success' | 'warning';
  warning?: boolean;
}

const MetricCard = ({ title, value, icon: Icon, color, warning }: MetricCardProps) => {
  const colorClasses = {
    primary: 'bg-primary/10 text-primary border-primary/20',
    accent: 'bg-accent/10 text-accent border-accent/20',
    success: 'bg-success/10 text-success border-success/20',
    warning: 'bg-warning/10 text-warning border-warning/20',
  };

  return (
    <div className={`glass-card p-4 border ${warning ? 'border-warning/50 animate-pulse-glow' : 'border-border'}`}>
      <div className="flex items-center gap-3">
        <div className={`p-2 rounded-lg ${colorClasses[color]}`}>
          <Icon className="w-5 h-5" />
        </div>
        <div>
          <p className="text-xs text-muted-foreground">{title}</p>
          <p className="text-lg font-bold">{value}</p>
        </div>
      </div>
    </div>
  );
};

export default Visualizer;
