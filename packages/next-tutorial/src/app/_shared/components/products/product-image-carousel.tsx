'use client';

import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { Box, Flex } from '@chakra-ui/react';

type ProductImageCarouselProps = {
  images: string[];
};

export const ProductImageCarousel = ({ images }: ProductImageCarouselProps) => {
  const [emblaRef] = useEmblaCarousel();

  return (
    <Box
      overflow={'hidden'}
      className='embla'
      ref={emblaRef}>
      <Flex className='embla__container'>
        {images.map((image) => (
          <Box
            flex={'0 0 100%'}
            minWidth={0}
            className='embla__slide'
            key={image}>
            <img
              src={image}
              alt=''
            />
          </Box>
        ))}
      </Flex>
    </Box>
  );
};
