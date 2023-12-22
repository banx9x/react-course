import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Trang chủ',
  description: "Next tutorial"
};

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <h1>Xin chào các bạn trẻ</h1>
    </main>
  );
}
