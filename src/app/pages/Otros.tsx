export function Otros() {
  return (
    <div className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Otros Servicios
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Servicios adicionales especializados para complementar tus proyectos audiovisuales
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {[
            {
              category: 'Animación de Logos',
              count: '50+',
              color: 'from-pink-600 to-purple-600',
              description: 'Intros animados profesionales para tu marca'
            },
            {
              category: 'Transcripciones',
              count: '200+',
              color: 'from-blue-600 to-cyan-600',
              description: 'Subtítulos y transcripciones precisas en múltiples idiomas'
            },
            {
              category: 'Streamings en Vivo',
              count: '30+',
              color: 'from-purple-600 to-blue-600',
              description: 'Producción y edición de eventos en tiempo real'
            },
            {
              category: 'Optimización SEO',
              count: '100+',
              color: 'from-cyan-600 to-blue-600',
              description: 'Optimización de metadatos para plataformas de video'
            }
          ].map((item, index) => (
            <div key={index} className="relative bg-slate-900/50 backdrop-blur border border-blue-900/30 rounded-xl p-8 overflow-hidden group hover:border-blue-500/50 transition-all">
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${item.color} opacity-20 rounded-full blur-3xl group-hover:opacity-30 transition-opacity`}></div>
              <h3 className="text-2xl font-bold mb-2 relative z-10">{item.category}</h3>
              <p className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent relative z-10 mb-3">{item.count}</p>
              <p className="text-gray-400 relative z-10">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Additional Services */}
        <div>
          <h2 className="text-3xl font-bold mb-8">Servicios Especializados</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: 'Edición de Podcasts',
                description: 'Edición profesional de audio y video para podcasts'
              },
              {
                title: 'Contenido para Redes',
                description: 'Videos cortos optimizados para TikTok, Reels e Instagram'
              },
              {
                title: 'Video Corporativo',
                description: 'Producción de videos institucionales y corporativos'
              },
              {
                title: 'Tutoriales',
                description: 'Videos educativos con animaciones explicativas'
              },
              {
                title: 'Eventos',
                description: 'Cobertura y edición de eventos especiales'
              },
              {
                title: 'Testimoniales',
                description: 'Videos de clientes con entrevistas profesionales'
              }
            ].map((service, index) => (
              <div key={index} className="bg-slate-900/50 backdrop-blur border border-blue-900/30 rounded-xl p-6 hover:border-blue-500/50 transition-all">
                <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center mb-4">
                  <div className="w-6 h-6 bg-gradient-to-br from-blue-500 to-purple-500 rounded"></div>
                </div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-gray-400">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
