# 🌟 Sanika H P — AI & Data Science Portfolio

A modern, responsive, high-performance personal portfolio website built with **React JS**, **Vite**, and **Vanilla CSS** for an undergraduate **Artificial Intelligence and Data Science** student at **REVA University, Bengaluru**.

---

## ✨ Features & Highlights

- **⚡ Modern AI / Cyber Dark Aesthetic**: Deep space slate background with neon cyan, indigo, and purple accents.
- **🕸️ Interactive Neural Network Canvas**: Canvas-based background animation reacting dynamically to cursor movement.
- **📱 100% Fully Responsive**: Optimized layouts for mobile phones, tablets, laptops, and ultra-wide displays.
- **🎯 Dynamic Hero Section**: Real-time typing subtitle, status pill, quick call-to-action buttons, and interactive terminal code card.
- **📖 Comprehensive Sections**:
  1. **Hero**: Quick intro, CTAs, social profiles, and AI stats.
  2. **About Me**: Academic context (REVA University 3rd Sem, Hassan origin), focus areas, and quick facts.
  3. **Education Timeline**: Visual milestone cards for REVA University & Pre-University College (PUC Hassan).
  4. **Skills Matrix**: Categorized filterable skills across AI/DS, Databases/Tools, and Web Technologies.
  5. **Featured Projects**: Modular project cards with tech tags, GitHub links, and live demos.
  6. **Learning Journey**: Semester-by-semester undergraduate progress roadmap.
  7. **Certifications & Workshops**: Modular placeholder cards for courses, hackathons, and certifications.
  8. **Contact Section**: One-click clipboard copy for email & phone, direct mail links, and contact form.
  9. **Footer**: Quick navigation links, copyright, and social links.
- **📄 Resume Preview & Print Modal**: Printable, responsive CV preview with 1-click PDF download/print.
- **🔔 Interactive Toast Notifications**: Sleek floating feedback messages for user interactions.
- **🔝 Smooth Back-to-Top**: Floating button triggered on scroll.

---

## 🚀 Quick Start Guide

### 1. Prerequisites
Ensure you have [Node.js](https://nodejs.org/) (version 18 or higher) installed on your computer.

### 2. Install Dependencies
Open your terminal in the project directory and run:
```bash
npm install
```

### 3. Run the Development Server
Start the local development server:
```bash
npm run dev
```
Open your browser and navigate to:
```
http://localhost:5173
```

### 4. Build for Production
To create an optimized production build:
```bash
npm run build
```

---

## 🛠️ How to Customize Your Portfolio

All personal information, social links, education details, skills, and projects are centralized in a single file for easy updates:

📂 **`src/assets/data/portfolioData.js`**

### 1. Updating Your Social Links (GitHub, LinkedIn)
In `src/assets/data/portfolioData.js`, update the `socials` object:
```javascript
export const personalInfo = {
  // ...
  socials: {
    github: "https://github.com/your-actual-username",
    linkedin: "https://linkedin.com/in/your-actual-profile",
    email: "mailto:sanikahp4@gmail.com",
    phone: "tel:+919353264598",
  },
  // ...
};
```

### 2. Adding Your Real Projects
In `src/assets/data/portfolioData.js`, edit the `projectsData` array:
```javascript
export const projectsData = [
  {
    id: 1,
    title: "Your Project Title",
    category: "Data Science", // Options: "Data Science", "Machine Learning", "AI & Web"
    badge: "Completed",
    shortDesc: "A brief summary of what your project accomplishes...",
    techStack: ["Python", "Pandas", "Scikit-Learn"],
    githubUrl: "https://github.com/yourusername/your-repo-name",
    demoUrl: "https://your-project-live-demo.com",
    features: [
      "Key feature 1",
      "Key feature 2",
      "Key feature 3"
    ]
  },
  // Add more projects as you build them!
];
```

### 3. Adding Your Real Certifications & Hackathons
In `src/assets/data/portfolioData.js`, edit the `certificationsData` array:
```javascript
export const certificationsData = [
  {
    id: 1,
    type: "Certification", // Options: "Certification", "Workshop", "Hackathon", "Course"
    title: "Python for Data Science",
    issuer: "NPTEL / Coursera",
    status: "Verified",
    description: "Completed comprehensive coursework in data structures, NumPy, and Pandas.",
    date: "2026"
  }
];
```

### 4. Adding Your Custom Resume PDF
1. Place your resume PDF file inside the `public/` folder and name it `resume.pdf`.
2. When users click "Download Resume", they can also directly view and save the formatted digital CV sheet.

---

## 🌐 Free Deployment Instructions

### Option A: Deploy to Vercel (Recommended - Fastest & Easiest)
1. Push your project to a GitHub repository.
2. Go to [Vercel](https://vercel.com/) and sign in with your GitHub account.
3. Click **"Add New Project"** and select your repository.
4. Vercel will automatically detect **Vite** — click **"Deploy"**.
5. Your portfolio is live with a free custom `.vercel.app` URL and free SSL!

### Option B: Deploy to GitHub Pages
1. Install `gh-pages`:
   ```bash
   npm install gh-pages --save-dev
   ```
2. In `vite.config.js`, add `base: '/<repository-name>/'`.
3. In `package.json`, add to `scripts`:
   ```json
   "deploy": "vite build && gh-pages -d dist"
   ```
4. Run `npm run deploy`.

---

## 📂 Project Structure

```
sanika-portfolio/
├── public/
│   ├── favicon.svg                # Neural network AI logo icon
│   └── resume.pdf                 # (Place your PDF resume here)
├── src/
│   ├── assets/
│   │   └── data/
│   │       └── portfolioData.js   # ⭐ Central data configuration file
│   ├── components/
│   │   ├── Navbar.jsx             # Sticky glassmorphism header & mobile drawer
│   │   ├── Hero.jsx               # Typing effect hero with AI terminal card
│   │   ├── About.jsx              # Bio, university context & focus areas
│   │   ├── Education.jsx          # Interactive academic timeline
│   │   ├── Skills.jsx             # Categorized skill matrix with filter tabs
│   │   ├── Projects.jsx           # Featured project cards with tech tags
│   │   ├── Journey.jsx            # Undergraduate learning roadmap
│   │   ├── Certifications.jsx     # Modular certificate & hackathon cards
│   │   ├── Contact.jsx            # Contact details & interactive validated form
│   │   ├── Footer.jsx             # Copyright, social links & site map
│   │   ├── NeuralBackground.jsx   # Interactive canvas particle network
│   │   ├── ResumeModal.jsx        # Printable resume preview modal
│   │   ├── ScrollToTop.jsx        # Back-to-top floating button
│   │   └── Toast.jsx              # Floating notification toasts
│   ├── styles/                    # Clean, modular CSS stylesheets
│   ├── App.jsx                    # Main application component
│   └── main.jsx                   # React root entry point
├── index.html                     # SEO meta tags, Google Fonts
├── package.json
└── vite.config.js
```

---

## 📜 License & Ownership
Created with ❤️ for **Sanika H P** — B.Tech Artificial Intelligence & Data Science Undergraduate at REVA University, Bengaluru.
