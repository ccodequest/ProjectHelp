'use client';

import Link from 'next/link';
import { useCart } from '@/lib/cart-context';
import { ShoppingCart, MessageCircle, Menu, X } from 'lucide-react';
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
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 flex-shrink-0">
          <div className="flex items-center gap-2">
            <div className="gradient-primary rounded-lg p-2">
              <span className="text-xl font-bold">📚</span>
            </div>
            <div className="hidden sm:flex flex-col">
              <span className="text-xs font-bold text-gray-600 uppercase tracking-wider">ProjectHelp</span>
              <span className="text-sm font-bold gradient-primary bg-clip-text text-transparent">Academic Projects</span>
            </div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 flex-1 ml-12">
          <Link
            href="/"
            className="text-gray-700 hover:text-primary font-medium text-sm transition-colors relative group"
          >
            Home
            <span className="absolute bottom-0 left-0 w-0 h-0.5 gradient-primary group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link
            href="/marketplace"
            className="text-gray-700 hover:text-primary font-medium text-sm transition-colors relative group"
          >
            Marketplace
            <span className="absolute bottom-0 left-0 w-0 h-0.5 gradient-primary group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link
            href="/how-it-works"
            className="text-gray-700 hover:text-primary font-medium text-sm transition-colors relative group"
          >
            How It Works
            <span className="absolute bottom-0 left-0 w-0 h-0.5 gradient-primary group-hover:w-full transition-all duration-300"></span>
          </Link>
        </nav>

        {/* Right Side Actions */}
        <div className="flex items-center gap-2 md:gap-3">
          <button
            onClick={openWhatsApp}
            className="hidden sm:flex items-center gap-2 px-3 md:px-4 py-2.5 rounded-full bg-green-500 hover:bg-green-600 text-white transition-all hover:scale-105 font-medium text-sm shadow-md hover:shadow-lg"
            aria-label="Contact on WhatsApp"
            title="Chat with us on WhatsApp"
          >
            <MessageCircle size={18} />
            <span className="hidden md:inline">WhatsApp</span>
          </button>

          <Link
            href="/cart"
            className="relative flex items-center justify-center gap-2 px-3 md:px-4 py-2.5 rounded-full gradient-primary text-white hover:shadow-lg transition-all hover:scale-105 font-medium text-sm shadow-md"
            aria-label={`Shopping cart with ${items.length} items`}
            title="View shopping cart"
          >
            <ShoppingCart size={20} />
            {items.length > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center shadow-md animate-pulse">
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
        <div className="md:hidden bg-white border-t border-gray-200 px-4 py-4 space-y-3">
          <Link
            href="/"
            onClick={() => setIsMenuOpen(false)}
            className="block py-2 text-gray-700 hover:text-primary font-medium transition-colors"
          >
            Home
          </Link>
          <Link
            href="/marketplace"
            onClick={() => setIsMenuOpen(false)}
            className="block py-2 text-gray-700 hover:text-primary font-medium transition-colors"
          >
            Marketplace
          </Link>
          <Link
            href="/how-it-works"
            onClick={() => setIsMenuOpen(false)}
            className="block py-2 text-gray-700 hover:text-primary font-medium transition-colors"
          >
            How It Works
          </Link>
          <button
            onClick={() => {
              openWhatsApp();
              setIsMenuOpen(false);
            }}
            className="w-full py-2 px-4 bg-green-500 text-white rounded-lg font-medium hover:bg-green-600 transition-colors flex items-center justify-center gap-2"
          >
            <MessageCircle size={18} />
            WhatsApp
          </button>
        </div>
      )}
    </header>
  );
}
