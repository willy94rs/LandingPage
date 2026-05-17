import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router';

export function Inicio() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Ediciones increíbles,<br />para ideas increíbles.
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Editor de video especializado en transformar conceptos en experiencias visuales excepcionales para tus redes sociales
          </p>
          <Link
            to="/paquete1"
            className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-lg inline-flex items-center gap-2 transition-all"
          >
            Ver mi trabajo
            <ChevronRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Servicios</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Link to="/paquete1" className="group">
              <div className="bg-slate-900/50 backdrop-blur border border-blue-900/30 rounded-xl p-8 hover:border-blue-500/50 transition-all h-full">
                
                <h3 className="text-2xl font-bold mb-3">Paquete Básico</h3>
                <p className="text-gray-400 mb-4">Edición de video fundamental para proyectos esenciales</p>
                <div className="text-blue-400 flex items-center gap-2 group-hover:gap-3 transition-all">
                  Ver más <ChevronRight className="w-4 h-4" />
                </div>
              </div>
            </Link>

            <Link to="/paquete2" className="group">
              <div className="bg-slate-900/50 backdrop-blur border border-blue-900/30 rounded-xl p-8 hover:border-blue-500/50 transition-all h-full">
                
                <h3 className="text-2xl font-bold mb-3">Paquete Profesional</h3>
                <p className="text-gray-400 mb-4">Edición avanzada con efectos y postproducción completa</p>
                <div className="text-blue-400 flex items-center gap-2 group-hover:gap-3 transition-all">
                  Ver más <ChevronRight className="w-4 h-4" />
                </div>
              </div>
            </Link>

            <Link to="/paquete3" className="group">
              <div className="bg-slate-900/50 backdrop-blur border border-blue-900/30 rounded-xl p-8 hover:border-blue-500/50 transition-all h-full">
                
                <h3 className="text-2xl font-bold mb-3">Paquete Premium</h3>
                <p className="text-gray-400 mb-4">Producción cinematográfica completa y efectos especiales</p>
                <div className="text-blue-400 flex items-center gap-2 group-hover:gap-3 transition-all">
                  Ver más <ChevronRight className="w-4 h-4" />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 px-6 bg-slate-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { number: '500+', label: 'Videos Editados' },
              { number: '100+', label: 'Clientes Satisfechos' },
              { number: '5+', label: 'Años de Experiencia' },
              { number: '50+', label: 'Proyectos Premium' }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
