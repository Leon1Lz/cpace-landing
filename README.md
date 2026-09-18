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
- **🔗 Seamless Registration & LMS Integration Ready**: The **"Register"** button directly connects applicants to the official CPACE Philippines Linktree (`https://linktr.ee/cpaceph`), and can also be overridden via `NEXT_PUBLIC_REGISTER_URL`. The **"Learning Portal"** button directly opens the CPACE certifications LMS (`https://certifications.cpaceph.com/login`), and can also be overridden via `NEXT_PUBLIC_LMS_URL`.

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
4. (Optional) Set the Environment Variables in Vercel:
   - `NEXT_PUBLIC_REGISTER_URL`: Custom registration URL (defaults to `https://linktr.ee/cpaceph`).
   - `NEXT_PUBLIC_LMS_URL`: Custom LMS portal URL (defaults to `https://certifications.cpaceph.com/login`).
5. Click **"Deploy"**. Your site will be live in less than 60 seconds!

### Option 2: Deploy to Netlify

1. Push this repository to GitHub.
2. Go to [netlify.com](https://netlify.com) and click **"Add new site"** -> **"Import an existing project"**.
3. Select your repository. Netlify will auto-detect Next.js.
4. Click **"Deploy Site"**.

---

## ⚙️ Environment Variables

Create a `.env.local` file in the root directory to configure live email delivery and external portal links. Contact and newsletter forms require SMTP: without it, they return an unavailable error and retain the entered text instead of reporting a submission that was never delivered. `SMTP_PASSWORD` is also accepted when `SMTP_PASS` is unset.

On a hosted deployment, set these values in the hosting provider's environment settings and redeploy. A local `.env.local` file is not uploaded to GitHub. SMTP acceptance confirms the mail server accepted the notification; it does not guarantee inbox delivery.

```env
# ==========================================
# External Portals
# ==========================================
# Optional: Registration Link (defaults to official Linktree)
NEXT_PUBLIC_REGISTER_URL=https://linktr.ee/cpaceph

# Optional: URL of your LMS Portal (defaults to official portal)
NEXT_PUBLIC_LMS_URL=https://certifications.cpaceph.com/login

# ==========================================
# Live Email Delivery (SMTP / Nodemailer)
# ==========================================
# Gmail / Google Workspace / Custom Mail Server
SMTP_HOST=smtp.gmail.com
SMTP_PORT=465
SMTP_SECURE=true
SMTP_USER=info@cpaceph.com
SMTP_PASS=your-16-character-app-password

# Email destination for new website inquiries
CONTACT_EMAIL_TO=info@cpaceph.com
CONTACT_EMAIL_FROM="CPACE Inquiries" <info@cpaceph.com>

# Optional: Send automatic confirmation email to the sender
SEND_AUTO_REPLY=true
```

### 📧 Setting Up Gmail / Google Workspace SMTP:
1. Log into your Google Account for `info@cpaceph.com`.
2. Go to **Security** -> **2-Step Verification** (make sure it is turned ON).
3. Navigate to **App passwords** (or go to [https://myaccount.google.com/apppasswords](https://myaccount.google.com/apppasswords)).
4. Create an App password named **"CPACE Website"**.
5. Copy the generated 16-character code and paste it into `SMTP_PASS` in your `.env.local` or hosting provider environment variables (Vercel/Netlify).

---

## 📄 License & Copyright

© 2026 Center for Professional Advancement and Continuing Education, Inc. (CPACE Philippines). All rights reserved.
