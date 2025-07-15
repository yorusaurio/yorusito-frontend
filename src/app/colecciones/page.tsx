export default function ColeccionesPage() {
  return (
    <div className="min-h-screen bg-cream py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12 text-black anime-text">
          Nuestras Colecciones
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Colección Stars */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
            <div className="h-64 bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center">
              <div className="text-center text-white">
                <div className="text-8xl mb-4">⭐</div>
                <h2 className="text-3xl font-bold">Colección Stars</h2>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-black">Estrellas del Fútbol</h3>
              <p className="text-gray-600 mb-4">
                Diseños únicos de Messi, Cristiano Ronaldo, Neymar y más leyendas del fútbol mundial
              </p>
              <a 
                href="/products?category=stars" 
                className="inline-block bg-yellow-500 text-white px-6 py-3 rounded-lg hover:bg-yellow-600 transition-colors font-semibold"
              >
                Ver Colección Stars
              </a>
            </div>
          </div>

          {/* Colección Anime */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
            <div className="h-64 bg-gradient-to-br from-purple-400 to-pink-500 flex items-center justify-center">
              <div className="text-center text-white">
                <div className="text-8xl mb-4">⚡</div>
                <h2 className="text-3xl font-bold">Colección Anime</h2>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-black">Personajes Anime</h3>
              <p className="text-gray-600 mb-4">
                Tus personajes favoritos del anime en diseños únicos y de alta calidad
              </p>
              <a 
                href="/products?category=anime" 
                className="inline-block bg-purple-500 text-white px-6 py-3 rounded-lg hover:bg-purple-600 transition-colors font-semibold"
              >
                Ver Colección Anime
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
