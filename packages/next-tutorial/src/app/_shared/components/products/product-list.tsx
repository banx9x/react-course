import { Product, getProducts } from '@/app/_shared/services/products.service';
import Link from 'next/link';

type ProductListProps = {
  products: Product[];
};

export default async function ProductList({ products }: ProductListProps) {
  return (
    <section>
      <div>
        <h2>Product List</h2>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: 20,
        }}>
        {products.map((product) => (
          <Link
            key={product.id}
            href={`/products/${product.id}`}>
            <article>
              <div>
                <img
                  src={product.thumbnail}
                  alt={product.title}
                  style={{ maxWidth: '100%' }}
                />
              </div>
              <h3>{product.title}</h3>
            </article>
          </Link>
        ))}
      </div>
    </section>
  );
}
