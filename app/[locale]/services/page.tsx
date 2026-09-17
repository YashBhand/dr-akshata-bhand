import Link from "next/link";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  Stethoscope,
  Heart,
  Activity,
  Syringe,
  Microscope,
  Pill,
  MessageCircle,
  MapPin,
  Sparkles,
  ShieldCheck,
  Leaf,
  Users,
  ChevronRight,
  CheckCircle2,
} from "lucide-react";

type PageProps = {
  params: { locale: string };
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
  dental: Sparkles,
  ai: Users,
  nutrition: Leaf,
  online: MessageCircle,
  homeVisit: MapPin,
};

const serviceDetails: Record<string, { desc: string; features: string[] }> = {
  checkup: {
    desc: "Comprehensive physical examination including vital signs, weight check, and overall wellness assessment.",
    features: ["Full physical exam", "Vital signs monitoring", "Weight & body condition", "Health recommendations"],
  },
  vaccination: {
    desc: "Complete vaccination schedules for all species to protect against common infectious diseases.",
    features: ["Core vaccines", "Non-core vaccines", "Annual boosters", "Vaccination records"],
  },
  lab: {
    desc: "In-house laboratory diagnostics for accurate and timely disease detection.",
    features: ["Blood tests", "Urine analysis", "Fecal examination", "Biochemistry panels"],
  },
  xray: {
    desc: "Digital radiography and ultrasound imaging for internal diagnostics.",
    features: ["Digital X-ray", "Abdominal ultrasound", "Orthopedic views", "Immediate results"],
  },
  ecg: {
    desc: "Cardiac evaluation including electrocardiogram and echocardiography.",
    features: ["12-lead ECG", "Echocardiogram", "Holter monitoring", "Cardiac screening"],
  },
  cardiac: {
    desc: "Specialized management of heart conditions including cardiomyopathies and arrhythmias.",
    features: ["CHF management", "Arrhythmia treatment", "Pacemaker evaluation", "Long-term care plans"],
  },
  kidney: {
    desc: "Diagnosis and treatment of kidney and liver disorders across all species.",
    features: ["Renal diagnostics", "Fluid therapy", "Dietary management", "Liver support"],
  },
  parasitic: {
    desc: "Treatment and prevention of tick-borne, flea, and internal parasite infections.",
    features: ["Tick fever treatment", "Deworming", "Flea control", "Preventive plans"],
  },
  dental: {
    desc: "Oral health care including cleaning, extractions, and dental disease treatment.",
    features: ["Teeth cleaning", "Extractions", "Gum disease treatment", "Oral exams"],
  },
  ai: {
    desc: "Professional artificial insemination services for cattle and buffalo breeding programs.",
    features: ["Heat detection", "Timed AI", "Pregnancy diagnosis", "Breeding consultation"],
  },
  nutrition: {
    desc: "Customized diet plans based on age, breed, weight, and health conditions.",
    features: ["Breed-specific diets", "Weight management", "Therapeutic diets", "Feeding schedules"],
  },
  online: {
    desc: "Remote consultation via WhatsApp or video call for follow-ups and minor concerns.",
    features: ["Video calls", "WhatsApp consult", "Digital prescriptions", "Follow-up care"],
  },
  homeVisit: {
    desc: "At-home veterinary visits for pets that don't travel well or large animals.",
    features: ["Home exams", "Vaccination at home", "Large animal visits", "Nashik & vicinity"],
  },
};

