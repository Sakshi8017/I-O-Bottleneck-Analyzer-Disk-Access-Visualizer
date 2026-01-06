import { 
  HardDrive, 
  Cpu, 
  Activity, 
  BarChart3, 
  Target, 
  Zap,
  ArrowRight,
  AlertTriangle,
  CheckCircle2,
  BookOpen
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ConceptCard } from '@/components/ConceptCard';

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6 animate-fade-in">
              <BookOpen className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Operating Systems Mini Project</span>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-slide-up">
              <span className="gradient-text">I/O Bottleneck Analyzer</span>
              <br />
              <span className="text-foreground">&amp; Disk Access Visualizer</span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: '0.1s' }}>
              A comprehensive tool for analyzing disk I/O performance bottlenecks in Linux systems using real-time monitoring and visualization
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-4 animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <Button variant="glow" size="lg" asChild>
                <Link to="/visualizer">
                  <Activity className="w-5 h-5" />
                  Live Demo
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/concepts">
                  <Cpu className="w-5 h-5" />
                  Learn Concepts
                </Link>
              </Button>
            </div>

            {/* Tech Stack */}
            <div className="flex flex-wrap items-center justify-center gap-6 mt-12 text-muted-foreground text-sm">
              <div className="flex items-center gap-2">
                <HardDrive className="w-4 h-4 text-primary" />
                <span>Linux Kernel</span>
              </div>
              <div className="flex items-center gap-2">
                <BarChart3 className="w-4 h-4 text-accent" />
                <span>iostat / vmstat</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-warning" />
                <span>Real-time Monitoring</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Abstract Section */}
      <section className="py-16 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="glass-card p-8 md:p-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3">
                <div className="p-2 rounded-lg bg-primary/10">
                  <BookOpen className="w-6 h-6 text-primary" />
                </div>
                Abstract
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                This project presents an <strong className="text-foreground">I/O Bottleneck Analyzer and Disk Access Visualizer</strong> built on Linux. It leverages system monitoring tools like <code className="px-2 py-0.5 rounded bg-muted text-primary font-mono text-sm">iostat</code>, <code className="px-2 py-0.5 rounded bg-muted text-primary font-mono text-sm">vmstat</code>, and the <code className="px-2 py-0.5 rounded bg-muted text-primary font-mono text-sm">/proc</code> filesystem to collect real-time disk performance metrics. The tool identifies CPU I/O wait states, monitors disk utilization, and visualizes throughput patterns to detect performance bottlenecks. By applying data structures like queues, sliding windows, and priority queues, the analyzer efficiently processes and presents system metrics, helping system administrators and students understand I/O behavior in operating systems.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Statement & Objectives */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Problem Statement */}
            <div className="glass-card p-8 border-l-4 border-l-destructive">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <div className="p-2 rounded-lg bg-destructive/10">
                  <AlertTriangle className="w-6 h-6 text-destructive" />
                </div>
                Problem Statement
              </h2>
              <ul className="space-y-4 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <ArrowRight className="w-5 h-5 text-destructive mt-0.5 shrink-0" />
                  <span>Disk I/O bottlenecks are a major cause of system slowdowns but are often difficult to diagnose without proper tools.</span>
                </li>
                <li className="flex items-start gap-3">
                  <ArrowRight className="w-5 h-5 text-destructive mt-0.5 shrink-0" />
                  <span>Existing monitoring tools provide raw data but lack intuitive visualization for quick bottleneck identification.</span>
                </li>
                <li className="flex items-start gap-3">
                  <ArrowRight className="w-5 h-5 text-destructive mt-0.5 shrink-0" />
                  <span>Students often struggle to understand the connection between OS concepts and real system behavior.</span>
                </li>
              </ul>
            </div>

            {/* Objectives */}
            <div className="glass-card p-8 border-l-4 border-l-success">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <div className="p-2 rounded-lg bg-success/10">
                  <Target className="w-6 h-6 text-success" />
                </div>
                Objectives
              </h2>
              <ul className="space-y-4 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-success mt-0.5 shrink-0" />
                  <span>Build a real-time disk I/O performance monitoring tool using Linux system utilities.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-success mt-0.5 shrink-0" />
                  <span>Visualize key metrics: throughput, latency, CPU iowait, and disk utilization.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-success mt-0.5 shrink-0" />
                  <span>Implement bottleneck detection algorithms using appropriate data structures.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-success mt-0.5 shrink-0" />
                  <span>Provide educational value by connecting OS theory with practical implementation.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 border-t border-border">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            <span className="gradient-text">Key Features</span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <ConceptCard
              title="Real-time Monitoring"
              description="Continuous collection of disk I/O metrics using iostat, vmstat, and /proc filesystem."
              icon={Activity}
              accentColor="primary"
            />
            <ConceptCard
              title="Bottleneck Detection"
              description="Automated identification of I/O bottlenecks using threshold-based analysis and pattern recognition."
              icon={AlertTriangle}
              accentColor="warning"
            />
            <ConceptCard
              title="Visual Dashboard"
              description="Interactive charts and graphs for throughput, latency, and utilization visualization."
              icon={BarChart3}
              accentColor="accent"
            />
            <ConceptCard
              title="CPU I/O Wait Analysis"
              description="Track and visualize CPU time spent waiting for I/O operations to complete."
              icon={Cpu}
              accentColor="primary"
            />
            <ConceptCard
              title="DSA Implementation"
              description="Practical application of queues, priority queues, sliding windows, and graphs."
              icon={HardDrive}
              accentColor="success"
            />
            <ConceptCard
              title="Educational Focus"
              description="Designed for OS lab evaluation with clear explanations and documentation."
              icon={BookOpen}
              accentColor="accent"
            />
          </div>
        </div>
      </section>

      {/* Navigation Cards */}
      <section className="py-16 border-t border-border">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Explore the Project
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              { to: '/concepts', title: 'OS Concepts', desc: 'I/O bottleneck, CPU wait, process states', icon: Cpu },
              { to: '/architecture', title: 'System Architecture', desc: 'Linux kernel, monitoring layers', icon: HardDrive },
              { to: '/dsa-mapping', title: 'DSA Mapping', desc: 'Queue, sliding window, priority queue', icon: Activity },
              { to: '/visualizer', title: 'Live Visualizer', desc: 'Real-time charts and alerts', icon: BarChart3 },
              { to: '/commands', title: 'Linux Commands', desc: 'iostat, vmstat, iotop usage', icon: Cpu },
              { to: '/conclusion', title: 'Conclusion', desc: 'Summary and future scope', icon: Target },
            ].map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="glass-card p-6 hover:border-primary/50 transition-all group"
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-muted-foreground ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
