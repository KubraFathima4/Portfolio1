// Nav type
export type navLinkType = {
  label: string;
  url: string;
};

// Nav
const navLinks = [
 {
    label: 'Skills',
    url: '#services',
  },
  {
    label: 'Projects',
    url: '#works',
  },
  {
    label: 'About',
    url: '#about-me-section',
  },
  {
    label: 'Contact',
    url: '#contact-section',
  },
];
const navbarLinks = [
  {
    label: 'Home',
    url: '#app',
  },
  ...navLinks,
];

const socialLinks = [
  {
    label: 'linkedin',
    url: 'https://www.linkedin.com/in/pradeep-kishor-2455b4280',
  },
  {
    label: 'behance',
    url: 'https://www.behance.net/pradeepkishor1',
  }
];

const resourceLinks = [
  {
    label: 'Pillarstack',
    url: 'https://www.pillarstack.com',
  },
  {
    label: 'Figma Template',
    url: 'https://www.figma.com/community/file/1328038510191576951/project-starter-template',
  },
];


const locationPlace = `15°22'22.0"N 44°10'39.5"E`;
const locationCountry = 'Yemen, Sanaa';

// cal.com
const dataCalNamespace = '30min';
const dataCalLink = 'brhoom/30min';
const dataCalConfig =
  '{"layout":"month_view", "theme": "dark", "brand": "#8C8C73"}';

export {
  socialLinks,
  resourceLinks,
  locationPlace,
  locationCountry,
  navLinks,
  navbarLinks,
  dataCalNamespace,
  dataCalLink,
  dataCalConfig,
};
