'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="bg-gradient-to-r from-[#3b1f1f] via-[#7b3e2e] to-[#3b1f1f] shadow-lg transition-all duration-300 ease-in-out">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
        <div className="flex items-center space-x-2">
          <h1 className="text-3xl text-white "style={{ fontFamily: "'fontRusty', serif" }}>
            <Link href="/">Kaif</Link>
          </h1>
          <span className="text-xs font-sans tracking-widest text-white font-raleway">BEYOND THE COFFEE</span>
        </div>
        <nav className="flex space-x-4 gap-10 text-sm font-medium">
          <Link 
            href="/" 
            className={`text-white font-sans px-3 py-2 rounded transition-all ${
              pathname === '/' ? 'bg-[#5d0d0d]' : 'hover:bg-[#5d0d0d]'
            }`}
          >
            Home
          </Link>
          <Link 
            href="/menu" 
            className={`text-white font-sans px-3 py-2 rounded transition-all ${
              pathname === '/menu' ? 'bg-[#5d0d0d]' : 'hover:bg-[#5d0d0d]'
            }`}
          >
            Menu
          </Link>
          <Link 
            href="/order" 
            className={`text-white font-sans px-3 py-2 rounded transition-all ${
              pathname === '/order' ? 'bg-[#5d0d0d]' : 'hover:bg-[#5d0d0d]'
            }`}
          >
            Order
          </Link>
          <Link 
            href="/gallery" 
            className={`text-white font-sans px-3 py-2 rounded transition-all ${
              pathname === '/gallery' ? 'bg-[#5d0d0d]' : 'hover:bg-[#5d0d0d]'
            }`}
          >
            Gallery
          </Link>
          <Link 
            href="/about" 
            className={`text-white font-sans px-3 py-2 rounded transition-all ${
              pathname === '/about' ? 'bg-[#5d0d0d]' : 'hover:bg-[#5d0d0d]'
            }`}
          >
            About Us
          </Link>
        </nav>
        <div className="flex space-x-3 gap-10">
          <Link 
            href="/login" 
            className=" experience-button shine-hover bg-gradient-to-r from-[#7b3e2e] to-[#7b3e2e] text-white px-5 py-2 rounded-full font-semibold shadow hover:shadow-md transition-transform transform hover:scale-105"
          >
            Login
          </Link>
          <Link 
            href="/signup" 
            className=" experience-button shine-hover bg-gradient-to-r from-[#7b3e2e] to-[#7b3e2e] text-white px-5 py-2 rounded-full font-semibold shadow hover:shadow-md transition-transform transform hover:scale-105"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </header>
  );
}