'use client';

import { usePathname } from 'next/navigation';
import Header from './Header';
import Footer from './Footer';

export default function ConditionalLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  
  // Páginas que no deben mostrar header y footer
  const excludedPaths = ['/login', '/register', '/forgot-password', '/terms'];
  const shouldShowLayout = !excludedPaths.includes(pathname);

  if (!shouldShowLayout) {
    return <>{children}</>;
  }

  return (
    <>
      <Header />
      <main className="min-h-screen">
        {children}
      </main>
      <Footer />
    </>
  );
}
