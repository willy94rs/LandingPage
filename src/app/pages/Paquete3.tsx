import { useState } from 'react';
import { Play, Star } from 'lucide-react';

// INSTRUCCIONES PARA AGREGAR TUS VIDEOS:
// 1. Coloca tus videos en: src/assets/videos/paquete3/
// 2. Descomenta las líneas de import abajo y agrega tus videos
// 3. Actualiza el array 'videos' con la información de cada uno

// Ejemplo de imports (descomenta y ajusta según tus archivos):
// import video1 from '../../assets/videos/paquete3/video1.mp4';
// import video2 from '../../assets/videos/paquete3/video2.mp4';
// import video3 from '../../assets/videos/paquete3/video3.mp4';
// ... agrega más según necesites

export function Paquete3() {
  // Array con la información de tus videos
  const videos = [
    {
      id: 1,
      // video: video1, // Descomenta cuando tengas el video
      title: 'Proyecto Premium 1',
      description: 'Producción Completa · 5-10 min'
    },
    {
      id: 2,
      // video: video2,
      title: 'Proyecto Premium 2',
      description: 'Producción Completa · 5-10 min'
    },
    {
      id: 3,
      // video: video3,
      title: 'Proyecto Premium 3',
      description: 'Producción Completa · 5-10 min'
    },
    {
      id: 4,
      title: 'Proyecto Premium 4',
      description: 'Producción Completa · 5-10 min'
    },
    {
      id: 5,
      title: 'Proyecto Premium 5',
      description: 'Producción Completa · 5-10 min'
    },
    {
      id: 6,
      title: 'Proyecto Premium 6',
      description: 'Producción Completa · 5-10 min'
    },
    {
      id: 7,
      title: 'Proyecto Premium 7',
      description: 'Producción Completa · 5-10 min'
    },
    {
      id: 8,
      title: 'Proyecto Premium 8',
      description: 'Producción Completa · 5-10 min'
    },
    {
      id: 9,
      title: 'Proyecto Premium 9',
      description: 'Producción Completa · 5-10 min'
    },
    {
      id: 10,
      title: 'Proyecto Premium 10',
      description: 'Producción Completa · 5-10 min'
    },
    {
      id: 11,
      title: 'Proyecto Premium 11',
      description: 'Producción Completa · 5-10 min'
    },
    {
      id: 12,
      title: 'Proyecto Premium 12',
      description: 'Producción Completa · 5-10 min'
    },
  ];

  const [playingVideo, setPlayingVideo] = useState<number | null>(null);

  return (
    <div className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/50 rounded-full px-4 py-2 mb-4">
            <Star className="w-4 h-4 text-yellow-400" fill="currentColor" />
            <span className="text-sm font-bold">Premium</span>
          </div>
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Paquete 3 - Premium
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Producción completa con efectos visuales , subtitulos dinamicos, transiciones suaves, motion graphics basico y videos stocks complementarios (Incluye tambien todo del paquete profesional).
          </p>
        </div>

        {/* Premium Features */}
        <div className="bg-gradient-to-br from-blue-950 via-purple-950 to-slate-900 border border-blue-500/50 rounded-2xl p-8 md:p-12 mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">Solución Completa</h3>
            <p className="text-xl text-gray-300">Todo lo que necesitas para producción de nivel cinematográfico</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              'Efectos Visuales',
              'Palabras claves',
              'Motion graphics basico',
              'Superposiciones',
              'Videos stocks complementarios',          
              'Subtitulos dinamicos'
            ].map((feature, index) => (
              <div key={index} className="flex items-center gap-3 bg-slate-900/50 rounded-lg p-4">
                <div className="w-6 h-6 bg-gradient-to-br from-blue-500 to-purple-500 rounded flex items-center justify-center flex-shrink-0">
                  <div className="w-2 h-3 border-r-2 border-b-2 border-white rotate-45 -mt-1"></div>
                </div>
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Video Gallery */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-8">Portafolio - Paquete Premium</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {videos.map((videoItem) => (
              <div key={videoItem.id} className="space-y-3">
                <div className="group relative aspect-[9/16] bg-gradient-to-br from-purple-900/30 to-pink-900/30 rounded-xl overflow-hidden border border-purple-500/30 hover:border-purple-400/70 transition-all cursor-pointer pointer-events-none">
                  {videoItem.video && (
                    <video
                      src={videoItem.video}
                      className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-auto"
                      muted
                      loop
                      playsInline
                      controls
                      onPlay={() => setPlayingVideo(videoItem.id)}
                      onPause={() => setPlayingVideo(null)}
                      onEnded={() => setPlayingVideo(null)}
                    />
                  )}

                  {playingVideo !== videoItem.id && (
                    <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none">
                      <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center shadow-lg shadow-purple-500/50">
                        <Play className="w-8 h-8 ml-1" fill="currentColor" />
                      </div>
                    </div>
                  )}

                  {!videoItem.video && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-6xl font-bold text-purple-500/20 group-hover:text-purple-500/30 transition-colors">
                        {videoItem.id}
                      </div>
                    </div>
                  )}

                  <div className="absolute top-4 right-4 bg-slate-950/80 backdrop-blur px-3 py-1 rounded-full text-sm pointer-events-none">
                    Video {videoItem.id}
                  </div>

                  <div className="absolute top-4 left-4 bg-gradient-to-r from-purple-600 to-pink-600 backdrop-blur px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 shadow-lg pointer-events-none">
                    <Star className="w-3 h-3" fill="currentColor" />
                    PREMIUM
                  </div>
                </div>
                <div className="mt-3 text-left">
                  <h4 className="text-sm font-bold mb-1 text-white">{videoItem.title}</h4>
                  <p className="text-xs text-gray-400">{videoItem.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing Cards */}
        <div>
          <h2 className="text-3xl font-bold mb-12 text-center">Planes Premium</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Plan 1 */}
            <div className="bg-slate-900/50 border border-purple-900/30 rounded-2xl p-8 hover:border-purple-500/50 transition-all">
              <h3 className="text-2xl font-bold mb-2">Premiun Individual</h3>
              <p className="text-gray-400 mb-6">1 video</p>
              <div className="mb-6">
                <span className="text-5xl font-bold">$22</span>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-1.5 h-2.5 border-r-2 border-b-2 border-white rotate-45 -mt-0.5"></div>
                  </div>
                  <span className="text-gray-300">De 10 seg a 1:30 minuto</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-1.5 h-2.5 border-r-2 border-b-2 border-white rotate-45 -mt-0.5"></div>
                  </div>
                  <span className="text-gray-300">4 revisiones por video</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-1.5 h-2.5 border-r-2 border-b-2 border-white rotate-45 -mt-0.5"></div>
                  </div>
                  <span className="text-gray-300">Entrega en 1 día</span>
                </li>                
              </ul>
              <a
                href="https://api.whatsapp.com/send?phone=+584221234567&text=Hola,%20me%20gustar%C3%ADa%20adquirir%20el%20paquete%20premium%20con%20el%20plan%20Premium%20Individual%20que%20incluye%201%20video%20por%20el%20precio%20de%20$22"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-slate-800 hover:bg-slate-500 py-3 rounded-lg transition-all font-bold block text-center"
              >
                Comenzar
              </a>
            </div>

            {/* Plan 2 - Popular */}
            <div className="bg-gradient-to-b from-purple-900/50 via-pink-900/30 to-slate-900/50 border-2 border-pink-500 rounded-2xl p-8 relative scale-105 shadow-2xl shadow-pink-500/20">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 px-4 py-1 rounded-full text-sm font-bold flex items-center gap-1 shadow-lg">
                <Star className="w-4 h-4" fill="currentColor" />
                Más Popular
              </div>
              <h3 className="text-2xl font-bold mb-2">Premiun Estándar</h3>
              <p className="text-gray-400 mb-6">4 videos</p>
              <div className="mb-6">
                <span className="text-5xl font-bold">$84</span>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-1.5 h-2.5 border-r-2 border-b-2 border-white rotate-45 -mt-0.5"></div>
                  </div>
                  <span className="text-gray-300">De 10 seg a 1:30 minuto</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-1.5 h-2.5 border-r-2 border-b-2 border-white rotate-45 -mt-0.5"></div>
                  </div>
                  <span className="text-gray-300">4 revisiones por video</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-1.5 h-2.5 border-r-2 border-b-2 border-white rotate-45 -mt-0.5"></div>
                  </div>
                  <span className="text-gray-300">Entrega en 3 días</span>
                </li>                
              </ul>
              <a
                href="https://api.whatsapp.com/send?phone=+584221234567&text=Hola,%20me%20gustar%C3%ADa%20adquirir%20el%20paquete%20premium%20con%20el%20plan%20Premium%20Estandar%20que%20incluye%204%20videos%20por%20el%20precio%20de%20$84"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 py-3 rounded-lg transition-all font-bold shadow-lg shadow-purple-500/50 text-center block"
              >
                Comenzar
              </a>
            </div>

            {/* Plan 3 */}
            <div className="bg-slate-900/50 border border-purple-900/30 rounded-2xl p-8 hover:border-purple-500/50 transition-all">
              <h3 className="text-2xl font-bold mb-2">Premiun Avanzado</h3>
              <p className="text-gray-400 mb-6">8 videos</p>
              <div className="mb-6">
                <span className="text-5xl font-bold">$160</span>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-1.5 h-2.5 border-r-2 border-b-2 border-white rotate-45 -mt-0.5"></div>
                  </div>
                  <span className="text-gray-300">De 10 seg a 1:30 minuto</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-1.5 h-2.5 border-r-2 border-b-2 border-white rotate-45 -mt-0.5"></div>
                  </div>
                  <span className="text-gray-300">4 revisiones por video</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-1.5 h-2.5 border-r-2 border-b-2 border-white rotate-45 -mt-0.5"></div>
                  </div>
                  <span className="text-gray-300">Entrega en 5 días</span>
                </li>                            
              </ul>
              <a
                href="https://api.whatsapp.com/send?phone=+584227201467&text=Hola,%20me%20gustar%C3%ADa%20adquirir%20el%20paquete%20premium%20con%20el%20plan%20Premium%20Avanzado%20que%20incluye%208%20videos%20por%20el%20precio%20de%20$160"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-slate-800 hover:bg-slate-500 py-3 rounded-lg transition-all font-bold block text-center"
              >
                Comenzar
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
