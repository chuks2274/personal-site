# MC Web Developer – Portfolio

A responsive personal portfolio website for **Chukwuka M. Meninwa**, showcasing skills, experience, and projects as a Full-Stack Web Developer. Built with modern web technologies, it emphasizes clean design, responsiveness, and performance.

**Live Site:** [Personal Portfolio](https://personal-site-pi-mauve.vercel.app/)  
**GitHub Repository:** [Personal Portfolio](https://github.com/chuks2274/personal-site.git)

---

## Features

- Fully responsive layout with **Bootstrap 5**
- Clean UI with **Google Fonts (Poppins)**
- Icons powered by **Font Awesome**
- Smooth scrolling and dynamic footer using **JavaScript**
- Interactive hero section with call-to-action
- Navbar with active link highlighting
- Project showcase with cards, GitHub links, and live demos
- Contact page with email, LinkedIn, GitHub, and location links
- Global consistent styling via `style.css`

---

## Technologies Used

- **Frontend:** HTML5, CSS3, Bootstrap 5, JavaScript, Font Awesome, Google Fonts    
- **Testing & CI/CD:** Jest, GitHub Actions, ESLint

---

## File Structure

- `index.html` – Homepage  
- `about.html` – About Me page  
- `projects.html` – Projects showcase page  
- `contact.html` – Contact page  
- `css/style.css` – Global and component styles  
- `js/script.js` – Interactive behaviors (smooth scroll, dynamic year, navbar collapse)  
- `__tests__/script.test.js` – Jest unit tests for JS functionality  
- `.github/workflows/ci-cd-vercel.yml` – CI/CD workflow for linting and deployment  
- `assets/` – Images and logos

---

## Purpose

This portfolio demonstrates **full-stack development capabilities**, highlighting:

- Responsive and modern frontend design
- Backend experience with APIs and databases
- Deployment and CI/CD proficiency
- A professional presentation of skills, projects, and contact information

It serves as a platform to showcase completed projects and technical expertise to recruiters, clients, and collaborators.

---

## Pages Overview

### Home Page
- Introduces the developer with a hero section
- Smooth navigation with dynamic footer year
- Provides quick links to About, Projects, and Contact pages

### About Page
- Displays background, technical skills, and career goals
- Includes profile image and highlighted keywords

### Projects Page
- Features a responsive project grid
- Displays screenshots, descriptions, GitHub, and live demo links
- Example projects:  
  - E-commerce App (React, TypeScript, Firebase, unit & integration tests, CI/CD → Vercel)  
  - Mechanic Workshop API (Flask, SQLAlchemy, CI/CD → Render)  
  - Real Estate Website (HTML/CSS/JS + Jest tests, CI/CD → Vercel) 
  - Professional Calculator (HTML/CSS/JS, Jest tests, CI/CD → Vercel)   
  - Todo App (React, Redux Toolkit, TypeScript, Firebase, Unit tests, CI/CD → Vercel)  
  - Mini API Dashboard (HTML/CSS/JS with public APIs, Jest, CI/CD → Vercel)

### Contact Page
- Provides email, LinkedIn, GitHub, and location links
- Social icon buttons with responsive layout

### JS Interactions (`script.js`)
- Auto-updating footer year
- Smooth scrolling for internal links
- Mobile-friendly navbar auto-collapse

### Testing (`script.test.js`)
- Jest-based unit tests for:
  - Dynamic year update
  - Smooth scroll functionality
  - Mobile navbar auto-collapse

### CI/CD Workflow
- GitHub Actions automates linting and deployment
- Deploys site to Vercel on pushes to `main` branch

---

## Goal

The portfolio provides a **professional, polished, and accessible showcase** of Chukwuka M. Meninwa’s skills and work, demonstrating both frontend and backend capabilities, modern design, and deployment practices.