import { useEffect, useState } from 'react';
import { Rocket } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all ${
        scrolled ? 'backdrop-blur-md bg-white/70 border-b border-purple-100' : 'bg-white/0'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#" className="flex items-center gap-2 text-purple-700">
          <Rocket className="h-6 w-6" />
          <span className="font-semibold tracking-tight">Violet Labs</span>
        </a>
        <div className="hidden gap-8 md:flex">
          <a href="#features" className="text-sm text-gray-700 hover:text-purple-700 transition-colors">Features</a>
          <a href="#about" className="text-sm text-gray-700 hover:text-purple-700 transition-colors">About</a>
          <a href="#contact" className="text-sm text-gray-700 hover:text-purple-700 transition-colors">Contact</a>
        </div>
        <div className="flex items-center gap-3">
          <a href="#" className="text-sm text-gray-700 hover:text-purple-700 transition-colors">Sign in</a>
          <a
            href="#get-started"
            className="rounded-full bg-purple-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-purple-700 active:bg-purple-800 transition-colors"
          >
            Get Started
          </a>
        </div>
      </nav>
    </header>
  );
}
