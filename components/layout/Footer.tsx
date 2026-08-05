import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { Stethoscope, Phone, Mail, MapPin, Share2, MessageSquare, Users } from "lucide-react";

export function Footer() {
  const t = useTranslations("footer");
  const nav = useTranslations("nav");
  const contact = useTranslations("contact");
  const locale = useLocale();

  const quickLinks = [
    { href: `/${locale}/about`, label: nav("about") },
    { href: `/${locale}/services`, label: nav("services") },
    { href: `/${locale}/specializations`, label: nav("specializations") },
    { href: `/${locale}/research`, label: nav("research") },
    { href: `/${locale}/blog`, label: nav("blog") },
    { href: `/${locale}/contact`, label: nav("contact") },
  ];

  return (
    <footer className="border-t border-gray-100 bg-gray-50 dark:border-gray-800 dark:bg-gray-900">
      <div className="container-custom px-4 py-16 md:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href={`/${locale}`} className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white">
                <Stethoscope size={22} />
              </div>
              <span className="font-heading text-lg font-bold text-primary dark:text-primary-light">
                Dr. Akshada Bhand
              </span>
            </Link>
            <p className="mt-4 text-sm text-gray-600 dark:text-gray-300">
              {contact("hoursValue")}
            </p>
            <div className="mt-6 flex gap-4">
              <a href="#" className="text-gray-500 hover:text-primary transition-colors">
                <Share2 size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-primary transition-colors">
                <MessageSquare size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-primary transition-colors">
                <Users size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-gray-900 dark:text-white">
              {t("quickLinks")}
            </h3>
            <ul className="mt-4 space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-600 hover:text-primary transition-colors dark:text-gray-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-gray-900 dark:text-white">
              {contact("title")}
            </h3>
            <ul className="mt-4 space-y-3">
              <li className="flex items-start gap-3">
                <Phone size={18} className="mt-0.5 text-primary shrink-0" />
                <span className="text-sm text-gray-600 dark:text-gray-300">
                  +91 8788198731
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={18} className="mt-0.5 text-primary shrink-0" />
                <span className="text-sm text-gray-600 dark:text-gray-300">
                  drakshada.bhand@gmail.com
                </span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={18} className="mt-0.5 text-primary shrink-0" />
                <span className="text-sm text-gray-600 dark:text-gray-300">
                  Nashik, Maharashtra, India
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-gray-900 dark:text-white">
              {nav("bookAppointment")}
            </h3>
            <p className="mt-4 text-sm text-gray-600 dark:text-gray-300">
              {contact("hoursValue")}
            </p>
            <Link
              href={`/${locale}/booking`}
              className="mt-4 inline-flex items-center justify-center rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-dark transition-colors"
            >
              {nav("bookAppointment")}
            </Link>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-200 pt-8 dark:border-gray-800">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm text-gray-600 dark:text-gray-300">
              {t("copyright")}
            </p>
            <div className="flex gap-6">
              <Link href="#" className="text-sm text-gray-600 hover:text-primary dark:text-gray-300">
                {t("privacy")}
              </Link>
              <Link href="#" className="text-sm text-gray-600 hover:text-primary dark:text-gray-300">
                {t("terms")}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
