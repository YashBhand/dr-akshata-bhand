import Link from "next/link";
import Image from "next/image";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FaqItem } from "@/components/ui/FaqItem";
import {
  BookOpen,
  ChevronRight,
  Search,
  Send,
  Calendar,
  Tag,
  Heart,
  ShieldCheck,
  Leaf,
  Dog,
  User,
} from "lucide-react";

type PageProps = {
  params: { locale: string };
};

export default async function BlogPage({ params: { locale } }: PageProps) {
  setRequestLocale(locale);
  const t = (await getTranslations("blog")).raw as any;
  const common = (await getTranslations("common")).raw as any;

  const categories = [
    { key: "all", label: t("filterAll") },
    { key: "puppy", label: t("categories.puppy") },
    { key: "vaccination", label: t("categories.vaccination") },
    { key: "heart", label: t("categories.heart") },
    { key: "tick", label: t("categories.tick") },
    { key: "cow", label: t("categories.cow") },
    { key: "firstAid", label: t("categories.firstAid") },
  ];

  const articles = [
    {
      title: "Complete Puppy Vaccination Schedule: A Guide for New Pet Parents",
      category: "vaccination",
      excerpt: "Learn about core vaccines, deworming schedules, and when to visit the vet for your new puppy.",
      image: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=800&h=500&fit=crop",
      readTime: "6 min read",
      date: "2025-07-15",
    },
    {
      title: "Recognizing Heart Disease Signs in Your Dog Early",
      category: "heart",
      excerpt: "Coughing, fatigue, and breathing issues could be signs of cardiac problems. Here's what to watch for.",
      image: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=800&h=500&fit=crop",
      readTime: "8 min read",
      date: "2025-07-10",
    },
    {
      title: "Tick Fever in Dogs: Prevention, Symptoms & Treatment",
      category: "tick",
      excerpt: "Everything you need to know about tick-borne diseases including Ehrlichia and Babesiosis.",
      image: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=800&h=500&fit=crop",
      readTime: "7 min read",
      date: "2025-07-05",
    },
    {
      title: "Maximizing Milk Production in Dairy Cows: Nutrition Guide",
      category: "cow",
      excerpt: "Balanced diet, proper feeding schedule, and management tips for better milk yield.",
      image: "https://images.unsplash.com/photo-1500595046743-cd271d694d30?w=800&h=500&fit=crop",
      readTime: "10 min read",
      date: "2025-06-28",
    },
    {
      title: "Kitten Care 101: From Feeding to Litter Training",
      category: "puppy",
      excerpt: "Essential tips for raising a healthy, happy kitten in their first crucial months.",
      image: "https://images.unsplash.com/photo-1513245543132-31f507417b26?w=800&h=500&fit=crop",
      readTime: "5 min read",
      date: "2025-06-20",
    },
    {
      title: "Pet First Aid: 5 Emergency Situations Every Owner Should Know",
      category: "firstAid",
      excerpt: "Choking, poisoning, heatstroke, bleeding, and seizures - immediate steps to save your pet.",
      image: "https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?w=800&h=500&fit=crop",
      readTime: "9 min read",
      date: "2025-06-15",
    },
  ];

  const faqBlog = [
    {
      question: "How often should I take my dog to the vet?",
      answer: "Adult dogs should visit the vet at least once annually for checkups and vaccinations. Puppies need visits every 3-4 weeks until 4 months old. Senior dogs (7+ years) benefit from twice-yearly checkups.",
    },
    {
      question: "What human foods are dangerous for pets?",
      answer: "Avoid chocolate, grapes/raisins, onions, garlic, xylitol (artificial sweetener), alcohol, caffeine, macadamia nuts, and cooked bones. When in doubt, don't share human food without vet confirmation.",
    },
    {
      question: "How can I tell if my cow is sick?",
      answer: "Watch for reduced appetite, decreased milk yield, changes in droppings, lethargy, temperature changes, coughing, difficulty breathing, or unusual discharge. Contact your vet at the earliest sign.",
    },
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-primary/10 via-surface to-accent/10 dark:from-primary/20 dark:via-gray-900 dark:to-accent/20">
        <div className="container-custom px-4 py-20 md:px-8 md:py-28">
          <div className="text-center max-w-3xl mx-auto">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
              <BookOpen size={16} />
              <span>Knowledge Hub</span>
            </div>
            <h1 className="font-heading text-4xl font-bold tracking-tight text-gray-900 md:text-5xl dark:text-white">
              {t("title")}
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              {t("subtitle")}
            </p>

            {/* Ask Doctor */}
            <div className="mt-10 max-w-xl mx-auto">
              <Card className="p-6">
                <h3 className="font-heading text-lg font-bold text-gray-900 dark:text-white flex items-center gap-2">
                  <User size={20} className="text-primary" />
                  {t("askDoctor")}
                </h3>
                <form className="mt-4 space-y-3">
                  <div className="grid gap-3 sm:grid-cols-2">
                    <input
                      type="text"
                      placeholder="Your name"
                      className="w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-900 outline-none focus:border-primary focus:bg-white dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                    />
                    <input
                      type="email"
                      placeholder="Email"
                      className="w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-900 outline-none focus:border-primary focus:bg-white dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                    />
                  </div>
                  <textarea
                    rows={3}
                    placeholder={t("askPlaceholder")}
                    className="w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-900 outline-none focus:border-primary focus:bg-white dark:border-gray-600 dark:bg-gray-700 dark:text-white resize-none"
                  />
                  <Button className="w-full gap-2">
                    <Send size={16} />
                    {t("submit")}
                  </Button>
                </form>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="bg-white dark:bg-gray-900 border-b border-gray-100 dark:border-gray-800 sticky top-[73px] z-30">
        <div className="container-custom px-4 md:px-8">
          <div className="flex gap-2 py-4 overflow-x-auto no-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat.key}
                className={`shrink-0 rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  cat.key === "all"
                    ? "bg-primary text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Articles */}
      <section className="section-padding bg-white dark:bg-gray-900">
        <div className="container-custom">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {articles.map((article, idx) => (
              <Card key={idx} className="group flex flex-col p-0 overflow-hidden">
                <Link href="#" className="relative block aspect-[16/10] overflow-hidden">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="rounded-full bg-white/95 backdrop-blur px-3 py-1 text-xs font-semibold text-primary shadow-sm">
                      {t(`categories.${article.category}`)}
                    </span>
                  </div>
                </Link>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-4 text-xs text-gray-500 dark:text-gray-400 mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar size={14} />
                      {new Date(article.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
                    </span>
                    <span className="flex items-center gap-1">
                      <Tag size={14} />
                      {article.readTime}
                    </span>
                  </div>
                  <Link href="#">
                    <h3 className="font-heading text-lg font-bold text-gray-900 dark:text-white group-hover:text-primary transition-colors line-clamp-2">
                      {article.title}
                    </h3>
                  </Link>
                  <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 line-clamp-3 flex-1">
                    {article.excerpt}
                  </p>
                  <Link
                    href="#"
                    className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary hover:gap-2 transition-all"
                  >
                    {common("readMore")}
                    <ChevronRight size={16} />
                  </Link>
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button variant="outline" size="lg">
              {common("viewAll")}
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-surface dark:bg-gray-800/50">
        <div className="container-custom max-w-3xl">
          <SectionHeading
            title="Common Pet Health Questions"
            subtitle="Answers to frequently asked questions from pet parents and farmers"
          />
          <div className="space-y-4">
            {faqBlog.map((item, idx) => (
              <FaqItem
                key={idx}
                question={item.question}
                answer={item.answer}
                defaultOpen={idx === 0}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-br from-accent to-accent-dark text-white">
        <div className="container-custom text-center">
          <h2 className="font-heading text-3xl font-bold md:text-4xl">
            Have More Questions?
          </h2>
          <p className="mt-4 text-lg text-white/80 max-w-2xl mx-auto">
            Schedule a consultation with Dr. Akshada for personalized advice regarding your pet or livestock.
          </p>
          <div className="mt-8 flex justify-center flex-wrap gap-4">
            <Link href={`/${locale}/booking`}>
              <Button size="lg" className="gap-2 bg-white text-accent hover:bg-gray-100">
                Book Consultation
                <ChevronRight size={20} />
              </Button>
            </Link>
            <a href="https://wa.me/918788198731" target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="outline" className="gap-2 border-white text-white hover:bg-white/10">
                WhatsApp Us
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
