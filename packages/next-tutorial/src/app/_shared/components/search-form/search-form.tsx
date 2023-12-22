'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { FormEvent, useState } from 'react';

export default function SearchForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [query, setQuery] = useState(searchParams.get('query') || '');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    router.push(`/products/search?query=${query}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        placeholder='Tìm kiếm sản phẩm'
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </form>
  );
}
