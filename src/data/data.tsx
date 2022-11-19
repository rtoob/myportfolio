import {CalendarIcon, DownloadIcon, MapIcon, OfficeBuildingIcon, SparklesIcon} from '@heroicons/react/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import heroImage from '../images/header-background.webp';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';
import porfolioImage6 from '../images/portfolio/portfolio-6.jpg';
import porfolioImage7 from '../images/portfolio/portfolio-7.jpg';
import porfolioImage8 from '../images/portfolio/portfolio-8.jpg';
import porfolioImage9 from '../images/portfolio/portfolio-9.jpg';
import porfolioImage10 from '../images/portfolio/portfolio-10.jpg';
import porfolioImage11 from '../images/portfolio/portfolio-11.jpg';
import profilepic from '../images/profilepic.jpg';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Rafael Tub - Portfolio',
  description: 'Development, management and marketing of web systems',
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
} as const;

export type SectionId = typeof SectionId[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Rafael Tub.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a <strong className="text-stone-100">webmaster with five years experience</strong>, expert in the
        functionality and maintenance of websites ,experienced in frontend development and website management tools.
      </p>
    </>
  ),
  actions: [
    {
      href: '/assets/resume.pdf',
      text: 'Resume',
      primary: true,
      Icon: DownloadIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `I am responsible, creative and curious, a passion for technology and coding.
  Born in Uruguay, a small country in South America. I live in Israel, where I work as a webmaster in Tel Aviv.`,
  aboutItems: [
    {label: 'Location', text: 'Tel Aviv', Icon: MapIcon},
    {label: 'Age', text: '32', Icon: CalendarIcon},
    {label: 'Interests', text: 'Sport, Health, Music, Movies...', Icon: SparklesIcon},
    {label: 'Employment', text: 'S.E.Optimize LTD', Icon: OfficeBuildingIcon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'Hebrew, Spanish',
        level: 10,
      },
      {
        name: 'English',
        level: 9,
      },
      {
        name: 'Portuguese',
        level: 8,
      },
    ],
  },
  {
    name: 'Frontend development',
    skills: [
      {
        name: 'HTML, CSS',
        level: 9,
      },
      {
        name: 'JS',
        level: 7,
      },
      {
        name: 'React',
        level: 9,
      },
    ],
  },
  {
    name: 'Backend development',
    skills: [
      {
        name: 'Node.js',
        level: 6,
      },
      {
        name: 'php',
        level: 7,
      },
      {
        name: 'Wordpress',
        level: 9,
      },
    ],
  },
  {
    name: 'Mobile development',
    skills: [
      {
        name: 'Bootstrap',
        level: 9,
      },
      {
        name: 'Tailwind',
        level: 8,
      },
      {
        name: 'MaterializeCSS',
        level: 9,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Latoos - Travel Agecy',
    description: 'Html, Css, Js, MaterializeCSS',
    url: 'https://rtoob.github.io/travel_agency/',
    image: porfolioImage1,
  },
  {
    title: 'Panal Co-Working',
    description: 'Html, Css, Js, Bootstrap',
    url: 'https://rtoob.github.io/panal-coworking/',
    image: porfolioImage2,
  },
  {
    title: 'Valley Offices',
    description: 'Html, Css, Js, Bootstrap',
    url: 'https://rtoob.github.io/valley/',
    image: porfolioImage3,
  },
  {
    title: 'Open Code',
    description: 'Html, Css, Js, MaterializeCSS',
    url: 'https://rtoob.github.io/open/',
    image: porfolioImage4,
  },
  {
    title: 'Quartel Coding',
    description: 'Html, Css, Js, Bootstrap',
    url: 'https://rtoob.github.io/quartel/',
    image: porfolioImage5,
  },
  {
    title: 'Dream Col',
    description: 'Wordpress, Woocommerce, Elementor',
    url: 'https://dreamcol.com/',
    image: porfolioImage6,
  },
  {
    title: 'SPRT NRG',
    description: 'Wordpress, Woocommerce, Elementor',
    url: 'https://sprtnrg.com/',
    image: porfolioImage7,
  },
  {
    title: 'Mas Camara',
    description: 'Wordpress, Woocommerce, Elementor',
    url: 'https://mascamara.com/',
    image: porfolioImage8,
  },
  {
    title: 'Casa REC',
    description: 'Wordpress, Woocommerce, Elementor',
    url: 'https://casarec.com/',
    image: porfolioImage9,
  },
  {
    title: 'Dol Home',
    description: 'Wordpress, Woocommerce, Elementor',
    url: 'https://superdol.com/',
    image: porfolioImage10,
  },
  {
    title: 'Pro Dizt',
    description: 'Wordpress, Woocommerce, Elementor',
    url: 'https://prodizt.com/',
    image: porfolioImage11,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const experience: TimelineItem[] = [
  {
    date: 'Jun 2021 - Present',
    location: 'S.E.Optimize LTD',
    title: 'Webmaster',
    content: (
      <p>
        Maintain and update websites and servers, campaigns on Google ads platform and Facebook ads, creating databases
        in SQL, experience in bash and basic linux commands, management and maintenance of VMware environments.
      </p>
    ),
  },
  {
    date: 'Nov 2017 - March 2021',
    location: 'BIG IDEA - Israeli Summer Camps',
    title: 'Webmaster',
    content: (
      <p>
        Development, management and marketing of web systems using modern development methodologies, writing efficient
        and maintainable code. The development is done using WordPress, HTML5, CSS3, JavaScript, PHP. Integration via
        Zapier into CRM and lead management and advertising systems.
      </p>
    ),
  },
];

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Send a message to get in touch',
  items: [
    {
      type: ContactType.Email,
      text: 'rafaeltub@gmail.com',
      href: 'mailto:rafaeltub@gmail.com',
    },
    {
      type: ContactType.Location,
      text: 'Tel Aviv',
      href: 'https://www.google.com/maps/place/Tel+Aviv-Yafo/@32.0880576,34.7270335,12z',
    },
    {
      type: ContactType.Github,
      text: 'rtoob',
      href: 'https://github.com/rtoob',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/rtoob'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/rafael-tub/'},
];
