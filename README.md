# Sanika H P - AI & Data Science Portfolio Website

A modern, professional, and responsive personal portfolio website built with **React JS** and **Vite** for **Sanika H P**, an undergraduate Artificial Intelligence & Data Science student at **REVA University, Bengaluru**.

---

## 🌟 Portfolio Features

- **Futuristic AI & Data Theme**: Deep Dark Obsidian styling with electric cyan/blue and purple accents, glassmorphic cards, and an interactive particle/neural node background canvas.
- **Full Responsive Layout**: Optimized across desktop, tablet, and mobile displays with a smooth sliding mobile navigation menu.
- **Key Sections**:
  1. **Hero**: Introduction, AI & DS subtitle, CTA buttons, social profile links, tech pills.
  2. **About Me**: 3rd Semester AI & DS at REVA University, Hassan PUC background, core interest cards (AI, ML, Data Science, Python, Web).
  3. **Education**: Clean timeline highlighting REVA University and Pre-University College (Hassan).
  4. **Skills**: Categorized cards for AI & Machine Learning, Databases (SQL, MySQL), Web (React, JS, HTML, CSS), and Developer Tools (Git, GitHub, VS Code).
  5. **Projects**: 3 structured placeholder project cards (*Data Analysis Project*, *Machine Learning Project*, *AI-Based Project*) with tags, key highlights, and GitHub/Demo links.
  6. **My Learning Journey**: Authentic undergraduate progression timeline from Hassan to 3rd semester at REVA.
  7. **Certifications & Achievements**: Clean placeholder cards ready for future hackathons, workshops, and courses.
  8. **Contact**: Direct contact details (Email: `sanikahp4@gmail.com`, Phone: `9353264598`, Location: `Hassan, Karnataka, India`), interactive message form, and call to action.
  9. **Sticky Header & Back-to-Top**: Smooth scrolling with section-aware scroll-spy navigation.
  10. **Resume Preview & Download**: Modal with resume summary and direct PDF download trigger.

---

## 🚀 Getting Started Locally

### 1. Prerequisites
Ensure you have **Node.js** (v18 or newer) installed on your system.

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
Open [http://localhost:3000](http://localhost:3000) (or the URL shown in your terminal) in your browser to view your live portfolio.

### 4. Build for Production
To create an optimized production build:
```bash
npm run build
```

---

## ✏️ How to Customize Your Portfolio

All your data is organized in **a single file**: `src/data/portfolioData.js`.

### 1. Replacing Placeholder GitHub & LinkedIn Links
Open `src/data/portfolioData.js` and locate `socialLinks`:
```javascript
socialLinks: {
  github: "https://github.com/your-actual-username",
  linkedin: "https://linkedin.com/in/your-actual-profile",
  email: "mailto:sanikahp4@gmail.com",
  phone: "tel:9353264598"
}
```

### 2. Adding Your Real Projects
In `src/data/portfolioData.js`, locate the `projects` array. Update the title, description, technologies, and GitHub repository links:
```javascript
{
  id: "my-real-project",
  title: "Predictive Analytics for Healthcare",
  category: "Machine Learning",
  badge: "Predictive Modeling",
  description: "Built a machine learning model predicting patient outcomes...",
  technologies: ["Python", "Scikit-Learn", "Pandas", "Streamlit"],
  githubUrl: "https://github.com/sanikahp/your-repo-name",
  demoUrl: "https://your-demo-url.com",
  featured: true,
  highlights: [
    "Feature engineering on 10,000+ data rows",
    "Achieved 92% cross-validation accuracy"
  ]
}
```

### 3. Adding Your Real Resume PDF
1. Save your resume as `Sanika_HP_Resume.pdf`.
2. Copy `Sanika_HP_Resume.pdf` into the `public/` folder (`public/Sanika_HP_Resume.pdf`).
3. Now, whenever anyone clicks **"Download Resume"** or **"Resume"**, your real resume PDF will be downloaded instantly!

### 4. Adding Certifications & Hackathons
In `src/data/portfolioData.js`, replace the placeholder cards in `certificationsPlaceholder` with your actual certificate titles, issuing platforms (e.g. Coursera, NPTEL, IBM, HackerRank), and workshop details.

---

## 🌐 Deploying Your Portfolio Online

### Option A: Deploying to Vercel (Recommended - Fastest & Free)
1. Push your project code to a new repository on [GitHub](https://github.com).
2. Go to [Vercel](https://vercel.com) and sign in with your GitHub account.
3. Click **"Add New" > "Project"** and import your portfolio repository.
4. Framework Preset will automatically detect **Vite**.
5. Click **"Deploy"**. Your website will be live with a free `.vercel.app` URL and custom domain support!

### Option B: Deploying to GitHub Pages
1. Install `gh-pages`:
   ```bash
   npm install --save-dev gh-pages
   ```
2. In `vite.config.js`, add `base: '/<your-repo-name>/'`.
3. In `package.json`, add `"deploy": "gh-pages -d dist"` under `"scripts"`.
4. Run:
   ```bash
   npm run build
   npm run deploy
   ```

---

## 📁 Project Directory Structure

```
├── index.html                 # Main HTML with SEO meta tags & Google Fonts
├── package.json               # Dependencies and build scripts
├── vite.config.js             # Vite configuration
├── README.md                  # Project documentation & guides
├── public/                    # Static assets (Resume PDF, icons)
└── src/
    ├── main.jsx               # React DOM entry point
    ├── App.jsx                # Root application component
    ├── index.css              # Global styles, variables & design tokens
    ├── App.css                # Section & component specific CSS
    ├── data/
    │   └── portfolioData.js   # Centralized portfolio data & links
    └── components/
        ├── Navbar.jsx         # Sticky navigation with scroll-spy & mobile drawer
        ├── BackgroundCanvas.jsx# Interactive AI particle/neural network canvas
        ├── Hero.jsx           # Hero greeting, buttons & social links
        ├── About.jsx          # Academic profile & focus areas
        ├── Education.jsx      # REVA University & Hassan PUC timeline
        ├── Skills.jsx         # Categorized tech skills with learning tags
        ├── Projects.jsx       # 3 structured placeholder project cards
        ├── Journey.jsx        # Learning journey roadmap
        ├── Certifications.jsx # Future certs & workshop placeholders
        ├── Contact.jsx        # Contact cards & interactive message form
        ├── Footer.jsx         # Copyright & quick links
        ├── BackToTop.jsx      # Smooth scroll-to-top floating button
        └── ResumeModal.jsx    # Resume preview & download modal
```

---

## 👤 Author

**Sanika H P**
- 🎓 B.Tech in Artificial Intelligence & Data Science (3rd Semester)
- 🏛️ REVA University, Bengaluru, Karnataka
- 📍 Hassan, Karnataka, India
- 📧 [sanikahp4@gmail.com](mailto:sanikahp4@gmail.com)
- 📱 +91 9353264598
