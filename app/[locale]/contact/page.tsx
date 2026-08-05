import Link from "next/link";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FaqItem } from "@/components/ui/FaqItem";
import {
  Phone,
  MessageCircle,
  Mail,
  MapPin,
  Clock,
  Send,
  ChevronRight,
  Calendar,
  Stethoscope,
  Share2,
  MessageSquare,
  Users,
  FileVideo,
} from "lucide-react";

type PageProps = {
  params: { locale: string };
};

export default async function ContactPage({ params: { locale } }: PageProps) {
  setRequestLocale(locale);
  const t = (await getTranslations("contact")).raw as any;
  const faqT = (await getTranslations("faq.items")).raw as any;
  const nav = (await getTranslations("nav")).raw as any;

  const faqs = Object.entries(faqT) as any;

  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-accent/10 via-surface to-primary/10 dark:from-accent/20 dark:via-gray-900 dark:to-primary/20">
        <div className="container-custom px-4 py-20 md:px-8 md:py-28">
          <div className="text-center max-w-3xl mx-auto">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/10 px-4 py-2 text-sm font-medium text-accent">
              <Stethoscope size={16} />
              <span>Get in Touch</span>
            </div>
            <h1 className="font-heading text-4xl font-bold tracking-tight text-gray-900 md:text-5xl dark:text-white">
              {t("title")}
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              Have questions about your pet's health? Need to schedule a visit? We're here to help. Reach out through any of the channels below.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="section-padding -mt-12 md:-mt-16 bg-white dark:bg-gray-900">
        <div className="container-custom">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card className="text-center">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <Phone size={28} />
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-white">{t("phone")}</h3>
              <a href="tel:+918788198731" className="mt-2 block text-lg font-bold text-primary hover:underline">
                +91 8788198731
              </a>
              <p className="mt-2 text-xs text-gray-500 dark:text-gray-400">Available for calls & emergencies</p>
            </Card>
            <Card className="text-center">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-green-500/10 text-green-600">
                <MessageCircle size={28} />
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-white">{t("whatsapp")}</h3>
              <a
                href="https://wa.me/918788198731"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 block text-lg font-bold text-green-600 hover:underline"
              >
                +91 8788198731
              </a>
              <p className="mt-2 text-xs text-gray-500 dark:text-gray-400">Quick consults & follow-ups</p>
            </Card>
            <Card className="text-center">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/10 text-accent">
                <Mail size={28} />
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-white">{t("email")}</h3>
              <a
                href="mailto:drakshada.bhand@gmail.com"
                className="mt-2 block text-sm font-bold text-accent hover:underline break-all"
              >
                drakshada.bhand@gmail.com
              </a>
              <p className="mt-2 text-xs text-gray-500 dark:text-gray-400">For reports & queries</p>
            </Card>
            <Card className="text-center">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gold/20 text-gold">
                <MapPin size={28} />
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-white">{t("address")}</h3>
              <p className="mt-2 text-sm font-bold text-gray-900 dark:text-white">
                Nashik,<br />Maharashtra, India
              </p>
              <p className="mt-2 text-xs text-gray-500 dark:text-gray-400">Home visits available nearby</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Main Contact */}
      <section className="section-padding bg-surface dark:bg-gray-800/50">
        <div className="container-custom">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
            {/* Info */}
            <div>
              <SectionHeading title="Let's Talk About Your Pet" subtitle="We typically respond within 2 hours for messages" centered={false} />

              <div className="mt-8 space-y-5">
                <div className="flex items-start gap-4 rounded-2xl border border-gray-100 bg-white p-5 dark:border-gray-700 dark:bg-gray-800">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">{t("hours")}</h4>
                    <p className="mt-1 text-gray-600 dark:text-gray-300">{t("hoursValue")}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 rounded-2xl border border-gray-100 bg-white p-5 dark:border-gray-700 dark:bg-gray-800">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
                    <Calendar size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">{nav("bookAppointment")}</h4>
                    <p className="mt-1 text-gray-600 dark:text-gray-300">
                      Prefer booking online? Use our appointment form for fastest confirmation.
                    </p>
                    <Link href={`/${locale}/booking`} className="mt-2 inline-flex items-center gap-1 text-sm font-semibold text-primary hover:gap-2 transition-all">
                      Book Now <ChevronRight size={16} />
                    </Link>
                  </div>
                </div>
              </div>

              {/* Social */}
              <div className="mt-10 rounded-2xl border border-gray-100 bg-white p-6 dark:border-gray-700 dark:bg-gray-800">
                <h4 className="font-semibold text-gray-900 dark:text-white">Follow Us</h4>
                <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">
                  Stay updated with pet care tips & clinic news
                </p>
                <div className="mt-4 flex gap-3">
                  {[
                    { icon: Share2, href: "#", label: "Facebook" },
                    { icon: MessageSquare, href: "#", label: "Instagram" },
                    { icon: Users, href: "#", label: "LinkedIn" },
                    { icon: FileVideo, href: "#", label: "YouTube" },
                  ].map((s, i) => (
                    <a
                      key={i}
                      href={s.href}
                      aria-label={s.label}
                      className="flex h-11 w-11 items-center justify-center rounded-xl bg-gray-100 text-gray-600 hover:bg-primary hover:text-white transition-colors dark:bg-gray-700 dark:text-gray-300"
                    >
                      <s.icon size={20} />
                    </a>
                  ))}
                </div>
              </div>

              {/* Map placeholder */}
              <div className="mt-10 overflow-hidden rounded-3xl border border-gray-100 dark:border-gray-700 h-64 bg-gradient-to-br from-primary/10 via-white to-accent/10 dark:from-primary/20 dark:via-gray-800 dark:to-accent/20 flex items-center justify-center">
                <div className="text-center p-6">
                  <MapPin size={40} className="mx-auto text-primary" />
                  <p className="mt-2 font-semibold text-gray-900 dark:text-white">Nashik, Maharashtra</p>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Clinic location coming soon</p>
                </div>
              </div>
            </div>

            {/* Form */}
            <Card className="shadow-xl sticky top-32">
              <h3 className="font-heading text-2xl font-bold text-gray-900 dark:text-white">
                {t("sendMessage")}
              </h3>
              <p className="mt-2 text-gray-600 dark:text-gray-300">
                Send us a message and we'll get back to you as soon as possible.
              </p>
              <form className="mt-6 space-y-4">
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-300">
                    {t("name")} *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Your full name"
                    className="w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-gray-900 outline-none focus:border-primary focus:bg-white dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                  />
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-300">
                      {t("email")}
                    </label>
                    <input
                      type="email"
                      placeholder="your@email.com"
                      className="w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-gray-900 outline-none focus:border-primary focus:bg-white dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                    />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-300">
                      {t("phone")} *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      className="w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-gray-900 outline-none focus:border-primary focus:bg-white dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                    />
                  </div>
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Subject
                  </label>
                  <select className="w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-gray-900 outline-none focus:border-primary focus:bg-white dark:border-gray-600 dark:bg-gray-700 dark:text-white">
                    <option>General Inquiry</option>
                    <option>Appointment Request</option>
                    <option>Report / Test Results</option>
                    <option>Emergency</option>
                    <option>Feedback</option>
                  </select>
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-300">
                    {t("message")} *
                  </label>
                  <textarea
                    rows={5}
                    required
                    placeholder="Tell us about your pet or your query..."
                    className="w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-gray-900 outline-none focus:border-primary focus:bg-white dark:border-gray-600 dark:bg-gray-700 dark:text-white resize-none"
                  />
                </div>
                <Button type="button" className="w-full gap-2" size="lg">
                  <Send size={18} />
                  {t("sendMessage")}
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-white dark:bg-gray-900">
        <div className="container-custom max-w-3xl">
          <SectionHeading
            title={nav("faq")}
            subtitle="Quick answers to common questions"
          />
          <div className="space-y-4">
            {faqs.map(([key, item]: any, idx: number) => (
              <FaqItem
                key={key}
                question={item.q}
                answer={item.a}
                defaultOpen={idx === 0}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
