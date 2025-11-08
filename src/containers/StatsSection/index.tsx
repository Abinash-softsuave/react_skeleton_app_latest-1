import { ReactNode } from 'react';
import StatsCard from '../StatsCard';

export interface Stat {
  icon: ReactNode;
  value: string | number;
  label: string;
  color?: 'blue' | 'green' | 'purple' | 'red' | 'yellow';
}

interface StatsSectionProps {
  stats: Stat[];
}

export default function StatsSection({ stats }: StatsSectionProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {stats.map((stat, index) => (
        <StatsCard
          key={index}
          icon={stat.icon}
          value={stat.value}
          label={stat.label}
          color={stat.color}
        />
      ))}
    </div>
  );
}
