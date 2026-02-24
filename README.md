# 🚀 Developer Portfolio — React + Tailwind CSS

A modern, professional, fully responsive developer portfolio template built with **React (Vite)**, **Tailwind CSS**, and **Framer Motion**.

![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-06B6D4?logo=tailwindcss&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-11-FF0050?logo=framer&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-6-646CFF?logo=vite&logoColor=white)

---

## ✨ Features

| Feature | Description |
| --- | --- |
| **Dark Mode** | Toggle between light/dark themes (persisted in localStorage) |
| **Smooth Scrolling** | Navbar links scroll smoothly to each section |
| **Responsive** | Mobile-first design with hamburger menu |
| **Animations** | Scroll-reveal effects, hover animations via Framer Motion |
| **Project Filtering** | Filter projects by category (All / Frontend / Backend / Full Stack) |
| **Project Modal** | Click a card for full project details |
| **Contact Form** | Client-side validated form with placeholder submit logic |
| **SEO Ready** | Meta tags, Open Graph, and semantic HTML |
| **Loading Screen** | Animated loader on first paint |
| **Back to Top** | Floating button appears on scroll |
| **Clean Code** | Well-commented, beginner-friendly, production-ready |

---

## 📁 Folder Structure

```
├── public/
│   └── favicon.svg
├── src/
│   ├── assets/               # Images, icons, static files
│   ├── components/
│   │   ├── ui/
│   │   │   ├── Badge.jsx     # Pill-style tag component
│   │   │   ├── Button.jsx    # Reusable button / link
│   │   │   └── SectionTitle.jsx
│   │   ├── Loader.jsx        # Full-screen loading animation
│   │   ├── Navbar.jsx        # Sticky nav + mobile menu
│   │   ├── ThemeToggle.jsx   # Dark/light switch
│   │   ├── ScrollReveal.jsx  # Framer Motion reveal wrapper
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── ProjectModal.jsx
│   │   ├── Experience.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── data/
│   │   └── portfolio.js      # ⭐ ALL editable content lives here
│   ├── hooks/
│   │   ├── useDarkMode.js    # Theme persistence hook
│   │   └── useScrollReveal.js # Animation variant presets
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css             # Tailwind layers + custom styles
├── index.html
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
├── package.json
└── README.md
```

---

## 🛠️ Getting Started

### Prerequisites

- **Node.js** ≥ 18
- **npm** or **yarn**

### Installation

```bash
# 1. Clone the repository (or copy the files)
git clone <your-repo-url>
cd developer-portfolio

# 2. Install dependencies
npm install

# 3. Start the dev server
npm run dev
```

The site will be available at **http://localhost:5173**.

### Build for Production

```bash
npm run build
npm run preview   # preview the production build locally
```

---

## 🎨 Customisation Guide

### 1. Edit Your Content

Open **`src/data/portfolio.js`** and replace the placeholder values:

- `personalInfo` — name, subtitle, tagline, resume URL, social links
- `aboutData` — profile image, summary, highlight stats
- `skillsData` — categorised skills with proficiency levels
- `projectsData` — project cards with images, descriptions, tech stacks
- `experienceData` — work history entries

### 2. Change Colors

Edit `tailwind.config.js` → `theme.extend.colors.primary` to switch the accent palette.

### 3. Add Your Images

Drop images into `src/assets/` or `public/` and update the URLs in `portfolio.js`.

### 4. Connect the Contact Form

In `src/components/Contact.jsx`, replace the `handleSubmit` placeholder with your preferred service:
- [EmailJS](https://www.emailjs.com/)
- [Formspree](https://formspree.io/)
- Your own API endpoint

### 5. Update SEO

Edit `index.html` meta tags (title, description, Open Graph images).

---

## 📦 Tech Stack

| Tool | Purpose |
| --- | --- |
| [React 18](https://react.dev/) | UI library |
| [Vite](https://vitejs.dev/) | Build tool & dev server |
| [Tailwind CSS 3](https://tailwindcss.com/) | Utility-first styling |
| [Framer Motion](https://www.framer.com/motion/) | Animations |
| [React Icons](https://react-icons.github.io/react-icons/) | Icon library |

---

## 📄 License

This template is open-source and free to use for personal and commercial projects. Attribution is appreciated but not required.

---

## 🙏 Credits

Built with ❤️ as a reusable starting point for developer portfolios.
"# My_Portfolio" 
