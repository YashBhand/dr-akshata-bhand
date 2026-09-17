import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { Stethoscope, Phone, Mail, MapPin } from "lucide-react";

export function Footer() {
  const t = useTranslations("footer");
  const nav = useTranslations("nav");
  const contact = useTranslations("contact");
  const locale = useLocale();

  const quickLinks = [
    { href: `/${locale}/about`, label: nav("about") },
    { href: `/${locale}/services`, label: nav("services") },
    { href: `/${locale}/farmer-corner`, label: nav("farmerCorner") },
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
                Dr. Akshata Bhand
              </span>
            </Link>
            <p className="mt-3 text-sm font-medium text-accent dark:text-accent">
              Livestock Development Officer, Nandgaon
            </p>
            <p className="mt-1 text-xs text-amber-600 dark:text-amber-400 font-semibold">
              (Class I Government Officer)
            </p>
            <p className="mt-4 text-sm text-gray-600 dark:text-gray-300">
              {contact("hoursValue")}
            </p>
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
                <div className="text-sm text-gray-600 dark:text-gray-300">
                  <p className="font-semibold text-gray-900 dark:text-white">{contact("phoneDr")}</p>
                  <a href="tel:+918788198731" className="hover:text-primary transition-colors">+91 8788198731</a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={18} className="mt-0.5 text-accent shrink-0" />
                <div className="text-sm text-gray-600 dark:text-gray-300">
                  <p className="font-semibold text-gray-900 dark:text-white">{contact("phoneYash")}</p>
                  <a href="tel:+918262883668" className="hover:text-accent transition-colors">+91 8262883668</a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={18} className="mt-0.5 text-primary shrink-0" />
                <a href="mailto:drakshata.bhand@gmail.com" className="text-sm text-gray-600 dark:text-gray-300 hover:text-primary transition-colors">
                  drakshata.bhand@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={18} className="mt-0.5 text-primary shrink-0" />
                <span className="text-sm text-gray-600 dark:text-gray-300">
                  {contact("addressValue")}
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

        <div className="mt-12 border-t border-gray-200 pt-8 dark:border-gray-800 text-center md:text-left">
          <p className="text-sm text-gray-600 dark:text-gray-300">
            {t("copyright")}
          </p>
        </div>
      </div>
    </footer>
  );
}
