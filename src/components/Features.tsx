import { Zap, Feather, Shield, Award } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const features = [
  {
    icon: Zap,
    title: 'Secado Ultra Rápido',
    description: 'La tecnología de microfibra avanzada absorbe el agua 5 veces más rápido que las toallas tradicionales.',
  },
  {
    icon: Feather,
    title: 'Compacta y Ligera',
    description: 'Plegable al tamaño de tu mano, perfecta para tu bolsa de gimnasio o mochila de viaje.',
  },
  {
    icon: Shield,
    title: 'Tecnología Antibacteriana',
    description: 'Tratamiento antimicrobiano integrado que previene olores y mantiene la frescura por más tiempo.',
  },
  {
    icon: Award,
    title: 'Hecha para Durar',
    description: 'Construcción premium resistente a más de 500 lavados sin perder su capacidad de absorción.',
  },
];

export default function Features() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="características" className="py-24 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl font-black text-center mb-4 tracking-tight"
        >
          RENDIMIENTO SUPERIOR
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-zinc-600 text-center mb-16 text-lg font-light"
        >
          Diseñadas para atletas que exigen lo mejor
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center group"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 mb-6 bg-black text-white group-hover:bg-zinc-800 transition-colors">
                <feature.icon className="w-8 h-8" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold mb-3 tracking-tight">{feature.title}</h3>
              <p className="text-zinc-600 font-light leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
