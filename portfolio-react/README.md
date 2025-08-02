# Sagar Gupta - Portfolio (React Version)

This is a React conversion of the original HTML/CSS/JS portfolio website for Sagar Gupta.

## Features

- **Single Page Application**: Built with React for better performance and user experience
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Interactive Navigation**: Smooth section transitions with active state management
- **Typing Animation**: Dynamic typing effect powered by Typed.js
- **Theme Switching**: Multiple color themes and dark/light mode toggle
- **Contact Form**: Functional contact form integrated with FormSubmit
- **Modern Tech Stack**: React, Hooks, and modern CSS

## Sections

1. **Home**: Introduction with typing animation
2. **About**: Personal information, skills, education, and experience
3. **Services**: List of services and capabilities
4. **Portfolio**: Showcase of projects with links to GitHub repos and live sites
5. **Contact**: Contact information and contact form

## Technologies Used

- **React**: Frontend framework
- **Typed.js**: Typing animation library
- **Font Awesome**: Icons
- **CSS3**: Custom styling with CSS variables
- **FormSubmit**: Contact form handling

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd portfolio-react
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Building for Production

```bash
npm run build
```

This builds the app for production to the `build` folder.

## Available Scripts

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Project Structure

```
src/
  components/
    Sidebar.js          # Navigation sidebar
    Home.js            # Home section with typing animation
    About.js           # About section with personal info
    Services.js        # Services section
    Portfolio.js       # Portfolio/projects section
    Contact.js         # Contact section with form
    StyleSwitcher.js   # Theme and color switcher
  styles/
    style.css          # Main stylesheet
    style-switcher.css # Style switcher styles
    skins/             # Color theme files
  App.js              # Main App component
  index.js           # Entry point
```

## Key Features Implemented

### React Hooks Used
- `useState`: Managing component state (active section, theme, colors)
- `useEffect`: Side effects (typing animation, theme changes, scroll handling)
- `useRef`: Direct DOM manipulation for Typed.js integration

### Component Architecture
- **Modular Design**: Each section is a separate component
- **Props Management**: State lifted up to App component
- **Event Handling**: Centralized navigation and theme switching

### Responsive Features
- Mobile-first approach
- Collapsible sidebar on mobile devices
- Responsive grid layout
- Touch-friendly interface

## Customization

### Changing Colors
- Edit the color variables in `src/styles/skins/color-*.css` files
- Add new color themes by creating additional skin files

### Adding New Sections
1. Create a new component in `src/components/`
2. Import and add it to `App.js`
3. Update the navigation in `Sidebar.js`

### Modifying Content
- Update personal information in the respective component files
- Replace images in the `public/images/` folder
- Modify project data in `Portfolio.js`

## Deployment

### GitHub Pages
```bash
npm install --save-dev gh-pages
npm run build
npm run deploy
```

### Netlify
1. Build the project: `npm run build`
2. Upload the `build` folder to Netlify
3. Configure build settings: Build command: `npm run build`, Publish directory: `build`

### Vercel
```bash
npm install -g vercel
vercel --prod
```

## Contact

**Sagar Gupta**
- Email: sg85207@gmail.com
- Phone: +91 8770532413
- GitHub: [Sagargupta16](https://github.com/Sagargupta16)
- Website: [Portfolio](https://sagargupta16.github.io/PortFolio/)

---

## Migration Notes (HTML to React)

### What Changed:
1. **Component-based Architecture**: Converted monolithic HTML into reusable React components
2. **State Management**: Replaced vanilla JS with React hooks for state management
3. **Event Handling**: Converted DOM manipulation to React event handlers
4. **Build Process**: Added modern build tools and development server
5. **Module System**: Implemented ES6 imports/exports

### What Stayed the Same:
1. **Visual Design**: Maintained the exact same look and feel
2. **Functionality**: All original features work identically
3. **Responsive Behavior**: Mobile responsiveness preserved
4. **CSS Styling**: Original CSS largely unchanged
5. **Assets**: All images and resources remain the same

### Benefits of React Version:
- Better performance with virtual DOM
- Improved maintainability with component structure
- Enhanced developer experience with hot reloading
- Easier testing and debugging
- Scalable architecture for future enhancements
- Better SEO potential with server-side rendering options

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