export default async function ServicesPage({ params: { locale } }: PageProps) {
  setRequestLocale(locale);
  const t = (await getTranslations("services")).raw as any;
  const nav = (await getTranslations("nav")).raw as any;

  const generalServices = ["checkup", "vaccination", "lab", "xray", "dental", "nutrition", "homeVisit", "online"];
  const specializedServices = ["ecg", "cardiac", "kidney", "parasitic", "ai"];

  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-accent/10 via-surface to-primary/10 dark:from-accent/20 dark:via-gray-900 dark:to-primary/20">
        <div className="container-custom px-4 py-20 md:px-8 md:py-28">
          <div className="text-center max-w-3xl mx-auto">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/10 px-4 py-2 text-sm font-medium text-accent">
              <Stethoscope size={16} />
              <span>Comprehensive Care</span>
            </div>
            <h1 className="font-heading text-4xl font-bold tracking-tight text-gray-900 md:text-5xl dark:text-white">
              {t("title")}
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              From routine checkups to specialized cardiac care, we offer a complete range of veterinary services for companion animals and livestock.
            </p>
            <div className="mt-8 flex justify-center">
              <Link href={`/${locale}/booking`}>
                <Button size="lg" className="gap-2">
                  {nav("bookAppointment")}
                  <ChevronRight size={20} />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* General Services */}
      <section className="section-padding bg-white dark:bg-gray-900">
        <div className="container-custom">
          <SectionHeading title={t("general")} subtitle="Essential healthcare services for your pets and animals" />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {generalServices.map((key) => {
              const Icon = serviceIcons[key] || Stethoscope;
              const details = serviceDetails[key];
              return (
                <Card key={key} className="group flex flex-col">
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 text-primary transition-all group-hover:from-primary group-hover:to-accent group-hover:text-white">
                    <Icon size={28} />
                  </div>
                  <h3 className="font-heading text-lg font-bold text-gray-900 dark:text-white">{t(`items.${key}`)}</h3>
                  <p className="mt-2 text-sm text-gray-600 dark:text-gray-300 flex-1">{details?.desc}</p>
                  {details?.features && (
                    <ul className="mt-4 space-y-1.5 border-t border-gray-100 pt-4 dark:border-gray-700">
                      {details.features.map((f, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
                          <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-primary" />
                          {f}
                        </li>
                      ))}
                    </ul>
                  )}
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Specialized Services */}
      <section className="section-padding bg-surface dark:bg-gray-800/50">
        <div className="container-custom">
          <SectionHeading title={t("specialized")} subtitle="Advanced treatments requiring specialist expertise" />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {specializedServices.map((key) => {
              const Icon = serviceIcons[key] || Activity;
              const details = serviceDetails[key];
              return (
                <Card key={key} className="flex flex-col border-primary/20 bg-gradient-to-br from-white to-primary/5 dark:from-gray-800 dark:to-primary/10">
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-primary text-white">
                    <Icon size={28} />
                  </div>
                  <h3 className="font-heading text-xl font-bold text-gray-900 dark:text-white">{t(`items.${key}`)}</h3>
                  <p className="mt-2 text-gray-600 dark:text-gray-300 flex-1">{details?.desc}</p>
                  {details?.features && (
                    <ul className="mt-4 space-y-1.5 border-t border-gray-100 pt-4 dark:border-gray-700">
                      {details.features.map((f, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
                          <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-primary" />
                          {f}
                        </li>
                      ))}
                    </ul>
                  )}
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Service Process */}
      <section className="section-padding bg-white dark:bg-gray-900">
        <div className="container-custom">
          <SectionHeading title="How It Works" subtitle="Simple steps to get your pet the care they need" />
          <div className="grid gap-6 md:grid-cols-4">
            {[
              { step: "1", title: "Book Appointment", desc: "Schedule online, via WhatsApp, or call us directly." },
              { step: "2", title: "Consultation", desc: "In-clinic, home visit, or online consultation as needed." },
              { step: "3", title: "Diagnosis & Treatment", desc: "Comprehensive diagnosis and personalized treatment plan." },
              { step: "4", title: "Follow-up Care", desc: "We stay in touch to ensure complete recovery." },
            ].map((item, idx) => (
              <Card key={idx} className="relative text-center">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent text-white font-bold shadow-lg">
                  {item.step}
                </div>
                <div className="pt-4">
                  <h4 className="font-heading text-lg font-bold text-gray-900 dark:text-white mt-2">
                    {item.title}
                  </h4>
                  <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">{item.desc}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-br from-primary to-primary-dark text-white">
        <div className="container-custom grid items-center gap-8 lg:grid-cols-2">
          <div>
            <h2 className="font-heading text-3xl font-bold md:text-4xl">
              Ready to Schedule a Visit?
            </h2>
            <p className="mt-4 text-lg text-white/80">
              Whether it's a routine checkup or a specialized treatment, we're here to help. Book an appointment today.
            </p>
          </div>
          <div className="flex flex-wrap justify-start lg:justify-end gap-4">
            <Link href={`/${locale}/booking`}>
              <Button size="lg" className="gap-2 bg-white text-primary hover:bg-gray-100">
                {nav("bookAppointment")}
                <ChevronRight size={20} />
              </Button>
            </Link>
            <a href="tel:+918788198731">
              <Button size="lg" variant="outline" className="gap-2 border-white text-white hover:bg-white/10">
                Call Now
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
