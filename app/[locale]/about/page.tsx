import Link from "next/link";
import Image from "next/image";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  Stethoscope,
  Heart,
  BookOpen,
  Award,
  GraduationCap,
  Briefcase,
  ChevronRight,
  Phone,
  MessageCircle,
  MapPin,
} from "lucide-react";

type PageProps = {
  params: { locale: string };
};

export default async function AboutPage({ params: { locale } }: PageProps) {
  setRequestLocale(locale);
  const t = (await getTranslations("about")).raw as any;
  const nav = (await getTranslations("nav")).raw as any;
  const heroT = (await getTranslations("hero")).raw as any;

  const timeline = [
    {
      year: "BVSc & AH",
      title: "Bachelor of Veterinary Science & Animal Husbandry",
      desc: "Completed undergraduate degree in veterinary science and animal husbandry.",
      icon: GraduationCap,
    },
    {
      year: "MVSc",
      title: "Master of Veterinary Science — Veterinary Medicine",
      desc: "Postgraduate specialisation in veterinary medicine and clinical practice.",
      icon: Briefcase,
    },
    {
      year: "Clinical Practice",
      title: "Veterinary Practice",
      desc: "Started clinical veterinary practice in Nashik district, working with both companion animals and livestock.",
      icon: Stethoscope,
    },
    {
      year: "Livestock Dev. Officer",
      title: "Government Role — Nandgaon",
      desc: "Appointed as Livestock Development Officer at Nandgaon, Nashik. Class I Government Officer.",
      icon: Award,
    },
    {
      year: "PhD Scholar (Ongoing)",
      title: "PhD — Indian Veterinary Research Institute",
      desc: "Currently pursuing PhD in Veterinary Medicine (Division of Medicine, IVRI) with focus on veterinary cardiology.",
      icon: BookOpen,
    },
  ];

  const interests = [
    {
      icon: Heart,
      title: "Veterinary Cardiology",
      desc: "Cardiac evaluation, ECG and echocardiography, pacemaker therapy and cardiac disease management in small animals.",
    },
    {
      icon: Stethoscope,
      title: "Companion Animal Medicine",
      desc: "Internal medicine for dogs and cats, including complex systemic diseases, infectious diseases and haematological disorders.",
    },
    {
      icon: Award,
      title: "Livestock & Farm Animal Care",
      desc: "Cattle and buffalo health management, goat and sheep care, artificial insemination and herd disease prevention.",
    },
    {
      icon: BookOpen,
      title: "Clinical Research",
      desc: "Published research on cardiac disease in dogs, tick-borne infections, blood disorders and livestock health. 13 publications on Google Scholar.",
    },
  ];

  return (
    <div className="overflow-hidden">
      {/* ── Hero ── */}
      <section className="relative bg-gradient-to-br from-primary/10 via-surface to-accent/10 dark:from-primary/20 dark:via-gray-900 dark:to-accent/20">
        <div className="container-custom px-4 py-16 md:px-8 md:py-24">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
                <Award size={15} />
                <span>{heroT("qualifications")}</span>
              </div>
              <h1 className="font-heading text-4xl font-bold tracking-tight text-gray-900 md:text-5xl dark:text-white">
                {t("title")}
              </h1>
              <p className="mt-6 text-base leading-relaxed text-gray-700 dark:text-gray-300">
                {t("bio")}
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href={`/${locale}/booking`}>
                  <Button size="lg" className="gap-2">
                    {nav("bookAppointment")}
                    <ChevronRight size={18} />
                  </Button>
                </Link>
                <Link href={`/${locale}/research`}>
                  <Button size="lg" variant="outline" className="gap-2">
                    <BookOpen size={18} />
                    {t("publications")}
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="overflow-hidden rounded-3xl shadow-2xl aspect-[4/5] max-w-md mx-auto">
                <Image
                  src="/images/dr-akshata-bhand.jpg"
                  alt="Dr. Akshata Bhand — Veterinary Physician & Livestock Development Officer, Nandgaon"
                  fill
                  className="object-cover object-top"
                  unoptimized
                />
              </div>
              {/* Location card */}
              <div className="absolute -bottom-5 right-4 rounded-2xl border border-gray-100 bg-white p-4 shadow-xl dark:border-gray-700 dark:bg-gray-800">
                <div className="flex items-center gap-2">
                  <MapPin size={16} className="text-primary" />
                  <p className="text-sm font-semibold text-gray-900 dark:text-white">Nandgaon, Nashik</p>
                </div>
                <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">Maharashtra, India</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Clinical Interests ── */}
      <section className="section-padding bg-white dark:bg-gray-900">
        <div className="container-custom">
          <SectionHeading title="Clinical Interests" subtitle="Areas of professional focus and research" />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {interests.map((v, idx) => {
              const Icon = v.icon;
              return (
                <Card key={idx}>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Icon size={24} />
                  </div>
                  <h3 className="font-heading text-base font-bold text-gray-900 dark:text-white">
                    {v.title}
                  </h3>
                  <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">{v.desc}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Professional Journey ── */}
      <section className="section-padding bg-surface dark:bg-gray-800/50">
        <div className="container-custom">
          <SectionHeading
            title="Professional Journey"
            subtitle="Education, clinical practice and academic research"
          />
          <div className="relative max-w-3xl mx-auto">
            <div className="absolute left-5 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary to-accent" />
            <div className="space-y-10">
              {timeline.map((item, idx) => {
                const Icon = item.icon;
                const isLeft = idx % 2 === 0;
                return (
                  <div
                    key={idx}
                    className={`relative flex items-start md:items-center ${isLeft ? "md:justify-start" : "md:justify-end"}`}
                  >
                    <div className="absolute left-5 md:left-1/2 md:-translate-x-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white shadow-lg z-10">
                      <Icon size={18} />
                    </div>
                    <div className={`ml-16 md:ml-0 md:w-5/12 ${isLeft ? "md:mr-auto md:pr-14" : "md:ml-auto md:pl-14"}`}>
                      <Card>
                        <div className="mb-2 inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                          {item.year}
                        </div>
                        <h4 className="font-heading text-base font-bold text-gray-900 dark:text-white">
                          {item.title}
                        </h4>
                        <p className="mt-1.5 text-sm text-gray-600 dark:text-gray-300">{item.desc}</p>
                      </Card>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <p className="mt-10 text-center text-xs text-gray-400 dark:text-gray-500">
            Exact graduation years require confirmation from Dr. Akshata.
          </p>
        </div>
      </section>

      {/* ── Contact CTA ── */}
      <section className="section-padding bg-gradient-to-r from-primary via-primary-dark to-primary text-white">
        <div className="container-custom">
          <div className="grid gap-8 md:grid-cols-2 items-center">
            <div>
              <h2 className="font-heading text-3xl font-bold md:text-4xl">
                Need help with your animal?
              </h2>
              <p className="mt-3 text-lg text-white/80">
                Reach out by call, WhatsApp, or book an appointment online.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row md:flex-col lg:flex-row">
              <a href="tel:+918788198731" className="flex-1">
                <Button size="lg" className="w-full gap-2 bg-white text-primary hover:bg-gray-100">
                  <Phone size={18} />
                  Call Now
                </Button>
              </a>
              <a href="https://wa.me/918788198731" target="_blank" rel="noopener noreferrer" className="flex-1">
                <Button size="lg" className="w-full gap-2 bg-green-500 hover:bg-green-600 text-white border-0">
                  <MessageCircle size={18} />
                  WhatsApp
                </Button>
              </a>
              <Link href={`/${locale}/booking`} className="flex-1">
                <Button size="lg" variant="outline" className="w-full gap-2 border-white text-white hover:bg-white/10">
                  {nav("bookAppointment")}
                  <ChevronRight size={18} />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
