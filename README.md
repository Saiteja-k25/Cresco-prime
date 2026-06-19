# Cresco Prime

> **Where Quant Precision Meets Multi-Asset Alpha**

A corporate prop trading firm platform built for Cresco Prime, Hyderabad — providing institutional trading terminals backed by organizational capital and structured trading education.

**Live:** (https://cresco-prime-git-main-projectcrescos-projects.vercel.app/)

---

## Tech Stack

| Layer | Tech |
|---|---|
| Frontend | React 18 + Vite |
| Routing | React Router v6 |
| Styling | Tailwind CSS |
| Animation | GSAP + ScrollTrigger, Framer Motion |
| Smooth Scroll | Lenis |
| Icons | Lucide React |
| Charts | Recharts |
| Auth | Firebase (Email/Password + Google OAuth) |
| Deployment | Vercel |

---

## Pages

| Route | Page |
|---|---|
| `/` | Home — Hero + bull scroll animation |
| `/about` | About — Team cards (Kalyan + Varun) |
| `/services` | Services — Accordion cards |
| `/contact` | Contact — mailto form |
| `/careers` | Careers — Job accordions + apply form |
| `/login` | Login — Two-panel + Google OAuth |
| `/signup` | Signup — Two-panel + Google OAuth |
| `/dashboard` | Dashboard — Protected route |
| `/privacy` | Privacy Policy |
| `/terms` | Terms of Use |

---

## Project Structure

src/
components/
Navbar.jsx
Footer.jsx
Layout.jsx
BullHero.jsx
BullLogo.jsx        ← SVG bull logo component
Logo.jsx
PageLoader.jsx      ← Bull + spinning ring loader
ScrollToTop.jsx
StatsCounter.jsx
GoldButton.jsx
ProtectedRoute.jsx
pages/
Home.jsx
About.jsx
Services.jsx
Contact.jsx
Careers.jsx
Login.jsx
Signup.jsx
Dashboard.jsx
PrivacyPolicy.jsx
Terms.jsx
config/
firebase.js
context/
AuthContext.jsx
hooks/
useAuth.js

---

## Local Development

```bash
npm install
npm run dev
```

Runs at `http://localhost:5173`

---

## Deployment

Auto-deployed to Vercel on every push to `main`.

Firebase authorized domains included `cresco-prime.vercel.app`.

---

## Status

- [x] Landing page with bull scroll animation (GSAP)
- [x] All public pages
- [x] Firebase Auth — Email + Google OAuth
- [x] Protected dashboard with portfolio chart and positions table
- [x] Mobile responsive
- [x] Page loader
- [ ] Dashboard rebuild — cTrader-style with candlestick charts
- [ ] Live market data (Yahoo Finance proxy)
- [ ] Azure database integration
- [ ] Custom domain (crescoprime.com)

---

## Contact

**HR:** hr@crescoprime.com  
**Founder:** kalyan@crescoprime.com  
**Phone:** +91 7993047034  
**LinkedIn:** [Cresco Prime](https://www.linkedin.com/company/cresco-prime/)

## Author

Built by **Kurapati Saiteja**
[LinkedIn](https://www.linkedin.com/in/kurapati-saiteja-06343724b/) · [GitHub](https://github.com/Saiteja-k25) · kurapatisaitejas@gmail.com · +91 6305656651
