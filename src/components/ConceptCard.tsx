import { ReactNode } from 'react';
import { cn } from '@/lib/utils';
import { LucideIcon } from 'lucide-react';

interface ConceptCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  children?: ReactNode;
  className?: string;
  accentColor?: 'primary' | 'accent' | 'success' | 'warning';
}

const accentColors = {
  primary: 'border-l-primary',
  accent: 'border-l-accent',
  success: 'border-l-success',
  warning: 'border-l-warning',
};

export const ConceptCard = ({
  title,
  description,
  icon: Icon,
  children,
  className,
  accentColor = 'primary',
}: ConceptCardProps) => {
  return (
    <div
      className={cn(
        "glass-card p-6 border-l-4 transition-all hover:shadow-lg hover:shadow-primary/5",
        accentColors[accentColor],
        className
      )}
    >
      <div className="flex items-start gap-4">
        <div className="p-3 rounded-xl bg-primary/10 shrink-0">
          <Icon className="w-6 h-6 text-primary" />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-lg font-semibold text-foreground mb-2">{title}</h3>
          <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
          {children && <div className="mt-4">{children}</div>}
        </div>
      </div>
    </div>
  );
};
