# Sempitecno Website - User Manual

This guide explains how to manage, edit, and maintain the Sempitecno website.

## 1. Project Overview
The website is built using modern web technologies:
- **React**: For building the user interface.
- **Tailwind CSS**: For styling and design.
- **i18next**: For multi-language support (English/Spanish).

## 2. Editing Text & Translations
All text content on the website is stored in JSON files. You **do not** need to edit the code to change text.

### Location of Text Files
- **English**: `src/locales/en/translation.json`
- **Spanish**: `src/locales/es/translation.json`

### How to Edit
1. Open the relevant JSON file.
2. Find the key corresponding to the text you want to change (e.g., `home.title`).
3. Edit the value inside the quotes.
   ```json
   "title": "Your New Text Here"
   ```
4. **Important**: preserve the structure (curly braces `{}` and commas `,`).

## 3. Editing Design & Layout
To change the structure, colors, or layout, you will need to edit the React components.

### Folder Structure
- `src/components/`: Reusable UI parts (Header, Footer, Layout).
- `src/pages/`: Main pages (Home, Industries, Pricing, etc.).
- `src/index.css`: Global styles and branding configurations.

### Common Tasks

#### Adding a New Industry
1. Add the translation data in `src/locales/en/translation.json` and `src/locales/es/translation.json` under `industries`.
2. Open `src/pages/Industries.jsx`.
3. Add the new industry key to the `sectors` array:
   ```javascript
   const sectors = ['retail', 'healthcare', 'customerService', 'banking', 'newIndustry'];
   ```
4. Update the icon logic inside the map function if needed.

#### Changing Colors
Global colors are defined in `src/index.css` or Tailwind config.
- Search for classes like `bg-primary`, `text-darkBlue` in the code to replace them.

#### Modifying Rounded Corners
The "rounded" look is controlled globally in `src/index.css` by the `.b-solid` and `.card-border` classes.
- To make corners sharper or rounder, edit `border-radius` in `src/index.css`.

## 4. Running the Website Locally

### Prerequisites
- Install [Node.js](https://nodejs.org/).

### Commands
1. **Install dependencies** (first time only):
   ```bash
   npm install
   ```
2. **Start Development Server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:5173](http://localhost:5173) in your browser.

3. **Build for Production**:
   ```bash
   npm run build
   ```
   This creates a `dist/` folder ready for deployment.

---
**Need Help?**
Contact the development team for complex structural changes.
