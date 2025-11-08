interface PageHeaderProps {
  title: string;
  description?: string;
  stat?: {
    value: string | number;
    label: string;
  };
}

export default function PageHeader({
  title,
  description,
  stat,
}: PageHeaderProps) {
  return (
    <div className="flex items-center justify-between">
      <div>
        <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100">
          {title}
        </h1>
        {description && (
          <p className="text-gray-600 dark:text-gray-400 mt-2">{description}</p>
        )}
      </div>
      {stat && (
        <div className="text-right">
          <div className="text-3xl font-bold text-primary-600">
            {stat.value}
          </div>
          <div className="text-sm text-gray-600 dark:text-gray-400">
            {stat.label}
          </div>
        </div>
      )}
    </div>
  );
}
