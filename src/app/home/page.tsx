import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-cream">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-black to-gray-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 anime-text">
            Bienvenido a Yorusito
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300">
            Ropa urbana de calidad y personalización única
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/products" 
              className="bg-red-500 text-white px-8 py-3 rounded-lg hover:bg-red-600 transition-colors font-semibold text-lg"
            >
              Ver Productos
            </Link>
            <Link 
              href="/products?category=stars" 
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-black transition-colors font-semibold text-lg"
            >
              Colección Stars
            </Link>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-black anime-text">
            Nuestras Categorías
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Polos Básicos */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                <div className="text-6xl">👕</div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-black">Polos Básicos</h3>
                <p className="text-gray-600 mb-4">
                  Polos clásicos de alta calidad, perfectos para el día a día
                </p>
                <Link 
                  href="/products?category=polos" 
                  className="text-red-500 hover:text-red-600 font-semibold"
                >
                  Ver Polos →
                </Link>
              </div>
            </div>

            {/* Camisetas */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-br from-blue-200 to-blue-300 flex items-center justify-center">
                <div className="text-6xl">⚽</div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-black">Camisetas</h3>
                <p className="text-gray-600 mb-4">
                  Camisetas deportivas de tus equipos favoritos
                </p>
                <Link 
                  href="/products?category=camisetas" 
                  className="text-red-500 hover:text-red-600 font-semibold"
                >
                  Ver Camisetas →
                </Link>
              </div>
            </div>

            {/* Hoodies */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                <div className="text-6xl">🧥</div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-black">Hoodies</h3>
                <p className="text-gray-600 mb-4">
                  Sudaderas cómodas y modernas para todas las estaciones
                </p>
                <Link 
                  href="/products?category=hoodies" 
                  className="text-red-500 hover:text-red-600 font-semibold"
                >
                  Ver Hoodies →
                </Link>
              </div>
            </div>

            {/* Pantalones */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                <div className="text-6xl">👖</div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-black">Pantalones</h3>
                <p className="text-gray-600 mb-4">
                  Pantalones urbanos con estilo y comodidad
                </p>
                <Link 
                  href="/products?category=pantalones" 
                  className="text-red-500 hover:text-red-600 font-semibold"
                >
                  Ver Pantalones →
                </Link>
              </div>
            </div>

            {/* Colección Stars */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow border-2 border-red-500">
              <div className="h-48 bg-gradient-to-br from-yellow-200 to-yellow-300 flex items-center justify-center">
                <div className="text-6xl">⭐</div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-black">Colección Stars</h3>
                <p className="text-gray-600 mb-4">
                  Messi, Cristiano, Neymar y más estrellas del fútbol
                </p>
                <Link 
                  href="/products?category=stars" 
                  className="text-red-500 hover:text-red-600 font-semibold"
                >
                  Ver Stars →
                </Link>
              </div>
            </div>

            {/* Colección Anime */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow border-2 border-purple-500">
              <div className="h-48 bg-gradient-to-br from-purple-200 to-purple-300 flex items-center justify-center">
                <div className="text-6xl">⚡</div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-black">Colección Anime</h3>
                <p className="text-gray-600 mb-4">
                  Tus personajes favoritos del anime en tu ropa
                </p>
                <Link 
                  href="/products?category=anime" 
                  className="text-red-500 hover:text-red-600 font-semibold"
                >
                  Ver Anime →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Personalización Destacada */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-black anime-text">
            Colecciones Especiales
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Colección Stars */}
            <div className="text-center">
              <div className="bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg p-8 mb-4">
                <div className="text-6xl mb-4">⭐</div>
                <h3 className="text-2xl font-bold text-white mb-2">Colección Stars</h3>
                <p className="text-white opacity-90">
                  Messi, Cristiano, Neymar y más estrellas del fútbol
                </p>
              </div>
              <Link 
                href="/products?category=stars" 
                className="bg-yellow-500 text-white px-6 py-3 rounded-lg hover:bg-yellow-600 transition-colors font-semibold"
              >
                Ver Stars
              </Link>
            </div>

            {/* Colección Anime */}
            <div className="text-center">
              <div className="bg-gradient-to-br from-purple-400 to-pink-500 rounded-lg p-8 mb-4">
                <div className="text-6xl mb-4">⚡</div>
                <h3 className="text-2xl font-bold text-white mb-2">Colección Anime</h3>
                <p className="text-white opacity-90">
                  Tus personajes favoritos del anime en tu ropa
                </p>
              </div>
              <Link 
                href="/products?category=anime" 
                className="bg-purple-500 text-white px-6 py-3 rounded-lg hover:bg-purple-600 transition-colors font-semibold"
              >
                Ver Anime
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-black to-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4 anime-text">
            ¿Listo para crear algo único?
          </h2>
          <p className="text-xl mb-8 text-gray-300">
            Explora nuestra colección o descubre nuestras colecciones especiales
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/products?category=stars" 
              className="bg-red-500 text-white px-8 py-3 rounded-lg hover:bg-red-600 transition-colors font-semibold text-lg"
            >
              Colección Stars
            </Link>
            <Link 
              href="/products" 
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-black transition-colors font-semibold text-lg"
            >
              Ver Catálogo
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
