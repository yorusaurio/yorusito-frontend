import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-black text-white py-4 shadow-lg">
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-gradient">
          YORUSITO
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex space-x-8">
          <div className="relative group">
            <Link href="/products" className="hover:text-red-400 transition-colors font-medium">
              VER TODO
            </Link>
            <div className="absolute top-full left-0 mt-2 w-48 bg-black rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 header-dropdown">
              <Link href="/products?category=polos" className="block px-4 py-2 hover:bg-gray-800 rounded-t-lg">
                Polos Básicos
              </Link>
              <Link href="/products?category=camisetas" className="block px-4 py-2 hover:bg-gray-800">
                Camisetas
              </Link>
              <Link href="/products?category=hoodies" className="block px-4 py-2 hover:bg-gray-800">
                Hoodies
              </Link>
              <Link href="/products?category=pantalones" className="block px-4 py-2 hover:bg-gray-800 rounded-b-lg">
                Pantalones
              </Link>
            </div>
          </div>

          <div className="relative group">
            <Link href="/colecciones" className="hover:text-red-400 transition-colors font-medium">
              COLECCIONES
            </Link>
            <div className="absolute top-full left-0 mt-2 w-48 bg-black rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 header-dropdown">
              <Link href="/products?category=stars" className="block px-4 py-2 hover:bg-gray-800 rounded-t-lg">
                Colección Stars
              </Link>
              <Link href="/products?category=anime" className="block px-4 py-2 hover:bg-gray-800 rounded-b-lg">
                Colección Anime
              </Link>
            </div>
          </div>

          <Link href="/new-arrivals" className="hover:text-red-400 transition-colors font-medium">
            NEW ARRIVALS
          </Link>
        </nav>

        {/* Actions */}
        <div className="flex items-center space-x-4">
          {/* Search */}
          <button className="hover:text-red-400 transition-colors icon-hover">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>

          {/* User Account */}
          <Link href="/login" className="hover:text-red-400 transition-colors icon-hover">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </Link>

          {/* Cart */}
          <Link href="/cart" className="hover:text-red-400 transition-colors relative icon-hover">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
            {/* Cart count badge */}
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center cart-badge">
              0
            </span>
          </Link>
        </div>

        {/* Mobile menu button */}
        <button className="md:hidden">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </header>
  );
}
