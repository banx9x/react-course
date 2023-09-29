import { menu } from './menu';

export type NavigationItemType = (typeof menu)[number];

export type QueryGameParams = Partial<{
  page: number;
  pageSize: number;
  search: string;
  platforms: string[];
  stores: string[];
  developers: string[];
  publishers: string[];
  genres: string[];
  tags: string[];
  creators: string[];
  dates: string[];
  ordering: string;
}>;
