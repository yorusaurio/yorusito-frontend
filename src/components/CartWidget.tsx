'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
  category: string;
  size: string;
}

interface CartWidgetProps {
  isOpen: boolean;
  onClose: () => void;
}

// Mock data del carrito
const mockCartItems: CartItem[] = [
  {
    id: 1,
    name: 'Polo Stars Messi',
    price: 45,
    quantity: 1,
    image: '/api/placeholder/80/80',
    category: 'stars',
    size: 'M'
  },
  {
    id: 2,
    name: 'Camiseta Naruto Uzumaki',
    price: 38,
    quantity: 2,
    image: '/api/placeholder/80/80',
    category: 'anime',
    size: 'L'
  },
  {
    id: 3,
    name: 'Hoodie Urbano Black',
    price: 75,
    quantity: 1,
    image: '/api/placeholder/80/80',
    category: 'hoodies',
    size: 'XL'
  }
];

export default function CartWidget({ isOpen, onClose }: CartWidgetProps) {
  const [cartItems, setCartItems] = useState<CartItem[]>(mockCartItems);

  // Calcular totales
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  // Cerrar widget con ESC
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  // Función para actualizar cantidad
  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity === 0) {
      setCartItems(cartItems.filter(item => item.id !== id));
    } else {
      setCartItems(cartItems.map(item => 
        item.id === id ? { ...item, quantity: newQuantity } : item
      ));
    }
  };

  // Función para eliminar item
  const removeItem = (id: number) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity"
        onClick={onClose}
      />
      
      {/* Widget */}
      <div className="fixed top-0 right-0 h-full w-full max-w-sm bg-white shadow-2xl z-50 transform transition-transform">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200">
            <div>
              <h2 className="text-xl font-medium text-gray-900">Tu Carrito</h2>
              <p className="text-sm text-gray-500">{totalItems} {totalItems === 1 ? 'producto' : 'productos'}</p>
            </div>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 transition-colors p-2 rounded-full hover:bg-gray-100"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Items */}
          <div className="flex-1 overflow-y-auto">
            {cartItems.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full p-6 text-center">
                <svg className="w-16 h-16 text-gray-300 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
                <h3 className="text-lg font-medium text-gray-900 mb-2">Tu carrito está vacío</h3>
                <p className="text-gray-500 text-sm mb-6">Agrega algunos productos para comenzar</p>
                <Link 
                  href="/products"
                  onClick={onClose}
                  className="px-6 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors font-medium"
                >
                  Explorar Productos
                </Link>
              </div>
            ) : (
              <div className="p-6 space-y-4">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                    {/* Imagen del producto */}
                    <div className="w-16 h-16 bg-gray-200 rounded-lg flex items-center justify-center overflow-hidden">
                      <div className="w-full h-full bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center">
                        <span className="text-white text-xs font-medium">
                          {item.name.split(' ')[0].charAt(0)}
                        </span>
                      </div>
                    </div>

                    {/* Detalles del producto */}
                    <div className="flex-1">
                      <h4 className="text-sm font-medium text-gray-900 mb-1">{item.name}</h4>
                      <p className="text-xs text-gray-500 mb-2">Talla: {item.size}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-gray-900">S/ {item.price}</span>
                        
                        {/* Controles de cantidad */}
                        <div className="flex items-center space-x-2">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="w-6 h-6 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center transition-colors"
                          >
                            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                            </svg>
                          </button>
                          <span className="text-sm font-medium text-gray-900 w-8 text-center">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="w-6 h-6 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center transition-colors"
                          >
                            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Botón eliminar */}
                    <button
                      onClick={() => removeItem(item.id)}
                      className="text-gray-400 hover:text-red-500 transition-colors p-1"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer - Solo si hay items */}
          {cartItems.length > 0 && (
            <div className="p-6 border-t border-gray-200 bg-gray-50">
              {/* Subtotal */}
              <div className="flex justify-between items-center mb-4">
                <span className="text-lg font-medium text-gray-900">Subtotal</span>
                <span className="text-lg font-medium text-gray-900">S/ {totalPrice.toFixed(2)}</span>
              </div>

              {/* Información adicional */}
              <div className="text-xs text-gray-500 mb-4 text-center">
                Envío e impuestos calculados en el checkout
              </div>

              {/* Botones */}
              <div className="space-y-3">
                <Link 
                  href="/cart"
                  onClick={onClose}
                  className="w-full flex items-center justify-center px-4 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors font-medium"
                >
                  Ver Carrito Completo
                </Link>
                <Link 
                  href="/checkout"
                  onClick={onClose}
                  className="w-full flex items-center justify-center px-4 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors font-medium"
                >
                  Proceder al Checkout
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
