import { LucideIcon } from 'lucide-react';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  icon?: LucideIcon;
  badge?: string;
}

export const SectionHeader = ({ title, subtitle, icon: Icon, badge }: SectionHeaderProps) => {
  return (
    <div className="text-center mb-12">
      {badge && (
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-4">
          {Icon && <Icon className="w-4 h-4 text-primary" />}
          <span className="text-sm font-medium text-primary">{badge}</span>
        </div>
      )}
      <h1 className="section-title gradient-text">{title}</h1>
      {subtitle && <p className="section-subtitle mx-auto">{subtitle}</p>}
    </div>
  );
};
