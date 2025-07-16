'use client';

import { useState } from 'react';
import Link from 'next/link';

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  size: string;
  color: string;
}

interface FormData {
  // Información personal
  email: string;
  firstName: string;
  lastName: string;
  phone: string;
  
  // Dirección de envío
  address: string;
  city: string;
  district: string;
  postalCode: string;
  
  // Método de pago
  paymentMethod: 'card' | 'paypal' | 'cash';
  
  // Datos de tarjeta
  cardNumber: string;
  expiryDate: string;
  cvv: string;
  cardName: string;
}

// Mock data del carrito
const cartItems: CartItem[] = [
  {
    id: 1,
    name: 'Polo Stars Messi',
    price: 45,
    quantity: 1,
    size: 'M',
    color: 'Azul'
  },
  {
    id: 2,
    name: 'Camiseta Naruto Uzumaki',
    price: 38,
    quantity: 2,
    size: 'L',
    color: 'Negro'
  },
  {
    id: 3,
    name: 'Hoodie Urbano Black',
    price: 75,
    quantity: 1,
    size: 'XL',
    color: 'Negro'
  }
];

export default function CheckoutPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    email: '',
    firstName: '',
    lastName: '',
    phone: '',
    address: '',
    city: '',
    district: '',
    postalCode: '',
    paymentMethod: 'card',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    cardName: ''
  });

  // Cálculos
  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = subtotal > 100 ? 0 : 15;
  const tax = subtotal * 0.18; // IGV 18%
  const total = subtotal + shipping + tax;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí iría la lógica de procesamiento del pago
    alert('¡Pedido procesado exitosamente!');
  };

  const steps = [
    { number: 1, title: 'Información', description: 'Datos personales' },
    { number: 2, title: 'Envío', description: 'Dirección de entrega' },
    { number: 3, title: 'Pago', description: 'Método de pago' },
    { number: 4, title: 'Confirmar', description: 'Revisar pedido' }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="container mx-auto px-6 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-light text-gray-900 mb-2">Checkout</h1>
          <p className="text-gray-600">Completa tu compra en unos simples pasos</p>
        </div>

        {/* Progress Steps */}
        <div className="mb-8">
          <div className="flex justify-center">
            <div className="flex items-center space-x-4">
              {steps.map((step, index) => (
                <div key={step.number} className="flex items-center">
                  <div className={`flex items-center justify-center w-10 h-10 rounded-full border-2 transition-all ${
                    currentStep >= step.number 
                      ? 'bg-red-500 border-red-500 text-white' 
                      : 'border-gray-300 text-gray-400'
                  }`}>
                    {currentStep > step.number ? (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    ) : (
                      <span className="text-sm font-medium">{step.number}</span>
                    )}
                  </div>
                  <div className="ml-3 hidden sm:block">
                    <div className="text-sm font-medium text-gray-900">{step.title}</div>
                    <div className="text-xs text-gray-500">{step.description}</div>
                  </div>
                  {index < steps.length - 1 && (
                    <div className="w-8 h-px bg-gray-300 mx-4"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Formulario */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <form onSubmit={handleSubmit}>
                {/* Paso 1: Información Personal */}
                {currentStep === 1 && (
                  <div>
                    <h2 className="text-xl font-medium text-gray-900 mb-6">Información Personal</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Email *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                          placeholder="tu@email.com"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Teléfono *
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          required
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                          placeholder="+51 999 999 999"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Nombres *
                        </label>
                        <input
                          type="text"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          required
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                          placeholder="Juan"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Apellidos *
                        </label>
                        <input
                          type="text"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          required
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                          placeholder="Pérez"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* Paso 2: Dirección de Envío */}
                {currentStep === 2 && (
                  <div>
                    <h2 className="text-xl font-medium text-gray-900 mb-6">Dirección de Envío</h2>
                    <div className="space-y-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Dirección *
                        </label>
                        <input
                          type="text"
                          name="address"
                          value={formData.address}
                          onChange={handleInputChange}
                          required
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                          placeholder="Av. Ejemplo 123, Dpto. 4B"
                        />
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Ciudad *
                          </label>
                          <input
                            type="text"
                            name="city"
                            value={formData.city}
                            onChange={handleInputChange}
                            required
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                            placeholder="Lima"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Distrito *
                          </label>
                          <input
                            type="text"
                            name="district"
                            value={formData.district}
                            onChange={handleInputChange}
                            required
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                            placeholder="Miraflores"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Código Postal
                        </label>
                        <input
                          type="text"
                          name="postalCode"
                          value={formData.postalCode}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                          placeholder="15074"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* Paso 3: Método de Pago */}
                {currentStep === 3 && (
                  <div>
                    <h2 className="text-xl font-medium text-gray-900 mb-6">Método de Pago</h2>
                    
                    {/* Opciones de pago */}
                    <div className="space-y-4 mb-6">
                      <div className="flex items-center">
                        <input
                          type="radio"
                          id="card"
                          name="paymentMethod"
                          value="card"
                          checked={formData.paymentMethod === 'card'}
                          onChange={handleInputChange}
                          className="h-4 w-4 text-red-600 focus:ring-red-500 border-gray-300"
                        />
                        <label htmlFor="card" className="ml-3 block text-sm font-medium text-gray-700">
                          Tarjeta de Crédito/Débito
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          type="radio"
                          id="paypal"
                          name="paymentMethod"
                          value="paypal"
                          checked={formData.paymentMethod === 'paypal'}
                          onChange={handleInputChange}
                          className="h-4 w-4 text-red-600 focus:ring-red-500 border-gray-300"
                        />
                        <label htmlFor="paypal" className="ml-3 block text-sm font-medium text-gray-700">
                          PayPal
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          type="radio"
                          id="cash"
                          name="paymentMethod"
                          value="cash"
                          checked={formData.paymentMethod === 'cash'}
                          onChange={handleInputChange}
                          className="h-4 w-4 text-red-600 focus:ring-red-500 border-gray-300"
                        />
                        <label htmlFor="cash" className="ml-3 block text-sm font-medium text-gray-700">
                          Pago Contraentrega
                        </label>
                      </div>
                    </div>

                    {/* Detalles de tarjeta */}
                    {formData.paymentMethod === 'card' && (
                      <div className="space-y-4 p-4 bg-gray-50 rounded-lg">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Número de Tarjeta *
                          </label>
                          <input
                            type="text"
                            name="cardNumber"
                            value={formData.cardNumber}
                            onChange={handleInputChange}
                            required
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                            placeholder="1234 5678 9012 3456"
                          />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              Fecha de Vencimiento *
                            </label>
                            <input
                              type="text"
                              name="expiryDate"
                              value={formData.expiryDate}
                              onChange={handleInputChange}
                              required
                              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                              placeholder="MM/YY"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              CVV *
                            </label>
                            <input
                              type="text"
                              name="cvv"
                              value={formData.cvv}
                              onChange={handleInputChange}
                              required
                              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                              placeholder="123"
                            />
                          </div>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Nombre en la Tarjeta *
                          </label>
                          <input
                            type="text"
                            name="cardName"
                            value={formData.cardName}
                            onChange={handleInputChange}
                            required
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                            placeholder="Juan Pérez"
                          />
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {/* Paso 4: Confirmar Pedido */}
                {currentStep === 4 && (
                  <div>
                    <h2 className="text-xl font-medium text-gray-900 mb-6">Confirmar Pedido</h2>
                    
                    {/* Resumen de información */}
                    <div className="space-y-6">
                      <div className="p-4 bg-gray-50 rounded-lg">
                        <h3 className="font-medium text-gray-900 mb-2">Información Personal</h3>
                        <p className="text-sm text-gray-600">
                          {formData.firstName} {formData.lastName}<br />
                          {formData.email}<br />
                          {formData.phone}
                        </p>
                      </div>
                      
                      <div className="p-4 bg-gray-50 rounded-lg">
                        <h3 className="font-medium text-gray-900 mb-2">Dirección de Envío</h3>
                        <p className="text-sm text-gray-600">
                          {formData.address}<br />
                          {formData.district}, {formData.city} {formData.postalCode}
                        </p>
                      </div>
                      
                      <div className="p-4 bg-gray-50 rounded-lg">
                        <h3 className="font-medium text-gray-900 mb-2">Método de Pago</h3>
                        <p className="text-sm text-gray-600">
                          {formData.paymentMethod === 'card' && 'Tarjeta de Crédito/Débito'}
                          {formData.paymentMethod === 'paypal' && 'PayPal'}
                          {formData.paymentMethod === 'cash' && 'Pago Contraentrega'}
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Botones de navegación */}
                <div className="flex justify-between mt-8">
                  <button
                    type="button"
                    onClick={() => setCurrentStep(Math.max(1, currentStep - 1))}
                    disabled={currentStep === 1}
                    className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                      currentStep === 1
                        ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                    }`}
                  >
                    Anterior
                  </button>
                  
                  {currentStep < 4 ? (
                    <button
                      type="button"
                      onClick={() => setCurrentStep(Math.min(4, currentStep + 1))}
                      className="px-6 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors font-medium"
                    >
                      Siguiente
                    </button>
                  ) : (
                    <button
                      type="submit"
                      className="px-8 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors font-medium"
                    >
                      Confirmar Pedido
                    </button>
                  )}
                </div>
              </form>
            </div>
          </div>

          {/* Resumen del pedido */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-6 sticky top-24">
              <h2 className="text-lg font-medium text-gray-900 mb-6">Resumen del Pedido</h2>
              
              {/* Productos */}
              <div className="space-y-4 mb-6">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center">
                      <div className="w-full h-full bg-gradient-to-br from-red-500 to-red-600 rounded-lg flex items-center justify-center">
                        <span className="text-white text-xs font-medium">
                          {item.name.split(' ')[0].charAt(0)}
                        </span>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-sm font-medium text-gray-900">{item.name}</h4>
                      <p className="text-xs text-gray-500">
                        {item.size} • {item.color} • Cant: {item.quantity}
                      </p>
                    </div>
                    <span className="text-sm font-medium text-gray-900">
                      S/ {(item.price * item.quantity).toFixed(2)}
                    </span>
                  </div>
                ))}
              </div>

              {/* Totales */}
              <div className="space-y-3 border-t border-gray-200 pt-6">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-medium">S/ {subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Envío</span>
                  <span className="font-medium">
                    {shipping === 0 ? 'Gratis' : `S/ ${shipping.toFixed(2)}`}
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">IGV (18%)</span>
                  <span className="font-medium">S/ {tax.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-lg font-medium border-t border-gray-200 pt-3">
                  <span>Total</span>
                  <span>S/ {total.toFixed(2)}</span>
                </div>
              </div>

              {/* Seguridad */}
              <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                  <span>Compra 100% segura y encriptada</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
