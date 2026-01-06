import { ReactNode } from 'react';
import { cn } from '@/lib/utils';
import { LucideIcon } from 'lucide-react';

interface DiagramBoxProps {
  title: string;
  icon?: LucideIcon;
  children?: ReactNode;
  variant?: 'default' | 'primary' | 'accent' | 'muted';
  className?: string;
}

const variants = {
  default: 'bg-card border-border',
  primary: 'bg-primary/10 border-primary/30',
  accent: 'bg-accent/10 border-accent/30',
  muted: 'bg-muted border-muted-foreground/20',
};

export const DiagramBox = ({
  title,
  icon: Icon,
  children,
  variant = 'default',
  className,
}: DiagramBoxProps) => {
  return (
    <div
      className={cn(
        "rounded-xl border p-4 text-center transition-all",
        variants[variant],
        className
      )}
    >
      {Icon && (
        <div className="flex justify-center mb-3">
          <div className="p-2 rounded-lg bg-primary/10">
            <Icon className="w-5 h-5 text-primary" />
          </div>
        </div>
      )}
      <h4 className="font-semibold text-foreground mb-2">{title}</h4>
      {children && (
        <div className="text-sm text-muted-foreground">{children}</div>
      )}
    </div>
  );
};
