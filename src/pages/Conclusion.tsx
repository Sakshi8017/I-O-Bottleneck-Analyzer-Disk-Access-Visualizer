import { 
  FileText, 
  CheckCircle, 
  Lightbulb, 
  Rocket,
  BookOpen,
  Users,
  Server,
  Cpu
} from 'lucide-react';
import { SectionHeader } from '@/components/SectionHeader';
import { ConceptCard } from '@/components/ConceptCard';

const Conclusion = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <SectionHeader
          title="Conclusion & Future Scope"
          subtitle="Summary of the project, its advantages, applications, and potential enhancements"
          icon={FileText}
          badge="Summary"
        />

        {/* Summary */}
        <section className="mb-16">
          <div className="glass-card p-8 md:p-12">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <div className="p-2 rounded-lg bg-primary/10">
                <BookOpen className="w-6 h-6 text-primary" />
              </div>
              Project Summary
            </h2>
            
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              The <strong className="text-foreground">I/O Bottleneck Analyzer & Disk Access Visualizer</strong> is a comprehensive tool that bridges the gap between Operating System theory and practical system monitoring. Built on Linux, it leverages native system utilities to collect, process, and visualize disk I/O performance metrics in real-time.
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-4 rounded-lg bg-primary/10 border border-primary/20">
                <h3 className="font-semibold text-primary mb-2">Data Collection</h3>
                <p className="text-sm text-muted-foreground">iostat, vmstat, /proc filesystem integration</p>
              </div>
              <div className="p-4 rounded-lg bg-accent/10 border border-accent/20">
                <h3 className="font-semibold text-accent mb-2">Processing</h3>
                <p className="text-sm text-muted-foreground">Queue, Sliding Window, Priority Queue, Graph</p>
              </div>
              <div className="p-4 rounded-lg bg-success/10 border border-success/20">
                <h3 className="font-semibold text-success mb-2">Visualization</h3>
                <p className="text-sm text-muted-foreground">Real-time charts with alert system</p>
              </div>
            </div>
          </div>
        </section>

        {/* Advantages */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
            <div className="p-2 rounded-lg bg-success/10">
              <CheckCircle className="w-6 h-6 text-success" />
            </div>
            Advantages
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: 'Educational Value',
                description: 'Connects OS theory with practical implementation, making abstract concepts tangible for students.',
                icon: BookOpen,
              },
              {
                title: 'Real-time Monitoring',
                description: 'Live visualization of system metrics helps in immediate identification of performance issues.',
                icon: Cpu,
              },
              {
                title: 'Lightweight Design',
                description: 'Minimal overhead on system resources, suitable for production and development environments.',
                icon: Rocket,
              },
              {
                title: 'DSA Integration',
                description: 'Demonstrates practical application of data structures in solving real-world OS problems.',
                icon: Server,
              },
            ].map((item, i) => (
              <ConceptCard
                key={i}
                title={item.title}
                description={item.description}
                icon={item.icon}
                accentColor="success"
              />
            ))}
          </div>
        </section>

        {/* Applications */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
            <div className="p-2 rounded-lg bg-accent/10">
              <Users className="w-6 h-6 text-accent" />
            </div>
            Applications
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { title: 'Database Servers', desc: 'Monitor MySQL, PostgreSQL I/O' },
              { title: 'Web Servers', desc: 'Track nginx, Apache disk access' },
              { title: 'Virtualization', desc: 'VM disk performance analysis' },
              { title: 'Development', desc: 'Profile application I/O patterns' },
              { title: 'System Administration', desc: 'Capacity planning & tuning' },
              { title: 'Academic Labs', desc: 'OS course demonstrations' },
              { title: 'Cloud Infrastructure', desc: 'Monitor cloud disk performance' },
              { title: 'Storage Systems', desc: 'RAID, SAN, NAS analysis' },
            ].map((item, i) => (
              <div key={i} className="glass-card p-4 hover:border-accent/50 transition-colors">
                <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                <p className="text-xs text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Future Scope */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
            <div className="p-2 rounded-lg bg-warning/10">
              <Lightbulb className="w-6 h-6 text-warning" />
            </div>
            Future Scope & Enhancements
          </h2>

          <div className="glass-card p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold mb-4 text-lg">Short-term Enhancements</h3>
                <ul className="space-y-3">
                  {[
                    'Integration with Prometheus/Grafana for persistent metrics',
                    'Email/SMS alert notifications for critical bottlenecks',
                    'Historical data storage and trend analysis',
                    'Multi-disk comparative analysis',
                    'Process-level I/O attribution',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle className="w-4 h-4 text-success mt-1 shrink-0" />
                      <span className="text-muted-foreground text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="font-semibold mb-4 text-lg">Long-term Vision</h3>
                <ul className="space-y-3">
                  {[
                    'Machine Learning-based bottleneck prediction',
                    'Cross-platform support (Windows, macOS)',
                    'Container and Kubernetes I/O monitoring',
                    'Distributed system I/O correlation',
                    'Automatic performance optimization recommendations',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Rocket className="w-4 h-4 text-primary mt-1 shrink-0" />
                      <span className="text-muted-foreground text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* References */}
        <section>
          <h2 className="text-2xl font-bold mb-8">References</h2>
          
          <div className="glass-card p-6">
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <span className="text-foreground">[1]</span> Silberschatz, A., Galvin, P. B., & Gagne, G. (2018). Operating System Concepts (10th ed.). Wiley.
              </li>
              <li>
                <span className="text-foreground">[2]</span> Linux man pages: iostat(1), vmstat(8), iotop(1), proc(5)
              </li>
              <li>
                <span className="text-foreground">[3]</span> Tanenbaum, A. S., & Bos, H. (2014). Modern Operating Systems (4th ed.). Pearson.
              </li>
              <li>
                <span className="text-foreground">[4]</span> Linux Kernel Documentation: Block I/O Layer - kernel.org
              </li>
              <li>
                <span className="text-foreground">[5]</span> sysstat package documentation - https://github.com/sysstat/sysstat
              </li>
            </ul>
          </div>
        </section>

        {/* Project Info Footer */}
        <section className="mt-16 text-center">
          <div className="inline-flex flex-col items-center p-8 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20">
            <p className="text-muted-foreground mb-2">Operating Systems Mini Project</p>
            <h3 className="text-xl font-bold gradient-text mb-4">
              I/O Bottleneck Analyzer & Disk Access Visualizer
            </h3>
            <p className="text-sm text-muted-foreground">
              Built with Linux • React • TypeScript • Recharts
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Conclusion;
