import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router';

export function Layout() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const links = [
    { path: '/', label: 'Inicio' },
    { path: '/paquete1', label: 'Paquete basico' },
    { path: '/paquete2', label: 'Paquete profesional' },
    { path: '/paquete3', label: 'Paquete premium' },
    { path: '/portadas', label: 'Portadas' },
    { path: '/otros', label: 'Otros' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-lg border-b border-blue-900/30">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Portfolio
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8">
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`hover:text-blue-400 transition-colors ${
                  location.pathname === link.path ? 'text-blue-400' : ''
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-slate-900 border-t border-blue-900/30">
            <div className="flex flex-col gap-4 px-6 py-4">
              {links.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMenuOpen(false)}
                  className={`text-left hover:text-blue-400 transition-colors ${
                    location.pathname === link.path ? 'text-blue-400' : ''
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Page Content */}
      <div className="pt-20">
        <Outlet />
      </div>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-blue-900/30">
        <div className="max-w-7xl mx-auto text-center">
          <div className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Portfolio
          </div>
          <p className="text-gray-400 mb-6">Edición profesional de video</p>
          <p className="text-sm text-gray-500">&copy; Willy's Studio 2026 Todos los derechos reservados</p>
        </div>
      </footer>
    </div>
  );
}
