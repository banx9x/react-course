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

export const platforms = {
  1: {
    id: 1,
    name: 'PC',
    href: '/platforms/pc',
    icon: BsWindows,
  },
  2: {
    id: 2,
    name: 'PlayStation',
    href: '/platforms/playstation',
    icon: BsPlaystation,
  },
  3: {
    id: 3,
    name: 'Xbox',
    href: '/platforms/xbox',
    icon: BsXbox,
  },
  4: {
    id: 4,
    name: 'iOS',
    href: '/platforms/ios',
    icon: BsApple,
  },
  5: {
    id: 5,
    name: 'Apple Macintosh',
    href: '/platforms/mac',
    icon: BsApple,
  },
  6: {
    id: 6,
    name: 'Linux',
    href: '/platforms/linux',
    icon: SiLinux,
  },
  7: {
    id: 7,
    name: 'Nintendo',
    href: '/platforms/nintendo',
    icon: BsNintendoSwitch,
  },
  8: {
    id: 8,
    name: 'Android',
    href: '/platforms/android',
    icon: BsAndroid,
  },
  9: {
    id: 9,
    name: 'Atari',
    href: '/platforms/atari',
    icon: SiAtari,
  },
  10: {
    id: 10,
    name: 'Commodore / Amiga',
    href: '/platforms/commodore-amiga',
    icon: SiCommodore,
  },
  11: {
    id: 11,
    name: 'SEGA',
    href: '/platforms/sega',
    icon: SiSega,
  },
  12: {
    id: 12,
    name: '3DO',
    href: '/platforms/3do',
    icon: SiD3Dotjs,
  },
  13: {
    id: 13,
    name: 'Neo Geo',
    href: '/platforms/neo-geo',
    icon: GiConsoleController,
  },
  14: {
    id: 14,
    name: 'Web',
    href: '/platforms/web',
    icon: BsBrowserChrome,
  },
};
