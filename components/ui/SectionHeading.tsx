import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  className?: string;
  centered?: boolean;
}

export function SectionHeading({
  title,
  subtitle,
  className,
  centered = true,
}: SectionHeadingProps) {
  return (
    <div className={cn(centered && "text-center", "mb-12", className)}>
      <h2 className="font-heading text-3xl font-bold text-primary md:text-4xl dark:text-primary-light">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">{subtitle}</p>
      )}
      <div className="mx-auto mt-4 h-1 w-20 rounded bg-gold" />
    </div>
  );
}
