import Link from 'next/link';
import HeroTitle from '@/components/HeroTitle';

export default function HomePage() {
  return (
    <div className="bg-cream hero-container">
      {/* Hero Section - Minimal Professional Design */}
      <section className="relative min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 flex items-center justify-center overflow-hidden minimal-hero pt-16 md:pt-20">
        {/* Subtle Geometric Background */}
        <div className="absolute inset-0 opacity-5 minimal-grid"></div>

        {/* Floating Elements - Ultra Subtle */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-1 h-32 bg-gradient-to-b from-red-500 to-transparent opacity-20 animate-pulse"></div>
          <div className="absolute top-3/4 right-1/3 w-1 h-24 bg-gradient-to-b from-purple-500 to-transparent opacity-20 animate-pulse delay-1000"></div>
          <div className="absolute bottom-1/4 left-1/2 w-24 h-1 bg-gradient-to-r from-blue-500 to-transparent opacity-20 animate-pulse delay-500"></div>
        </div>

        {/* Main Content */}
        <div className="relative z-10 text-center px-6 sm:px-8 lg:px-12 max-w-6xl mx-auto">
          {/* Brand Mark - Minimal Line */}
          <div className="mb-8 sm:mb-12 minimal-fade-in">
            <div className="inline-block relative">
              <div className="w-16 h-1 sm:w-20 sm:h-1 lg:w-24 lg:h-1 bg-gradient-to-r from-red-500 to-red-600 rounded-full mx-auto mb-6 relative overflow-hidden">
                <div className="absolute inset-0 bg-white opacity-20 animate-pulse"></div>
              </div>
              <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-8 h-0.5 bg-gradient-to-r from-transparent via-red-500 to-transparent"></div>
            </div>
          </div>

          {/* Main Title - Minimal Typography */}
          <h1 className="text-5xl sm:text-7xl lg:text-8xl xl:text-9xl minimal-title text-gray-900 mb-6 sm:mb-8 leading-none tracking-tight minimal-slide-up">
            <span className="block">YORU</span>
            <span className="block minimal-title-accent">SITO</span>
          </h1>

          {/* Subtitle with Elegant Spacing */}
          <div className="mb-8 sm:mb-12 minimal-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="w-20 h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent mx-auto mb-6"></div>
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 font-light leading-relaxed max-w-2xl mx-auto">
              Ropa urbana de calidad superior
              <br />
              <span className="text-red-500 font-normal">Personalización & Estilo</span>
            </p>
            <div className="w-20 h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent mx-auto mt-6"></div>
          </div>

          {/* Category Pills - Minimal Design */}
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-12 sm:mb-16 minimal-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="inline-flex items-center px-4 py-2 bg-white border border-gray-200 rounded-full text-sm text-gray-700 hover:border-red-500 hover:text-red-500 transition-all duration-300 minimal-pill">
              <span className="w-2 h-2 bg-yellow-400 rounded-full mr-2"></span>
              Stars
            </div>
            <div className="inline-flex items-center px-4 py-2 bg-white border border-gray-200 rounded-full text-sm text-gray-700 hover:border-purple-500 hover:text-purple-500 transition-all duration-300 minimal-pill">
              <span className="w-2 h-2 bg-purple-400 rounded-full mr-2"></span>
              Anime
            </div>
            <div className="inline-flex items-center px-4 py-2 bg-white border border-gray-200 rounded-full text-sm text-gray-700 hover:border-blue-500 hover:text-blue-500 transition-all duration-300 minimal-pill">
              <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
              Urbano
            </div>
          </div>

          {/* CTA - Minimal & Professional */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-16 sm:mb-20 minimal-fade-in" style={{ animationDelay: '0.6s' }}>
            <Link 
              href="/products"
              className="group relative inline-flex items-center px-8 py-4 bg-gray-900 text-white rounded-none font-medium text-lg overflow-hidden transition-all duration-300 hover:bg-red-500 minimal-btn-primary"
            >
              <span className="relative z-10">Explorar Colección</span>
              <div className="absolute inset-0 bg-red-500 transform translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
            </Link>
            <Link 
              href="/products?category=stars"
              className="inline-flex items-center px-8 py-4 border-2 border-gray-900 text-gray-900 rounded-none font-medium text-lg hover:bg-gray-900 hover:text-white transition-all duration-300 minimal-btn-secondary"
            >
              Ver Productos
            </Link>
          </div>

          {/* Featured Stats - Minimal */}
          <div className="grid grid-cols-3 gap-8 sm:gap-12 max-w-2xl mx-auto minimal-fade-in" style={{ animationDelay: '0.8s' }}>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-light text-gray-900 mb-2">500+</div>
              <div className="text-sm text-gray-500 uppercase tracking-wide">Diseños</div>
            </div>
            <div className="text-center border-l border-r border-gray-200">
              <div className="text-3xl sm:text-4xl font-light text-gray-900 mb-2">24h</div>
              <div className="text-sm text-gray-500 uppercase tracking-wide">Envío Express</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-light text-gray-900 mb-2">100%</div>
              <div className="text-sm text-gray-500 uppercase tracking-wide">Calidad premium</div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator - Minimal */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="flex flex-col items-center opacity-40">
            <div className="w-px h-12 bg-gray-400 mb-2"></div>
            <div className="w-1 h-1 bg-gray-400 rounded-full animate-bounce"></div>
          </div>
        </div>

        {/* Corner Signature */}
        <div className="absolute bottom-8 right-8 text-xs text-gray-400 font-light hidden lg:block">
          <div className="flex items-center gap-2">
            <div className="w-8 h-px bg-gray-300"></div>
            <span>EST. 2024</span>
          </div>
        </div>
      </section>

      {/* Categories Section - Minimal Professional Design */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <div className="w-16 h-px bg-gradient-to-r from-red-500 to-transparent"></div>
            </div>
            <h2 className="text-4xl sm:text-5xl font-light text-gray-900 mb-4 tracking-tight">
              Nuestras <span className="font-medium text-red-500">Categorías</span>
            </h2>
            <p className="text-gray-600 font-light text-lg max-w-2xl mx-auto">
              Explora nuestra selección curada de productos urbanos de alta calidad
            </p>
          </div>

          {/* Categories Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Polos Básicos */}
            <div className="group">
              <div className="bg-gray-50 rounded-lg p-8 mb-4 hover:bg-gray-100 transition-all duration-300 border border-gray-200 hover:border-gray-300">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-gray-600 to-gray-700 rounded-full flex items-center justify-center">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4"/>
                    </svg>
                  </div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Polos Básicos</h3>
                  <p className="text-sm text-gray-600 font-light leading-relaxed">
                    Esenciales de calidad para tu día a día
                  </p>
                </div>
              </div>
              <div className="text-center">
                <Link 
                  href="/products?category=polos" 
                  className="text-red-500 hover:text-red-600 font-medium text-sm uppercase tracking-wide transition-colors"
                >
                  Explorar →
                </Link>
              </div>
            </div>

            {/* Camisetas */}
            <div className="group">
              <div className="bg-gray-50 rounded-lg p-8 mb-4 hover:bg-gray-100 transition-all duration-300 border border-gray-200 hover:border-gray-300">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                  </div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Camisetas</h3>
                  <p className="text-sm text-gray-600 font-light leading-relaxed">
                    Deportivas y casuales de tus equipos
                  </p>
                </div>
              </div>
              <div className="text-center">
                <Link 
                  href="/products?category=camisetas" 
                  className="text-red-500 hover:text-red-600 font-medium text-sm uppercase tracking-wide transition-colors"
                >
                  Explorar →
                </Link>
              </div>
            </div>

            {/* Hoodies */}
            <div className="group">
              <div className="bg-gray-50 rounded-lg p-8 mb-4 hover:bg-gray-100 transition-all duration-300 border border-gray-200 hover:border-gray-300">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-gray-700 to-gray-800 rounded-full flex items-center justify-center">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
                    </svg>
                  </div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Hoodies</h3>
                  <p className="text-sm text-gray-600 font-light leading-relaxed">
                    Comodidad y estilo para todas las estaciones
                  </p>
                </div>
              </div>
              <div className="text-center">
                <Link 
                  href="/products?category=hoodies" 
                  className="text-red-500 hover:text-red-600 font-medium text-sm uppercase tracking-wide transition-colors"
                >
                  Explorar →
                </Link>
              </div>
            </div>

            {/* Pantalones */}
            <div className="group">
              <div className="bg-gray-50 rounded-lg p-8 mb-4 hover:bg-gray-100 transition-all duration-300 border border-gray-200 hover:border-gray-300">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-full flex items-center justify-center">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z"/>
                    </svg>
                  </div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Pantalones</h3>
                  <p className="text-sm text-gray-600 font-light leading-relaxed">
                    Urbanos con estilo y comodidad premium
                  </p>
                </div>
              </div>
              <div className="text-center">
                <Link 
                  href="/products?category=pantalones" 
                  className="text-red-500 hover:text-red-600 font-medium text-sm uppercase tracking-wide transition-colors"
                >
                  Explorar →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Special Collections - Minimal Professional Design */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-100">
        <div className="container mx-auto px-6">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <div className="w-16 h-px bg-gradient-to-r from-red-500 to-transparent"></div>
            </div>
            <h2 className="text-4xl sm:text-5xl font-light text-gray-900 mb-4 tracking-tight">
              Colecciones <span className="font-medium text-red-500">Especiales</span>
            </h2>
            <p className="text-gray-600 font-light text-lg max-w-2xl mx-auto">
              Diseños únicos y exclusivos que definen tu personalidad
            </p>
          </div>

          {/* Collections Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Colección Stars */}
            <div className="group">
              <div className="bg-white rounded-lg p-8 border border-gray-200 hover:border-yellow-300 transition-all duration-300 hover:shadow-lg">
                <div className="text-center">
                  <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-white opacity-20 group-hover:opacity-30 transition-opacity"></div>
                    <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  </div>
                  <h3 className="text-2xl font-medium text-gray-900 mb-3">Colección Stars</h3>
                  <p className="text-gray-600 font-light leading-relaxed mb-6">
                    Messi, Cristiano, Neymar y más estrellas del fútbol mundial en diseños únicos y exclusivos
                  </p>
                  <div className="flex items-center justify-center space-x-4 text-sm text-gray-500 mb-6">
                    <span className="flex items-center">
                      <span className="w-2 h-2 bg-yellow-400 rounded-full mr-2"></span>
                      Edición Limitada
                    </span>
                    <span className="flex items-center">
                      <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                      Calidad Premium
                    </span>
                  </div>
                  <Link 
                    href="/products?category=stars" 
                    className="inline-flex items-center px-6 py-3 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition-colors font-medium"
                  >
                    Explorar Stars
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>

            {/* Colección Anime */}
            <div className="group">
              <div className="bg-white rounded-lg p-8 border border-gray-200 hover:border-purple-300 transition-all duration-300 hover:shadow-lg">
                <div className="text-center">
                  <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-white opacity-20 group-hover:opacity-30 transition-opacity"></div>
                    <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M13 2L3 14h7v7l10-12h-7z"/>
                    </svg>
                  </div>
                  <h3 className="text-2xl font-medium text-gray-900 mb-3">Colección Anime</h3>
                  <p className="text-gray-600 font-light leading-relaxed mb-6">
                    Tus personajes favoritos del anime en diseños auténticos y de alta calidad
                  </p>
                  <div className="flex items-center justify-center space-x-4 text-sm text-gray-500 mb-6">
                    <span className="flex items-center">
                      <span className="w-2 h-2 bg-purple-400 rounded-full mr-2"></span>
                      Diseños Originales
                    </span>
                    <span className="flex items-center">
                      <span className="w-2 h-2 bg-pink-400 rounded-full mr-2"></span>
                      Licencias Oficiales
                    </span>
                  </div>
                  <Link 
                    href="/products?category=anime" 
                    className="inline-flex items-center px-6 py-3 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors font-medium"
                  >
                    Explorar Anime
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action - Minimal Professional Design */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto">
            {/* Decorative Line */}
            <div className="inline-block mb-6">
              <div className="w-16 h-px bg-gradient-to-r from-red-500 to-transparent"></div>
            </div>
            
            <h2 className="text-4xl sm:text-5xl font-light mb-6 tracking-tight">
              ¿Listo para crear algo <span className="font-medium text-red-500">único</span>?
            </h2>
            
            <p className="text-xl text-gray-300 font-light mb-12 max-w-2xl mx-auto leading-relaxed">
              Explora nuestra colección completa o descubre nuestras colecciones especiales diseñadas para ti
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link 
                href="/products?category=stars" 
                className="inline-flex items-center px-8 py-4 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-all duration-300 font-medium text-lg group"
              >
                Colección Stars
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                </svg>
              </Link>
              
              <Link 
                href="/products" 
                className="inline-flex items-center px-8 py-4 bg-transparent border border-white text-white rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-medium text-lg group"
              >
                Ver Catálogo
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                </svg>
              </Link>
            </div>
            
            {/* Stats or Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 pt-12 border-t border-gray-700">
              <div className="text-center">
                <div className="text-3xl font-light text-red-500 mb-2">100+</div>
                <div className="text-sm text-gray-400 uppercase tracking-wide">Diseños Únicos</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-light text-red-500 mb-2">24h</div>
                <div className="text-sm text-gray-400 uppercase tracking-wide">Envío Express</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-light text-red-500 mb-2">5★</div>
                <div className="text-sm text-gray-400 uppercase tracking-wide">Calidad Premium</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
