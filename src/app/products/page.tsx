'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  category: string;
  collection?: string;
  sizes: string[];
  colors: string[];
  image: string;
  rating: number;
  reviews: number;
  isNew: boolean;
  isFeatured: boolean;
  tags: string[];
}

// Mock data de productos
const mockProducts: Product[] = [
  {
    id: 1,
    name: 'Polo Stars Messi',
    price: 45,
    originalPrice: 55,
    category: 'polos',
    collection: 'stars',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Azul', 'Blanco', 'Negro'],
    image: '/api/placeholder/300/300',
    rating: 4.8,
    reviews: 124,
    isNew: false,
    isFeatured: true,
    tags: ['messi', 'barcelona', 'futbol']
  },
  {
    id: 2,
    name: 'Camiseta Naruto Uzumaki',
    price: 38,
    category: 'camisetas',
    collection: 'anime',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Naranja', 'Negro', 'Azul'],
    image: '/api/placeholder/300/300',
    rating: 4.9,
    reviews: 89,
    isNew: true,
    isFeatured: false,
    tags: ['naruto', 'anime', 'manga']
  },
  {
    id: 3,
    name: 'Hoodie Urbano Black',
    price: 75,
    category: 'hoodies',
    sizes: ['M', 'L', 'XL'],
    colors: ['Negro', 'Gris', 'Azul Marino'],
    image: '/api/placeholder/300/300',
    rating: 4.7,
    reviews: 156,
    isNew: false,
    isFeatured: true,
    tags: ['urbano', 'streetwear', 'comodo']
  },
  {
    id: 4,
    name: 'Polo Stars Cristiano',
    price: 48,
    originalPrice: 58,
    category: 'polos',
    collection: 'stars',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Blanco', 'Negro', 'Rojo'],
    image: '/api/placeholder/300/300',
    rating: 4.8,
    reviews: 203,
    isNew: false,
    isFeatured: true,
    tags: ['cristiano', 'real madrid', 'futbol']
  },
  {
    id: 5,
    name: 'Camiseta Dragon Ball Z',
    price: 40,
    category: 'camisetas',
    collection: 'anime',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Naranja', 'Azul', 'Negro'],
    image: '/api/placeholder/300/300',
    rating: 4.6,
    reviews: 67,
    isNew: true,
    isFeatured: false,
    tags: ['dragon ball', 'goku', 'anime']
  },
  {
    id: 6,
    name: 'Pantalón Jogger Premium',
    price: 55,
    category: 'pantalones',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Negro', 'Gris', 'Azul Marino'],
    image: '/api/placeholder/300/300',
    rating: 4.5,
    reviews: 92,
    isNew: false,
    isFeatured: false,
    tags: ['jogger', 'comodo', 'deportivo']
  },
  {
    id: 7,
    name: 'Polo Stars Neymar',
    price: 45,
    category: 'polos',
    collection: 'stars',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Amarillo', 'Verde', 'Azul'],
    image: '/api/placeholder/300/300',
    rating: 4.7,
    reviews: 178,
    isNew: false,
    isFeatured: true,
    tags: ['neymar', 'brasil', 'futbol']
  },
  {
    id: 8,
    name: 'Camiseta Attack on Titan',
    price: 42,
    category: 'camisetas',
    collection: 'anime',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Verde', 'Negro', 'Marrón'],
    image: '/api/placeholder/300/300',
    rating: 4.8,
    reviews: 134,
    isNew: true,
    isFeatured: false,
    tags: ['attack on titan', 'eren', 'anime']
  }
];

const categories = [
  { id: 'all', name: 'Todos', count: mockProducts.length },
  { id: 'polos', name: 'Polos', count: mockProducts.filter(p => p.category === 'polos').length },
  { id: 'camisetas', name: 'Camisetas', count: mockProducts.filter(p => p.category === 'camisetas').length },
  { id: 'hoodies', name: 'Hoodies', count: mockProducts.filter(p => p.category === 'hoodies').length },
  { id: 'pantalones', name: 'Pantalones', count: mockProducts.filter(p => p.category === 'pantalones').length }
];

const collections = [
  { id: 'all', name: 'Todas', count: mockProducts.length },
  { id: 'stars', name: 'Stars', count: mockProducts.filter(p => p.collection === 'stars').length },
  { id: 'anime', name: 'Anime', count: mockProducts.filter(p => p.collection === 'anime').length }
];

const sortOptions = [
  { id: 'featured', name: 'Destacados' },
  { id: 'newest', name: 'Más Nuevos' },
  { id: 'price-low', name: 'Precio: Menor a Mayor' },
  { id: 'price-high', name: 'Precio: Mayor a Menor' },
  { id: 'rating', name: 'Mejor Valorados' }
];

