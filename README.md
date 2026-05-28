# Portfolio Website

A clean and minimal single-page portfolio website built with React and Tailwind CSS.

## Features

- **Single Page Application (SPA)** - No routing, all content on one page
- **Responsive Design** - Works seamlessly on desktop, tablet, and mobile
- **Smooth Scroll Navigation** - Sticky navbar with active section highlighting
- **Clean UI** - Minimal design with simple hover effects
- **Easy to Customize** - Well-structured components for easy editing

## Sections

1. **Hero** - Introduction with name, title, and call-to-action buttons
2. **Experience** - Work history with 2 companies and achievements
3. **Skills** - Technical skills organized by category
4. **Projects** - 3 portfolio projects with descriptions and links
5. **Contact** - Contact information and form
6. **Footer** - Social media links (GitHub, LinkedIn, Instagram, Twitter)

## Tech Stack

- React 18
- Tailwind CSS 3
- React Icons

## Setup Instructions

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Navigate to the project directory:

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The app will open in your browser at `http://localhost:3000`

### Build for Production

```bash
npm run build
```

This will create an optimized production build in the `build` folder.

## Folder Structure

```
Portfolio/
├── public/
│   └── index.html          # HTML template
├── src/
│   ├── components/         # Reusable React components
│   │   ├── Navbar.js       # Sticky navigation bar
│   │   ├── Hero.js         # Hero section
│   │   ├── Experience.js   # Experience section
│   │   ├── ExperienceCard.js # Individual experience card
│   │   ├── Skills.js       # Skills section
│   │   ├── SkillCategory.js  # Skill category component
│   │   ├── Projects.js     # Projects section
│   │   ├── ProjectCard.js  # Individual project card
│   │   ├── Contact.js      # Contact section with form
│   │   ├── Footer.js       # Footer with social links
│   │   └── Section.js      # Reusable section wrapper
│   ├── App.js              # Main app component
│   ├── index.js            # Entry point
│   └── index.css           # Global styles with Tailwind
├── package.json            # Dependencies and scripts
├── tailwind.config.js      # Tailwind configuration
├── postcss.config.js       # PostCSS configuration
└── README.md              # This file
```
