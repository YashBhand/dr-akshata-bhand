import Image from "next/image";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";
import publicationsData from "@/content/publications.json";
import {
  BookOpen,
  FileText,
  ExternalLink,
  ChevronRight,
  Heart,
  Activity,
  Microscope,
  Stethoscope,
  Info,
} from "lucide-react";

type PageProps = {
  params: { locale: string };
};

export default async function ResearchPage({ params: { locale } }: PageProps) {
  setRequestLocale(locale);
  const t = (await getTranslations("research")).raw as any;
  const casesT = (await getTranslations("cases")).raw as any;

  return (
    <div className="overflow-hidden">
      {/* ── Hero ── */}
      <section className="relative bg-gradient-to-br from-accent/10 via-surface to-primary/10 dark:from-accent/20 dark:via-gray-900 dark:to-primary/20">
        <div className="container-custom px-4 py-16 md:px-8 md:py-24">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/10 px-4 py-2 text-sm font-medium text-accent">
                <BookOpen size={15} />
                <span>Research & Academia</span>
              </div>
              <h1 className="font-heading text-4xl font-bold tracking-tight text-gray-900 md:text-5xl dark:text-white">
                {t("title")}
              </h1>
              <p className="mt-4 text-base leading-relaxed text-gray-700 dark:text-gray-300">
                PhD Scholar at the <strong>Division of Medicine, Indian Veterinary Research Institute (IVRI)</strong>. Research focuses on veterinary cardiology, with published work spanning cardiac disease in dogs, infectious diseases, haematological disorders and livestock health.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href={publicationsData.scholarUrl} target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="gap-2">
                    <ExternalLink size={18} />
                    {t("viewScholar")}
                  </Button>
                </a>
                <a href="mailto:drakshata.bhand@gmail.com">
                  <Button size="lg" variant="outline" className="gap-2">
                    Research Collaboration
                    <ChevronRight size={18} />
                  </Button>
                </a>
              </div>
            </div>
            <div className="overflow-hidden rounded-3xl shadow-2xl aspect-[4/5] max-w-sm mx-auto">
              <Image
                src="/images/dr-akshata-bhand.jpg"
                alt="Dr. Akshata Bhand — PhD Scholar, Division of Medicine, IVRI"
                fill
                className="object-cover object-[center_28%]"
                unoptimized
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Verified Metrics ── */}
      <section className="section-padding bg-white dark:bg-gray-900">
        <div className="container-custom">
          <SectionHeading
            title="Research Metrics"
            subtitle="Verified from Google Scholar"
          />
          <div className="grid gap-4 grid-cols-2 md:grid-cols-4 max-w-2xl mx-auto">
            {[
              { label: t("metrics.publications"), value: publicationsData.metrics.totalPublications.toString() },
              { label: t("metrics.citations"), value: publicationsData.metrics.citations.toString() },
              { label: t("metrics.hIndex"), value: publicationsData.metrics.hIndex.toString() },
              { label: t("metrics.i10Index"), value: publicationsData.metrics.i10Index.toString() },
            ].map((m) => (
              <div
                key={m.label}
                className="rounded-2xl border border-primary/15 bg-primary/5 p-6 text-center dark:bg-primary/10"
              >
                <p className="text-4xl font-bold text-primary">{m.value}</p>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">{m.label}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 flex items-start gap-2 max-w-2xl mx-auto rounded-xl border border-blue-100 bg-blue-50 p-4 dark:border-blue-900 dark:bg-blue-900/20">
            <Info size={16} className="mt-0.5 shrink-0 text-blue-600 dark:text-blue-400" />
            <p className="text-sm text-blue-700 dark:text-blue-300">
              Metrics sourced from{" "}
              <a
                href={publicationsData.scholarUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="underline font-medium"
              >
                Google Scholar
              </a>
              . {publicationsData.note}
            </p>
          </div>
        </div>
      </section>

      {/* ── Publications ── */}
      <section className="section-padding bg-surface dark:bg-gray-800/50">
        <div className="container-custom">
          <SectionHeading
            title={t("metrics.publications")}
            subtitle="All titles verified from Google Scholar. Click to view individual papers on Scholar."
          />
          <div className="space-y-4">
            {publicationsData.publications.map((pub, idx) => (
              <Card key={idx} className="group">
                <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-all">
                    <FileText size={22} />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                        {pub.year}
                      </span>
                      {pub.citations > 0 && (
                        <span className="rounded-full bg-green-50 px-3 py-1 text-xs font-medium text-green-700 dark:bg-green-900/30 dark:text-green-400">
                          {pub.citations} {pub.citations === 1 ? "citation" : "citations"}
                        </span>
                      )}
                    </div>
                    <h3 className="text-base font-semibold text-gray-900 dark:text-white leading-snug">
                      {pub.title}
                    </h3>
                    {pub.journal && (
                      <p className="mt-1 text-sm text-gray-500 dark:text-gray-400 italic">
                        {pub.journal}
                      </p>
                    )}
                    <div className="mt-3 flex flex-wrap gap-3">
                      {pub.scholarUrl && (
                        <a
                          href={pub.scholarUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
                        >
                          {t("readPaper")}
                          <ExternalLink size={13} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
          <div className="mt-8 flex items-start gap-2 rounded-xl border border-amber-100 bg-amber-50 p-4 dark:border-amber-900 dark:bg-amber-900/20">
            <Info size={16} className="mt-0.5 shrink-0 text-amber-600 dark:text-amber-400" />
            <p className="text-sm text-amber-700 dark:text-amber-300">
              Publication titles are verified from the Google Scholar profile. Journal names and DOIs for individual papers have not been independently verified here — please use the Scholar links to access full citation details.
            </p>
          </div>
          <div className="mt-8 text-center">
            <a href={publicationsData.scholarUrl} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="gap-2">
                <ExternalLink size={18} />
                {t("viewScholar")}
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* ── Research Focus Areas ── */}
      <section className="section-padding bg-white dark:bg-gray-900">
        <div className="container-custom">
          <SectionHeading
            title="Research Focus Areas"
            subtitle="Key themes across published work"
          />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: Heart,
                title: "Veterinary Cardiology",
                desc: "Cardiac disease in dogs and cats — pacemaker therapy, dilated cardiomyopathy, mitral valve disease, echocardiographic evaluation.",
              },
              {
                icon: Activity,
                title: "Infectious & Tick-borne Diseases",
                desc: "Ehrlichiosis, Hepatozoon canis, Spirocercosis — diagnosis and management in companion animals.",
              },
              {
                icon: Microscope,
                title: "Haematology",
                desc: "Blood disorders in dogs including Evans syndrome, anaemia in cattle — diagnostic and clinical significance.",
              },
              {
                icon: Stethoscope,
                title: "Livestock Health",
                desc: "Anaemia in bovines, haematobiochemical alterations — diagnostic approach in cattle and farm animals.",
              },
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <Card key={idx}>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Icon size={24} />
                  </div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">{item.title}</h4>
                  <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">{item.desc}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Selected Clinical Cases (from published work) ── */}
      <section className="section-padding bg-surface dark:bg-gray-800/50">
        <div className="container-custom">
          <SectionHeading
            title={t("caseReports")}
            subtitle={t("caseNote")}
          />
          <div className="grid gap-6 md:grid-cols-3">
            {(Object.entries(casesT) as any[]).map(([key, c]) => (
              <Card key={key} className="flex flex-col">
                <h4 className="font-heading text-base font-bold text-gray-900 dark:text-white">
                  {c.title}
                </h4>
                <div className="mt-4 space-y-2 text-sm flex-1">
                  <div>
                    <span className="font-semibold text-primary">Presentation: </span>
                    <span className="text-gray-700 dark:text-gray-300">{c.problem}</span>
                  </div>
                  <div>
                    <span className="font-semibold text-primary">Management: </span>
                    <span className="text-gray-700 dark:text-gray-300">{c.treatment}</span>
                  </div>
                  <div>
                    <span className="font-semibold text-primary">Outcome: </span>
                    <span className="text-gray-700 dark:text-gray-300">{c.outcome}</span>
                  </div>
                </div>
                <p className="mt-4 text-xs text-gray-400 dark:text-gray-500 border-t border-gray-100 dark:border-gray-700 pt-3">
                  {c.source}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ── Collaboration CTA ── */}
      <section className="section-padding bg-gradient-to-br from-primary to-primary-dark text-white">
        <div className="container-custom text-center">
          <BookOpen size={44} className="mx-auto mb-5 opacity-80" />
          <h2 className="font-heading text-3xl font-bold md:text-4xl">
            Interested in Collaboration?
          </h2>
          <p className="mt-4 text-base text-white/80 max-w-xl mx-auto">
            Open to academic collaboration, case study discussions, and research partnerships. Get in touch via email.
          </p>
          <div className="mt-8 flex justify-center flex-wrap gap-4">
            <a href="mailto:drakshata.bhand@gmail.com">
              <Button size="lg" className="gap-2 bg-white text-primary hover:bg-gray-100">
                drakshata.bhand@gmail.com
                <ChevronRight size={18} />
              </Button>
            </a>
            <a href={publicationsData.scholarUrl} target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="outline" className="gap-2 border-white text-white hover:bg-white/10">
                <ExternalLink size={18} />
                {t("viewScholar")}
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
