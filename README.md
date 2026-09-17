# Dr. Akshata Bhand — Veterinary Practice & Research Platform

Official professional website and digital clinic platform for **Dr. Akshata Bhand**, Livestock Development Officer (Class I Government Officer, Nandgaon, Nashik), Veterinary Physician, and PhD Scholar at the Indian Veterinary Research Institute (IVRI).

---

## 🐾 Overview

This platform provides accessible, evidence-based veterinary healthcare resources for companion animal owners and rural livestock farmers, alongside verified academic research in veterinary cardiology and internal medicine.

### Key Capabilities

- **Bilingual Experience**: Full native support for English (`/en`) and Marathi (`/mr`) with culturally and practically grounded veterinary terminology.
- **Dedicated Pathways**:
  - **Pet Owners**: Routine wellness, vaccinations, cardiology evaluations, diagnostics, and diet planning.
  - **Farmers & Livestock**: Cattle and buffalo care, heat detection, artificial insemination, disease alerts, and herd management.
  - **Academic & Research**: 13 verified publications from Google Scholar, metrics, and clinical case summaries.
- **Immediate Emergency Access**: Persistent floating action button (FAB) for direct phone calling and WhatsApp messaging to Dr. Akshata and coordination staff.
- **Appointment Scheduling**: Interactive multi-step booking with automated WhatsApp and email notification templates.
- **Farmer Corner**: Practical, step-by-step guidance designed for rural farmers in Maharashtra.

---

## 🛠️ Technology Stack

- **Framework**: [Next.js 14](https://nextjs.org/) (App Router, Server & Client Components)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Internationalization**: [next-intl](https://next-intl-docs.vercel.app/)
- **Database ORM**: [Prisma](https://www.prisma.io/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ or 20+
- npm, yarn, or pnpm

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/YashBhand/dr-akshata-bhand.git
   cd dr-akshata-bhand
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Set up environment variables**:
   Create a `.env` file in the root directory:
   ```env
   DATABASE_URL="postgres://postgres:postgres@localhost:51214/template1?sslmode=disable"
   ```

4. **Generate Prisma Client**:
   ```bash
   npx prisma generate
   ```

5. **Start the development server**:
   ```bash
   npm run dev
   ```

6. Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📁 Project Structure

```
├── app/
│   ├── [locale]/            # Localized routes (en, mr)
│   │   ├── about/           # Biography, timeline, clinical interests
│   │   ├── blog/            # Knowledge hub & health articles
│   │   ├── booking/         # Appointment scheduling system
│   │   ├── contact/         # Direct contact information & forms
│   │   ├── farmer-corner/   # Livestock guidance & farm visit scheduling
│   │   ├── research/        # Google Scholar verified publications & metrics
│   │   ├── services/        # Pet & livestock clinical services
│   │   ├── specializations/ # Focused clinical areas
│   │   └── page.tsx         # Modern, human-first homepage
│   └── globals.css          # Global styling & Tailwind directives
├── components/
│   ├── layout/              # Header, Footer
│   ├── providers/           # Theme & locale providers
│   └── ui/                  # Reusable UI components (Buttons, Cards, FAB)
├── content/
│   ├── messages/            # i18n translation dictionaries (en.json, mr.json)
│   └── publications.json    # Verified Google Scholar publication records
└── prisma/                  # Database schema & migrations
```

---

## 📞 Contact Information

- **Dr. Akshata Bhand** (Clinical & Emergency): `+91 8788198731`
- **Yash Bhand** (Assistance & Bookings): `+91 8262883668`
- **Email**: `drakshata.bhand@gmail.com`
- **Location**: Nandgaon, Nashik, Maharashtra, India

---

## 📄 License

All rights reserved © Dr. Akshata Bhand.
