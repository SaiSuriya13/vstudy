// app/root/home
import { Metadata } from 'next';
import { ReactNode } from 'react';

import Navbar from '@/components/Navbar';
import Sidebar from '@/components/Sidebar';

export const metadata: Metadata = {
  title: 'VSTUDY',
  description: 'A workspace for your team, powered by Stream Chat and Clerk.',
};

const RootLayout = ({ children }: Readonly<{children: ReactNode}>) => {
  return (
    <main className="relative min-h-screen">
      {/* Navbar Component */}
      <Navbar />

      <div className="flex">
        {/* Sidebar Component */}
        <Sidebar />

        {/* Main Content Area */}
        <section className="flex flex-1 flex-col px-6 pb-6 pt-28 max-md:pb-14 sm:px-14">
          {/* Ensure children are rendered properly */}
          <div className="w-full">{children || <div className="text-center">No content available</div>}</div>
        </section>
      </div>
    </main>
  );
};

export default RootLayout;
