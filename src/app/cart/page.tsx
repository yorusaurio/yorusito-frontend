'use client';

import { useState } from 'react';
import Link from 'next/link';

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
  category: string;
  size: string;
  color: string;
}

// Mock data del carrito
const initialCartItems: CartItem[] = [
  {
    id: 1,
    name: 'Polo Stars Messi',
    price: 45,
    quantity: 1,
    image: '/api/placeholder/120/120',
    category: 'stars',
    size: 'M',
    color: 'Azul'
  },
  {
    id: 2,
    name: 'Camiseta Naruto Uzumaki',
    price: 38,
    quantity: 2,
    image: '/api/placeholder/120/120',
    category: 'anime',
    size: 'L',
    color: 'Negro'
  },
  {
    id: 3,
    name: 'Hoodie Urbano Black',
    price: 75,
    quantity: 1,
    image: '/api/placeholder/120/120',
    category: 'hoodies',
    size: 'XL',
    color: 'Negro'
  }
];

export default function CartPage() {
  const [cartItems, setCartItems] = useState<CartItem[]>(initialCartItems);
  const [promoCode, setPromoCode] = useState('');
  const [discount, setDiscount] = useState(0);

  // Calcular totales
  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = subtotal > 100 ? 0 : 15; // Envío gratis por compras mayores a S/100
  const discountAmount = subtotal * (discount / 100);
  const total = subtotal + shipping - discountAmount;

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

  // Función para aplicar código promocional
  const applyPromoCode = () => {
    if (promoCode.toLowerCase() === 'yorusito10') {
      setDiscount(10);
    } else if (promoCode.toLowerCase() === 'anime15') {
      setDiscount(15);
    } else {
      alert('Código promocional no válido');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="container mx-auto px-6 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-light text-gray-900 mb-2">Tu Carrito</h1>
          <p className="text-gray-600">Revisa tus productos antes de continuar</p>
        </div>

        {cartItems.length === 0 ? (
          /* Carrito vacío */
          <div className="bg-white rounded-lg p-12 text-center">
            <svg className="w-20 h-20 text-gray-300 mx-auto mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
            <h2 className="text-2xl font-medium text-gray-900 mb-4">Tu carrito está vacío</h2>
            <p className="text-gray-500 mb-8">Parece que no has agregado ningún producto a tu carrito</p>
            <Link 
              href="/products"
              className="inline-flex items-center px-8 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors font-medium"
            >
              Explorar Productos
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Lista de productos */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-sm">
                {/* Header de la tabla */}
                <div className="px-6 py-4 border-b border-gray-200">
                  <h2 className="text-lg font-medium text-gray-900">Productos ({cartItems.length})</h2>
                </div>

                {/* Items */}
                <div className="divide-y divide-gray-200">
                  {cartItems.map((item) => (
                    <div key={item.id} className="p-6">
                      <div className="flex items-center space-x-4">
                        {/* Imagen */}
                        <div className="w-24 h-24 bg-gray-200 rounded-lg flex items-center justify-center overflow-hidden">
                          <div className="w-full h-full bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center">
                            <span className="text-white font-medium">
                              {item.name.split(' ')[0].charAt(0)}
                            </span>
                          </div>
                        </div>

                        {/* Detalles */}
                        <div className="flex-1">
                          <h3 className="text-lg font-medium text-gray-900">{item.name}</h3>
                          <div className="flex items-center space-x-4 mt-2 text-sm text-gray-500">
                            <span>Talla: {item.size}</span>
                            <span>Color: {item.color}</span>
                            <span className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-gray-100 text-gray-800 capitalize">
                              {item.category}
                            </span>
                          </div>
                        </div>

                        {/* Precio y controles */}
                        <div className="flex items-center space-x-8">
                          {/* Precio unitario */}
                          <div className="text-center">
                            <div className="text-sm text-gray-500">Precio</div>
                            <div className="text-lg font-medium text-gray-900">S/ {item.price}</div>
                          </div>

                          {/* Cantidad */}
                          <div className="text-center">
                            <div className="text-sm text-gray-500 mb-2">Cantidad</div>
                            <div className="flex items-center space-x-2">
                              <button
                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                className="w-8 h-8 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center transition-colors"
                              >
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                                </svg>
                              </button>
                              <span className="text-lg font-medium text-gray-900 w-8 text-center">{item.quantity}</span>
                              <button
                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                className="w-8 h-8 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center transition-colors"
                              >
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                </svg>
                              </button>
                            </div>
                          </div>

                          {/* Total */}
                          <div className="text-center">
                            <div className="text-sm text-gray-500">Total</div>
                            <div className="text-lg font-medium text-gray-900">S/ {(item.price * item.quantity).toFixed(2)}</div>
                          </div>

                          {/* Eliminar */}
                          <button
                            onClick={() => removeItem(item.id)}
                            className="text-gray-400 hover:text-red-500 transition-colors p-2"
                          >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Acciones del carrito */}
                <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                  <div className="flex justify-between items-center">
                    <Link 
                      href="/products"
                      className="text-red-500 hover:text-red-600 font-medium"
                    >
                      ← Continuar Comprando
                    </Link>
                    <button
                      onClick={() => setCartItems([])}
                      className="text-gray-500 hover:text-gray-700 font-medium"
                    >
                      Vaciar Carrito
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Resumen del pedido */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="text-lg font-medium text-gray-900 mb-6">Resumen del Pedido</h2>

                {/* Código promocional */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Código Promocional
                  </label>
                  <div className="flex space-x-2">
                    <input
                      type="text"
                      value={promoCode}
                      onChange={(e) => setPromoCode(e.target.value)}
                      placeholder="Ingresa tu código"
                      className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    />
                    <button
                      onClick={applyPromoCode}
                      className="px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors font-medium"
                    >
                      Aplicar
                    </button>
                  </div>
                  {discount > 0 && (
                    <div className="mt-2 text-sm text-green-600">
                      ✓ Descuento del {discount}% aplicado
                    </div>
                  )}
                </div>

                {/* Cálculos */}
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Subtotal</span>
                    <span className="font-medium">S/ {subtotal.toFixed(2)}</span>
                  </div>
                  
                  {discount > 0 && (
                    <div className="flex justify-between text-green-600">
                      <span>Descuento ({discount}%)</span>
                      <span>-S/ {discountAmount.toFixed(2)}</span>
                    </div>
                  )}
                  
                  <div className="flex justify-between">
                    <span className="text-gray-600">Envío</span>
                    <span className="font-medium">
                      {shipping === 0 ? 'Gratis' : `S/ ${shipping.toFixed(2)}`}
                    </span>
                  </div>
                  
                  {shipping > 0 && (
                    <div className="text-sm text-gray-500">
                      Envío gratis en compras mayores a S/ 100
                    </div>
                  )}
                  
                  <div className="border-t border-gray-200 pt-4">
                    <div className="flex justify-between text-lg font-medium">
                      <span>Total</span>
                      <span>S/ {total.toFixed(2)}</span>
                    </div>
                  </div>
                </div>

                {/* Botones de acción */}
                <div className="space-y-3">
                  <Link 
                    href="/checkout"
                    className="w-full flex items-center justify-center px-6 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors font-medium"
                  >
                    Proceder al Checkout
                  </Link>
                  
                  <button className="w-full flex items-center justify-center px-6 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors font-medium">
                    Guardar para más tarde
                  </button>
                </div>

                {/* Información adicional */}
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <div className="space-y-3 text-sm text-gray-600">
                    <div className="flex items-center">
                      <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Envío seguro
                    </div>
                    <div className="flex items-center">
                      <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Devoluciones fáciles
                    </div>
                    <div className="flex items-center">
                      <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Soporte 24/7
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
