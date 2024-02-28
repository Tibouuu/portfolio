/** @type {import('tailwindcss').Config} */
export default {
  content: [
    '**/*.html',
    'src/**/*.{css,js}',
  ],
  theme: {
    fontFamily: {
      'book': 'Gotham',
      'bold': 'Gotham Bold',
      'thin': 'Gotham Thin',
      'light': 'Gotham Light'
    },
    dropShadow: {
      'img': '0 4px 56px rgba(0, 0, 0, 0.25)',
      'cta': '-2px 4px 0 rgba(204, 38, 78, 1)',
      'number': '-2px 4px 0 rgba(233, 234, 236, 1)',
      'numberhover': '-4px 7px 0 rgba(233, 234, 236, 1)'
    },
    fontSize: {
      'h1': '64px',
      'h2': '48px',
      'h3': '36px',
      'h4': '24px',
      'sub': '24px',
      'p': '16px',
      'nav': '20px',
    },
    letterSpacing: {
      'h1': '7px',
      'h2': '3px',
      'h3': '1px'
    },
    width: {
      'menu': 'calc(100% - 80px)',
      'full': '100%',
      '80%': '80%',
      '1/2': '50%',
      '1/3': '33%',
      '0': '0'
    },
    colors: {
      'blue':'#252F60',
      'grey': '#3F4668',
      'white': '#E9EAEC',
      'red': '#CC264E',
      'grey-trans': 'rgba(63, 70, 104, 0.85)',
      'transparent': 'rgba(0, 0, 0, 0)'
    },
    backgroundImage: {
      'hero': "linear-gradient(rgba(37, 47, 96, 0.7), rgba(37, 47, 96, 0.7)), url('../public/img/hero.jpg')",
      'project-0': "linear-gradient(rgba(37, 47, 96, 0.7), rgba(37, 47, 96, 0.7)), url('../public/img/projects/project-1/emma-garnaud.jpg')",
      'project-1': "linear-gradient(rgba(37, 47, 96, 0.7), rgba(37, 47, 96, 0.7)), url('../public/img/projects/project-2/weburger.png')",
      'project-2': "linear-gradient(rgba(37, 47, 96, 0.7), rgba(37, 47, 96, 0.7)), url('../public/img/projects/project-3/sandra.png')",
      'project-3': "linear-gradient(rgba(37, 47, 96, 0.7), rgba(37, 47, 96, 0.7)), url('../public/img/projects/project-4/ecoal.png')",
      'project-4': "linear-gradient(rgba(37, 47, 96, 0.7), rgba(37, 47, 96, 0.7)), url('../public/img/projects/project-5/mmisteries.jpg')",
      'project-5': "linear-gradient(rgba(37, 47, 96, 0.7), rgba(37, 47, 96, 0.7)), url('../public/img/projects/project-6/jeu.png')",
      'cta': 'linear-gradient(to bottom left, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 50%, #CC264E 50%, #CC264E 100%);',
      'diag': 'linear-gradient(to bottom right, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 50%, #E9EAEC 50%, #E9EAEC 100%);',
      'diagblue': 'linear-gradient(to bottom right, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 50%, #3F4668 50%, #3F4668 100%);',
      'ctahover': 'linear-gradient(to bottom left, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 0%, #CC264E 0%, #CC264E 100%);'
    },
    backgroundPosition: {
      'bottom-1': 'center 70%',
    },
    extend: {
    },
  },
  plugins: [],
}

