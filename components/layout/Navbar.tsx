'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { useGlobalStore } from '@/lib/store/useGlobalStore';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#education', label: 'Education' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  const { menuOpen, toggleMenu, closeMenu, scrollY, setScrollY } = useGlobalStore();

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [setScrollY]);

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-xl border-b border-white/5 h-20">
      <div className="flex justify-between items-center max-w-7xl mx-auto px-8 h-full">
        <div className="text-2xl font-black tracking-tighter text-white uppercase font-['Space_Grotesk']">
          SHOHRAB
        </div>
        <div className="hidden lg:flex items-center gap-6 font-['Space_Grotesk'] uppercase tracking-widest text-[10px] font-bold">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="text-slate-400 hover:text-cyan-300 transition-all" onClick={closeMenu}>
              {link.label}
            </Link>
          ))}
        </div>
        <a href="https://drive.google.com/file/d/1pLO0mt9YhpjhNJIq6PWazFzpw9sRUmOt/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="bg-primary-container text-on-primary-container px-6 py-2 rounded-full font-bold uppercase text-[10px] tracking-widest hover:scale-105 active:scale-95 transition-all inline-block no-underline">
          Resume
        </a>
        <Sheet open={menuOpen} onOpenChange={toggleMenu}>
          <SheetTrigger asChild className="lg:hidden">
            <Button variant="ghost" size="icon"><Menu className="h-6 w-6" /></Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[250px]">
            <div className="flex flex-col gap-6 mt-8">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href} className="text-lg text-muted-foreground hover:text-foreground" onClick={toggleMenu}>
                  {link.label}
                </Link>
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}
