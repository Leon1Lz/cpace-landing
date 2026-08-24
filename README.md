# CPACE Philippines — Official Landing Website

This is the standalone, production-ready landing and marketing website for **CPACE Philippines (Center for Professional Advancement & Continuing Education, Inc.)**.

It is completely decoupled from database, authentication, and LMS backend systems, allowing you to deploy it **immediately** to **Vercel**, **Netlify**, **Cloudflare Pages**, or any Node.js hosting platform with zero database setup.

---

## 🚀 Features

- **⚡ Lightning Fast & Lightweight**: Zero database overhead. Articles and insights are pre-bundled and statically generated for maximum SEO performance and sub-second page loads.
- **📱 Fully Responsive & Mobile Ready**: Clean collapsible header navigation, glassmorphism aesthetics, responsive grids, and touch-friendly mobile drawer.
- **📄 Complete Marketing Pages Included**:
  - **Home (`/`)**: Hero section, Continuing Education overview, Skills & value propositions, Institutional partners slideshow & statistics, Services grid, Latest Industry news, Contact form, and Footer.
  - **About Us (`/about`)**: Organizational profile, vision, mission, graduate metrics, and career advancement benefits.
  - **Services & Consultancy (`/services`)**: Detailed overview of the 6 core certification & consultancy tracks (CFMS, CMMS, COMS, Business Consultancy, etc.).
  - **Industry Insights & Articles (`/insights`)**: Dynamic listing with category filtering and interactive article reader (`/insights/[slug]`).
  - **Contact & Inquiries (`/#contact`)**: Inquiries form with automated feedback and direct department contact directory.
- **🔗 Seamless LMS Integration Ready**: Configurable `NEXT_PUBLIC_LMS_URL` so "Login" and "Register" buttons can seamlessly direct users to your Learning Management System when it goes live.

---

## 🛠️ Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router)
- **Library**: [React 19](https://react.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Language**: TypeScript

---

## 📦 Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the website.

### 3. Build for Production

```bash
npm run build
```

---

## 🌐 Deployment Guide

### Option 1: Deploy to Vercel (Recommended)

1. Push this repository to GitHub or GitLab.
2. Go to [vercel.com](https://vercel.com) and click **"Add New Project"**.
3. Import this repository.
4. (Optional) Set the Environment Variable in Vercel:
   - `NEXT_PUBLIC_LMS_URL`: The URL of your future LMS portal (e.g. `https://portal.cpaceph.com`).
5. Click **"Deploy"**. Your site will be live in less than 60 seconds!

### Option 2: Deploy to Netlify

1. Push this repository to GitHub.
2. Go to [netlify.com](https://netlify.com) and click **"Add new site"** -> **"Import an existing project"**.
3. Select your repository. Netlify will auto-detect Next.js.
4. Click **"Deploy Site"**.

---

## ⚙️ Environment Variables (Optional)

Create a `.env.local` file in the root directory if you want to link to your LMS portal:

```env
# Optional: URL of your main LMS Portal (when deployed)
NEXT_PUBLIC_LMS_URL=https://portal.cpaceph.com
```

If not provided, the Login and Register buttons gracefully point to `/#contact` for enrollment inquiries.

---

## 📄 License & Copyright

© 2026 Center for Professional Advancement and Continuing Education, Inc. (CPACE Philippines). All rights reserved.
