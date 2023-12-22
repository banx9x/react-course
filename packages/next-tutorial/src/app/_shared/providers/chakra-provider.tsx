'use client';

import { CacheProvider } from '@chakra-ui/next-js';
import { ChakraProvider as Provider } from '@chakra-ui/react';
import { PropsWithChildren } from 'react';

export default function ChakraProvider({ children }: PropsWithChildren) {
  return (
    <CacheProvider>
      <Provider>{children}</Provider>
    </CacheProvider>
  );
}
