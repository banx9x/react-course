import Link from 'next/link';
import React from 'react';
import SearchForm from '@/app/_shared/components/search-form/search-form';

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <header className='header'>
        <h1>Client Header</h1>

        <nav className='nav'>
          <Link href={'/'}>Home</Link>
          <Link href={'/about'}>About</Link>
          <Link href={'/category'}>Category</Link>
          <Link href={'/login'}>Login</Link>
          <Link href={'/sign-up'}>Sign Up</Link>
        </nav>

        <SearchForm />
      </header>

      {children}

      <footer className='footer'>Client Footer</footer>
    </>
  );
}
