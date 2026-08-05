"use client";

import { useState } from "react";
import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { Menu, X, Stethoscope } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { LanguageToggle } from "@/components/ui/LanguageToggle";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { cn } from "@/lib/utils";

export function Header() {
  const t = useTranslations("nav");
  const locale = useLocale();
  const [open, setOpen] = useState(false);

  const links = [
    { href: `/${locale}`, label: t("home") },
    { href: `/${locale}/about`, label: t("about") },
    { href: `/${locale}/services`, label: t("services") },
    { href: `/${locale}/specializations`, label: t("specializations") },
    { href: `/${locale}/research`, label: t("research") },
    { href: `/${locale}/blog`, label: t("blog") },
    { href: `/${locale}/farmer-corner`, label: t("farmerCorner") },
    { href: `/${locale}/contact`, label: t("contact") },
  ];

  return (
    <header className="sticky top-0 z-40 border-b border-gray-100 bg-white/95 backdrop-blur dark:border-gray-800 dark:bg-gray-900/95">
      <div className="container-custom flex items-center justify-between px-4 py-4 md:px-8">
        <Link href={`/${locale}`} className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white">
            <Stethoscope size={22} />
          </div>
          <span className="font-heading text-lg font-bold text-primary md:text-xl">
            Dr. Akshada Bhand
          </span>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-gray-700 transition-colors hover:text-primary dark:text-gray-300"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <LanguageToggle />
          <ThemeToggle />
          <Link href={`/${locale}/booking`}>
            <Button size="sm">{t("bookAppointment")}</Button>
          </Link>
        </div>

        <button
          className="lg:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <div
        className={cn(
          "border-t border-gray-100 bg-white dark:border-gray-800 dark:bg-gray-900 lg:hidden",
          open ? "block" : "hidden"
        )}
      >
        <nav className="flex flex-col gap-2 px-4 py-4">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-2 text-gray-700 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-800"
            >
              {link.label}
            </Link>
          ))}
          <div className="mt-2 flex items-center gap-3 px-3">
            <LanguageToggle />
            <ThemeToggle />
          </div>
          <Link href={`/${locale}/booking`} onClick={() => setOpen(false)}>
            <Button className="mt-2 w-full">{t("bookAppointment")}</Button>
          </Link>
        </nav>
      </div>
    </header>
  );
}
