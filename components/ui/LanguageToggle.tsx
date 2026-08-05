"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import { cn } from "@/lib/utils";

export function LanguageToggle({ className }: { className?: string }) {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  const switchLocale = (newLocale: string) => {
    const segments = pathname.split("/");
    segments[1] = newLocale;
    const newPath = segments.join("/");
    localStorage.setItem("preferred-locale", newLocale);
    router.push(newPath);
  };

  return (
    <div className={cn("flex items-center gap-1 rounded-lg bg-gray-100 p-1 dark:bg-gray-800", className)}>
      <button
        onClick={() => switchLocale("en")}
        className={cn(
          "rounded-md px-3 py-1 text-sm font-medium transition-colors",
          locale === "en"
            ? "bg-primary text-white"
            : "text-gray-600 hover:text-primary dark:text-gray-300"
        )}
      >
        EN
      </button>
      <button
        onClick={() => switchLocale("mr")}
        className={cn(
          "rounded-md px-3 py-1 text-sm font-medium transition-colors font-marathi",
          locale === "mr"
            ? "bg-primary text-white"
            : "text-gray-600 hover:text-primary dark:text-gray-300"
        )}
      >
        मराठी
      </button>
    </div>
  );
}
