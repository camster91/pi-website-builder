# 🎨 Pi Website Builder

A modular website builder with intuitive drag-and-drop functionality and a powerful theme editor. Build beautiful, responsive websites without writing code.

## ✨ Features

- **Drag-and-Drop Interface**: Intuitive visual editor for building pages with pre-designed components
- **Theme Editor**: Customize colors, typography, spacing, and styling with a live preview
- **Component Library**: Rich collection of pre-built, customizable components (headers, footers, forms, galleries, etc.)
- **Responsive Design**: All components are mobile-first and fully responsive
- **Export Functionality**: Export your complete website as clean HTML/CSS/JS
- **Template System**: Start with professional templates or build from scratch
- **Real-Time Preview**: See changes instantly as you build
- **Asset Management**: Upload and manage images, fonts, and other assets
- **Modular Architecture**: Component-based system for easy extensibility

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/camster91/pi-website-builder.git
cd pi-website-builder

# Install dependencies
npm install

# Start the development server
npm run dev
```

### Usage

```bash
# Development server (http://localhost:5173)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run tests
npm test

# Lint code
npm run lint
```

## 🛠️ Tech Stack

- **Framework**: [React 18](https://react.dev/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: CSS Modules + Modern CSS
- **Drag & Drop**: React DnD / dnd-kit
- **State Management**: React Context + Hooks
- **Component Library**: Custom modular components
- **Type Safety**: PropTypes / TypeScript (optional)

## 📁 Project Structure

```
pi-website-builder/
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── Builder/        # Drag-and-drop builder components
│   │   ├── ThemeEditor/    # Theme customization interface
│   │   ├── ComponentLibrary/ # Pre-built website components
│   │   └── Preview/        # Live preview renderer
│   ├── hooks/              # Custom React hooks
│   ├── contexts/           # React contexts (theme, builder state)
│   ├── utils/              # Utility functions
│   ├── templates/          # Pre-built website templates
│   ├── assets/             # Static assets (images, fonts)
│   ├── App.jsx             # Main application component
│   └── main.jsx            # Application entry point
├── public/                  # Public static files
├── dist/                    # Production build output
└── package.json
```

## 🎨 Component Categories

- **Layout**: Grid, Flex containers, Sections
- **Navigation**: Headers, Navbars, Footers, Sidebars
- **Content**: Text blocks, Images, Videos, Galleries
- **Forms**: Contact forms, Subscribe forms, Input fields
- **Interactive**: Accordions, Tabs, Modals, Carousels
- **Marketing**: Hero sections, Feature grids, Testimonials, CTAs
- **Media**: Image galleries, Video players, Audio embeds

## ⚙️ Configuration

### Theme Configuration

Create custom themes in `src/themes/`:

```json
{
  "name": "Modern Blue",
  "colors": {
    "primary": "#3b82f6",
    "secondary": "#8b5cf6",
    "accent": "#10b981",
    "background": "#ffffff",
    "text": "#1f2937"
  },
  "typography": {
    "fontFamily": "Inter, sans-serif",
    "headingFont": "Poppins, sans-serif",
    "baseSize": "16px",
    "scale": 1.25
  },
  "spacing": {
    "unit": "8px",
    "containerWidth": "1200px"
  },
  "borderRadius": "8px"
}
```

### Vite Configuration

Customize build settings in `vite.config.js`:

```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    open: true
  },
  build: {
    outDir: 'dist',
    sourcemap: true
  }
})
```

## 🎯 Roadmap

- [ ] Advanced animation system
- [ ] Custom component creator
- [ ] Multi-page website support
- [ ] Collaboration features
- [ ] Version control for designs
- [ ] Advanced responsive breakpoint editor
- [ ] SEO optimization tools
- [ ] Integration with headless CMS
- [ ] E-commerce components
- [ ] Form builder with validation

## 🤝 Contributing

This is a private project. For collaboration inquiries, please contact the project owner.

## 📄 License

Private. All rights reserved.

---

**Build stunning websites with the power of drag-and-drop simplicity**
