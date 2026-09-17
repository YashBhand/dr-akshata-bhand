import Link from "next/link";
import Image from "next/image";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FaqItem } from "@/components/ui/FaqItem";
import publicationsData from "@/content/publications.json";
import {
  Stethoscope,
  Heart,
  Activity,
  Syringe,
  Microscope,
  Pill,
  Phone,
  MessageCircle,
  BookOpen,
  Award,
  ChevronRight,
  Dog,
  Cat,
  Leaf,
  ShieldCheck,
  MapPin,
  Mail,
  Sprout,
  ExternalLink,
  Clock,
} from "lucide-react";

type PageProps = {
  params: { locale: string };
};

const specIcons: Record<string, any> = {
  cardiology: Heart,
  companion: Dog,
  largeAnimal: Stethoscope,
  internal: Activity,
  hematology: Syringe,
  infectious: ShieldCheck,
  preventive: Pill,
};

const serviceIcons: Record<string, any> = {
  checkup: Stethoscope,
  vaccination: Syringe,
  lab: Microscope,
  xray: Activity,
  ecg: Heart,
  cardiac: Heart,
  kidney: Pill,
  parasitic: ShieldCheck,
  dental: Award,
  ai: Sprout,
  nutrition: Leaf,
  online: MessageCircle,
  homeVisit: MapPin,
};

const animalIcons: Record<string, any> = {
  dogs: Dog,
  cats: Cat,
  cattle: Stethoscope,
  goats: ShieldCheck,
  sheep: Leaf,
  rabbits: Heart,
  birds: Activity,
  poultry: Leaf,
};

