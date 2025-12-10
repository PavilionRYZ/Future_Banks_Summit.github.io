# Future Banks Summit 2023 – Event Website

A modern, glassmorphic, fully responsive event website built with **React**, **Tailwind CSS**, **Framer Motion**, and **Lucide React** for the **4th Annual Future Banks Summit & Awards** (September 11–12, 2023, Riyadh Marriott Hotel).

> Tagline: **Digital Innovations Transforming the Kingdom’s Banking Landscape**

***

## Live Link 

🌐 **Future Banks Summit 2023**: [futurebanksummit2023.netlify.app/](https://futurebanksummit2023.netlify.app/)  

## 🚀 Tech Stack

- **Frontend:** React
- **Styling:** Tailwind CSS (glassmorphism + gradients)
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Design:** Responsive, mobile-first, white-background glassmorphic UI

***

## ✨ Features

- **Hero section** with event date, venue, and CTAs
- **Stats & Highlights** for attendees, speakers, topics, and Vision 2030 alignment
- **About Summit** with banking-specific context and key value propositions
- **Key Topics**: Vision 2030, Digital Transformation, Open Banking, Digital Payments, Cybersecurity, AI & Automation, etc.
- **Speakers Section** using real profile images (banking & fintech leaders)
- **Agenda Section** with a 2-day, track-based, highlight-focused timeline
- **Sponsors & Partners** with real/logical banking/fintech logos in glassmorphic cards
- **Registration Form** tailored to banking executives (department, interests, etc.)
- **Contact Section** with event details, message form, and summit contact info
- **Glassmorphic Navbar & Footer** with smooth scroll and social links

***

## 📁 Project Structure (Key Components)

```text
src/
  components/
    layout/
      Navbar.jsx
      Footer.jsx
    HeroSection.jsx
    StatsSection.jsx
    AboutSection.jsx
    TopicsSection.jsx
    SpeakersSection.jsx
    AgendaSection.jsx
    SponsorsSection.jsx
    RegistrationForm.jsx
    ContactSection.jsx   
  App.jsx
  main.jsx / index.jsx
  index.css
  tailwind.config.js
```

Each section is isolated into its own component for clarity, reuse, and easy maintenance.

***

## 🛠️ Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/future-banks-summit-2023.git
cd future-banks-summit-2023
```

### 2. Install dependencies

```bash
npm install
# or
yarn install
```

### 3. Run the development server

```bash
npm run dev   # for Vite / modern setups
# or
npm start     # if using Create React App
```

Then open:

```text
http://localhost:5173   # Vite default
# or
http://localhost:3000   # CRA default
```

***

## ⚙️ Configuration

- **Tailwind CSS:** configured via `tailwind.config.js` and `index.css`
- **Glassmorphism:** achieved using Tailwind utilities (`backdrop-blur`, `bg-white/XX`, gradients, soft borders, and shadows)
- **Content:** All event-specific text (dates, venue, topics, agenda, etc.) is hardcoded in the relevant components and can be updated easily.

Key content locations:

- Event info (name, date, venue, tagline): `HeroSection.jsx`, `AboutSection.jsx`, `ContactSection.jsx`, `Footer.jsx`
- Topics: `TopicsSection.jsx`
- Agenda: `AgendaSection.jsx`
- Speakers: `SpeakersSection.jsx`
- Sponsors: `SponsorsSection.jsx`

***

## 🎨 Customization

You can easily customize:

- **Branding & Colors:** update Tailwind classes and gradients in each component
- **Event Content:** replace Future Banks Summit copy with your own event details
- **Logos & Images:** swap speaker photos and sponsor logos with your own assets
- **Sections:** add/remove components in `App.jsx` to match your event flow

***

## 📜 License

Add your preferred license here (e.g., MIT, Apache-2.0).

```text
© 2023 Future Banks Summit – Demo Event Website
```

You can now paste this README into `README.md` in your GitHub repository and adjust URLs, project name, and license as needed.