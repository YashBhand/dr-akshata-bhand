import Link from "next/link";
import Image from "next/image";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CounterStrip } from "@/components/ui/CounterStrip";
import publicationsData from "@/content/publications.json";
import {
  BookOpen,
  Award,
  FileText,
  ExternalLink,
  Download,
  ChevronRight,
  BarChart3,
  Quote,
  Activity,
  Sparkles,
  Users,
} from "lucide-react";

type PageProps = {
  params: { locale: string };
};

export default async function ResearchPage({ params: { locale } }: PageProps) {
  setRequestLocale(locale);
  const t = (await getTranslations("research")).raw as any;
  const casesT = (await getTranslations("cases")).raw as any;
  const nav = (await getTranslations("nav")).raw as any;

  const metrics = [
    { end: publicationsData.metrics.totalPublications, suffix: "+", label: t("metrics.publications") },
    { end: publicationsData.metrics.citations, suffix: "+", label: t("metrics.citations") },
    { end: publicationsData.metrics.hIndex, label: t("metrics.hIndex") },
    { end: publicationsData.metrics.i10Index, label: t("metrics.i10Index") },
    { end: publicationsData.metrics.yearsResearch, suffix: "+", label: t("metrics.years") },
  ];

  const caseStudies = Object.entries(casesT) as any;

  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-accent/10 via-surface to-primary/10 dark:from-accent/20 dark:via-gray-900 dark:to-primary/20">
        <div className="container-custom px-4 py-20 md:px-8 md:py-28">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/10 px-4 py-2 text-sm font-medium text-accent">
                <BarChart3 size={16} />
                <span>Research & Academia</span>
              </div>
              <h1 className="font-heading text-4xl font-bold tracking-tight text-gray-900 md:text-5xl dark:text-white">
                {t("title")}
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                {t("subtitle")}
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a href={publicationsData.scholarUrl} target="_blank" rel="noopener noreferrer">
                  <Button size="lg" variant="outline" className="gap-2">
                    <ExternalLink size={20} />
                    {t("viewScholar")}
                  </Button>
                </a>
                <Link href={`/${locale}/booking`}>
                  <Button size="lg" className="gap-2">
                    {nav("bookAppointment")}
                    <ChevronRight size={20} />
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="overflow-hidden rounded-3xl shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800&h=600&fit=crop"
                  alt="Research"
                  width={800}
                  height={600}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Research Metrics */}
      <section className="section-padding bg-white dark:bg-gray-900">
        <div className="container-custom">
          <CounterStrip items={metrics} />
        </div>
      </section>

      {/* Publications */}
      <section className="section-padding bg-surface dark:bg-gray-800/50">
        <div className="container-custom">
          <SectionHeading
            title={t("metrics.publications")}
            subtitle="Peer-reviewed publications in reputed national and international journals"
          />
          <div className="space-y-6">
            {publicationsData.publications.map((pub, idx) => (
              <Card key={idx} className="group">
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/15 to-accent/15 text-primary group-hover:from-primary group-hover:to-accent group-hover:text-white transition-all">
                    <FileText size={28} />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                        {pub.year}
                      </span>
                      <span className="text-xs text-gray-500 dark:text-gray-400">
                        {pub.citations} {t("metrics.citations")}
                      </span>
                    </div>
                    <h3 className="font-heading text-lg font-bold text-gray-900 dark:text-white">
                      {pub.title}
                    </h3>
                    <p className="mt-1 text-sm text-gray-600 dark:text-gray-400 font-medium">
                      {pub.journal}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-3">
                      {pub.scholarUrl && (
                        <a
                          href={pub.scholarUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
                        >
                          {t("readPaper")}
                          <ExternalLink size={14} />
                        </a>
                      )}
                      {pub.pdfUrl && (
                        <a
                          href={pub.pdfUrl}
                          className="inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:underline"
                        >
                          {t("downloadPdf")}
                          <Download size={14} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Case Reports */}
      <section className="section-padding bg-white dark:bg-gray-900">
        <div className="container-custom">
          <SectionHeading
            title={t("caseReports")}
            subtitle="Complex cases successfully managed through evidence-based approach"
          />
          <div className="grid gap-8 md:grid-cols-3">
            {caseStudies.map(([key, c]: any) => (
              <Card key={key} className="flex flex-col overflow-hidden p-0">
                <div className="bg-gradient-to-br from-primary to-accent p-6 text-white">
                  <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-white/20">
                    <Activity size={24} />
                  </div>
                  <h4 className="font-heading text-xl font-bold">
                    {c.title}
                  </h4>
                </div>
                <div className="p-6 space-y-3 text-sm flex-1">
                  <div>
                    <span className="font-semibold text-primary">Problem: </span>
                    <span className="text-gray-700 dark:text-gray-300">{c.problem}</span>
                  </div>
                  <div>
                    <span className="font-semibold text-primary">Treatment: </span>
                    <span className="text-gray-700 dark:text-gray-300">{c.treatment}</span>
                  </div>
                  <div>
                    <span className="font-semibold text-primary">Outcome: </span>
                    <span className="text-gray-700 dark:text-gray-300">{c.outcome}</span>
                  </div>
                </div>
                <div className="border-t border-gray-100 p-6 dark:border-gray-700">
                  <div className="flex gap-2">
                    <Quote size={20} className="shrink-0 text-primary/60" />
                    <p className="text-sm italic text-gray-600 dark:text-gray-400">
                      {c.quote}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Research Areas */}
      <section className="section-padding bg-surface dark:bg-gray-800/50">
        <div className="container-custom">
          <SectionHeading
            title="Research Focus Areas"
            subtitle="Key domains contributing to advancing veterinary science"
          />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Activity, title: "Veterinary Cardiology", desc: "Heart diseases, pacemaker therapy, ECG/Echo diagnostics" },
              { icon: Users, title: "Canine Internal Medicine", desc: "Complex medical conditions in dogs" },
              { icon: Sparkles, title: "Infectious Diseases", desc: "Tick-borne, viral, and bacterial infections" },
              { icon: Award, title: "Hematology", desc: "Blood disorders, anemia, clotting diseases" },
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <Card key={idx} className="text-center">
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <Icon size={28} />
                  </div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">{item.title}</h4>
                  <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">{item.desc}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-br from-primary to-primary-dark text-white">
        <div className="container-custom text-center">
          <BookOpen size={48} className="mx-auto mb-6 opacity-90" />
          <h2 className="font-heading text-3xl font-bold md:text-4xl">
            Interested in Collaboration or Research?
          </h2>
          <p className="mt-4 text-lg text-white/80 max-w-2xl mx-auto">
            Open to academic collaborations, case study discussions, and research partnerships. Reach out to explore opportunities.
          </p>
          <div className="mt-8 flex justify-center flex-wrap gap-4">
            <Link href={`/${locale}/contact`}>
              <Button size="lg" className="gap-2 bg-white text-primary hover:bg-gray-100">
                Get in Touch
                <ChevronRight size={20} />
              </Button>
            </Link>
            <a href={`mailto:drakshada.bhand@gmail.com`}>
              <Button size="lg" variant="outline" className="gap-2 border-white text-white hover:bg-white/10">
                drakshada.bhand@gmail.com
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
