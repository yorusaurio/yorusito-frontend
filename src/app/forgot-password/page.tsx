import Link from 'next/link';

export default function ForgotPasswordPage() {
  return (
    <div className="min-h-screen flex">
      {/* Left Side - Yorusito Brand */}
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-black via-gray-900 to-black flex-col justify-center items-center relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-20 h-20 bg-blue-500 rounded-full animate-pulse"></div>
          <div className="absolute top-1/3 right-10 w-16 h-16 bg-green-500 rounded-full animate-bounce"></div>
          <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-yellow-500 rounded-full animate-ping"></div>
          <div className="absolute bottom-1/3 right-1/4 w-24 h-24 bg-purple-500 rounded-full animate-pulse"></div>
        </div>
        
        {/* Main Content */}
        <div className="relative z-10 text-center">
          <h1 className="text-8xl font-bold text-gradient mb-8 anime-text">
            YORUSITO
          </h1>
          <p className="text-2xl text-white mb-4 opacity-90">
            Recupera tu Cuenta
          </p>
          <p className="text-lg text-gray-300 max-w-md mx-auto leading-relaxed">
            No te preocupes, es normal olvidar las contraseñas. 
            Te ayudamos a recuperar el acceso a tu cuenta.
          </p>
          
          {/* Decorative Elements */}
          <div className="mt-12 flex justify-center space-x-8">
            <div className="text-4xl animate-bounce">🔑</div>
            <div className="text-4xl animate-pulse">🔒</div>
            <div className="text-4xl animate-bounce">✨</div>
          </div>
        </div>
        
        {/* Bottom Quote */}
        <div className="absolute bottom-10 left-10 right-10 text-center">
          <p className="text-gray-400 italic">
            "Siempre hay una forma de volver"
          </p>
        </div>
      </div>

      {/* Right Side - Forgot Password Form */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center items-center bg-cream p-8">
        <div className="w-full max-w-md">
          {/* Mobile Logo */}
          <div className="lg:hidden text-center mb-8">
            <h1 className="text-4xl font-bold text-gradient anime-text">
              YORUSITO
            </h1>
            <p className="text-gray-600 mt-2">Recupera tu Cuenta</p>
          </div>

          {/* Forgot Password Form */}
          <div className="bg-white rounded-lg shadow-xl p-8">
            <h2 className="text-3xl font-bold text-black mb-2 anime-text">
              ¿Olvidaste tu contraseña?
            </h2>
            <p className="text-gray-600 mb-8">
              Ingresa tu correo electrónico y te enviaremos un enlace para restablecer tu contraseña
            </p>

            <form className="space-y-6">
              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Correo Electrónico
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-colors"
                  placeholder="tu@email.com"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-red-500 text-white py-3 px-4 rounded-lg hover:bg-red-600 transition-colors font-semibold text-lg btn-anime"
              >
                Enviar Enlace de Recuperación
              </button>
            </form>

            {/* Additional Info */}
            <div className="mt-6 p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center mb-2">
                <div className="text-blue-500 mr-2">ℹ️</div>
                <h3 className="font-semibold text-gray-800">¿Qué sucede después?</h3>
              </div>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Revisa tu bandeja de entrada</li>
                <li>• Haz clic en el enlace del correo</li>
                <li>• Crea una nueva contraseña</li>
                <li>• ¡Listo! Ya puedes iniciar sesión</li>
              </ul>
            </div>

            {/* Back to Login */}
            <div className="mt-8 text-center">
              <Link 
                href="/login" 
                className="text-red-500 hover:text-red-600 transition-colors font-semibold"
              >
                ← Volver al inicio de sesión
              </Link>
            </div>

            {/* Sign Up Link */}
            <p className="mt-6 text-center text-sm text-gray-600">
              ¿No tienes una cuenta?{' '}
              <Link href="/register" className="text-red-500 hover:text-red-600 font-semibold transition-colors">
                Regístrate aquí
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
