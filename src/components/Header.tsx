import { ShoppingCart, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = ['Inicio', 'Características', 'Tienda', 'Contacto'];

  return (
    <header className="fixed top-0 left-0 right-0 bg-white z-50 border-b border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex flex-col">
            <h1 className="text-3xl font-black tracking-tight">SET</h1>
            <p className="text-[10px] font-light tracking-widest text-zinc-600">SET YOUR GOALS</p>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm font-medium text-zinc-900 hover:text-zinc-600 transition-colors"
              >
                {item}
              </a>
            ))}
            <button className="p-2 hover:bg-zinc-100 transition-colors rounded">
              <ShoppingCart className="w-5 h-5" />
            </button>
          </nav>

          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-white border-t border-zinc-200"
        >
          <nav className="flex flex-col px-4 py-6 space-y-4">
            {menuItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm font-medium text-zinc-900 hover:text-zinc-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            <button className="flex items-center space-x-2 text-sm font-medium">
              <ShoppingCart className="w-5 h-5" />
              <span>Carrito</span>
            </button>
          </nav>
        </motion.div>
      )}
    </header>
  );
}
