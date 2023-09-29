import { IoGameController, IoLogoAppleAppstore } from 'react-icons/io5';
import {
  BsFillCollectionFill,
  BsChatFill,
  BsPersonFill,
  BsTagFill,
  BsCodeSlash,
  BsFillRocketFill,
} from 'react-icons/bs';
import { BiSolidGhost } from 'react-icons/bi';
import {
  BsWindows,
  BsPlaystation,
  BsXbox,
  BsApple,
  BsNintendoSwitch,
  BsAndroid,
  BsBrowserChrome,
} from 'react-icons/bs';

import {
  SiLinux,
  SiAtari,
  SiCommodore,
  SiSega,
  SiD3Dotjs,
} from 'react-icons/si';
import { GiConsoleController } from 'react-icons/gi';

import action from '../assets/action.png';
import strategy from '../assets/strategy.png';
import rpg from '../assets/rpg.png';
import shooter from '../assets/shooter.png';
import adventure from '../assets/adventure.png';
import puzzle from '../assets/puzzle.png';
import racing from '../assets/racing.png';
import sport from '../assets/sports.png';

export const menu = [
  {
    href: '/',
    label: 'Home',
  },
  {
    href: '/games',
    label: 'All games',
  },
  {
    href: '/browse',
    label: 'Browse',
    children: [
      {
        href: '/platforms',
        label: 'Platforms',
        icon: IoGameController,
      },
      {
        href: '/stores',
        label: 'Store',
        icon: IoLogoAppleAppstore,
      },
      {
        href: '/collections',
        label: 'Collections',
        icon: BsFillCollectionFill,
      },
      {
        href: '/reviews',
        label: 'Reviews',
        icon: BsChatFill,
      },
      {
        href: '/genres',
        label: 'Genres',
        icon: BiSolidGhost,
      },
      {
        href: '/creators',
        label: 'Creators',
        icon: BsPersonFill,
      },
      {
        href: '/tags',
        label: 'Tags',
        icon: BsTagFill,
      },
      {
        href: '/developers',
        label: 'Developers',
        icon: BsCodeSlash,
      },
      {
        href: '/publishers',
        label: 'Publishers',
        icon: BsFillRocketFill,
      },
    ],
  },
  {
    href: '/platforms',
    label: 'Platforms',
    children: [
      {
        id: 1,
        label: 'PC',
        href: '/platforms/pc',
        icon: BsWindows,
      },
      {
        id: 2,
        label: 'PlayStation',
        href: '/platforms/playstation',
        icon: BsPlaystation,
      },
      {
        id: 3,
        label: 'Xbox',
        href: '/platforms/xbox',
        icon: BsXbox,
      },
      {
        id: 4,
        label: 'iOS',
        href: '/platforms/ios',
        icon: BsApple,
      },
      {
        id: 5,
        label: 'Apple Macintosh',
        href: '/platforms/mac',
        icon: BsApple,
      },
      {
        id: 6,
        label: 'Linux',
        href: '/platforms/linux',
        icon: SiLinux,
      },
      {
        id: 7,
        label: 'Nintendo',
        href: '/platforms/nintendo',
        icon: BsNintendoSwitch,
      },
      {
        id: 8,
        label: 'Android',
        href: '/platforms/android',
        icon: BsAndroid,
      },
      {
        id: 9,
        label: 'Atari',
        href: '/platforms/atari',
        icon: SiAtari,
      },
      {
        id: 10,
        label: 'Commodore / Amiga',
        href: '/platforms/commodore-amiga',
        icon: SiCommodore,
      },
      {
        id: 11,
        label: 'SEGA',
        href: '/platforms/sega',
        icon: SiSega,
      },
      {
        id: 12,
        label: '3DO',
        href: '/platforms/3do',
        icon: SiD3Dotjs,
      },
      {
        id: 13,
        label: 'Neo Geo',
        href: '/platforms/neo-geo',
        icon: GiConsoleController,
      },
      {
        id: 14,
        label: 'Web',
        href: '/platforms/web',
        icon: BsBrowserChrome,
      },
    ],
  },
  {
    href: '/genres',
    label: 'Genres',
    children: [
      {
        href: '/genres/action',
        label: 'Action',
        icon: action,
      },
      {
        href: '/genres/strategy',
        label: 'Strategy',
        icon: strategy,
      },
      {
        href: '/genres/rpg',
        label: 'RPG',
        icon: rpg,
      },
      {
        href: '/genres/shooter',
        label: 'Shooter',
        icon: shooter,
      },
      {
        href: '/genres/adventure',
        label: 'Adventure',
        icon: adventure,
      },
      {
        href: '/genres/puzzle',
        label: 'Puzzle',
        icon: puzzle,
      },
      {
        href: '/genres/racing',
        label: 'Racing',
        icon: racing,
      },
      {
        href: '/genres/sport',
        label: 'Sport',
        icon: sport,
      },
    ],
  },
];
