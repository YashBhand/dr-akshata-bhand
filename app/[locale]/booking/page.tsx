"use client";

import { useState } from "react";
import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  Clock,
  Users,
  Heart,
  CreditCard,
  ChevronRight,
  ChevronLeft,
  CheckCircle2,
  Upload,
  Phone,
  Mail,
  FileText,
  Sparkles,
  Stethoscope,
  MessageCircle,
  CalendarCheck,
} from "lucide-react";

const steps = ["step1", "step2", "step3", "step4"];

const animalOptions = [
  "Dog", "Cat", "Cattle / Cow", "Buffalo", "Goat", "Sheep", "Horse",
  "Rabbit", "Bird", "Poultry / Chicken", "Other"
];

export default function BookingPage() {
  const t = useTranslations("booking");
  const common = useTranslations("common");
  const locale = useLocale();
  const [currentStep, setCurrentStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    ownerName: "",
    phone: "",
    email: "",
    animalType: "",
    breed: "",
    age: "",
    weight: "",
    complaint: "",
    preferredDate: "",
    preferredTime: "",
    reports: null as File | null,
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const updateField = (field: string, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }));
    }
  };

  const validateStep = (step: number): boolean => {
    const newErrors: Record<string, string> = {};
    if (step === 1) {
      if (!formData.ownerName.trim()) newErrors.ownerName = "Name is required";
      if (!formData.phone.trim()) newErrors.phone = "Phone is required";
      else if (formData.phone.replace(/\D/g, "").length < 10) newErrors.phone = "Enter valid phone number";
    }
    if (step === 2) {
      if (!formData.animalType) newErrors.animalType = "Please select animal type";
      if (!formData.complaint.trim()) newErrors.complaint = "Please describe the complaint";
    }
    if (step === 3) {
      if (!formData.preferredDate) newErrors.preferredDate = "Select a date";
      if (!formData.preferredTime) newErrors.preferredTime = "Select a time";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const next = () => {
    if (validateStep(currentStep)) {
      if (currentStep < 4) setCurrentStep(currentStep + 1);
    }
  };

  const back = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const submit = () => {
    if (validateStep(currentStep)) {
      setSubmitted(true);
    }
  };

  if (submitted) {
    return (
      <div className="overflow-hidden">
        <section className="section-padding bg-gradient-to-br from-primary/10 via-surface to-accent/10 dark:from-primary/20 dark:via-gray-900 dark:to-accent/20">
          <div className="container-custom px-4 md:px-8">
            <div className="max-w-2xl mx-auto text-center">
              <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-green-500/10 text-green-500">
                <CheckCircle2 size={56} />
              </div>
              <h1 className="font-heading text-4xl font-bold text-gray-900 dark:text-white">
                {t("success")}
              </h1>
              <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
                We'll contact you shortly on WhatsApp or phone to confirm your appointment details.
              </p>

              <Card className="mt-10 text-left">
                <div className="flex items-center gap-2 mb-6 pb-4 border-b border-gray-100 dark:border-gray-700">
                  <Sparkles className="text-gold" size={20} />
                  <span className="font-semibold text-gray-900 dark:text-white">
                    {t("reference")}: BK{Math.floor(Math.random() * 900000 + 100000)}
                  </span>
                </div>
                <div className="grid gap-4 sm:grid-cols-2 text-sm">
                  <div>
                    <p className="text-gray-500 dark:text-gray-400">{t("ownerName")}</p>
                    <p className="font-semibold text-gray-900 dark:text-white">{formData.ownerName || "-"}</p>
                  </div>
                  <div>
                    <p className="text-gray-500 dark:text-gray-400">{t("phone")}</p>
                    <p className="font-semibold text-gray-900 dark:text-white">{formData.phone || "-"}</p>
                  </div>
                  <div>
                    <p className="text-gray-500 dark:text-gray-400">{t("animalType")}</p>
                    <p className="font-semibold text-gray-900 dark:text-white">{formData.animalType || "-"}</p>
                  </div>
                  <div>
                    <p className="text-gray-500 dark:text-gray-400">{t("breed")}</p>
                    <p className="font-semibold text-gray-900 dark:text-white">{formData.breed || "-"}</p>
                  </div>
                  <div>
                    <p className="text-gray-500 dark:text-gray-400">{t("preferredDateTime")}</p>
                    <p className="font-semibold text-gray-900 dark:text-white">
                      {formData.preferredDate || "-"} at {formData.preferredTime || "-"}
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-500 dark:text-gray-400">{t("consultationFee")}</p>
                    <p className="font-semibold text-primary">₹500</p>
                  </div>
                </div>
              </Card>

              <div className="mt-10 flex flex-wrap justify-center gap-4">
                <Link href={`/${locale}`}>
                  <Button variant="outline" size="lg" className="gap-2">
                    <ChevronLeft size={20} />
                    Back to Home
                  </Button>
                </Link>
                <a href="https://wa.me/918788198731" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" variant="accent" className="gap-2">
                    WhatsApp Us
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }

  const stepIcons = [Users, Heart, Clock, Stethoscope];

  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-primary/10 via-surface to-accent/10 dark:from-primary/20 dark:via-gray-900 dark:to-accent/20">
        <div className="container-custom px-4 py-16 md:px-8 md:py-20">
          <div className="text-center max-w-3xl mx-auto">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
              <CalendarCheck size={16} />
              <span>Online Booking</span>
            </div>
            <h1 className="font-heading text-4xl font-bold tracking-tight text-gray-900 md:text-5xl dark:text-white">
              {t("title")}
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              {t("subtitle")}
            </p>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="bg-white dark:bg-gray-900 border-b border-gray-100 dark:border-gray-800 sticky top-[73px] z-30">
        <div className="container-custom px-4 md:px-8">
          <div className="flex items-center justify-between py-4 max-w-2xl mx-auto">
            {steps.map((s, idx) => {
              const Icon = stepIcons[idx];
              const stepNum = idx + 1;
              const active = currentStep === stepNum;
              const done = currentStep > stepNum;
              return (
                <div key={s} className="flex items-center">
                  <div className="flex flex-col items-center">
                    <div
                      className={`flex h-10 w-10 items-center justify-center rounded-full text-sm font-semibold transition-colors ${
                        active
                          ? "bg-primary text-white shadow-lg shadow-primary/30"
                          : done
                          ? "bg-green-500 text-white"
                          : "bg-gray-100 text-gray-500 dark:bg-gray-800 dark:text-gray-400"
                      }`}
                    >
                      {done ? <CheckCircle2 size={18} /> : <Icon size={18} />}
                    </div>
                    <p
                      className={`mt-2 hidden sm:block text-xs font-medium ${
                        active ? "text-primary" : "text-gray-500 dark:text-gray-400"
                      }`}
                    >
                      {t(s)}
                    </p>
                  </div>
                  {stepNum < 4 && (
                    <div
                      className={`mx-2 md:mx-4 h-1 w-8 md:w-16 rounded-full ${
                        currentStep > stepNum ? "bg-green-500" : "bg-gray-200 dark:bg-gray-700"
                      }`}
                    />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="section-padding bg-white dark:bg-gray-900 pt-12 md:pt-16">
        <div className="container-custom max-w-3xl mx-auto">
          <Card className="shadow-xl p-6 md:p-10">
            <h2 className="font-heading text-2xl font-bold text-gray-900 dark:text-white">
              Step {currentStep}: {t(steps[currentStep - 1])}
            </h2>

            <div className="mt-6 space-y-5">
              {currentStep === 1 && (
                <>
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-300">
                      {t("ownerName")} *
                    </label>
                    <input
                      type="text"
                      value={formData.ownerName}
                      onChange={(e) => updateField("ownerName", e.target.value)}
                      placeholder="Enter your full name"
                      className={`w-full rounded-lg border px-4 py-3 text-gray-900 outline-none focus:bg-white dark:text-white dark:focus:bg-gray-700 ${
                        errors.ownerName
                          ? "border-red-400 bg-red-50 dark:bg-red-950/30"
                          : "border-gray-200 bg-gray-50 focus:border-primary dark:border-gray-600 dark:bg-gray-700"
                      }`}
                    />
                    {errors.ownerName && (
                      <p className="mt-1 text-xs text-red-500">{errors.ownerName}</p>
                    )}
                  </div>

                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-300">
                      {t("phone")} *
                    </label>
                    <div className="relative">
                      <Phone size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => updateField("phone", e.target.value)}
                        placeholder="+91 98765 43210"
                        className={`w-full rounded-lg border pl-12 pr-4 py-3 text-gray-900 outline-none focus:bg-white dark:text-white dark:focus:bg-gray-700 ${
                          errors.phone
                            ? "border-red-400 bg-red-50 dark:bg-red-950/30"
                            : "border-gray-200 bg-gray-50 focus:border-primary dark:border-gray-600 dark:bg-gray-700"
                        }`}
                      />
                    </div>
                    {errors.phone && (
                      <p className="mt-1 text-xs text-red-500">{errors.phone}</p>
                    )}
                  </div>

                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-300">
                      {t("email")}
                    </label>
                    <div className="relative">
                      <Mail size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => updateField("email", e.target.value)}
                        placeholder="your@email.com (optional)"
                        className="w-full rounded-lg border border-gray-200 bg-gray-50 pl-12 pr-4 py-3 text-gray-900 outline-none focus:border-primary focus:bg-white dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:focus:bg-gray-700"
                      />
                    </div>
                  </div>
                </>
              )}

              {currentStep === 2 && (
                <>
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-300">
                      {t("animalType")} *
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                      {animalOptions.map((a) => (
                        <button
                          key={a}
                          type="button"
                          onClick={() => updateField("animalType", a)}
                          className={`rounded-lg border px-3 py-2.5 text-sm font-medium transition-colors ${
                            formData.animalType === a
                              ? "border-primary bg-primary/10 text-primary"
                              : "border-gray-200 bg-gray-50 text-gray-700 hover:border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200"
                          }`}
                        >
                          {a}
                        </button>
                      ))}
                    </div>
                    {errors.animalType && (
                      <p className="mt-2 text-xs text-red-500">{errors.animalType}</p>
                    )}
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-300">
                        {t("breed")}
                      </label>
                      <input
                        type="text"
                        value={formData.breed}
                        onChange={(e) => updateField("breed", e.target.value)}
                        placeholder="e.g. Labrador, Holstein"
                        className="w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-gray-900 outline-none focus:border-primary focus:bg-white dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-300">
                          {t("age")}
                        </label>
                        <input
                          type="text"
                          value={formData.age}
                          onChange={(e) => updateField("age", e.target.value)}
                          placeholder="e.g. 2 yrs"
                          className="w-full rounded-lg border border-gray-200 bg-gray-50 px-3 py-3 text-gray-900 outline-none focus:border-primary focus:bg-white dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                        />
                      </div>
                      <div>
                        <label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-300">
                          {t("weight")}
                        </label>
                        <input
                          type="text"
                          value={formData.weight}
                          onChange={(e) => updateField("weight", e.target.value)}
                          placeholder="e.g. 20 kg"
                          className="w-full rounded-lg border border-gray-200 bg-gray-50 px-3 py-3 text-gray-900 outline-none focus:border-primary focus:bg-white dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-300">
                      {t("complaint")} *
                    </label>
                    <textarea
                      rows={4}
                      value={formData.complaint}
                      onChange={(e) => updateField("complaint", e.target.value)}
                      placeholder="Describe the symptoms, how long they've been present, any previous treatment..."
                      className={`w-full rounded-lg border px-4 py-3 text-gray-900 outline-none focus:bg-white dark:text-white resize-none dark:focus:bg-gray-700 ${
                        errors.complaint
                          ? "border-red-400 bg-red-50 dark:bg-red-950/30"
                          : "border-gray-200 bg-gray-50 focus:border-primary dark:border-gray-600 dark:bg-gray-700"
                      }`}
                    />
                    {errors.complaint && (
                      <p className="mt-1 text-xs text-red-500">{errors.complaint}</p>
                    )}
                  </div>

                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-300">
                      {t("uploadReports")}
                    </label>
                    <label className="flex cursor-pointer items-center gap-3 rounded-xl border-2 border-dashed border-gray-200 bg-gray-50 p-5 hover:border-primary/50 hover:bg-primary/5 transition-colors dark:border-gray-600 dark:bg-gray-700 dark:hover:border-primary">
                      <Upload size={24} className="text-gray-400" />
                      <div>
                        <p className="text-sm font-medium text-gray-700 dark:text-gray-200">
                          {formData.reports ? formData.reports.name : "Click to upload or drag files"}
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                          PDF, JPG, PNG up to 10MB
                        </p>
                      </div>
                      <input
                        type="file"
                        accept=".pdf,.jpg,.jpeg,.png"
                        className="hidden"
                        onChange={(e) => updateField("reports", e.target.files?.[0] || null)}
                      />
                    </label>
                  </div>
                </>
              )}

              {currentStep === 3 && (
                <>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-300">
                        Preferred Date *
                      </label>
                      <input
                        type="date"
                        value={formData.preferredDate}
                        onChange={(e) => updateField("preferredDate", e.target.value)}
                        min={new Date().toISOString().split("T")[0]}
                        className={`w-full rounded-lg border px-4 py-3 text-gray-900 outline-none focus:bg-white dark:text-white dark:focus:bg-gray-700 ${
                          errors.preferredDate
                            ? "border-red-400 bg-red-50 dark:bg-red-950/30"
                            : "border-gray-200 bg-gray-50 focus:border-primary dark:border-gray-600 dark:bg-gray-700"
                        }`}
                      />
                      {errors.preferredDate && (
                        <p className="mt-1 text-xs text-red-500">{errors.preferredDate}</p>
                      )}
                    </div>
                    <div>
                      <label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-300">
                        Preferred Time *
                      </label>
                      <select
                        value={formData.preferredTime}
                        onChange={(e) => updateField("preferredTime", e.target.value)}
                        className={`w-full rounded-lg border px-4 py-3 text-gray-900 outline-none focus:bg-white dark:text-white dark:focus:bg-gray-700 ${
                          errors.preferredTime
                            ? "border-red-400 bg-red-50 dark:bg-red-950/30"
                            : "border-gray-200 bg-gray-50 focus:border-primary dark:border-gray-600 dark:bg-gray-700"
                        }`}
                      >
                        <option value="">Select slot</option>
                        <option value="10:00 AM">10:00 AM - Morning</option>
                        <option value="11:00 AM">11:00 AM - Morning</option>
                        <option value="12:00 PM">12:00 PM - Noon</option>
                        <option value="02:00 PM">02:00 PM - Afternoon</option>
                        <option value="04:00 PM">04:00 PM - Evening</option>
                        <option value="05:00 PM">05:00 PM - Evening</option>
                        <option value="06:00 PM">06:00 PM - Evening</option>
                      </select>
                      {errors.preferredTime && (
                        <p className="mt-1 text-xs text-red-500">{errors.preferredTime}</p>
                      )}
                    </div>
                  </div>

                  <div className="rounded-2xl bg-primary/5 border border-primary/10 p-5 dark:bg-primary/10">
                    <h4 className="font-semibold text-gray-900 dark:text-white flex items-center gap-2">
                      <Clock size={18} className="text-primary" />
                      Working Hours
                    </h4>
                    <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">
                      Mon - Sat: 10:00 AM to 7:00 PM | Emergency: 24/7
                    </p>
                    <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                      Note: We will confirm the final slot via WhatsApp/Phone.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-gray-100 p-5 dark:border-gray-700">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-4">
                      Booking Summary
                    </h4>
                    <div className="grid gap-3 text-sm sm:grid-cols-2">
                      <div>
                        <p className="text-gray-500 dark:text-gray-400">{t("ownerName")}</p>
                        <p className="font-medium text-gray-900 dark:text-white">{formData.ownerName || "-"}</p>
                      </div>
                      <div>
                        <p className="text-gray-500 dark:text-gray-400">{t("animalType")}</p>
                        <p className="font-medium text-gray-900 dark:text-white">{formData.animalType || "-"}</p>
                      </div>
                      <div>
                        <p className="text-gray-500 dark:text-gray-400">Breed / Age</p>
                        <p className="font-medium text-gray-900 dark:text-white">
                          {[formData.breed, formData.age].filter(Boolean).join(", ") || "-"}
                        </p>
                      </div>
                      <div>
                        <p className="text-gray-500 dark:text-gray-400">{t("consultationFee")}</p>
                        <p className="font-semibold text-primary">₹500</p>
                      </div>
                    </div>
                  </div>
                </>
              )}

              {currentStep === 4 && (
                <>
                  <div className="rounded-2xl bg-gradient-to-br from-primary/5 via-white to-accent/5 border border-gray-100 p-6 md:p-8 dark:from-primary/10 dark:via-gray-800 dark:to-accent/10 dark:border-gray-700">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-white">
                        <FileText size={24} />
                      </div>
                      <div>
                        <h3 className="font-heading text-xl font-bold text-gray-900 dark:text-white">
                          Appointment Summary
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          Review details before confirming
                        </p>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="grid gap-3 text-sm sm:grid-cols-2">
                        <div>
                          <p className="text-gray-500 dark:text-gray-400">{t("ownerName")}</p>
                          <p className="font-semibold text-gray-900 dark:text-white">{formData.ownerName}</p>
                        </div>
                        <div>
                          <p className="text-gray-500 dark:text-gray-400">{t("phone")}</p>
                          <p className="font-semibold text-gray-900 dark:text-white">{formData.phone}</p>
                        </div>
                        <div>
                          <p className="text-gray-500 dark:text-gray-400">{t("email")}</p>
                          <p className="font-semibold text-gray-900 dark:text-white">{formData.email || "-"}</p>
                        </div>
                        <div>
                          <p className="text-gray-500 dark:text-gray-400">{t("preferredDateTime")}</p>
                          <p className="font-semibold text-gray-900 dark:text-white">
                            {formData.preferredDate} at {formData.preferredTime}
                          </p>
                        </div>
                        <div>
                          <p className="text-gray-500 dark:text-gray-400">{t("animalType")}</p>
                          <p className="font-semibold text-gray-900 dark:text-white">{formData.animalType}</p>
                        </div>
                        <div>
                          <p className="text-gray-500 dark:text-gray-400">Breed / Age / Weight</p>
                          <p className="font-semibold text-gray-900 dark:text-white">
                            {[formData.breed, formData.age, formData.weight].filter(Boolean).join(" / ") || "-"}
                          </p>
                        </div>
                      </div>

                      <div className="rounded-xl bg-white dark:bg-gray-900 p-4 border border-gray-100 dark:border-gray-700">
                        <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-2">
                          {t("complaint")}
                        </p>
                        <p className="text-gray-900 dark:text-white">{formData.complaint}</p>
                      </div>

                      <div className="flex items-center justify-between rounded-xl bg-primary text-white p-5">
                        <div>
                          <p className="text-sm text-white/80">{t("consultationFee")}</p>
                          <p className="font-heading text-3xl font-bold">₹500</p>
                        </div>
                        <CreditCard size={36} className="opacity-90" />
                      </div>
                    </div>
                  </div>

                  <div className="rounded-2xl border border-gray-100 bg-gray-50 p-5 dark:border-gray-700 dark:bg-gray-800/50">
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      <CheckCircle2 size={18} className="inline mr-2 text-green-500 -mt-0.5" />
                      <strong>Secure Booking:</strong> Your consultation fee can be paid at the clinic or online after confirmation. You will receive booking confirmation via WhatsApp within 30 minutes during working hours.
                    </p>
                  </div>
                </>
              )}
            </div>

            {/* Nav */}
            <div className="mt-8 flex items-center justify-between gap-4 border-t border-gray-100 pt-6 dark:border-gray-700">
              <Button
                type="button"
                variant="ghost"
                onClick={back}
                disabled={currentStep === 1}
                className="gap-2"
              >
                <ChevronLeft size={18} />
                {common("back")}
              </Button>

              {currentStep < 4 ? (
                <Button type="button" onClick={next} className="gap-2" size="lg">
                  {common("next")}
                  <ChevronRight size={18} />
                </Button>
              ) : (
                <Button type="button" onClick={submit} className="gap-2" size="lg" variant="primary">
                  {t("submit")}
                  <CheckCircle2 size={18} />
                </Button>
              )}
            </div>
          </Card>

          {/* Contact Strip */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 text-center sm:text-left">
            <div className="flex items-center gap-3 rounded-full bg-gray-100 px-5 py-2.5 dark:bg-gray-800">
              <Phone size={18} className="text-primary" />
              <div>
                <p className="text-xs text-gray-500 dark:text-gray-400">Need Help?</p>
                <a href="tel:+918788198731" className="text-sm font-semibold text-gray-900 hover:text-primary dark:text-white">
                  +91 8788198731
                </a>
              </div>
            </div>
            <a
              href="https://wa.me/918788198731"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-full bg-green-50 px-5 py-2.5 hover:bg-green-100 transition-colors"
            >
              <MessageCircle size={18} className="text-green-600" />
              <div>
                <p className="text-xs text-gray-500">Or WhatsApp</p>
                <p className="text-sm font-semibold text-green-700">Quick Response</p>
              </div>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
