export default function NewArrivalsPage() {
  return (
    <div className="min-h-screen bg-cream py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12 text-black anime-text">
          New Arrivals
        </h1>
        
        <div className="text-center mb-8">
          <p className="text-lg text-gray-600">
            Descubre las últimas incorporaciones a nuestra colección
          </p>
        </div>

        {/* Placeholder for new arrivals */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Sample new arrival items */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
            <div className="h-64 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
              <div className="text-6xl">🆕</div>
            </div>
            <div className="p-6">
              <span className="inline-block bg-red-500 text-white text-xs px-2 py-1 rounded mb-2">
                NUEVO
              </span>
              <h3 className="text-xl font-semibold mb-2 text-black">Próximamente</h3>
              <p className="text-gray-600 mb-4">
                Nuevos productos y diseños están llegando pronto
              </p>
              <span className="text-gray-500 text-sm">
                Mantente atento a nuestras novedades
              </span>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
            <div className="h-64 bg-gradient-to-br from-blue-200 to-blue-300 flex items-center justify-center">
              <div className="text-6xl">🎯</div>
            </div>
            <div className="p-6">
              <span className="inline-block bg-blue-500 text-white text-xs px-2 py-1 rounded mb-2">
                TENDENCIA
              </span>
              <h3 className="text-xl font-semibold mb-2 text-black">Diseños Trending</h3>
              <p className="text-gray-600 mb-4">
                Los diseños más populares del momento
              </p>
              <span className="text-gray-500 text-sm">
                Basados en las tendencias actuales
              </span>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
            <div className="h-64 bg-gradient-to-br from-green-200 to-green-300 flex items-center justify-center">
              <div className="text-6xl">🚀</div>
            </div>
            <div className="p-6">
              <span className="inline-block bg-green-500 text-white text-xs px-2 py-1 rounded mb-2">
                PRÓXIMO
              </span>
              <h3 className="text-xl font-semibold mb-2 text-black">Lanzamientos</h3>
              <p className="text-gray-600 mb-4">
                Nuevas colecciones y productos exclusivos
              </p>
              <span className="text-gray-500 text-sm">
                Sé el primero en conocerlos
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
