import { useState } from "react";
import { Play } from "lucide-react";

// INSTRUCCIONES PARA AGREGAR TUS VIDEOS:
// 1. Coloca tus videos en: src/assets/videos/paquete1/
// 2. Descomenta las líneas de import abajo y agrega tus videos
// 3. Actualiza el array 'videos' con la información de cada uno

// Ejemplo de imports (descomenta y ajusta según tus archivos):
//import video4 from '../../assets/videos/paquete1/1ba4.mp4';


export function Paquete1() {
  // Array con la información de tus videos
  const videos = [
    {
      id: 1,
      video: 'https://wmuwhkibsngbjlkkhxay.supabase.co/storage/v1/object/public/Implant28Eastward1/1ba1.mp4'
      
    },
        {
      id: 2,
      video: 'https://wmuwhkibsngbjlkkhxay.supabase.co/storage/v1/object/public/Implant28Eastward1/1ba2.mp4'
      
        },
    {
      id: 3,
      video: 'https://wmuwhkibsngbjlkkhxay.supabase.co/storage/v1/object/public/Implant28Eastward1/1ba3.mp4'
    
    },
    {
      id: 4,
      video: 'https://res.cloudinary.com/dw9sqnrcr/video/upload/v1780528741/1ba4_cbmigp.mp4'

    },
    {
      id: 5,
      video: 'https://wmuwhkibsngbjlkkhxay.supabase.co/storage/v1/object/public/Implant28Eastward1/1ba5.mp4',
      
    },
    {
      id: 6,
      video: 'https://res.cloudinary.com/dw9sqnrcr/video/upload/v1780528920/1ba6_pqh1lr.mp4'
      //description: 'Edición · 2-3 min'
      //title: 'Proyecto Básico 6',
    },
    {
      id: 7,
      video: 'https://wmuwhkibsngbjlkkhxay.supabase.co/storage/v1/object/public/Implant28Eastward1/1ba7.mp4'
      
    },
    {
      id: 8,
      video: 'https://res.cloudinary.com/dw9sqnrcr/video/upload/v1780529910/1ba8_cxm5ka.mp4'
    }
  ];

  const [playingVideo, setPlayingVideo] = useState<number | null>(null);

  return (
    <div className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Paquete 1 - Básico
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Edición de video fundamental perfecta para contenido 
          </p>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            de redes sociales, vlogs y proyectos personales.
          </p>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {[
            {
              title: "Corte y Edición",
              description:
                "Edición básica de clips con transiciones suaves.",
            },
            {
              title: "Audio Básico",
              description: "Musica de fondo sin copyright.",
            },
            
            {
              title: "Revisiones",
              description: "Hasta 2 revisiones por video.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-slate-900/50 backdrop-blur border border-blue-900/30 rounded-xl p-6 hover:border-blue-500/50 transition-all"
            >
              <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center mb-4">
                <div className="w-6 h-6 bg-blue-500 rounded"></div>
              </div>
              <h3 className="text-xl font-bold mb-2">
                {item.title}
              </h3>
              <p className="text-gray-400">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Video Gallery */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-8">
            Portafolio - Paquete Básico
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            {videos.map((videoItem) => (
              <div key={videoItem.id} className="space-y-3">
                <div className="group relative aspect-[9/16] bg-gradient-to-br from-blue-900/20 to-purple-900/20 rounded-xl overflow-hidden border border-blue-900/30 hover:border-blue-500/50 transition-all cursor-pointer pointer-events-none">
                {/* Video de fondo (si existe) */}
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

                {/* Play Button */}
                {playingVideo !== videoItem.id && (
                  <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none">
                    <div className="w-16 h-16 bg-blue-600/80 rounded-full flex items-center justify-center">
                      <Play
                        className="w-8 h-8 ml-1"
                        fill="currentColor"
                      />
                    </div>
                  </div>
                )}

                {/* Video Number (solo se muestra si no hay video) */}
                {!videoItem.video && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-6xl font-bold text-blue-500/20 group-hover:text-blue-500/30 transition-colors">
                      {videoItem.id}
                    </div>
                  </div>
                )}

                </div>
                <div className="mt-3 text-left">
                  <h4 className="text-sm font-bold mb-1 text-white">
                    {videoItem.title}
                  </h4>
                  <p className="text-xs text-gray-400">
                    {videoItem.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing Cards */}
        <div>
          <h2 className="text-3xl font-bold mb-12 text-center">
            Elige tu plan
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Plan 1 */}
            <div className="bg-slate-900/50 border border-blue-900/30 rounded-2xl p-8 hover:border-blue-500/50 transition-all">
              <h3 className="text-2xl font-bold mb-2">
                Individual
              </h3>
              <p className="text-gray-400 mb-6">1 video</p>
              <div className="mb-6">
                <span className="text-5xl font-bold">$10</span>           
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-1.5 h-2.5 border-r-2 border-b-2 border-white rotate-45 -mt-0.5"></div>
                  </div>
                  <span className="text-gray-300">
                    De 10 seg a 1 minuto
                  </span>
                </li>
                
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-1.5 h-2.5 border-r-2 border-b-2 border-white rotate-45 -mt-0.5"></div>
                  </div>
                  <span className="text-gray-300">
                    2 revisiones por video
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
              <a
                href="https://api.whatsapp.com/send?phone=+584221234567&text=Hola,%20me%20gustar%C3%ADa%20adquirir%20el%20paquete%20basico%20con%20el%20plan%20Individual%20que%20incluye%201%20video%20por%20el%20precio%20de%20$10"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-slate-800 hover:bg-slate-500 py-3 rounded-lg transition-all font-bold block text-center"
              >
                Comenzar
              </a>
            </div>

            {/* Plan 2 - Popular */}
            <div className="bg-gradient-to-b from-blue-900/50 to-slate-900/50 border-2 border-blue-500 rounded-2xl p-8 relative scale-105 shadow-2xl shadow-blue-500/20">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-500 to-purple-500 px-4 py-1 rounded-full text-sm font-bold">
                Más Popular
              </div>
              <h3 className="text-2xl font-bold mb-2">
                Estándar
              </h3>
              <p className="text-gray-400 mb-6">4 videos</p>
              <div className="mb-6">
                <span className="text-5xl font-bold">$36</span>            
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-1.5 h-2.5 border-r-2 border-b-2 border-white rotate-45 -mt-0.5"></div>
                  </div>
                  <span className="text-gray-300">
                    De 10 seg a 1 minuto
                  </span>
                </li>            
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-1.5 h-2.5 border-r-2 border-b-2 border-white rotate-45 -mt-0.5"></div>
                  </div>
                  <span className="text-gray-300">
                    2 revisiones por video
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-1.5 h-2.5 border-r-2 border-b-2 border-white rotate-45 -mt-0.5"></div>
                  </div>
                  <span className="text-gray-300">
                    Entrega en 3 días
                  </span>
                </li>
              </ul>
              <a
                href="https://api.whatsapp.com/send?phone=+584221234567&text=Hola,%20me%20gustar%C3%ADa%20adquirir%20el%20paquete%20basico%20con%20el%20plan%20Est%C3%A1ndar%20que%20incluye%204%20videos%20por%20el%20precio%20de%20$36"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-blue-600 hover:bg-blue-700 py-3 rounded-lg transition-all font-bold block text-center"
              >
                Comenzar
              </a>
            </div>

            {/* Plan 3 */}
            <div className="bg-slate-900/50 border border-blue-900/30 rounded-2xl p-8 hover:border-blue-500/50 transition-all">
              <h3 className="text-2xl font-bold mb-2">
                Avanzado
              </h3>
              <p className="text-gray-400 mb-6">8 videos</p>
              <div className="mb-6">
                <span className="text-5xl font-bold">$64</span>                
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-1.5 h-2.5 border-r-2 border-b-2 border-white rotate-45 -mt-0.5"></div>
                  </div>
                  <span className="text-gray-300">
                    De 10 seg a 1 minuto
                  </span>
                </li>
              

                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-1.5 h-2.5 border-r-2 border-b-2 border-white rotate-45 -mt-0.5"></div>
                  </div>
                  <span className="text-gray-300">
                    2 revisiones por video
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-1.5 h-2.5 border-r-2 border-b-2 border-white rotate-45 -mt-0.5"></div>
                  </div>
                  <span className="text-gray-300">
                    Entrega en 5 días
                  </span>
                </li>
              </ul>
              <a
                href="https://api.whatsapp.com/send?phone=+584221234567&text=Hola,%20me%20gustar%C3%ADa%20adquirir%20el%20paquete%20basico%20con%20el%20plan%20Avanzado%20que%20incluye%208%20videos%20por%20el%20precio%20de%20$64"
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