import ProductList from '@/app/_shared/components/products/product-list';
import { getProducts } from '@/app/_shared/services/products.service';
import { Button } from '@chakra-ui/react';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Danh sách sản phẩm',
  description: 'Danh sách sản phẩm của cửa hàng',
};

type ProductListPageProps = {
  searchParams: {
    page: number;
    pageSize: number;
  };
};

export default async function ProductListPage({
  searchParams: { page = 1, pageSize = 10 },
}: ProductListPageProps) {
  const { products, total, limit } = await getProducts({
    limit: pageSize,
    page: page,
  });

  const totalPage = Math.ceil(total / limit);

  return (
    <main>
      <ProductList products={products} />

      <div style={{ display: 'flex', gap: 5 }}>
        {[...Array(totalPage)].map((_, index) => {
          const pageNumber = index + 1;
          const isCurrentPage = page == pageNumber;

          const href =
            index === 0 ? '/products' : `/products?page=${pageNumber}`;

          if (isCurrentPage) {
            return (
              <Button
                key={href}
                style={{
                  background: 'white',
                  border: '1px solid #999999',
                }}>
                {pageNumber}
              </Button>
            );
          }

          return (
            <Button
              as={Link}
              key={href}
              href={href}>
              {pageNumber}
            </Button>
          );
        })}
      </div>
    </main>
  );
}
