export type Pagination<T> = T & {
  total: number;
  limit: number;
  skip: number;
};
