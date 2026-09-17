import Link from "next/link";
import Image from "next/image";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  Heart,
  Activity,
  Syringe,
  Pill,
  ShieldCheck,
  Dog,
  ChevronRight,
  Stethoscope,
  Award,
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

const specDetails: Record<string, { desc: string; expertise: string[] }> = {
  cardiology: {
    desc: "Cardiac evaluation in companion animals, including ECG, echocardiography, dilated cardiomyopathy, and pacemaker evaluation.",
    expertise: ["Echocardiography", "ECG interpretation", "Cardiomyopathy evaluation", "Cardiac screening"],
  },
  companion: {
    desc: "Complete medical care for dogs and cats including clinical examinations, diagnostics, and long-term care.",
    expertise: ["Clinical exams", "Internal medicine", "Diagnostic follow-up", "Geriatric care"],
  },
  largeAnimal: {
    desc: "Veterinary care for cattle, buffalo, goats, and sheep including herd health, reproductive support, and disease management.",
    expertise: ["Cattle medicine", "Goat & sheep care", "Artificial insemination", "Herd health"],
  },
  internal: {
    desc: "Diagnosis and clinical management of complex systemic disorders across companion animals and livestock.",
    expertise: ["Gastroenterology", "Respiratory conditions", "Kidney & liver disorders", "Endocrine conditions"],
  },
  hematology: {
    desc: "Diagnostic approach and therapeutic management of blood disorders including autoimmune anemia and tick-borne blood parasites.",
    expertise: ["Evans syndrome management", "Anemia in cattle & dogs", "Blood smear evaluation", "Supportive care"],
  },
  infectious: {
    desc: "Prevention, diagnosis, and treatment of infectious and tick-borne diseases in small and large animals.",
    expertise: ["Ehrlichiosis", "Hepatozoon canis", "Fungal infections", "Vaccine-preventable diseases"],
  },
  preventive: {
    desc: "Proactive healthcare including species-appropriate vaccination schedules, deworming, and nutritional guidance.",
    expertise: ["Vaccination schedules", "Deworming protocols", "Nutritional advice", "Routine screening"],
  },
};

export default async function SpecializationsPage({ params: { locale } }: PageProps) {
  setRequestLocale(locale);
  const t = (await getTranslations("specializations")).raw as any;
  const nav = (await getTranslations("nav")).raw as any;
  const items = Object.keys(specDetails);

  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-primary/10 via-surface to-accent/10 dark:from-primary/20 dark:via-gray-900 dark:to-accent/20">
        <div className="container-custom px-4 py-16 md:px-8 md:py-24">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
                <Award size={16} />
                <span>Clinical Focus Areas</span>
              </div>
              <h1 className="font-heading text-4xl font-bold tracking-tight text-gray-900 md:text-5xl dark:text-white">
                {t("title")}
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                Care starts with understanding the animal, its medical history, and practical living conditions. Clinical work and research focus on small animal medicine, cardiology, infectious diseases, and livestock health.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link href={`/${locale}/booking`}>
                  <Button size="lg" className="gap-2">
                    {nav("bookAppointment")}
                    <ChevronRight size={20} />
                  </Button>
                </Link>
                <Link href={`/${locale}/services`}>
                  <Button size="lg" variant="outline" className="gap-2">
                    {nav("services")}
                    <ChevronRight size={20} />
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="overflow-hidden rounded-3xl shadow-2xl aspect-[4/3] max-w-md mx-auto">
                <Image
                  src="/images/dr-akshata-bhand.jpg"
                  alt="Dr. Akshata Bhand"
                  fill
                  className="object-cover object-top"
                  unoptimized
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specializations Grid */}
      <section className="section-padding bg-white dark:bg-gray-900">
        <div className="container-custom">
          <SectionHeading
            title="Clinical Interests"
            subtitle="Core areas of clinical practice and research"
          />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {items.map((key) => {
              const Icon = specIcons[key] || Activity;
              const details = specDetails[key];
              return (
                <Card key={key} className="group flex flex-col">
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/15 to-accent/15 text-primary transition-all group-hover:scale-105">
                    <Icon size={28} />
                  </div>
                  <h3 className="font-heading text-xl font-bold text-gray-900 dark:text-white">
                    {t(`items.${key}`) || key}
                  </h3>
                  <p className="mt-2 text-gray-600 dark:text-gray-300 flex-1">{details?.desc}</p>
                  <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-700">
                    <p className="text-xs font-semibold uppercase tracking-wider text-primary mb-2">
                      Key Areas
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {details?.expertise.map((e, idx) => (
                        <span
                          key={idx}
                          className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700 dark:bg-gray-700 dark:text-gray-200"
                        >
                          {e}
                        </span>
                      ))}
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-r from-accent via-primary to-primary-dark text-white">
        <div className="container-custom text-center">
          <h2 className="font-heading text-3xl font-bold md:text-4xl">
            Questions About Your Animal's Health?
          </h2>
          <p className="mt-4 text-lg text-white/80 max-w-2xl mx-auto">
            Reach out directly for clinical advice, farm visit planning, or appointment scheduling.
          </p>
          <div className="mt-8 flex justify-center flex-wrap gap-4">
            <Link href={`/${locale}/contact`}>
              <Button size="lg" className="gap-2 bg-white text-primary hover:bg-gray-100">
                {nav("contact")}
                <ChevronRight size={20} />
              </Button>
            </Link>
            <a href="tel:+918788198731">
              <Button size="lg" variant="outline" className="gap-2 border-white text-white hover:bg-white/10">
                Call: +91 8788198731
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
