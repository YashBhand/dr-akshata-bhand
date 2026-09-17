import Link from "next/link";
import Image from "next/image";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  Sprout,
  ChevronRight,
  Syringe,
  Building2,
  AlertTriangle,
  Activity,
  Users,
  Phone,
  CheckCircle2,
  FileText,
  Stethoscope,
} from "lucide-react";

type PageProps = {
  params: { locale: string };
};

const topicIcons: Record<string, any> = {
  cattle: Stethoscope,
  ai: Activity,
  goats: Sprout,
  poultry: Sprout,
  vaccination: Syringe,
  schemes: Building2,
  alerts: AlertTriangle,
  emergency: Activity,
};

export default async function FarmerCornerPage({ params: { locale } }: PageProps) {
  setRequestLocale(locale);
  const t = (await getTranslations("farmer")).raw as any;
  const nav = (await getTranslations("nav")).raw as any;

  const topicGuides: Record<string, { desc: string; tips: string[] }> = {
    cattle: {
      desc: "Complete health management program for optimal cattle health and productivity.",
      tips: [
        "Daily observation for appetite and rumination",
        "Regular deworming every 3 months",
        "Vaccination against FMD, HS, BQ",
        "Balanced mineral mixture feeding",
        "Clean drinking water at all times",
      ],
    },
    ai: {
      desc: "Scientific breeding practices for genetic improvement of your herd.",
      tips: [
        "Proper heat detection is critical",
        "AI within 12-24 hours of heat onset",
        "Pregnancy diagnosis at 60-90 days",
        "Maintain accurate breeding records",
        "Use proven high-quality semen",
      ],
    },
    goats: {
      desc: "Best practices for profitable goat and sheep rearing operations.",
      tips: [
        "Provide dry, clean shelter with good drainage",
        "Deworm every 4-6 weeks in rainy season",
        "Vaccinate against PPR, Goat pox, ET",
        "Concentrate feeding for lactating does",
        "Hoof trimming every 3-4 months",
      ],
    },
    poultry: {
      desc: "Commercial and backyard poultry management for maximum yield.",
      tips: [
        "Strict biosecurity is essential",
        "Follow proper brooding temperatures",
        "Vaccinate on schedule (RD, IB, IBD, Fowl pox)",
        "Balanced feed with clean water",
        "Monitor for respiratory signs daily",
      ],
    },
    vaccination: {
      desc: "Essential vaccination schedules for different livestock species.",
      tips: [
        "Cattle: FMD, HS, BQ, Anthrax annually",
        "Goats/Sheep: PPR, Enterotoxemia, Goat Pox",
        "Poultry: Day-1 to 18 weeks program",
        "Pigs: Swine Fever, Foot & Mouth",
        "Always consult vet for local schedule",
      ],
    },
    schemes: {
      desc: "Government schemes and subsidies available for livestock farmers.",
      tips: [
        "Rashtriya Gokul Mission - indigenous breeds",
        "National Livestock Mission",
        "Livestock Insurance Schemes",
        "Dairy Entrepreneurship Development",
        "Contact Animal Husbandry Department",
      ],
    },
    alerts: {
      desc: "Disease outbreak alerts and preventive measures.",
      tips: [
        "Report unusual symptoms immediately",
        "Isolate new animals for 30 days",
        "Follow local animal health bulletins",
        "Maintain farm biosecurity protocols",
        "Vaccinate before outbreak season",
      ],
    },
    emergency: {
      desc: "Immediate first aid and emergency procedures for livestock.",
      tips: [
        "Keep vet emergency number saved",
        "Learn to recognize bloat (rumen tympany)",
        "Bloat: Trocar cannula or emergency puncture",
        "Milk fever: Calcium borogluconate IV",
        "Transport to clinic in lateral recumbency",
      ],
    },
  };

  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-primary/10 via-surface to-accent/10 dark:from-primary/20 dark:via-gray-900 dark:to-accent/20">
        <div className="container-custom px-4 py-20 md:px-8 md:py-28">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
                <Sprout size={16} />
                <span>For Farmers & Livestock Owners</span>
              </div>
              <h1 className="font-heading text-4xl font-bold tracking-tight text-gray-900 md:text-5xl dark:text-white">
                {t("title")}
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                {t("subtitle")}
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link href={`/${locale}/booking`}>
                  <Button size="lg" className="gap-2">
                    {nav("bookAppointment")}
                    <ChevronRight size={20} />
                  </Button>
                </Link>
                <a href="tel:+918788198731">
                  <Button size="lg" variant="emergency" className="gap-2">
                    <Phone size={20} />
                    Call for Emergency
                  </Button>
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="overflow-hidden rounded-3xl shadow-2xl aspect-[4/3]">
                <Image
                  src="/images/dr-akshata-bhand.jpg"
                  alt="Dr. Akshata Bhand — Veterinary Physician and Livestock Development Officer"
                  fill
                  className="object-cover object-top"
                  unoptimized
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Topics Grid */}
      <section className="section-padding bg-white dark:bg-gray-900">
        <div className="container-custom">
          <SectionHeading
            title="Key Topics"
            subtitle="Essential guides for every livestock farmer"
          />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {Object.keys(topicGuides).map((key) => {
              const Icon = topicIcons[key] || FileText;
              return (
                <Card key={key} className="group cursor-pointer" hover={true}>
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/15 to-accent/15 text-primary transition-all group-hover:from-primary group-hover:to-accent group-hover:text-white">
                    <Icon size={28} />
                  </div>
                  <h3 className="font-heading text-lg font-bold text-gray-900 dark:text-white">
                    {t(`topics.${key}`)}
                  </h3>
                  <p className="mt-2 text-sm text-gray-600 dark:text-gray-300 line-clamp-3">
                    {topicGuides[key].desc}
                  </p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Guides */}
      <section className="section-padding bg-surface dark:bg-gray-800/50">
        <div className="container-custom">
          <SectionHeading
            title="Essential Guides"
            subtitle="Practical tips and best practices for common topics"
          />
          <div className="grid gap-8 lg:grid-cols-2">
            {["cattle", "poultry"].map((key) => {
              const Icon = topicIcons[key] || FileText;
              const guide = topicGuides[key];
              return (
                <Card key={key}>
                  <div className="flex items-start gap-4 mb-6">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary text-white">
                      <Icon size={28} />
                    </div>
                    <div>
                      <h3 className="font-heading text-xl font-bold text-gray-900 dark:text-white">
                        {t(`topics.${key}`)}
                      </h3>
                      <p className="mt-1 text-gray-600 dark:text-gray-300">{guide.desc}</p>
                    </div>
                  </div>
                  <ul className="space-y-3">
                    {guide.tips.map((tip, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle2 size={20} className="mt-0.5 shrink-0 text-primary" />
                        <span className="text-gray-700 dark:text-gray-300">{tip}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* AI Process */}
      <section className="section-padding bg-white dark:bg-gray-900">
        <div className="container-custom">
          <SectionHeading
            title={t("topics.ai")}
            subtitle="Step-by-step process for successful artificial insemination"
          />
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-6 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-accent" />
              <div className="space-y-8">
                {[
                  { step: "1", title: "Heat Detection", desc: "Watch for standing heat, clear mucus, restlessness, mounting behavior. Best time: 12-24 hours after onset." },
                  { step: "2", title: "Semen Handling", desc: "Thaw semen correctly in water bath at 37-38°C for 30 seconds. Use immediately after thawing. Maintain hygiene." },
                  { step: "3", title: "Insemination", desc: "Proper restraint, clean perineum, correct AI gun placement at cervix. Deposit semen slowly into uterine body." },
                  { step: "4", title: "Post-AI Care", desc: "Monitor for return to heat at 21 days. Pregnancy diagnosis at 60-90 days via rectal palpation." },
                ].map((item, idx) => {
                  const isLeft = idx % 2 === 0;
                  return (
                    <div key={idx} className={`relative flex items-start md:items-center ${isLeft ? "md:justify-start" : "md:justify-end"}`}>
                      <div className="absolute left-6 md:left-1/2 md:-translate-x-1/2 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent text-white font-bold shadow-lg z-10">
                        {item.step}
                      </div>
                      <div className={`ml-20 md:ml-0 md:w-5/12 ${isLeft ? "md:mr-auto md:pr-12" : "md:ml-auto md:pl-12"}`}>
                        <Card>
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
        </div>
      </section>

      {/* Emergency & Contacts */}
      <section className="section-padding bg-gradient-to-br from-emergency to-red-700 text-white">
        <div className="container-custom grid items-center gap-8 lg:grid-cols-2">
          <div>
            <AlertTriangle size={48} className="mb-6 opacity-90" />
            <h2 className="font-heading text-3xl font-bold md:text-4xl">
              Livestock Emergency?
            </h2>
            <p className="mt-4 text-lg text-white/90">
              For urgent cases including bloat, milk fever, dystocia (calving difficulty), accidents, or suspected infectious disease - call immediately.
            </p>
          </div>
          <div className="space-y-4">
            <a href="tel:+918788198731" className="flex items-center gap-4 rounded-2xl bg-white/15 backdrop-blur p-6 hover:bg-white/20 transition-colors">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-emergency shrink-0">
                <Phone size={28} />
              </div>
              <div>
                <p className="text-sm text-white/70">Dr. Akshata Bhand (Direct / Urgent Calls)</p>
                <p className="text-2xl font-bold">+91 8788198731</p>
              </div>
            </a>
            <a href="tel:+918262883668" className="flex items-center gap-4 rounded-2xl bg-white/15 backdrop-blur p-6 hover:bg-white/20 transition-colors">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-emergency shrink-0">
                <Phone size={28} />
              </div>
              <div>
                <p className="text-sm text-white/70">Yash Bhand (Assistance)</p>
                <p className="text-2xl font-bold">+91 8262883668</p>
              </div>
            </a>
            <Link href={`/${locale}/contact`} className="flex items-center gap-4 rounded-2xl bg-white/15 backdrop-blur p-6 hover:bg-white/20 transition-colors">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-emergency shrink-0">
                <Users size={28} />
              </div>
              <div>
                <p className="text-sm text-white/70">Farm Visit</p>
                <p className="text-xl font-bold">Schedule On-Farm Consultation</p>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
