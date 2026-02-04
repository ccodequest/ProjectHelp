'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useCart } from '@/lib/cart-context';
import { ShoppingCart, MessageCircle, Menu, X, BookOpen, GraduationCap } from 'lucide-react';
import { useState } from 'react';

const WHATSAPP_NUMBER = '+919845293201';
const WHATSAPP_MESSAGE = 'Hi! I\'m interested in learning more about your academic project solutions.';

export function Header() {
  const { items } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const openWhatsApp = () => {
    const encodedMessage = encodeURIComponent(WHATSAPP_MESSAGE);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`, '_blank');
  };

  return (
    <header className="sticky top-0 z-50 bg-white/98 backdrop-blur-md border-b border-gray-200 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0 group">
          <Image 
            src="/logo.jpg" 
            alt="ProjectHelp Logo" 
            width={150} 
            height={150}
            className="rounded-lg shadow-lg group-hover:shadow-xl transition-shadow"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 flex-1 ml-12">
          <Link
            href="/"
            className="text-gray-700 hover:text-primary font-semibold text-base transition-colors relative group"
          >
            Home
            <span className="absolute -bottom-1 left-0 w-0 h-1 gradient-primary rounded-full group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link
            href="/marketplace"
            className="text-gray-700 hover:text-primary font-semibold text-base transition-colors relative group"
          >
            Marketplace
            <span className="absolute -bottom-1 left-0 w-0 h-1 gradient-primary rounded-full group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link
            href="/how-it-works"
            className="text-gray-700 hover:text-primary font-semibold text-base transition-colors relative group"
          >
            How It Works
            <span className="absolute -bottom-1 left-0 w-0 h-1 gradient-primary rounded-full group-hover:w-full transition-all duration-300"></span>
          </Link>
        </nav>

        {/* Right Side Actions */}
        <div className="flex items-center gap-3">
          <button
            onClick={openWhatsApp}
            className="hidden sm:flex items-center gap-2 px-5 py-3 rounded-xl bg-green-500 hover:bg-green-600 text-white transition-all hover:scale-105 font-bold text-base shadow-lg hover:shadow-xl"
            aria-label="Contact on WhatsApp"
            title="Chat with us on WhatsApp"
          >
            <MessageCircle size={20} strokeWidth={2.5} />
            <span>WhatsApp</span>
          </button>

          <Link
            href="/cart"
            className="relative flex items-center justify-center gap-2 px-5 py-3 rounded-xl gradient-primary text-white hover:shadow-xl transition-all hover:scale-105 font-bold text-base shadow-lg"
            aria-label={`Shopping cart with ${items.length} items`}
            title="View shopping cart"
          >
            <ShoppingCart size={20} strokeWidth={2.5} />
            <span className="hidden sm:inline">Cart</span>
            {items.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold min-w-[24px] h-6 px-1.5 rounded-full flex items-center justify-center shadow-lg animate-pulse border-2 border-white">
                {items.length > 9 ? '9+' : items.length}
              </span>
            )}
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 px-4 py-6 space-y-4 shadow-lg">
          <Link
            href="/"
            onClick={() => setIsMenuOpen(false)}
            className="block py-3 px-4 text-gray-700 hover:text-primary hover:bg-gray-50 font-semibold transition-colors rounded-lg text-base"
          >
            Home
          </Link>
          <Link
            href="/marketplace"
            onClick={() => setIsMenuOpen(false)}
            className="block py-3 px-4 text-gray-700 hover:text-primary hover:bg-gray-50 font-semibold transition-colors rounded-lg text-base"
          >
            Marketplace
          </Link>
          <Link
            href="/how-it-works"
            onClick={() => setIsMenuOpen(false)}
            className="block py-3 px-4 text-gray-700 hover:text-primary hover:bg-gray-50 font-semibold transition-colors rounded-lg text-base"
          >
            How It Works
          </Link>
          <button
            onClick={() => {
              openWhatsApp();
              setIsMenuOpen(false);
            }}
            className="w-full py-3 px-5 bg-green-500 text-white rounded-xl font-bold hover:bg-green-600 transition-colors flex items-center justify-center gap-2 shadow-lg text-base"
          >
            <MessageCircle size={20} />
            WhatsApp
          </button>
        </div>
      )}
    </header>
  );
}
