import { Play } from 'lucide-react';

// INSTRUCCIONES PARA AGREGAR TUS VIDEOS:
// 1. Coloca tus videos en: src/assets/videos/paquete2/
// 2. Descomenta las líneas de import abajo y agrega tus videos
// 3. Actualiza el array 'videos' con la información de cada uno

// Ejemplo de imports (descomenta y ajusta según tus archivos):
// import video1 from '../../assets/videos/paquete2/video1.mp4';
// import video2 from '../../assets/videos/paquete2/video2.mp4';
// import video3 from '../../assets/videos/paquete2/video3.mp4';
// ... agrega más según necesites

export function Paquete2() {
  // Array con la información de tus videos
  const videos = [
    {
      id: 1,
      // video: video1, // Descomenta cuando tengas el video
      title: 'Proyecto Pro 1',
      description: 'Edición Avanzada · 3-5 min'
    },
    {
      id: 2,
      // video: video2,
      title: 'Proyecto Pro 2',
      description: 'Edición Avanzada · 3-5 min'
    },
    {
      id: 3,
      // video: video3,
      title: 'Proyecto Pro 3',
      description: 'Edición Avanzada · 3-5 min'
    },
    {
      id: 4,
      title: 'Proyecto Pro 4',
      description: 'Edición Avanzada · 3-5 min'
    },
    {
      id: 5,
      title: 'Proyecto Pro 5',
      description: 'Edición Avanzada · 3-5 min'
    },
    {
      id: 6,
      title: 'Proyecto Pro 6',
      description: 'Edición Avanzada · 3-5 min'
    },
    {
      id: 7,
      title: 'Proyecto Pro 7',
      description: 'Edición Avanzada · 3-5 min'
    },
    {
      id: 8,
      title: 'Proyecto Pro 8',
      description: 'Edición Avanzada · 3-5 min'
    },
    {
      id: 9,
      title: 'Proyecto Pro 9',
      description: 'Edición Avanzada · 3-5 min'
    },
    {
      id: 10,
      title: 'Proyecto Pro 10',
      description: 'Edición Avanzada · 3-5 min'
    },
    {
      id: 11,
      title: 'Proyecto Pro 11',
      description: 'Edición Avanzada · 3-5 min'
    },
    {
      id: 12,
      title: 'Proyecto Pro 12',
      description: 'Edición Avanzada · 3-5 min'
    },
  ];

  return (
    <div className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Paquete 2 - Profesional
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Edición avanzada con efectos visuales y postproducción de alta calidad para proyectos comerciales (Incluye tambien todo del paquete basico).
          </p>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {[
            {
              title: 'Edición Avanzada',
              description: 'Multicámara, Subtítulos, Ajuste de color.',
              features: ['Sincronización multicámara', 'Ajuste de brillos o sombras', 'Transiciones suaves','Subtitulos']
            },
            {
              title: 'Audio Pro',
              description: 'Mezcla de audio y sonidos.',
              features: ['Música sin copyright', 'Efectos de sonido']
            }
          ].map((item, index) => (
            <div key={index} className="bg-gradient-to-br from-slate-900 to-blue-950/50 border border-blue-900/30 rounded-xl p-8 hover:border-blue-500/50 transition-all">
              <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
              <p className="text-gray-300 mb-6">{item.description}</p>
              <ul className="space-y-2">
                {item.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-gray-400">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Video Gallery */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-8">Portafolio - Paquete Profesional</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {videos.map((videoItem) => (
              <div key={videoItem.id} className="group relative aspect-[9/16] bg-gradient-to-br from-blue-900/20 to-purple-900/20 rounded-xl overflow-hidden border border-blue-900/30 hover:border-blue-500/50 transition-all cursor-pointer">
                {/* Video de fondo (si existe) */}
                {videoItem.video && (
                  <video
                    src={videoItem.video}
                    className="absolute inset-0 w-full h-full object-cover"
                    muted
                    loop
                    playsInline
                    onMouseEnter={(e) => e.currentTarget.play()}
                    onMouseLeave={(e) => {
                      e.currentTarget.pause();
                      e.currentTarget.currentTime = 0;
                    }}
                  />
                )}

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>

                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-purple-600/80 rounded-full flex items-center justify-center group-hover:bg-purple-500 transition-all group-hover:scale-110">
                    <Play className="w-8 h-8 ml-1" fill="currentColor" />
                  </div>
                </div>

                {/* Video Number (solo se muestra si no hay video) */}
                {!videoItem.video && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-6xl font-bold text-purple-500/20 group-hover:text-purple-500/30 transition-colors">
                      {videoItem.id}
                    </div>
                  </div>
                )}

                {/* Video Number Badge */}
                <div className="absolute top-4 right-4 bg-slate-950/80 backdrop-blur px-3 py-1 rounded-full text-sm">
                  Video {videoItem.id}
                </div>

                {/* Premium Badge */}
                <div className="absolute top-4 left-4 bg-purple-600/80 backdrop-blur px-3 py-1 rounded-full text-xs font-bold">
                  PRO
                </div>

                {/* Video Info */}
                <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform">
                  <h4 className="text-sm font-bold mb-1">{videoItem.title}</h4>
                  <p className="text-xs text-gray-400">{videoItem.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing Cards */}
        <div>
          <h2 className="text-3xl font-bold mb-12 text-center">Planes Profesionales</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Plan 1 */}
            <div className="bg-slate-900/50 border border-blue-900/30 rounded-2xl p-8 hover:border-blue-500/50 transition-all">
              <h3 className="text-2xl font-bold mb-2">Pro Individual</h3>
              <p className="text-gray-400 mb-6">1 video</p>
              <div className="mb-6">
                <span className="text-5xl font-bold">$16</span>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-1.5 h-2.5 border-r-2 border-b-2 border-white rotate-45 -mt-0.5"></div>
                  </div>
                  <span className="text-gray-300">De 10 seg a 1 minuto</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-1.5 h-2.5 border-r-2 border-b-2 border-white rotate-45 -mt-0.5"></div>
                  </div>
                  <span className="text-gray-300">3 revisiones por video</span>
                </li>          
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-1.5 h-2.5 border-r-2 border-b-2 border-white rotate-45 -mt-0.5"></div>
                  </div>
                  <span className="text-gray-300">Entrega en 1 día</span>
                </li>
              </ul>
              <button className="w-full bg-slate-800 hover:bg-slate-700 py-3 rounded-lg transition-all">
                Comenzar
              </button>
            </div>

            {/* Plan 2 - Popular */}
            <div className="bg-gradient-to-b from-purple-900/50 to-slate-900/50 border-2 border-purple-500 rounded-2xl p-8 relative scale-105 shadow-2xl shadow-purple-500/20">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-purple-500 to-pink-500 px-4 py-1 rounded-full text-sm font-bold">
                Más Popular
              </div>
              <h3 className="text-2xl font-bold mb-2">Pro Estandar</h3>
              <p className="text-gray-400 mb-6">4 videos</p>
              <div className="mb-6">
                <span className="text-5xl font-bold">$60</span>               
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-1.5 h-2.5 border-r-2 border-b-2 border-white rotate-45 -mt-0.5"></div>
                  </div>
                  <span className="text-gray-300">De 10 seg a 1 minuto</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-1.5 h-2.5 border-r-2 border-b-2 border-white rotate-45 -mt-0.5"></div>
                  </div>
                  <span className="text-gray-300">3 revisiones por video</span>
                </li>              
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-1.5 h-2.5 border-r-2 border-b-2 border-white rotate-45 -mt-0.5"></div>
                  </div>
                  <span className="text-gray-300">Entrega en 3 días</span>
                </li>
              </ul>
              <button className="w-full bg-purple-600 hover:bg-purple-700 py-3 rounded-lg transition-all font-bold">
                Comenzar
              </button>
            </div>

            {/* Plan 3 */}
            <div className="bg-slate-900/50 border border-blue-900/30 rounded-2xl p-8 hover:border-blue-500/50 transition-all">
              <h3 className="text-2xl font-bold mb-2">Pro Avanzado</h3>
              <p className="text-gray-400 mb-6">8 videos</p>
              <div className="mb-6">
                <span className="text-5xl font-bold">$112</span>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-1.5 h-2.5 border-r-2 border-b-2 border-white rotate-45 -mt-0.5"></div>
                  </div>
                  <span className="text-gray-300">De 10 seg a 1 minuto</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-1.5 h-2.5 border-r-2 border-b-2 border-white rotate-45 -mt-0.5"></div>
                  </div>
                  <span className="text-gray-300">3 revisiones por video</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-1.5 h-2.5 border-r-2 border-b-2 border-white rotate-45 -mt-0.5"></div>
                  </div>
                  <span className="text-gray-300">Entrega en 5 días</span>
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
