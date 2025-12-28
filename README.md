# 🌟 Mitul Patil - Portfolio

A modern, responsive personal portfolio website built with React, Vite, and Tailwind CSS. Features smooth animations, dark theme, and a fully functional contact form.

## ✨ Features

- 🎨 **Modern UI/UX** - Clean and professional design with purple accent colors
- 📱 **Fully Responsive** - Works seamlessly on desktop, tablet, and mobile devices
- 🌙 **Dark Theme** - Eye-friendly dark theme with smooth color gradients
- ✉️ **Working Contact Form** - Integrated with EmailJS for direct message delivery
- 🎭 **Smooth Animations** - GSAP-powered animations for enhanced user experience
- ⚡ **Fast Performance** - Built with Vite for lightning-fast loading times
- 🧭 **Easy Navigation** - React Router for smooth page transitions

## 🚀 Tech Stack

- **React 19.1.1** - UI library
- **Vite 5.0** - Build tool and dev server
- **Tailwind CSS 4.1** - Utility-first CSS framework
- **React Router 7.9** - Client-side routing
- **GSAP 3.13** - Animation library
- **React Icons 5.5** - Icon library
- **EmailJS 4.4** - Email service for contact form

## 📂 Project Structure

```
Portfolio/
├── public/
│   └── projects/          # Project images and assets
├── src/
│   ├── components/
│   │   ├── About.jsx      # About section
│   │   ├── Contact.jsx    # Contact form with EmailJS
│   │   ├── Home.jsx       # Hero section
│   │   ├── Projects.jsx   # Projects showcase
│   │   ├── Skills.jsx     # Skills display
│   │   ├── Layout/
│   │   │   ├── Footer.jsx
│   │   │   ├── Navbar.jsx
│   │   │   └── Homecenter.jsx
│   │   └── ui/
│   │       ├── Button.jsx
│   │       ├── Project.jsx
│   │       └── SkillItem.jsx
│   ├── pages/
│   │   ├── MainPage.jsx   # Home page
│   │   ├── AboutPage.jsx  # About page
│   │   └── AllProjects.jsx # Projects page
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── .env
├── package.json
├── vite.config.js
└── tailwind.config.js
```

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd Portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up EmailJS for contact form**
   
   Create a `.env` file in the root directory:
   ```env
   VITE_EMAILJS_SERVICE_ID=your_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_public_key
   ```

   Get your credentials from [EmailJS](https://www.emailjs.com/):
   - Sign up and create an email service
   - Create a template with variables: `{{from_name}}`, `{{from_email}}`, `{{message}}`
   - Copy your Service ID, Template ID, and Public Key

4. **Start development server**
   ```bash
   npm run dev
   ```

## 📜 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 👨‍💻 Contact

**Mitul Patil**
- Email: patilmitul1911@gmail.com
- Location: Vadodara, Gujarat
- Phone: 9510239758
