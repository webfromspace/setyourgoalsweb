import { Instagram, Twitter, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-black mb-2 tracking-tight">SET</h2>
          <p className="text-sm font-light tracking-widest text-zinc-400">SET YOUR GOALS</p>
        </div>

        <div className="flex justify-center space-x-6 mb-8">
          <a
            href="#"
            className="w-12 h-12 flex items-center justify-center border border-zinc-700 hover:bg-white hover:text-black transition-colors"
          >
            <Instagram className="w-5 h-5" />
          </a>
          <a
            href="#"
            className="w-12 h-12 flex items-center justify-center border border-zinc-700 hover:bg-white hover:text-black transition-colors"
          >
            <Twitter className="w-5 h-5" />
          </a>
          <a
            href="#"
            className="w-12 h-12 flex items-center justify-center border border-zinc-700 hover:bg-white hover:text-black transition-colors"
          >
            <Facebook className="w-5 h-5" />
          </a>
        </div>

        <div className="border-t border-zinc-800 pt-8 text-center">
          <p className="text-zinc-500 text-sm font-light">
            © 2024 SET. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
