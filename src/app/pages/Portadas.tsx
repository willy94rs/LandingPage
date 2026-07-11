// INSTRUCCIONES PARA AGREGAR TUS IMÁGENES:
// 1. Coloca tus imágenes en: src/assets/portadas/
// 2. Descomenta las líneas de import abajo y agrega tus imágenes
// 3. Actualiza el array 'portadas' con la información de cada una

// Ejemplo de imports (descomenta y ajusta según tus archivos):
import portada1 from '../../assets/portadas/portada1.png';
import portada2 from '../../assets/portadas/portada2.png';
import portada3 from '../../assets/portadas/portada3.png';
// ... agrega más según necesites

export function Portadas() {
  // Array con la información de tus portadas
  const portadas = [
    {
      id: 1,
      image: portada1, // Descomenta cuando tengas la imagen
      title: 'Portada 1',
      description: 'Diseño de miniatura profesional'
    },
    {
      id: 2,
      image: portada2,
      title: 'Portada 2',
      description: 'Diseño de miniatura profesional'
    },
    {
      id: 3,
      image: portada3,
      title: 'Portada 3',
      description: 'Diseño de miniatura profesional'
    },
    {
      id: 4,
      title: 'Portada 4',
      description: 'Diseño de miniatura profesional'
    },
    {
      id: 5,
      title: 'Portada 5',
      description: 'Diseño de miniatura profesional'
    },
    {
      id: 6,
      title: 'Portada 6',
      description: 'Diseño de miniatura profesional'
    },
    {
      id: 7,
      title: 'Portada 7',
      description: 'Diseño de miniatura profesional'
    },
    {
      id: 8,
      title: 'Portada 8',
      description: 'Diseño de miniatura profesional'
    },
  ];

  return (
    <div className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Portadas
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Diseño de miniaturas y portadas profesionales 
          </p>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            que capturan la atención y aumentan el CTR de tus videos en tus redes sociales. 
          </p>
        </div>

        {/* Gallery */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          {portadas.map((portada) => (
            <div
              key={portada.id}
              className="group relative aspect-[9/16] bg-gradient-to-br from-blue-900/20 to-purple-900/20 rounded-xl overflow-hidden border border-blue-900/30 hover:border-blue-500/50 transition-all cursor-pointer"
            >
              {/* Imagen de fondo (si existe) */}
              {portada.image && (
                <img
                  src={portada.image}
                  alt={portada.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              )}

              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>

              {/* Thumbnail Number (solo se muestra si no hay imagen) */}
              {!portada.image && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-6xl font-bold text-blue-500/20 group-hover:text-blue-500/30 transition-colors">
                    {portada.id}
                  </div>
                </div>
              )}

              {/* Category Badge */}
              <div className="absolute top-4 right-4 bg-slate-950/80 backdrop-blur px-3 py-1 rounded-full text-xs">
                Portada
              </div>

              {/* Info on Hover */}
              <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform">
                <h4 className="text-lg font-bold mb-1">
                  {portada.title}
                </h4>
                <p className="text-sm text-gray-400">
                  {portada.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {[
            {
              title: "Diseño Impactante",
              description:
                "Composiciones visuales que destacan en cualquier plataforma",
            },
            {
              title: "Tipografía Legible",
              description:
                "Texto claro y visible incluso en tamaños pequeños",
            },
            {
              title: "Alta Conversión",
              description:
                "Optimizado para maximizar el CTR y las visualizaciones",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-slate-900/50 backdrop-blur border border-blue-900/30 rounded-xl p-6"
            >
              <h3 className="text-xl font-bold mb-2">
                {item.title}
              </h3>
              <p className="text-gray-400">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Pricing Cards */}
        <div>
          <h2 className="text-3xl font-bold mb-12 text-center">
            Planes de Portadas
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Plan 1 */}
            <div className="bg-slate-900/50 border border-blue-900/30 rounded-2xl p-8 hover:border-blue-500/50 transition-all">
              <h3 className="text-2xl font-bold mb-2">
                Pack Básico
              </h3>
              <p className="text-gray-400 mb-6">1 Portada</p>
              <div className="mb-6">
                <span className="text-5xl font-bold">$6</span>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-1.5 h-2.5 border-r-2 border-b-2 border-white rotate-45 -mt-0.5"></div>
                  </div>
                  <span className="text-gray-300">
                    1 concepto de diseño por portada
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-1.5 h-2.5 border-r-2 border-b-2 border-white rotate-45 -mt-0.5"></div>
                  </div>
                  <span className="text-gray-300">
                    Texto personalizado
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-1.5 h-2.5 border-r-2 border-b-2 border-white rotate-45 -mt-0.5"></div>
                  </div>
                  <span className="text-gray-300">
                    1 revisión
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-1.5 h-2.5 border-r-2 border-b-2 border-white rotate-45 -mt-0.5"></div>
                  </div>
                  <span className="text-gray-300">
                    Entrega en 1 día
                  </span>
                </li>
              </ul>
              <button className="w-full bg-slate-800 hover:bg-slate-700 py-3 rounded-lg transition-all">
                Comenzar
              </button>
            </div>

            {/* Plan 2 - Popular */}
            <div className="bg-gradient-to-b from-blue-900/50 to-slate-900/50 border-2 border-blue-500 rounded-2xl p-8 relative scale-105 shadow-2xl shadow-blue-500/20">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-500 to-purple-500 px-4 py-1 rounded-full text-sm font-bold">
                Más Popular
              </div>
              <h3 className="text-2xl font-bold mb-2">
                Pack Profesional
              </h3>
              <p className="text-gray-400 mb-6">4 portadas</p>
              <div className="mb-6">
                <span className="text-5xl font-bold">$20</span>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-1.5 h-2.5 border-r-2 border-b-2 border-white rotate-45 -mt-0.5"></div>
                  </div>
                  <span className="text-gray-300">
                    1 concepto de diseño por portada
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-1.5 h-2.5 border-r-2 border-b-2 border-white rotate-45 -mt-0.5"></div>
                  </div>
                  <span className="text-gray-300">
                    Texto personalizado
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-1.5 h-2.5 border-r-2 border-b-2 border-white rotate-45 -mt-0.5"></div>
                  </div>
                  <span className="text-gray-300">
                    2 revisiones por portada
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-1.5 h-2.5 border-r-2 border-b-2 border-white rotate-45 -mt-0.5"></div>
                  </div>
                  <span className="text-gray-300">
                    Entrega en 2 día
                  </span>
                </li>
              </ul>
              <button className="w-full bg-blue-600 hover:bg-blue-700 py-3 rounded-lg transition-all font-bold">
                Comenzar
              </button>
            </div>

            {/* Plan 3 */}
            <div className="bg-slate-900/50 border border-blue-900/30 rounded-2xl p-8 hover:border-blue-500/50 transition-all">
              <h3 className="text-2xl font-bold mb-2">
                Pack Premium
              </h3>
              <p className="text-gray-400 mb-6">8 portadas</p>
              <div className="mb-6">
                <span className="text-5xl font-bold">$32</span>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-1.5 h-2.5 border-r-2 border-b-2 border-white rotate-45 -mt-0.5"></div>
                  </div>
                  <span className="text-gray-300">
                    1 concepto de diseño por portada
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-1.5 h-2.5 border-r-2 border-b-2 border-white rotate-45 -mt-0.5"></div>
                  </div>
                  <span className="text-gray-300">
                    Texto personalizado
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-1.5 h-2.5 border-r-2 border-b-2 border-white rotate-45 -mt-0.5"></div>
                  </div>
                  <span className="text-gray-300">
                    3 revisiones por portada
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-1.5 h-2.5 border-r-2 border-b-2 border-white rotate-45 -mt-0.5"></div>
                  </div>
                  <span className="text-gray-300">
                    Entrega en 4 día
                  </span>
                </li>
              </ul>
              <button className="w-full bg-slate-800 hover:bg-slate-700 py-3 rounded-lg transition-all">
                Comenzar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
