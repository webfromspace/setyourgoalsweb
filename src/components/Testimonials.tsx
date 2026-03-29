import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    quote: 'La mejor toalla que he usado. Seca instantáneamente y ocupa casi nada en mi bolsa. No entreno sin ella.',
    author: 'MARCO SILVA',
    role: 'Atleta CrossFit',
  },
  {
    id: 2,
    quote: 'Después de años probando toallas, SET es la única que realmente cumple. Cero olor, secado rápido, perfecta.',
    author: 'ANA LÓPEZ',
    role: 'Maratonista',
  },
  {
    id: 3,
    quote: 'Calidad premium que se nota desde el primer uso. Es compacta pero absorbe más que cualquier toalla grande.',
    author: 'DAVID TORRES',
    role: 'Entrenador Personal',
  },
];

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="py-24 bg-black text-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl font-black text-center mb-4 tracking-tight"
        >
          ATLETAS SET
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-zinc-400 text-center mb-16 text-lg font-light"
        >
          Lo que dicen los que exigen lo mejor
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-zinc-900 p-8 hover:bg-zinc-800 transition-colors"
            >
              <Quote className="w-10 h-10 mb-6 text-zinc-600" />
              <p className="text-lg font-light leading-relaxed mb-6">"{testimonial.quote}"</p>
              <div>
                <p className="font-bold text-sm tracking-wider">{testimonial.author}</p>
                <p className="text-zinc-500 text-sm font-light">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
