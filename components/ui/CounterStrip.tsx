"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

interface CounterProps {
  end: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  label: string;
}

export function AnimatedCounter({
  end,
  suffix = "",
  prefix = "",
  duration = 2000,
  label,
}: CounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const increment = end / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isInView, end, duration]);

  return (
    <div ref={ref} className="text-center">
      <div className="font-heading text-4xl font-bold text-primary md:text-5xl">
        {prefix}
        {count}
        {suffix}
      </div>
      <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">{label}</p>
    </div>
  );
}

export function CounterStrip({
  items,
}: {
  items: { end: number; suffix?: string; prefix?: string; label: string }[];
}) {
  return (
    <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-5">
      {items.map((item) => (
        <AnimatedCounter key={item.label} {...item} />
      ))}
    </div>
  );
}
