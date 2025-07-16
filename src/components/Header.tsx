'use client';

import { useState } from 'react';
import Link from 'next/link';
import SearchSidebar from './SearchSidebar';
import CartWidget from './CartWidget';

export default function Header() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <>
      <header className="bg-white/95 backdrop-blur-md border-b border-gray-200 py-4 shadow-sm fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo - Minimal Design */}
        <Link href="/" className="flex items-center space-x-3 group">
          <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 bg-white opacity-10 group-hover:opacity-20 transition-opacity"></div>
            <span className="text-white font-bold text-sm">Y</span>
          </div>
          <span className="text-xl font-light text-gray-900 tracking-tight">
            YORU<span className="font-medium text-red-500">SITO</span>
          </span>
        </Link>

        {/* Navigation - Minimal Style */}
        <nav className="hidden md:flex items-center space-x-8">
          <div className="relative group">
            <button className="text-gray-700 hover:text-red-500 transition-colors font-light text-sm uppercase tracking-wide flex items-center">
              VER TODO
              <svg className="w-4 h-4 ml-1 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-10 overflow-hidden">
              <Link href="/products?category=polos" className="block px-4 py-3 hover:bg-gray-50 border-b border-gray-100 text-gray-700 text-sm transition-colors">
                Polos Básicos
              </Link>
              <Link href="/products?category=camisetas" className="block px-4 py-3 hover:bg-gray-50 border-b border-gray-100 text-gray-700 text-sm transition-colors">
                Camisetas
              </Link>
              <Link href="/products?category=hoodies" className="block px-4 py-3 hover:bg-gray-50 border-b border-gray-100 text-gray-700 text-sm transition-colors">
                Hoodies
              </Link>
              <Link href="/products?category=pantalones" className="block px-4 py-3 hover:bg-gray-50 text-gray-700 text-sm transition-colors">
                Pantalones
              </Link>
            </div>
          </div>

          <div className="relative group">
            <button className="text-gray-700 hover:text-red-500 transition-colors font-light text-sm uppercase tracking-wide flex items-center">
              COLECCIONES
              <svg className="w-4 h-4 ml-1 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-10 overflow-hidden">
              <Link href="/products?category=stars" className="block px-4 py-3 hover:bg-gray-50 border-b border-gray-100 text-gray-700 text-sm transition-colors">
                <span className="flex items-center">
                  <span className="w-2 h-2 bg-yellow-400 rounded-full mr-2"></span>
                  Colección Stars
                </span>
              </Link>
              <Link href="/products?category=anime" className="block px-4 py-3 hover:bg-gray-50 text-gray-700 text-sm transition-colors">
                <span className="flex items-center">
                  <span className="w-2 h-2 bg-purple-400 rounded-full mr-2"></span>
                  Colección Anime
                </span>
              </Link>
            </div>
          </div>

          <div className="relative group">
            <button className="text-gray-700 hover:text-red-500 transition-colors font-light text-sm uppercase tracking-wide flex items-center">
              NEW ARRIVALS
              <svg className="w-4 h-4 ml-1 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-10 overflow-hidden">
              <Link href="/new-arrivals?category=camisetas" className="block px-4 py-3 hover:bg-gray-50 border-b border-gray-100 text-gray-700 text-sm transition-colors">
                <span className="flex items-center">
                  <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                  Camisetas Nuevas
                </span>
              </Link>
              <Link href="/new-arrivals?category=hoodies" className="block px-4 py-3 hover:bg-gray-50 border-b border-gray-100 text-gray-700 text-sm transition-colors">
                <span className="flex items-center">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                  Hoodies Nuevos
                </span>
              </Link>
              <Link href="/new-arrivals?category=accesorios" className="block px-4 py-3 hover:bg-gray-50 text-gray-700 text-sm transition-colors">
                <span className="flex items-center">
                  <span className="w-2 h-2 bg-pink-400 rounded-full mr-2"></span>
                  Accesorios
                </span>
              </Link>
            </div>
          </div>
        </nav>

        {/* Actions - Minimal Style */}
        <div className="flex items-center space-x-4">
          {/* Search */}
          <button 
            onClick={() => setIsSearchOpen(true)}
            className="text-gray-600 hover:text-red-500 transition-colors p-2 rounded-full hover:bg-gray-100"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>

          {/* User Account */}
          <Link href="/login" className="text-gray-600 hover:text-red-500 transition-colors p-2 rounded-full hover:bg-gray-100">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </Link>

          {/* Cart */}
          <button 
            onClick={() => setIsCartOpen(true)}
            className="text-gray-600 hover:text-red-500 transition-colors relative p-2 rounded-full hover:bg-gray-100"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
            {/* Cart count badge - Minimal */}
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center text-[10px] font-medium">
              4
            </span>
          </button>
        </div>

        {/* Mobile menu button - Minimal */}
        <button className="md:hidden text-gray-600 hover:text-red-500 transition-colors p-2 rounded-full hover:bg-gray-100">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </header>

    {/* Search Sidebar */}
    <SearchSidebar isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    
    {/* Cart Widget */}
    <CartWidget isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
  </>
  );
}
