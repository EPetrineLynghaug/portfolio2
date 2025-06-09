# Portfolio Project



A modern, performant, and developer-friendly personal portfolio template built with React, TypeScript, and Vite. This setup offers hot module replacement (HMR), fast builds, and a solid ESLint configuration to help you showcase your work with confidence.

---

##  Features

- **Vite-powered** for lightning-fast dev server and optimized builds  
- **TypeScript support** with zero-config setup  
- **React 18** with functional components and hooks  
- **ESLint** with recommended and type-checked rules  
  


##  Getting Started

### Prerequisites

- Node.js v16 or newer  
- npm v8 or newer (or Yarn)  

### Installation

1. Clone the repo:  
   ```bash
   git clone https://github.com/your-username/portfolio2.git
   cd portfolio2

   ```

2. Install dependencies:
   ```bash 
   npm install
  ```

3. Scripts
  ```bash
* npm run dev  — Start development server with HMR
* npm run build — Compile TypeScript and bundle for production
* npm run preview — Preview the production build locally
* npm run lint — Run ESLint on all source files   
  ```

---
###  Project Structure

```bash
    portfolio2/
├─ src/
│  ├─ assets/
│  │   ├─ img/          # Image assets
│  │   ├─ favicon.png   # Site favicon
│  │   └─ react.svg     # Logo or icon files
│  ├─ components/      # Reusable React components
│  │   ├─ navigation/   # Navigation-specific components
│  │   │   └─ Navbar.tsx
│  │   ├─ BackButton.tsx
│  │   ├─ Footer.tsx
│  │   ├─ Hero.tsx
│  │   ├─ Layout.tsx
│  │   └─ LinkedInEmbed.tsx
│  ├─ hooks/           # Custom React hooks
│  │   └─ useTheme.ts
│  ├─ pages/           # Page-level components/routes
│  │   ├─ About.tsx
│  │   ├─ Bidy.tsx
│  │   ├─ Contact.tsx
│  │   ├─ Essenza.tsx
│  │   ├─ Holidaze.tsx
│  │   ├─ Home.tsx
│  │   └─ ProjectPage.tsx

  ```
  