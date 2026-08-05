import Link from "next/link";
import Image from "next/image";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CounterStrip } from "@/components/ui/CounterStrip";
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
  Users,
  Sparkles,
  ChevronRight,
  Star,
  Quote,
  Dog,
  Cat,
  Leaf,
  ShieldCheck,
  Clock,
  MapPin,
  Mail,
} from "lucide-react";

type PageProps = {
  params: { locale: string };
};

const specIcons: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  cardiology: Heart,
  companion: Dog,
  largeAnimal: Stethoscope,
  internal: Activity,
  pathology: Microscope,
  hematology: Syringe,
  infectious: ShieldCheck,
  canine: Dog,
  feline: Cat,
  rabbit: Heart,
  equine: Activity,
  emergency: Activity,
  preventive: Pill,
};

const serviceIcons: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  checkup: Stethoscope,
  vaccination: Syringe,
  lab: Microscope,
  xray: Activity,
  ecg: Heart,
  cardiac: Heart,
  kidney: Pill,
  parasitic: ShieldCheck,
  dental: Sparkles,
  ai: Users,
  nutrition: Leaf,
  online: MessageCircle,
  homeVisit: MapPin,
};

const animalIcons: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  dogs: Dog,
  cats: Cat,
  cattle: Stethoscope,
  goats: ShieldCheck,
  sheep: Leaf,
  horses: Activity,
  rabbits: Heart,
  birds: Sparkles,
  poultry: Leaf,
  exotic: Sparkles,
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

  const counterItems = [
    { end: 8, suffix: "+", label: aboutT("experience") },
    { end: 5000, suffix: "+", label: aboutT("patients") },
    { end: 500, suffix: "+", label: aboutT("cardiacCases") },
    { end: 11, label: aboutT("publications") },
    { end: 3, suffix: "+", label: aboutT("citations") },
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/5 via-surface to-accent/5 dark:from-primary/10 dark:via-gray-900 dark:to-accent/10">
        <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]" style={{
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%232E7D32' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")"
        }} />
        <div className="container-custom relative px-4 py-20 md:px-8 md:py-28 lg:py-32">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="animate-fade-in">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-medium text-primary dark:bg-primary/20">
                <Award size={16} />
                <span>{heroT("qualifications")}</span>
              </div>
              <h1 className="font-heading text-4xl font-bold leading-tight tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
                {heroT("name")}
              </h1>
              <p className="mt-4 text-lg font-medium text-primary dark:text-primary-light">
                {heroT("subtitle")}
              </p>
              <p className="mt-6 text-xl leading-relaxed text-gray-700 dark:text-gray-300">
                {heroT("tagline")}
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link href={`/${locale}/booking`}>
                  <Button size="lg" className="gap-2">
                    <CalendarIcon />
                    {heroT("bookAppointment")}
                  </Button>
                </Link>
                <a href="tel:+918788198731">
                  <Button size="lg" variant="emergency" className="gap-2">
                    <Phone size={20} />
                    {heroT("emergencyCall")}
                  </Button>
                </a>
                <a href="https://wa.me/918788198731" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" variant="outline" className="gap-2">
                    <MessageCircle size={20} />
                    {heroT("whatsappConsult")}
                  </Button>
                </a>
                <Link href={`/${locale}/research`}>
                  <Button size="lg" variant="ghost" className="gap-2">
                    <BookOpen size={20} />
                    {heroT("myResearch")}
                    <ChevronRight size={20} />
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="relative mx-auto aspect-square w-full max-w-lg">
                <div className="absolute inset-4 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 blur-2xl" />
                <div className="relative h-full w-full overflow-hidden rounded-3xl border-8 border-white shadow-2xl dark:border-gray-800">
                  <Image
                    src="/images/dr-akshada-hero.jpg"
                    alt="Dr. Akshada Chandrakant Bhand - Veterinary Physician & Cardiologist"
                    fill
                    className="object-cover"
                    priority
                    unoptimized
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 rounded-2xl border border-gray-100 bg-white p-4 shadow-xl dark:border-gray-700 dark:bg-gray-800">
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Heart size={24} />
                    </div>
                    <div>
                      <p className="font-bold text-gray-900 dark:text-white">5000+</p>
                      <p className="text-sm text-gray-600 dark:text-gray-300">{aboutT("patients")}</p>
                    </div>
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 rounded-2xl border border-gray-100 bg-white p-4 shadow-xl dark:border-gray-700 dark:bg-gray-800">
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gold/20 text-gold">
                      <Award size={24} />
                    </div>
                    <div>
                      <p className="font-bold text-gray-900 dark:text-white">8+</p>
                      <p className="text-sm text-gray-600 dark:text-gray-300">{aboutT("experience")}</p>
                    </div>
                  </div>
                </div>
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

      {/* About Section */}
      <section className="section-padding bg-surface dark:bg-gray-800/50">
        <div className="container-custom">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="relative">
              <div className="overflow-hidden rounded-3xl shadow-xl">
                <Image
                  src="/images/dr-akshada-about.jpg"
                  alt="Dr. Akshada Bhand - Veterinary Physician & Cardiologist"
                  width={800}
                  height={600}
                  className="h-full w-full object-cover"
                  unoptimized
                />
              </div>
            </div>
            <div>
              <SectionHeading title={aboutT("title")} centered={false} />
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                {aboutT("bio")}
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <Card className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Stethoscope size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">{aboutT("experience")}</h4>
                    <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">8+ Years</p>
                  </div>
                </Card>
                <Card className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
                    <BookOpen size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">{aboutT("publications")}</h4>
                    <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">11 Research Papers</p>
                  </div>
                </Card>
              </div>
              <div className="mt-8">
                <Link href={`/${locale}/about`}>
                  <Button className="gap-2">
                    {commonT("learnMore")}
                    <ChevronRight size={18} />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specializations */}
      <section className="section-padding bg-white dark:bg-gray-900">
        <div className="container-custom">
          <SectionHeading
            title={t("specializations.title")}
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {Object.entries(specT).map(([key, label]) => {
              const Icon = specIcons[key] || Activity;
              return (
                <Card key={key} className="group text-center">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-all group-hover:bg-primary group-hover:text-white">
                    <Icon size={32} />
                  </div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">{label as string}</h3>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding bg-surface dark:bg-gray-800/50">
        <div className="container-custom">
          <SectionHeading title={t("services.title")} />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {Object.entries(servicesT).map(([key, label]) => {
              const Icon = serviceIcons[key] || Stethoscope;
              return (
                <Card key={key} className="group">
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 text-primary transition-all group-hover:from-primary group-hover:to-accent group-hover:text-white">
                    <Icon size={28} />
                  </div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">{label as string}</h3>
                </Card>
              );
            })}
          </div>
          <div className="mt-12 text-center">
            <Link href={`/${locale}/booking`}>
              <Button size="lg" className="gap-2">
                {heroT("bookAppointment")}
                <ChevronRight size={20} />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Animals Treated */}
      <section className="section-padding bg-white dark:bg-gray-900">
        <div className="container-custom">
          <SectionHeading title={animalsT("title")} />
          <div className="grid gap-6 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {Object.entries(animalsT).filter(([k]) => k !== "title").map(([key, label]) => {
              const Icon = animalIcons[key] || PawIcon;
              return (
                <div key={key} className="flex flex-col items-center gap-3 rounded-2xl border border-gray-100 bg-white p-6 transition-all hover:-translate-y-1 hover:shadow-lg dark:border-gray-700 dark:bg-gray-800">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <Icon size={32} />
                  </div>
                  <p className="font-medium text-gray-900 dark:text-white text-center">{label as string}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Research */}
      <section className="section-padding bg-gradient-to-br from-primary/5 to-accent/5 dark:from-primary/10 dark:to-accent/10">
        <div className="container-custom">
          <SectionHeading
            title={researchT("title")}
            subtitle={researchT("subtitle")}
          />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {publicationsData.publications.slice(0, 6).map((pub, idx) => (
              <Card key={idx}>
                <div className="mb-3 flex items-center justify-between">
                  <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                    {pub.year}
                  </span>
                  <span className="text-xs text-gray-500 dark:text-gray-400">
                    {pub.citations} citations
                  </span>
                </div>
                <h4 className="font-semibold text-gray-900 dark:text-white line-clamp-3">
                  {pub.title}
                </h4>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                  {pub.journal}
                </p>
                <a
                  href={pub.scholarUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
                >
                  {researchT("readPaper")}
                  <ChevronRight size={16} />
                </a>
              </Card>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link href={`/${locale}/research`}>
              <Button variant="outline" className="gap-2">
                {commonT("viewAll")}
                <ChevronRight size={18} />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Case Stories */}
      <section className="section-padding bg-white dark:bg-gray-900">
        <div className="container-custom">
          <SectionHeading
            title={researchT("caseReports")}
          />
          <div className="grid gap-8 md:grid-cols-3">
            {Object.entries(casesT).map(([key, c]) => (
              <Card key={key} className="flex flex-col">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent">
                  <Activity size={24} />
                </div>
                <h4 className="font-heading text-xl font-bold text-gray-900 dark:text-white">
                  {(c as any).title}
                </h4>
                <div className="mt-4 space-y-3 text-sm">
                  <div>
                    <span className="font-semibold text-primary">Problem: </span>
                    <span className="text-gray-700 dark:text-gray-300">{(c as any).problem}</span>
                  </div>
                  <div>
                    <span className="font-semibold text-primary">Treatment: </span>
                    <span className="text-gray-700 dark:text-gray-300">{(c as any).treatment}</span>
                  </div>
                  <div>
                    <span className="font-semibold text-primary">Outcome: </span>
                    <span className="text-gray-700 dark:text-gray-300">{(c as any).outcome}</span>
                  </div>
                </div>
                <div className="mt-6 flex gap-2 border-t border-gray-100 pt-4 dark:border-gray-700">
                  <Quote size={20} className="shrink-0 text-primary/60" />
                  <p className="text-sm italic text-gray-600 dark:text-gray-400">
                    {(c as any).quote}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-surface dark:bg-gray-800/50">
        <div className="container-custom">
          <SectionHeading
            title={t("testimonials.title")}
            subtitle={t("testimonials.subtitle")}
          />
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { name: "Rahul Patil", pet: "Max (Labrador)", rating: 5 },
              { name: "Priya Deshmukh", pet: "Mittens (Cat)", rating: 5 },
              { name: "Suresh Kadam", pet: "Cattle", rating: 5 },
            ].map((item, idx) => (
              <Card key={idx} className="flex flex-col">
                <div className="mb-4 flex gap-1">
                  {Array.from({ length: item.rating }).map((_, i) => (
                    <Star key={i} size={18} className="fill-gold text-gold" />
                  ))}
                </div>
                <Quote size={32} className="mb-4 text-primary/20" />
                <p className="flex-1 text-gray-700 dark:text-gray-300">
                  {idx === 0
                    ? "Dr. Akshada saved our Labrador from a critical condition. Her expertise in cardiac care is exceptional. Highly recommend!"
                    : idx === 1
                    ? "Very compassionate and knowledgeable doctor. She treated our cat's kidney issues with great care. Always available for follow-ups."
                    : "Our cattle's health improved dramatically after Dr. Akshada's treatment. She explains everything clearly and is very patient with farmers."}
                </p>
                <div className="mt-6 flex items-center gap-3 border-t border-gray-100 pt-4 dark:border-gray-700">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/20 text-primary font-semibold">
                    {item.name[0]}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">{item.name}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{item.pet}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-white dark:bg-gray-900">
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

      {/* CTA / Contact */}
      <section className="section-padding bg-gradient-to-br from-primary via-primary-dark to-primary">
        <div className="container-custom">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className="text-white">
              <h2 className="font-heading text-3xl font-bold md:text-4xl">
                {contactT("title")}
              </h2>
              <p className="mt-4 text-lg text-white/80">
                {contactT("hoursValue")}
              </p>
              <div className="mt-8 space-y-4">
                <a href="tel:+918788198731" className="flex items-center gap-4 text-white hover:text-white/80 transition-colors">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10">
                    <Phone size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-white/70">{contactT("phone")}</p>
                    <p className="font-semibold">+91 8788198731</p>
                  </div>
                </a>
                <a href="https://wa.me/918788198731" className="flex items-center gap-4 text-white hover:text-white/80 transition-colors">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10">
                    <MessageCircle size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-white/70">{contactT("whatsapp")}</p>
                    <p className="font-semibold">+91 8788198731</p>
                  </div>
                </a>
                <a href="mailto:drakshada.bhand@gmail.com" className="flex items-center gap-4 text-white hover:text-white/80 transition-colors">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-white/70">{contactT("email")}</p>
                    <p className="font-semibold">drakshada.bhand@gmail.com</p>
                  </div>
                </a>
                <div className="flex items-center gap-4 text-white">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-white/70">{contactT("address")}</p>
                    <p className="font-semibold">Nashik, Maharashtra, India</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 text-white">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10">
                    <Clock size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-white/70">{contactT("hours")}</p>
                    <p className="font-semibold">{contactT("hoursValue")}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-3xl bg-white p-8 shadow-2xl dark:bg-gray-800">
              <h3 className="font-heading text-2xl font-bold text-gray-900 dark:text-white">
                {contactT("sendMessage")}
              </h3>
              <form className="mt-6 space-y-4">
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-300">
                    {contactT("name")}
                  </label>
                  <input
                    type="text"
                    className="w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-gray-900 outline-none focus:border-primary focus:bg-white dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-300">
                    {contactT("email")}
                  </label>
                  <input
                    type="email"
                    className="w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-gray-900 outline-none focus:border-primary focus:bg-white dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-300">
                    {contactT("message")}
                  </label>
                  <textarea
                    rows={4}
                    className="w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-gray-900 outline-none focus:border-primary focus:bg-white dark:border-gray-600 dark:bg-gray-700 dark:text-white resize-none"
                    placeholder="Your message..."
                  />
                </div>
                <Button type="button" className="w-full" size="lg">
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
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
      <circle cx="16" cy="16" r="2"></circle>
      <path d="M15 10c-1 0-3 1-3 3s1 3 2 4c2 0 3-1 3-3s0-3-1-4"></path>
      <path d="M9 10c1 0 3 1 3 3s-1 3-2 4c-2 0-3-1-3-3s0-3 1-4"></path>
      <path d="M7 18c1 1 3 2 5 2s4-1 5-2c1 0 1 1 2 1-1 2-4 3-7 3s-6-1-7-3c1 0 1-1 2-1"></path>
    </svg>
  );
}

