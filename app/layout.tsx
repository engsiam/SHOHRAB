import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Preloader from '@/components/ui/preloader';
import AnimationProvider from '@/components/providers/AnimationProvider';
import ScrollToTop from '@/components/ui/scroll-to-top';
import MouseGlow from '@/components/providers/MouseGlow';

export const metadata: Metadata = {
  metadataBase: new URL('https://shohrab.dev'),
  title: 'MD. Shohrab Hossain | Senior Software Engineer Portfolio',
  description: 'Senior Software Engineer specializing in MERN stack. Building scalable, high-performance web and mobile applications.',
  openGraph: {
    title: 'MD. Shohrab Hossain | Senior Software Engineer Portfolio',
    description: 'Senior Software Engineer specializing in MERN stack. Building scalable, high-performance applications.',
    url: 'https://shohrab.dev',
    siteName: 'Shohrab Portfolio',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
    locale: 'en_US',
    type: 'website',
  },
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/apple-touch-icon.png',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet"/>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet"/>
      </head>
      <body className="bg-background text-on-background font-body-md selection:bg-primary-container selection:text-on-primary-container">
        <Preloader />
        <MouseGlow />
        <Navbar />
        <main className="relative">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
