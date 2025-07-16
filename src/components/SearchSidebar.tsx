'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

interface SearchSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

// Mock data de productos para la búsqueda
const mockProducts = [
  { id: 1, name: 'Polo Stars Limited', category: 'stars', price: 45, image: '/api/placeholder/60/60' },
  { id: 2, name: 'Camiseta Anime Naruto', category: 'anime', price: 38, image: '/api/placeholder/60/60' },
  { id: 3, name: 'Hoodie Urbano Black', category: 'hoodies', price: 75, image: '/api/placeholder/60/60' },
  { id: 4, name: 'Polo Básico White', category: 'polos', price: 25, image: '/api/placeholder/60/60' },
  { id: 5, name: 'Camiseta Dragon Ball', category: 'anime', price: 42, image: '/api/placeholder/60/60' },
  { id: 6, name: 'Pantalón Jogger', category: 'pantalones', price: 55, image: '/api/placeholder/60/60' },
  { id: 7, name: 'Hoodie Stars Collection', category: 'stars', price: 85, image: '/api/placeholder/60/60' },
  { id: 8, name: 'Camiseta One Piece', category: 'anime', price: 40, image: '/api/placeholder/60/60' },
];

const popularSearches = [
  'Camisetas Anime',
  'Polos Stars',
  'Hoodies Urbanos',
  'Pantalones Jogger',
  'Colección Naruto',
  'Ropa Básica'
];

export default function SearchSidebar({ isOpen, onClose }: SearchSidebarProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProducts, setFilteredProducts] = useState(mockProducts);

  useEffect(() => {
    if (searchTerm) {
      const filtered = mockProducts.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.category.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts(mockProducts);
    }
  }, [searchTerm]);

  // Cerrar sidebar con ESC
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity"
        onClick={onClose}
      />
      
      {/* Sidebar */}
      <div className="fixed top-0 right-0 h-full w-full max-w-md bg-white shadow-2xl z-50 transform transition-transform">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200">
            <h2 className="text-xl font-medium text-gray-900">Buscar Productos</h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 transition-colors p-2 rounded-full hover:bg-gray-100"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Search Input */}
          <div className="p-6 border-b border-gray-200">
            <div className="relative">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Buscar productos..."
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                autoFocus
              />
              <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto">
            {searchTerm === '' ? (
              /* Popular Searches */
              <div className="p-6">
                <h3 className="text-sm font-medium text-gray-900 mb-4 uppercase tracking-wide">Búsquedas Populares</h3>
                <div className="space-y-2">
                  {popularSearches.map((search, index) => (
                    <button
                      key={index}
                      onClick={() => setSearchTerm(search)}
                      className="flex items-center w-full p-3 text-left text-gray-700 hover:bg-gray-50 rounded-lg transition-colors"
                    >
                      <svg className="w-4 h-4 text-gray-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                      {search}
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              /* Search Results */
              <div className="p-6">
                <h3 className="text-sm font-medium text-gray-900 mb-4 uppercase tracking-wide">
                  Resultados ({filteredProducts.length})
                </h3>
                
                {filteredProducts.length > 0 ? (
                  <div className="space-y-3">
                    {filteredProducts.map((product) => (
                      <Link
                        key={product.id}
                        href={`/products/${product.id}`}
                        onClick={onClose}
                        className="flex items-center p-3 hover:bg-gray-50 rounded-lg transition-colors group"
                      >
                        <div className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center mr-3 overflow-hidden">
                          <div className="w-full h-full bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center">
                            <span className="text-white text-xs font-medium">
                              {product.name.split(' ')[0].charAt(0)}
                            </span>
                          </div>
                        </div>
                        <div className="flex-1">
                          <h4 className="text-sm font-medium text-gray-900 group-hover:text-red-500 transition-colors">
                            {product.name}
                          </h4>
                          <p className="text-xs text-gray-500 capitalize">{product.category}</p>
                        </div>
                        <div className="text-right">
                          <span className="text-sm font-medium text-gray-900">S/ {product.price}</span>
                        </div>
                      </Link>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <svg className="w-12 h-12 text-gray-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    <p className="text-gray-500 text-sm">No se encontraron productos</p>
                    <p className="text-gray-400 text-xs mt-1">Intenta con otros términos</p>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="p-6 border-t border-gray-200 bg-gray-50">
            <div className="flex items-center justify-between text-xs text-gray-500">
              <span>Presiona ESC para cerrar</span>
              <Link href="/products" onClick={onClose} className="text-red-500 hover:text-red-600 font-medium">
                Ver todos los productos →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
