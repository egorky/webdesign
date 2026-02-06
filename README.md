# SEMPITECNO - Next-Gen AI Automation

SEMPITECNO is a modern web application for an AI automation company, specializing in omnichannel AI agents for WhatsApp and Voice. The application is built with React, Vite, and Tailwind CSS, and features full internationalization (i18n) in English and Spanish.

## Features

- **Omnichannel AI Orchestration**: Intelligent agents for WhatsApp and Voice calls.
- **Internationalization**: Full support for English and Spanish with a seamless language switcher.
- **Modern Design**: Built with a "Neo-brutalism" aesthetic using Tailwind CSS.
- **Responsive Layout**: Optimized for all devices.
- **Dynamic Content**: Data-driven pages with easy-to-update translation files.

## Project Structure

- `src/components/`: Reusable UI components (e.g., `Layout.jsx`).
- `src/pages/`: Main application pages (`Home.jsx`, `Pricing.jsx`).
- `src/locales/`: i18n translation files in JSON format.
- `src/i18n.js`: Configuration for `i18next`.
- `src/assets/`: Static assets like logos and images.

## Technology Stack

- **React**: Frontend library.
- **Vite**: Build tool and development server.
- **Tailwind CSS**: Styling framework.
- **i18next**: Internationalization framework.
- **React Router**: Client-side routing.

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

1. Clone the repository (if applicable) or navigate to the project directory.
2. Install dependencies:
   ```bash
   npm install
   ```

### Development

Run the development server:
```bash
npm run dev
```
The application will be available at `http://localhost:5173`.

### Production Build

Create a production-ready bundle:
```bash
npm run build
```
The output will be in the `dist` folder.

## Internationalization (i18n)

To add new translations:
1. Open `src/locales/en/translation.json` for English.
2. Open `src/locales/es/translation.json` for Spanish.
3. Add the corresponding keys and values in both files.

## License

© 2024 SEMPITECNO SOLUTIONS INC. All rights reserved.
