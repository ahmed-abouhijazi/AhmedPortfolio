import {
  frontend,
  backend,
  ux,
  prototyping,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  git,
  figma,
  docker,
  postgresql,
  salesforce,
  graphql,
  komikult,
  leaderboard,
  math,
  movie,
  nyeusi,
  space,
  coverhunt,
  dcc,
  kelhel,
  microverse,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Frontend Developer',
    icon: frontend,
  },
  {
    title: 'Backend Developer',
    icon: backend,
  },
  {
    title: 'Salesforce',
    icon: ux,
  },
  {
    title: 'Software Prototyping',
    icon: prototyping,
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'Salesforce',
    icon: salesforce,
  },
  {
    name: 'graphql',
    icon: graphql,
  },
  {
    name: 'postgresql',
    icon: postgresql,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'figma',
    icon: figma,
  },
  {
    name: 'docker',
    icon: docker,
  },
];

const experiences = [
  {
    title: 'Salesforce Developer',
    company_name: 'Capgemini',
    icon: coverhunt,
    iconBg: '#333333',
    date: 'Mars 2022 - Present',
  },
  {
    title: 'Consultant Salesforce',
    company_name: 'Capgemini',
    icon: kelhel,
    iconBg: '#333333',
    date: 'Mars 2022 - Sept 2022',
  },
  {
    title: 'FullStack Freelance',
    company_name: 'Consiglieri INT OU',
    icon: microverse,
    iconBg: '#333333',
    date: 'Dec 2021 - Mars 2022',
  },
  {
    title: 'FullStack Developer InternShip',
    company_name: 'AjiCode',
    icon: dcc,
    iconBg: '#333333',
    date: 'Jui 2021 - Augh 2021',
  },
];

const projects = [
  {
    id: 'project-1',
    name: 'Haystack',
    description: 'Crafted within the theme "Find the Needle in the Haystack " this website leverages web3 technology and Eth currency to create an innovative lottery platform.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: komikult,
    repo: 'https://github.com/ahmed-abouhijazi/react-haystack',
    demo: 'https://ahmed-abouhijazi.github.io/react-haystack/',
  },
  {
    id: 'project-2',
    name: 'Salsa CRM',
    description:
      'The theme revolves around the revamping of the CRM solution for TOTAL Marketing & Services , Petrochemical Cards through the Salesforce.com platform',
    tags: [
      {
        name: 'Salesforce',
        color: 'blue-text-gradient',
      },
      {
        name: 'restapi',
        color: 'green-text-gradient',
      },
      {
        name: 'LWC,AURA,APEX',
        color: 'pink-text-gradient',
      },
    ],
    image: leaderboard,
    repo: 'https://salsa-totalenergies.my.salesforce.com/',
    demo: 'https://salsa-totalenergies.my.salesforce.com/',
  },
  {
    id: 'project-3',
    name: 'Ecommerce Website',
    description: 'An online store to order products of various categories',
    tags: [
      {
        name: 'reactjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: math,
    repo: 'https://www.cleanproductsexpress.com/',
    demo: 'https://www.cleanproductsexpress.com/',
  },
  {
    id: 'project-4',
    name: 'My Menu',
    description: `A mobile application that provides access to restaurant menus.`,
    tags: [
      {
        name: 'android Studio',
        color: 'blue-text-gradient',
      },
      {
        name: 'java',
        color: 'green-text-gradient',
      },
      {
        name: 'Interface graphic',
        color: 'pink-text-gradient',
      },
    ],
    image: movie,
    repo: 'https://github.com/ahmed-abouhijazi/MyMenu',
    demo: 'https://github.com/ahmed-abouhijazi/MyMenu',
  },
  {
    id: 'project-5',
    name: 'CCP',
    description:
      'This is is a cryptocurrency bank that facilitates the transfer and management of banking transactions within the realm of Web3.',
    tags: [
      {
        name: 'Vuejs',
        color: 'blue-text-gradient',
      },
      {
        name: 'Nodejs',
        color: 'green-text-gradient',
      },
      {
        name: 'Mongodb',
        color: 'pink-text-gradient',
      },
    ],
    image: nyeusi,
    repo: 'https://github.com/ahmed-abouhijazi/CBB',
    demo: 'https://github.com/ahmed-abouhijazi/CBB',
  },
];

export { services, technologies, experiences, projects };
