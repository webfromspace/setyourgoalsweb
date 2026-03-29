import { ShoppingCart } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const products = [
  {
    id: 1,
    name: 'Toalla Onyx Black',
    price: '29.99',
    image: 'https://images.pexels.com/photos/7319071/pexels-photo-7319071.jpeg?auto=compress&cs=tinysrgb&w=800',
    color: 'Negro Profundo',
  },
  {
    id: 2,
    name: 'Toalla Storm Grey',
    price: '29.99',
    image: 'https://images.pexels.com/photos/6551415/pexels-photo-6551415.jpeg?auto=compress&cs=tinysrgb&w=800',
    color: 'Gris Carbón',
  },
  {
    id: 3,
    name: 'Toalla Arctic White',
    price: '29.99',
    image: 'https://images.pexels.com/photos/7319326/pexels-photo-7319326.jpeg?auto=compress&cs=tinysrgb&w=800',
    color: 'Blanco Puro',
  },
];

export default function Products() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="tienda" className="py-24 bg-zinc-50" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl font-black text-center mb-4 tracking-tight"
        >
          LA SERIE BÁSICA
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-zinc-600 text-center mb-16 text-lg font-light"
        >
          Tres colores esenciales para tu estilo de vida activo
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white group hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="aspect-square overflow-hidden bg-zinc-100">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 tracking-tight">{product.name}</h3>
                <p className="text-zinc-600 text-sm mb-4 font-light">{product.color}</p>
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-black">${product.price}</span>
                  <button className="bg-black text-white px-6 py-3 font-bold text-sm tracking-wider hover:bg-zinc-800 transition-colors flex items-center space-x-2">
                    <ShoppingCart className="w-4 h-4" />
                    <span>AÑADIR</span>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
