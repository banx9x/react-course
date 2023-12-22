import { Pagination } from '@/app/_shared/types/response';

type GetProductsPayload = {
  limit: number;
  page: number;
  search?: string;
};

export type Product = {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
};

type ProductId = Product['id'];

type GetProductResponse = {
  products: Product[];
};

export const getProducts = async ({
  limit = 10,
  page = 1,
}: Partial<GetProductsPayload> = {}): Promise<
  Pagination<GetProductResponse>
> => {
  const skip = (page - 1) * limit;

  const res = await fetch(
    `https://dummyjson.com/products?limit=${limit}&skip=${skip}`,
  );

  return res.json();
};

type SearchProductPayload = Partial<GetProductsPayload> & {
  q: string;
};

export const searchProducts = async ({
  limit = 10,
  page = 1,
  q,
}: SearchProductPayload) => {
  const skip = (page - 1) * limit;

  const res = await fetch(
    `https://dummyjson.com/products/search?q=${q}&limit=${limit}&skip=${skip}`,
  );

  return res.json();
};

type GetProductByIdPayload = {
  id: ProductId | string;
};

export const getProductById = async ({
  id,
}: GetProductByIdPayload): Promise<Product> => {
  const res = await fetch(`https://dummyjson.com/products/${id}`);

  return res.json();
};
