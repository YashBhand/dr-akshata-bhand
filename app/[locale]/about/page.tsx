import Link from "next/link";
import Image from "next/image";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CounterStrip } from "@/components/ui/CounterStrip";
import {
  Stethoscope,
  Heart,
  BookOpen,
  Award,
  GraduationCap,
  Briefcase,
  Users,
  ChevronRight,
  Star,
  Target,
  Eye,
  Sparkles,
} from "lucide-react";

type PageProps = {
  params: { locale: string };
};

export default async function AboutPage({ params: { locale } }: PageProps) {
  setRequestLocale(locale);
  const t = (await getTranslations("about")).raw as any;
  const nav = (await getTranslations("nav")).raw as any;
  const heroT = (await getTranslations("hero")).raw as any;
  const common = (await getTranslations("common")).raw as any;

  const counterItems = [
    { end: 8, suffix: "+", label: t("experience") },
    { end: 5000, suffix: "+", label: t("patients") },
    { end: 500, suffix: "+", label: t("cardiacCases") },
    { end: 11, label: t("publications") },
    { end: 3, suffix: "+", label: t("citations") },
  ];

  const timeline = [
    {
      year: "2016",
      title: "BVSc & AH",
      desc: "Bachelor of Veterinary Science and Animal Husbandry with distinction",
      icon: GraduationCap,
    },
    {
      year: "2019",
      title: "MVSc - Veterinary Medicine",
      desc: "Master's degree specializing in Veterinary Medicine and Clinical Practices",
      icon: Briefcase,
    },
    {
      year: "2020",
      title: "Clinical Practice",
      desc: "Started independent veterinary practice in Nashik, Maharashtra",
      icon: Stethoscope,
    },
    {
      year: "2022",
      title: "Research Papers",
      desc: "Published multiple research papers in reputed international journals",
      icon: BookOpen,
    },
    {
      year: "2025",
      title: "PhD Scholar",
      desc: "Pursuing PhD in Veterinary Medicine with focus on Cardiology",
      icon: Award,
    },
  ];

  const values = [
    {
      icon: Heart,
      title: "Compassion First",
      desc: "Every animal is treated with love, care, and the dignity they deserve.",
    },
    {
      icon: Target,
      title: "Excellence in Care",
      desc: "Evidence-based medicine backed by years of research and clinical expertise.",
    },
    {
      icon: Eye,
      title: "Innovation",
      desc: "Adopting the latest diagnostic techniques and treatment methodologies.",
    },
    {
      icon: Users,
      title: "Owner Education",
      desc: "Empowering pet owners and farmers with knowledge for better animal care.",
    },
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-primary/10 via-surface to-accent/10 dark:from-primary/20 dark:via-gray-900 dark:to-accent/20">
        <div className="container-custom px-4 py-20 md:px-8 md:py-28">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
                <Sparkles size={16} />
                <span>{heroT("qualifications")}</span>
              </div>
              <h1 className="font-heading text-4xl font-bold tracking-tight text-gray-900 md:text-5xl dark:text-white">
                {t("title")}
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                {t("bio")}
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link href={`/${locale}/booking`}>
                  <Button size="lg" className="gap-2">
                    {nav("bookAppointment")}
                    <ChevronRight size={20} />
                  </Button>
                </Link>
                <Link href={`/${locale}/research`}>
                  <Button size="lg" variant="outline" className="gap-2">
                    <BookOpen size={20} />
                    {t("publications")}
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="overflow-hidden rounded-3xl shadow-2xl">
                <Image
                  src="/images/dr-akshada-about-hero.jpg"
                  alt="Dr. Akshada Chandrakant Bhand - Veterinary Physician & Cardiologist"
                  width={800}
                  height={600}
                  className="h-full w-full object-cover"
                  unoptimized
                />
              </div>
              <div className="absolute -bottom-6 -right-6 rounded-2xl border border-gray-100 bg-white p-6 shadow-xl dark:border-gray-700 dark:bg-gray-800">
                <div className="flex gap-1 mb-2">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} size={18} className="fill-gold text-gold" />
                  ))}
                </div>
                <p className="text-sm font-medium text-gray-900 dark:text-white">
                  Rated 5/5 by 500+ families
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Counter Strip */}
      <section className="section-padding bg-white dark:bg-gray-900">
        <div className="container-custom">
          <CounterStrip items={counterItems} />
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-surface dark:bg-gray-800/50">
        <div className="container-custom">
          <SectionHeading title="Core Values" subtitle="The principles that guide our practice" />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {values.map((v, idx) => {
              const Icon = v.icon;
              return (
                <Card key={idx} className="text-center">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 text-primary">
                    <Icon size={32} />
                  </div>
                  <h3 className="font-heading text-lg font-bold text-gray-900 dark:text-white">
                    {v.title}
                  </h3>
                  <p className="mt-2 text-gray-600 dark:text-gray-300">{v.desc}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Journey / Timeline */}
      <section className="section-padding bg-white dark:bg-gray-900">
        <div className="container-custom">
          <SectionHeading title="Professional Journey" subtitle="A decade dedicated to animal healthcare" />
          <div className="relative max-w-3xl mx-auto">
            <div className="absolute left-4 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary to-accent" />
            <div className="space-y-12">
              {timeline.map((item, idx) => {
                const Icon = item.icon;
                const isLeft = idx % 2 === 0;
                return (
                  <div key={idx} className={`relative flex items-start md:items-center ${isLeft ? "md:justify-start" : "md:justify-end"}`}>
                    <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-white shadow-lg z-10">
                      <Icon size={16} />
                    </div>
                    <div className={`ml-16 md:ml-0 md:w-5/12 ${isLeft ? "md:mr-auto md:pr-12" : "md:ml-auto md:pl-12"}`}>
                      <Card>
                        <div className="mb-2 inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                          {item.year}
                        </div>
                        <h4 className="font-heading text-lg font-bold text-gray-900 dark:text-white">
                          {item.title}
                        </h4>
                        <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">{item.desc}</p>
                      </Card>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-r from-primary via-primary-dark to-primary text-white">
        <div className="container-custom text-center">
          <h2 className="font-heading text-3xl font-bold md:text-4xl">
            Trust Your Pet's Health to an Expert
          </h2>
          <p className="mt-4 text-lg text-white/80 max-w-2xl mx-auto">
            With years of experience and a compassionate approach, every animal receives the best possible care.
          </p>
          <div className="mt-8 flex justify-center flex-wrap gap-4">
            <Link href={`/${locale}/booking`}>
              <Button size="lg" variant="accent" className="gap-2 bg-white text-primary hover:bg-gray-100">
                {nav("bookAppointment")}
                <ChevronRight size={20} />
              </Button>
            </Link>
            <a href="tel:+918788198731">
              <Button size="lg" variant="outline" className="gap-2 border-white text-white hover:bg-white/10">
                {common("learnMore")}
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
