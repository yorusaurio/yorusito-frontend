import Link from 'next/link';

export default function TermsAndConditionsPage() {
  return (
    <div className="min-h-screen bg-cream py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <Link href="/" className="text-3xl font-bold text-gradient anime-text inline-block mb-4">
            YORUSITO
          </Link>
          <h1 className="text-4xl font-bold text-black mb-4 anime-text">
            Términos y Condiciones
          </h1>
          <p className="text-gray-600">
            Última actualización: 15 de julio de 2025
          </p>
        </div>

        {/* Content */}
        <div className="bg-white rounded-lg shadow-lg p-8 space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-black mb-4">1. Aceptación de los Términos</h2>
            <p className="text-gray-700 leading-relaxed">
              Al acceder y utilizar el sitio web de Yorusito, usted acepta estar sujeto a estos términos y condiciones de uso. Si no está de acuerdo con alguno de estos términos, no debe utilizar nuestro sitio web.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-black mb-4">2. Descripción del Servicio</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Yorusito es una plataforma de comercio electrónico que ofrece:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Ropa básica de calidad (polos, hoodies, pantalones, camisetas)</li>
              <li>Colecciones especiales temáticas (Stars, Anime)</li>
              <li>Servicios de personalización de prendas</li>
              <li>Diseños únicos y exclusivos</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-black mb-4">3. Registro de Cuenta</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Para realizar compras, debe crear una cuenta proporcionando información precisa y actualizada. Usted es responsable de:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Mantener la confidencialidad de su contraseña</li>
              <li>Todas las actividades realizadas bajo su cuenta</li>
              <li>Notificar inmediatamente sobre cualquier uso no autorizado</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-black mb-4">4. Productos y Precios</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Nos reservamos el derecho de:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Modificar precios sin previo aviso</li>
              <li>Descontinuar productos en cualquier momento</li>
              <li>Limitar las cantidades de compra</li>
              <li>Rechazar pedidos por cualquier motivo</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-black mb-4">5. Personalización de Productos</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Para productos personalizados:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Los diseños deben respetar los derechos de autor</li>
              <li>No aceptamos contenido ofensivo o inapropiado</li>
              <li>Los productos personalizados no son reembolsables</li>
              <li>El tiempo de producción puede variar según el diseño</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-black mb-4">6. Pagos y Facturación</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Aceptamos los siguientes métodos de pago:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Tarjetas de crédito y débito</li>
              <li>Transferencias bancarias</li>
              <li>Pagos digitales autorizados</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-black mb-4">7. Envíos y Entregas</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Los tiempos de envío son estimados y pueden variar según:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Ubicación del destinatario</li>
              <li>Disponibilidad del producto</li>
              <li>Condiciones climáticas o circunstancias imprevistas</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-black mb-4">8. Devoluciones y Cambios</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Política de devoluciones:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>30 días para devoluciones de productos básicos</li>
              <li>Productos personalizados no son reembolsables</li>
              <li>Los productos deben estar en condiciones originales</li>
              <li>Los gastos de envío de devolución corren por cuenta del cliente</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-black mb-4">9. Propiedad Intelectual</h2>
            <p className="text-gray-700 leading-relaxed">
              Todos los diseños, marcas, logotipos y contenido del sitio web son propiedad de Yorusito o sus licenciantes. Está prohibida la reproducción sin autorización expresa.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-black mb-4">10. Limitación de Responsabilidad</h2>
            <p className="text-gray-700 leading-relaxed">
              Yorusito no se hace responsable de daños indirectos, incidentales o consecuentes que puedan surgir del uso de nuestros productos o servicios.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-black mb-4">11. Contacto</h2>
            <p className="text-gray-700 leading-relaxed">
              Para preguntas sobre estos términos y condiciones, contáctanos en:
            </p>
            <div className="mt-4 text-gray-700">
              <p>📧 Email: info@yorusito.com</p>
              <p>📱 Teléfono: +51 999 999 999</p>
            </div>
          </section>
        </div>

        {/* Back to Register Button */}
        <div className="text-center mt-8">
          <Link 
            href="/register" 
            className="bg-red-500 text-white px-6 py-3 rounded-lg hover:bg-red-600 transition-colors font-semibold"
          >
            Volver al Registro
          </Link>
        </div>
      </div>
    </div>
  );
}