export default function ProductsPage() {
  const searchParams = useSearchParams();
  const [products, setProducts] = useState<Product[]>(mockProducts);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(mockProducts);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedCollection, setSelectedCollection] = useState('all');
  const [selectedSize, setSelectedSize] = useState('all');
  const [selectedColor, setSelectedColor] = useState('all');
  const [sortBy, setSortBy] = useState('featured');
  const [priceRange, setPriceRange] = useState([0, 100]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  // Obtener parámetros de URL
  useEffect(() => {
    const category = searchParams.get('category');
    const collection = searchParams.get('collection');
    if (category) setSelectedCategory(category);
    if (collection) setSelectedCollection(collection);
  }, [searchParams]);

  // Filtrar productos
  useEffect(() => {
    let filtered = [...products];

    // Filtrar por categoría
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(product => product.category === selectedCategory);
    }

    // Filtrar por colección
    if (selectedCollection !== 'all') {
      filtered = filtered.filter(product => product.collection === selectedCollection);
    }

    // Filtrar por búsqueda
    if (searchTerm) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    // Filtrar por talla
    if (selectedSize !== 'all') {
      filtered = filtered.filter(product => product.sizes.includes(selectedSize));
    }

    // Filtrar por color
    if (selectedColor !== 'all') {
      filtered = filtered.filter(product => product.colors.includes(selectedColor));
    }

    // Filtrar por precio
    filtered = filtered.filter(product => 
      product.price >= priceRange[0] && product.price <= priceRange[1]
    );

    // Ordenar
    switch (sortBy) {
      case 'newest':
        filtered.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
        break;
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case 'featured':
      default:
        filtered.sort((a, b) => (b.isFeatured ? 1 : 0) - (a.isFeatured ? 1 : 0));
        break;
    }

    setFilteredProducts(filtered);
  }, [products, selectedCategory, selectedCollection, searchTerm, selectedSize, selectedColor, priceRange, sortBy]);

  // Obtener todas las tallas únicas
  const allSizes = [...new Set(products.flatMap(p => p.sizes))];
  
  // Obtener todos los colores únicos
  const allColors = [...new Set(products.flatMap(p => p.colors))];

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="container mx-auto px-6 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-light text-gray-900 mb-2">
            Productos
            {selectedCategory !== 'all' && (
              <span className="font-medium text-red-500">
                {' '}• {categories.find(c => c.id === selectedCategory)?.name}
              </span>
            )}
            {selectedCollection !== 'all' && (
              <span className="font-medium text-red-500">
                {' '}• {collections.find(c => c.id === selectedCollection)?.name}
              </span>
            )}
          </h1>
          <p className="text-gray-600">
            Mostrando {filteredProducts.length} de {products.length} productos
          </p>
        </div>

        {/* Búsqueda y filtros */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar de filtros */}
          <div className="lg:w-64 flex-shrink-0">
            <div className="bg-white rounded-lg shadow-sm p-6 sticky top-24">
              {/* Botón móvil de filtros */}
              <button
                onClick={() => setIsFilterOpen(!isFilterOpen)}
                className="lg:hidden w-full flex items-center justify-between mb-4 p-3 bg-gray-100 rounded-lg"
              >
                <span className="font-medium">Filtros</span>
                <svg
                  className={`w-5 h-5 transform transition-transform ${isFilterOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              <div className={`space-y-6 ${isFilterOpen ? 'block' : 'hidden lg:block'}`}>
                {/* Búsqueda */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Buscar
                  </label>
                  <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Buscar productos..."
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  />
                </div>

                {/* Categorías */}
                <div>
                  <h3 className="text-sm font-medium text-gray-900 mb-3">Categorías</h3>
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <button
                        key={category.id}
                        onClick={() => setSelectedCategory(category.id)}
                        className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                          selectedCategory === category.id
                            ? 'bg-red-500 text-white'
                            : 'text-gray-700 hover:bg-gray-100'
                        }`}
                      >
                        <span className="flex justify-between items-center">
                          <span>{category.name}</span>
                          <span className="text-xs opacity-70">({category.count})</span>
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Colecciones */}
                <div>
                  <h3 className="text-sm font-medium text-gray-900 mb-3">Colecciones</h3>
                  <div className="space-y-2">
                    {collections.map((collection) => (
                      <button
                        key={collection.id}
                        onClick={() => setSelectedCollection(collection.id)}
                        className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                          selectedCollection === collection.id
                            ? 'bg-red-500 text-white'
                            : 'text-gray-700 hover:bg-gray-100'
                        }`}
                      >
                        <span className="flex justify-between items-center">
                          <span>{collection.name}</span>
                          <span className="text-xs opacity-70">({collection.count})</span>
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Tallas */}
                <div>
                  <h3 className="text-sm font-medium text-gray-900 mb-3">Tallas</h3>
                  <div className="flex flex-wrap gap-2">
                    <button
                      onClick={() => setSelectedSize('all')}
                      className={`px-3 py-1 rounded-full text-sm transition-colors ${
                        selectedSize === 'all'
                          ? 'bg-red-500 text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      Todas
                    </button>
                    {allSizes.map((size) => (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={`px-3 py-1 rounded-full text-sm transition-colors ${
                          selectedSize === size
                            ? 'bg-red-500 text-white'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Colores */}
                <div>
                  <h3 className="text-sm font-medium text-gray-900 mb-3">Colores</h3>
                  <div className="space-y-2">
                    <button
                      onClick={() => setSelectedColor('all')}
                      className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                        selectedColor === 'all'
                          ? 'bg-red-500 text-white'
                          : 'text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      Todos los colores
                    </button>
                    {allColors.map((color) => (
                      <button
                        key={color}
                        onClick={() => setSelectedColor(color)}
                        className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                          selectedColor === color
                            ? 'bg-red-500 text-white'
                            : 'text-gray-700 hover:bg-gray-100'
                        }`}
                      >
                        {color}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Rango de precios */}
                <div>
                  <h3 className="text-sm font-medium text-gray-900 mb-3">Precio</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm text-gray-600">
                      <span>S/ {priceRange[0]}</span>
                      <span>S/ {priceRange[1]}</span>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={priceRange[1]}
                      onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                    />
                  </div>
                </div>

                {/* Limpiar filtros */}
                <button
                  onClick={() => {
                    setSelectedCategory('all');
                    setSelectedCollection('all');
                    setSelectedSize('all');
                    setSelectedColor('all');
                    setPriceRange([0, 100]);
                    setSearchTerm('');
                  }}
                  className="w-full px-4 py-2 text-sm text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Limpiar Filtros
                </button>
              </div>
            </div>
          </div>

          {/* Contenido principal */}
          <div className="flex-1">
            {/* Barra superior */}
            <div className="flex justify-between items-center mb-6">
              <div className="flex items-center space-x-4">
                <span className="text-sm text-gray-600">
                  {filteredProducts.length} productos
                </span>
              </div>
              <div className="flex items-center space-x-4">
                <label className="text-sm text-gray-600">Ordenar por:</label>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                >
                  {sortOptions.map((option) => (
                    <option key={option.id} value={option.id}>
                      {option.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Grid de productos */}
            {filteredProducts.length === 0 ? (
              <div className="text-center py-12">
                <div className="text-gray-400 mb-4">
                  <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">No se encontraron productos</h3>
                <p className="text-gray-500 mb-4">Intenta ajustar los filtros o buscar otros términos</p>
                <button
                  onClick={() => {
                    setSelectedCategory('all');
                    setSelectedCollection('all');
                    setSelectedSize('all');
                    setSelectedColor('all');
                    setPriceRange([0, 100]);
                    setSearchTerm('');
                  }}
                  className="px-6 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
                >
                  Limpiar Filtros
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <div key={product.id} className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow group">
                    {/* Imagen */}
                    <div className="relative aspect-square overflow-hidden">
                      <div className="w-full h-full bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center">
                        <span className="text-white text-4xl font-bold">
                          {product.name.split(' ')[0].charAt(0)}
                        </span>
                      </div>
                      
                      {/* Badges */}
                      <div className="absolute top-3 left-3 flex flex-col gap-2">
                        {product.isNew && (
                          <span className="px-2 py-1 bg-green-500 text-white text-xs font-medium rounded-full">
                            Nuevo
                          </span>
                        )}
                        {product.isFeatured && (
                          <span className="px-2 py-1 bg-yellow-500 text-white text-xs font-medium rounded-full">
                            Destacado
                          </span>
                        )}
                        {product.originalPrice && (
                          <span className="px-2 py-1 bg-red-500 text-white text-xs font-medium rounded-full">
                            Oferta
                          </span>
                        )}
                      </div>

                      {/* Overlay con botones */}
                      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <Link
                          href={`/products/${product.id}`}
                          className="px-6 py-3 bg-white text-gray-900 rounded-lg hover:bg-gray-100 transition-colors font-medium"
                        >
                          Ver Producto
                        </Link>
                      </div>
                    </div>

                    {/* Información */}
                    <div className="p-4">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center space-x-2">
                          {product.collection && (
                            <span className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-gray-100 text-gray-800 capitalize">
                              {product.collection}
                            </span>
                          )}
                          <span className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-gray-100 text-gray-800 capitalize">
                            {product.category}
                          </span>
                        </div>
                        <div className="flex items-center text-yellow-400">
                          <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                          <span className="ml-1 text-sm text-gray-600">
                            {product.rating} ({product.reviews})
                          </span>
                        </div>
                      </div>

                      <h3 className="text-lg font-medium text-gray-900 mb-2 line-clamp-2">
                        {product.name}
                      </h3>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <span className="text-lg font-bold text-gray-900">
                            S/ {product.price}
                          </span>
                          {product.originalPrice && (
                            <span className="text-sm text-gray-500 line-through">
                              S/ {product.originalPrice}
                            </span>
                          )}
                        </div>
                        <div className="flex items-center space-x-1">
                          <span className="text-xs text-gray-500">Tallas:</span>
                          {product.sizes.slice(0, 3).map((size) => (
                            <span key={size} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                              {size}
                            </span>
                          ))}
                          {product.sizes.length > 3 && (
                            <span className="text-xs text-gray-500">
                              +{product.sizes.length - 3}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
