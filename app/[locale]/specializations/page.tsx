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
  Microscope,
  Pill,
  ShieldCheck,
  Dog,
  Cat,
  ChevronRight,
  Stethoscope,
  Brain,
  Award,
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

const specDetails: Record<string, { desc: string; expertise: string[] }> = {
  cardiology: {
    desc: "Specialized diagnosis and treatment of heart diseases in all animals, including pacemaker therapy.",
    expertise: ["Echocardiography", "ECG interpretation", "Pacemaker implantation", "CHF management", "Arrhythmia treatment"],
  },
  companion: {
    desc: "Complete medical care for dogs and cats including wellness, surgery, and emergency care.",
    expertise: ["Wellness exams", "Soft tissue surgery", "Dermatology", "Ophthalmology", "Geriatric care"],
  },
  largeAnimal: {
    desc: "Expert care for cattle, buffalo, horses, goats, and sheep including herd health management.",
    expertise: ["Cattle medicine", "Equine care", "Artificial insemination", "Herd health", "Surgery"],
  },
  internal: {
    desc: "Diagnosis and management of complex internal medicine cases and chronic conditions.",
    expertise: ["Gastroenterology", "Respiratory medicine", "Endocrinology", "Nephrology", "Hepatology"],
  },
  pathology: {
    desc: "Advanced clinical pathology testing for accurate disease diagnosis and monitoring.",
    expertise: ["Histopathology", "Cytology", "Hematology", "Clinical chemistry", "Microbiology"],
  },
  hematology: {
    desc: "Blood disorders including anemia, clotting issues, and tick-borne disease management.",
    expertise: ["Blood transfusion", "Anemia treatment", "Tick fever", "Coagulopathy", "Bone marrow disorders"],
  },
  infectious: {
    desc: "Prevention, diagnosis, and treatment of infectious diseases across all species.",
    expertise: ["Viral diseases", "Bacterial infections", "Fungal diseases", "Parasitic infections", "Zoonotic awareness"],
  },
  canine: {
    desc: "Breed-specific care for dogs of all sizes from puppies to senior dogs.",
    expertise: ["Puppy care", "Breed-specific issues", "Sports medicine", "Rehabilitation", "Palliative care"],
  },
  feline: {
    desc: "Cat-friendly care with specialized handling techniques and species-specific knowledge.",
    expertise: ["Feline dentistry", "Kidney disease", "Hyperthyroidism", "Diabetes", "Lower urinary tract"],
  },
  rabbit: {
    desc: "Specialized care for rabbits and other small mammals including guinea pigs and hamsters.",
    expertise: ["Dental care", "Gastrointestinal stasis", "Nutrition", "Spay/neuter", "Common infections"],
  },
  equine: {
    desc: "Equine medicine and lameness evaluation for horses of all disciplines.",
    expertise: ["Lameness exam", "Colic treatment", "Vaccination", "Dental care", "Reproduction"],
  },
  emergency: {
    desc: "24/7 emergency and critical care services including trauma, poisoning, and acute illness.",
    expertise: ["Trauma care", "Poisoning", "Shock management", "Surgical emergencies", "ICU care"],
  },
  preventive: {
    desc: "Proactive healthcare programs including vaccination, parasite control, and wellness.",
    expertise: ["Vaccination schedules", "Deworming", "Nutrition counseling", "Weight management", "Health screenings"],
  },
};

export default async function SpecializationsPage({ params: { locale } }: PageProps) {
  setRequestLocale(locale);
  const t = (await getTranslations("specializations")).raw as any;
  const nav = (await getTranslations("nav")).raw as any;
  const items = Object.keys(specIcons);

  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-primary/10 via-surface to-accent/10 dark:from-primary/20 dark:via-gray-900 dark:to-accent/20">
        <div className="container-custom px-4 py-20 md:px-8 md:py-28">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
                <Award size={16} />
                <span>13+ Areas of Expertise</span>
              </div>
              <h1 className="font-heading text-4xl font-bold tracking-tight text-gray-900 md:text-5xl dark:text-white">
                {t("title")}
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                Advanced specialization across multiple domains of veterinary medicine ensures that every animal receives expert, targeted care for their specific condition.
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
                    View Services
                    <ChevronRight size={20} />
                  </Button>
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=400&h=300&fit=crop",
                "https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?w=400&h=300&fit=crop",
                "https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?w=400&h=300&fit=crop",
                "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=400&h=300&fit=crop",
              ].map((src, idx) => (
                <div key={idx} className={`overflow-hidden rounded-2xl shadow-lg ${idx % 2 === 0 ? "mt-8" : ""}`}>
                  <Image src={src} alt="" width={400} height={300} className="h-40 w-full object-cover" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Specializations Grid */}
      <section className="section-padding bg-white dark:bg-gray-900">
        <div className="container-custom">
          <SectionHeading
            title="Areas of Expertise"
            subtitle="Each specialization represents years of focused training and clinical practice"
          />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {items.map((key) => {
              const Icon = specIcons[key] || Brain;
              const details = specDetails[key];
              return (
                <Card key={key} className="group flex flex-col">
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/15 to-accent/15 text-primary transition-all group-hover:scale-110">
                    <Icon size={32} />
                  </div>
                  <h3 className="font-heading text-xl font-bold text-gray-900 dark:text-white">
                    {t(`items.${key}`)}
                  </h3>
                  <p className="mt-2 text-gray-600 dark:text-gray-300 flex-1">{details?.desc}</p>
                  <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-700">
                    <p className="text-xs font-semibold uppercase tracking-wider text-primary mb-2">
                      Key Expertise
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {details?.expertise.slice(0, 4).map((e, idx) => (
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

      {/* Why Choose */}
      <section className="section-padding bg-surface dark:bg-gray-800/50">
        <div className="container-custom">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="relative">
              <div className="overflow-hidden rounded-3xl shadow-xl">
                <Image
                  src="https://images.unsplash.com/photo-1596838132731-3301c3fd4317?w=800&h=600&fit=crop"
                  alt="Veterinary care"
                  width={800}
                  height={600}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
            <div>
              <SectionHeading title="Why Choose a Specialist?" centered={false} />
              <div className="space-y-4">
                {[
                  { title: "Advanced Training", desc: "Specialists complete years of additional training beyond veterinary school." },
                  { title: "Complex Cases", desc: "Experienced in handling rare and challenging medical conditions." },
                  { title: "Better Outcomes", desc: "Deeper expertise leads to more accurate diagnoses and effective treatments." },
                  { title: "Latest Techniques", desc: "Access to cutting-edge procedures and treatment protocols." },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <Stethoscope size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white">{item.title}</h4>
                      <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-r from-accent via-primary to-primary-dark text-white">
        <div className="container-custom text-center">
          <h2 className="font-heading text-3xl font-bold md:text-4xl">
            Need a Second Opinion or Expert Consultation?
          </h2>
          <p className="mt-4 text-lg text-white/80 max-w-2xl mx-auto">
            Referrals and second opinions are welcome. Contact us for specialized evaluation of complex cases.
          </p>
          <div className="mt-8 flex justify-center flex-wrap gap-4">
            <Link href={`/${locale}/contact`}>
              <Button size="lg" className="gap-2 bg-white text-primary hover:bg-gray-100">
                Contact Us
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
