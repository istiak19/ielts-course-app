# IELTS Course App

An interactive web application designed to help students prepare for the IELTS exam with structured course content, modern UI, and seamless navigation. Built with React, Vite, and TailwindCSS, the app provides a responsive and dynamic user experience.

🌐 **Live Demo**: [ielts-course-app.vercel.app](https://ielts-course-app.vercel.app/)
📦 **Repository**: [GitHub - istiak19/ielts-course-app](https://github.com/istiak19/ielts-course-app)

---

## Table of Contents

* [Features](#features)
* [Installation](#installation)
* [Usage](#usage)
* [Project Structure](#project-structure)
* [Configuration](#configuration)
* [Dependencies](#dependencies)
* [Development](#development)
* [Build](#build)
* [Troubleshooting](#troubleshooting)
* [Contributors](#contributors)
* [License](#license)

---

## Features

* 🎯 **IELTS-focused Course Content**: Tailored material for all four IELTS modules.
* ⚡ **Fast Development** with Vite and TypeScript.
* 🎨 **Responsive Design** using TailwindCSS and DaisyUI.
* 🔄 **Client-side Routing** with React Router.
* 🧩 **Reusable UI Components** via Lucide Icons and React Icons.
* ✅ **Linting and Type Safety** with ESLint and TypeScript.

---

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/istiak19/ielts-course-app.git
   cd ielts-course-app
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

---

## Usage

* **Start development server:**

  ```bash
  npm run dev
  ```

  Visit [http://localhost:5173](http://localhost:5173) to view the app locally.

* **Preview production build:**

  ```bash
  npm run preview
  ```

---

## Project Structure

```bash
ielts-course-app/
├── public/              # Static assets
├── src/
│   ├── components/      # Reusable React components
│   ├── pages/           # Course pages and routes
│   ├── styles/          # Tailwind and custom CSS
│   └── main.tsx         # Application entry point
├── package.json
├── tsconfig.json
└── vite.config.ts
```

---

## Configuration

* **TailwindCSS** and **DaisyUI** are configured in `tailwind.config.js`.
* **ESLint** uses standard and React plugin rules in `.eslintrc`.

---

## Dependencies

### Runtime

* `react`, `react-dom` – Core React libraries
* `react-router` – Routing
* `tailwindcss`, `daisyui` – Styling
* `lucide-react`, `react-icons` – Icons

### Development

* `vite` – Build tool
* `typescript`, `eslint`, `@vitejs/plugin-react`, etc.

---

## Development

* Run lint checks:

  ```bash
  npm run lint
  ```

* Type checking:

  ```bash
  tsc --noEmit
  ```

---

## Build

To create an optimized production build:

```bash
npm run build
```

Build artifacts will be output to the `dist/` directory.

---

## Troubleshooting

* Ensure Node.js (v18+) and npm are installed.
* Delete `node_modules` and reinstall dependencies if errors persist.
* Use browser dev tools to debug any layout or console issues.

---

## Contributors

* [istiak19](https://github.com/istiak19) – Creator & Maintainer