export default async function HomePage({ params: { locale } }: PageProps) {
  setRequestLocale(locale);
  const t = await getTranslations();
  const heroT = (await getTranslations("hero")).raw as any;
  const aboutT = (await getTranslations("about")).raw as any;
  const specT = (await getTranslations("specializations.items")).raw as any;
  const servicesT = (await getTranslations("services.items")).raw as any;
  const animalsT = (await getTranslations("animals")).raw as any;
  const researchT = (await getTranslations("research")).raw as any;
  const casesT = (await getTranslations("cases")).raw as any;
  const faqT = (await getTranslations("faq.items")).raw as any;
  const contactT = (await getTranslations("contact")).raw as any;
  const commonT = (await getTranslations("common")).raw as any;

  return (
    <div className="overflow-hidden">
      {/* ── Hero ── */}
      <section className="relative bg-gradient-to-br from-primary/5 via-surface to-accent/5 dark:from-primary/10 dark:via-gray-900 dark:to-accent/10">
        <div className="container-custom relative px-4 py-16 md:px-8 md:py-24 lg:py-28">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            {/* Left — text */}
            <div className="animate-fade-in">
              {/* Credential tags */}
              <div className="mb-5 flex flex-wrap gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/25 bg-primary/10 px-3 py-1.5 text-xs font-semibold text-primary dark:bg-primary/20">
                  <Award size={13} />
                  {heroT("qualifications")}
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-200 bg-amber-50 px-3 py-1.5 text-xs font-semibold text-amber-700 dark:border-amber-700 dark:bg-amber-900/30 dark:text-amber-400">
                  <Stethoscope size={13} />
                  {heroT("designation2")}
                </span>
              </div>

              <h1 className="font-heading text-4xl font-bold leading-tight tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
                {heroT("name")}
              </h1>
              <p className="mt-3 text-base font-medium text-primary dark:text-primary-light md:text-lg">
                {heroT("designation")}
              </p>
              <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                {heroT("subtitle")}
              </p>
              <p className="mt-6 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                {heroT("tagline")}
              </p>

              {/* Primary CTAs */}
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href={`/${locale}/booking`}>
                  <Button size="lg" className="gap-2">
                    <CalendarIcon />
                    {heroT("bookAppointment")}
                  </Button>
                </Link>
                <a href="tel:+918788198731">
                  <Button size="lg" variant="emergency" className="gap-2">
                    <Phone size={18} />
                    {heroT("emergencyCall")}
                  </Button>
                </a>
                <a href="https://wa.me/918788198731" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" variant="outline" className="gap-2">
                    <MessageCircle size={18} />
                    {heroT("whatsappConsult")}
                  </Button>
                </a>
              </div>

              {/* Quick navigation pills */}
              <div className="mt-8 flex flex-wrap gap-2">
                <Link href={`/${locale}/about`}>
                  <span className="inline-flex items-center gap-1 rounded-full border border-gray-200 bg-white px-3 py-1.5 text-xs font-medium text-gray-700 hover:border-primary hover:text-primary transition-colors dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300">
                    About Dr. Akshata <ChevronRight size={12} />
                  </span>
                </Link>
                <Link href={`/${locale}/farmer-corner`}>
                  <span className="inline-flex items-center gap-1 rounded-full border border-gray-200 bg-white px-3 py-1.5 text-xs font-medium text-gray-700 hover:border-primary hover:text-primary transition-colors dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300">
                    Farmer Corner <ChevronRight size={12} />
                  </span>
                </Link>
                <Link href={`/${locale}/research`}>
                  <span className="inline-flex items-center gap-1 rounded-full border border-gray-200 bg-white px-3 py-1.5 text-xs font-medium text-gray-700 hover:border-primary hover:text-primary transition-colors dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300">
                    Research <ChevronRight size={12} />
                  </span>
                </Link>
              </div>
            </div>

            {/* Right — photo */}
            <div className="relative mx-auto w-full max-w-md">
              <div className="relative overflow-hidden rounded-3xl border-4 border-white shadow-2xl dark:border-gray-800 aspect-[4/5]">
                <Image
                  src="/images/dr-akshata-bhand.jpg"
                  alt="Dr. Akshata Bhand — Veterinary Physician & Livestock Development Officer, Nandgaon"
                  fill
                  className="object-cover object-top"
                  priority
                  unoptimized
                />
              </div>
              {/* Location badge */}
              <div className="absolute -bottom-5 left-4 rounded-2xl border border-gray-100 bg-white px-4 py-3 shadow-xl dark:border-gray-700 dark:bg-gray-800">
                <div className="flex items-center gap-2">
                  <MapPin size={16} className="text-primary shrink-0" />
                  <div>
                    <p className="text-xs text-gray-500 dark:text-gray-400">Location</p>
                    <p className="text-sm font-semibold text-gray-900 dark:text-white">Nandgaon, Nashik</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Who I Help ── */}
      <section className="section-padding bg-white dark:bg-gray-900">
        <div className="container-custom">
          <SectionHeading title="Who I Help" centered={true} />
          <div className="grid gap-6 md:grid-cols-3">
            <Card className="flex flex-col gap-4 border-l-4 border-l-primary">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Dog size={24} />
              </div>
              <div>
                <h3 className="font-heading text-lg font-bold text-gray-900 dark:text-white">Pet Owners</h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  Dogs, cats, rabbits and birds. Health check-ups, vaccination, cardiac evaluation, internal medicine, and follow-up care.
                </p>
              </div>
              <Link href={`/${locale}/services`} className="mt-auto inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline">
                Pet Services <ChevronRight size={14} />
              </Link>
            </Card>
            <Card className="flex flex-col gap-4 border-l-4 border-l-accent">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent">
                <Sprout size={24} />
              </div>
              <div>
                <h3 className="font-heading text-lg font-bold text-gray-900 dark:text-white">Farmers & Livestock Owners</h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  Cattle, buffalo, goats and sheep. Herd health, disease management, vaccination, artificial insemination and farm visits.
                </p>
              </div>
              <Link href={`/${locale}/farmer-corner`} className="mt-auto inline-flex items-center gap-1 text-sm font-medium text-accent hover:underline">
                Farmer Corner <ChevronRight size={14} />
              </Link>
            </Card>
            <Card className="flex flex-col gap-4 border-l-4 border-l-amber-500">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-50 text-amber-600 dark:bg-amber-900/30 dark:text-amber-400">
                <BookOpen size={24} />
              </div>
              <div>
                <h3 className="font-heading text-lg font-bold text-gray-900 dark:text-white">Researchers & Academics</h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  PhD Scholar at IVRI, Division of Medicine. Published work in cardiology, infectious diseases, hematology and livestock health.
                </p>
              </div>
              <Link href={`/${locale}/research`} className="mt-auto inline-flex items-center gap-1 text-sm font-medium text-amber-600 dark:text-amber-400 hover:underline">
                Research & Publications <ChevronRight size={14} />
              </Link>
            </Card>
          </div>
        </div>
      </section>

      {/* ── About ── */}
      <section className="section-padding bg-surface dark:bg-gray-800/50">
        <div className="container-custom">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="relative overflow-hidden rounded-3xl shadow-xl aspect-[4/3]">
              <Image
                src="/images/dr-akshata-bhand.jpg"
                alt="Dr. Akshata Bhand in her clinical setting"
                fill
                className="object-cover object-top"
                unoptimized
              />
            </div>
            <div>
              <SectionHeading title={aboutT("title")} centered={false} />
              <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300">
                {aboutT("bio")}
              </p>
              <div className="mt-6 space-y-3">
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Award size={16} />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white text-sm">Education</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">BVSc & AH • MVSc • PhD Scholar (IVRI, Division of Medicine)</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent">
                    <Stethoscope size={16} />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white text-sm">Current Role</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Livestock Development Officer, Nandgaon (Class I Government Officer)</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-amber-100 text-amber-600 dark:bg-amber-900/30 dark:text-amber-400">
                    <BookOpen size={16} />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white text-sm">Research</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">13 publications on Scholar · Cardiology, infectious diseases & livestock health</p>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <Link href={`/${locale}/about`}>
                  <Button className="gap-2">
                    {commonT("learnMore")}
                    <ChevronRight size={16} />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Clinical Interests ── */}
      <section className="section-padding bg-white dark:bg-gray-900">
        <div className="container-custom">
          <SectionHeading title={t("specializations.title")} />
          <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7">
            {Object.entries(specT).map(([key, label]) => {
              const Icon = specIcons[key] || Activity;
              return (
                <div
                  key={key}
                  className="flex flex-col items-center gap-3 rounded-2xl border border-gray-100 bg-gray-50 p-4 text-center transition-all hover:-translate-y-0.5 hover:border-primary/30 hover:bg-white hover:shadow-md dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-800"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Icon size={24} />
                  </div>
                  <p className="text-xs font-semibold leading-tight text-gray-800 dark:text-gray-200">{label as string}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Services ── */}
      <section className="section-padding bg-surface dark:bg-gray-800/50">
        <div className="container-custom">
          <SectionHeading title={t("services.title")} />
          <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {Object.entries(servicesT).map(([key, label]) => {
              const Icon = serviceIcons[key] || Stethoscope;
              return (
                <Card key={key} className="group flex flex-col items-start gap-3 p-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 text-primary transition-all group-hover:from-primary group-hover:to-accent group-hover:text-white">
                    <Icon size={22} />
                  </div>
                  <p className="text-sm font-semibold text-gray-900 dark:text-white leading-snug">{label as string}</p>
                </Card>
              );
            })}
          </div>
          <div className="mt-10 text-center">
            <Link href={`/${locale}/booking`}>
              <Button size="lg" className="gap-2">
                {heroT("bookAppointment")}
                <ChevronRight size={18} />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* ── Animals Treated ── */}
      <section className="section-padding bg-white dark:bg-gray-900">
        <div className="container-custom">
          <SectionHeading title={animalsT("title")} />
          <div className="grid gap-4 grid-cols-2 sm:grid-cols-4 md:grid-cols-8">
            {Object.entries(animalsT)
              .filter(([k]) => k !== "title")
              .map(([key, label]) => {
                const Icon = animalIcons[key] || PawIcon;
                return (
                  <div
                    key={key}
                    className="flex flex-col items-center gap-2 rounded-2xl border border-gray-100 bg-gray-50 p-4 text-center transition-all hover:-translate-y-0.5 hover:shadow-md dark:border-gray-700 dark:bg-gray-800"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <Icon size={24} />
                    </div>
                    <p className="text-xs font-semibold text-gray-800 dark:text-gray-200">{label as string}</p>
                  </div>
                );
              })}
          </div>
        </div>
      </section>

      {/* ── Research — verified publications ── */}
      <section className="section-padding bg-gradient-to-br from-primary/5 to-accent/5 dark:from-primary/10 dark:to-accent/10">
        <div className="container-custom">
          <SectionHeading
            title={researchT("title")}
            subtitle={researchT("subtitle")}
          />

          {/* Scholar metrics — verified */}
          <div className="mb-10 grid gap-4 grid-cols-2 md:grid-cols-4">
            {[
              { label: researchT("metrics.publications"), value: publicationsData.metrics.totalPublications.toString() },
              { label: researchT("metrics.citations"), value: publicationsData.metrics.citations.toString() },
              { label: researchT("metrics.hIndex"), value: publicationsData.metrics.hIndex.toString() },
              { label: researchT("metrics.i10Index"), value: publicationsData.metrics.i10Index.toString() },
            ].map((m) => (
              <div key={m.label} className="rounded-2xl border border-primary/15 bg-white p-5 text-center dark:bg-gray-800">
                <p className="text-3xl font-bold text-primary">{m.value}</p>
                <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">{m.label}</p>
              </div>
            ))}
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {publicationsData.publications.slice(0, 6).map((pub, idx) => (
              <Card key={idx} className="flex flex-col">
                <div className="mb-3 flex items-center justify-between">
                  <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                    {pub.year}
                  </span>
                  {pub.citations > 0 && (
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                      {pub.citations} {pub.citations === 1 ? "citation" : "citations"}
                    </span>
                  )}
                </div>
                <h4 className="flex-1 text-sm font-semibold leading-snug text-gray-900 dark:text-white">
                  {pub.title}
                </h4>
                <a
                  href={pub.scholarUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-1 text-xs font-medium text-primary hover:underline"
                >
                  {researchT("readPaper")}
                  <ExternalLink size={12} />
                </a>
              </Card>
            ))}
          </div>

          <p className="mt-6 text-center text-xs text-gray-400 dark:text-gray-500">
            Titles verified from Google Scholar. Journal names require individual paper verification.
          </p>

          <div className="mt-8 flex justify-center gap-4 flex-wrap">
            <a href={publicationsData.scholarUrl} target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="gap-2">
                <ExternalLink size={16} />
                {researchT("viewScholar")}
              </Button>
            </a>
            <Link href={`/${locale}/research`}>
              <Button variant="ghost" className="gap-2">
                {commonT("viewAll")}
                <ChevronRight size={16} />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* ── Clinical Cases (from published research) ── */}
      <section className="section-padding bg-white dark:bg-gray-900">
        <div className="container-custom">
          <SectionHeading
            title={researchT("caseReports")}
            subtitle={researchT("caseNote")}
          />
          <div className="grid gap-6 md:grid-cols-3">
            {Object.entries(casesT).map(([key, c]) => (
              <Card key={key} className="flex flex-col">
                <h4 className="font-heading text-base font-bold text-gray-900 dark:text-white">
                  {(c as any).title}
                </h4>
                <div className="mt-4 space-y-2 text-sm flex-1">
                  <div>
                    <span className="font-semibold text-primary">Presentation: </span>
                    <span className="text-gray-700 dark:text-gray-300">{(c as any).problem}</span>
                  </div>
                  <div>
                    <span className="font-semibold text-primary">Management: </span>
                    <span className="text-gray-700 dark:text-gray-300">{(c as any).treatment}</span>
                  </div>
                  <div>
                    <span className="font-semibold text-primary">Outcome: </span>
                    <span className="text-gray-700 dark:text-gray-300">{(c as any).outcome}</span>
                  </div>
                </div>
                <p className="mt-4 text-xs text-gray-400 dark:text-gray-500 border-t border-gray-100 dark:border-gray-700 pt-3">
                  {(c as any).source}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="section-padding bg-surface dark:bg-gray-800/50">
        <div className="container-custom max-w-3xl">
          <SectionHeading title={t("faq.title")} />
          <div className="space-y-4">
            {Object.entries(faqT).map(([key, item], idx) => (
              <FaqItem
                key={key}
                question={(item as any).q}
                answer={(item as any).a}
                defaultOpen={idx === 0}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── Contact ── */}
      <section className="section-padding bg-gradient-to-br from-primary via-primary-dark to-primary">
        <div className="container-custom">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className="text-white">
              <h2 className="font-heading text-3xl font-bold md:text-4xl">
                {contactT("title")}
              </h2>
              <p className="mt-3 text-white/70 text-sm">
                <Clock size={14} className="inline mr-1.5" />
                {contactT("hoursValue")}
              </p>
              <div className="mt-8 space-y-4">
                <a href="tel:+918788198731" className="flex items-center gap-4 text-white hover:text-white/80 transition-colors">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 shrink-0">
                    <Phone size={22} />
                  </div>
                  <div>
                    <p className="text-xs text-white/60">{contactT("phoneDr")}</p>
                    <p className="font-semibold text-lg">+91 8788198731</p>
                  </div>
                </a>
                <a href="tel:+918262883668" className="flex items-center gap-4 text-white hover:text-white/80 transition-colors">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 shrink-0">
                    <Phone size={22} />
                  </div>
                  <div>
                    <p className="text-xs text-white/60">{contactT("phoneYash")}</p>
                    <p className="font-semibold text-lg">+91 8262883668</p>
                  </div>
                </a>
                <a href="https://wa.me/918788198731" className="flex items-center gap-4 text-white hover:text-white/80 transition-colors">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 shrink-0">
                    <MessageCircle size={22} />
                  </div>
                  <div>
                    <p className="text-xs text-white/60">{contactT("whatsapp")}</p>
                    <p className="font-semibold">+91 8788198731</p>
                  </div>
                </a>
                <a href="mailto:drakshata.bhand@gmail.com" className="flex items-center gap-4 text-white hover:text-white/80 transition-colors">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 shrink-0">
                    <Mail size={22} />
                  </div>
                  <div>
                    <p className="text-xs text-white/60">{contactT("email")}</p>
                    <p className="font-semibold">drakshata.bhand@gmail.com</p>
                  </div>
                </a>
                <div className="flex items-center gap-4 text-white">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 shrink-0">
                    <MapPin size={22} />
                  </div>
                  <div>
                    <p className="text-xs text-white/60">{contactT("address")}</p>
                    <p className="font-semibold">{contactT("addressValue")}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Message form */}
            <div className="rounded-3xl bg-white p-8 shadow-2xl dark:bg-gray-800">
              <h3 className="font-heading text-xl font-bold text-gray-900 dark:text-white">
                {contactT("sendMessage")}
              </h3>
              <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                {contactT("formNote")}
              </p>
              <form className="mt-5 space-y-4" action="mailto:drakshata.bhand@gmail.com" method="GET">
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-300">
                    {contactT("name")}
                  </label>
                  <input
                    type="text"
                    name="subject"
                    className="w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-gray-900 outline-none focus:border-primary focus:bg-white dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-300">
                    {contactT("message")}
                  </label>
                  <textarea
                    rows={4}
                    name="body"
                    className="w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-gray-900 outline-none focus:border-primary focus:bg-white dark:border-gray-600 dark:bg-gray-700 dark:text-white resize-none"
                    placeholder="Describe your animal's condition or your question..."
                  />
                </div>
                <Button type="submit" className="w-full" size="lg">
                  {contactT("sendMessage")}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function CalendarIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
      <line x1="16" y1="2" x2="16" y2="6"></line>
      <line x1="8" y1="2" x2="8" y2="6"></line>
      <line x1="3" y1="10" x2="21" y2="10"></line>
    </svg>
  );
}

function PawIcon({ size }: { size?: number }) {
  return (
    <svg width={size || 24} height={size || 24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="4" r="2"></circle>
      <circle cx="18" cy="8" r="2"></circle>
      <circle cx="4" cy="8" r="2"></circle>
      <path d="M9 10c1 0 3 1 3 3s-1 3-2 4c-2 0-3-1-3-3s0-3 1-4"></path>
      <path d="M15 10c-1 0-3 1-3 3s1 3 2 4c2 0 3-1 3-3s0-3-1-4"></path>
    </svg>
  );
}
