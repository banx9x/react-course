'use client';

import React from 'react';
import { SWRConfig } from 'swr';

export default function SWRProvider({
  children,
  fallback,
}: {
  children: React.ReactNode;
  fallback: Record<string, any>;
}) {
  return (
    <SWRConfig
      value={{
        fetcher: (resource, init = {}) =>
          fetch(resource, {
            headers: {
              'Content-Type': 'application/json',
            },
            ...init,
          }).then((res) => res.json()),
        fallback,
      }}>
      {children}
    </SWRConfig>
  );
}


