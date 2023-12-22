import { ProductImageCarousel } from '@/app/_shared/components/products/product-image-carousel';
import { getProductById } from '@/app/_shared/services/products.service';
import { Grid } from '@chakra-ui/react';
import { Metadata } from 'next';

export const generateMetadata = async ({
  params: { id },
}: ProductDetailProps): Promise<Metadata> => {
  const product = await getProductById({ id });

  return {
    title: `${product.title} - Trang bán hàng`,
    description: product.description,
  };
};

type ProductDetailProps = {
  params: {
    id: string;
  };
};

export default async function ProductDetail({
  params: { id },
}: ProductDetailProps) {
  const product = await getProductById({ id });

  return (
    <main>
      <Grid
        templateColumns={'1fr 1fr'}
        gap={20}>
        <ProductImageCarousel images={product.images} />

        <div>
          <h1>{product.title}</h1>

          <p>{product.description}</p>

          <p>{product.price}</p>
        </div>
      </Grid>
    </main>
  );
}
