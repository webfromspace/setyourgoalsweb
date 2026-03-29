import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="inicio" className="relative h-screen flex items-center justify-center bg-zinc-900 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40 z-10" />

      <img
        src="https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=1920"
        alt="Athlete training"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl sm:text-6xl lg:text-7xl font-black text-white mb-6 tracking-tight leading-tight"
        >
          SET YOUR GOALS.<br />SECA TU SUDOR.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg sm:text-xl text-zinc-200 mb-12 max-w-3xl mx-auto font-light leading-relaxed"
        >
          Toallas deportivas de microfibra premium: ultra absorbentes, compactas y antibacterianas. Diseñadas para el rendimiento.
        </motion.p>

        <motion.button
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-black text-white px-12 py-4 font-bold text-sm tracking-wider hover:bg-zinc-800 transition-colors"
        >
          VER COLECCIÓN
        </motion.button>
      </div>
    </section>
  );
}
