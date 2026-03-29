import { ShoppingCart } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';


const products = [
  {
    id: 1,
    name: 'Toalla Beige Dream',
    price: '40',
    image: 'https://i.imghippo.com/files/o2531SeM.png',
    color: 'Beige claro',
  },
  {
    id: 2,
    name: 'Toalla Blue Sky',
    price: '40',
    image: 'https://i.imghippo.com/files/gMh4923EEc.png',
    color: 'Azul cielo',
  },
  {
    id: 3,
    name: 'Toalla Dark Black',
    price: '40',
    image: 'https://i.imghippo.com/files/YHUz8229YHI.png',
    color: 'Negro puro',
  },
  {
    id: 4,
    name: 'Toalla Pink Energy',
    price: '40',
    image: 'https://i.imghippo.com/files/aIup5252Huw.png',
    color: 'Rosa palido',
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
          Cuatro colores esenciales para tu estilo de vida activo
        </motion.p>

        <div className="relative group">
          {/* Contenedor del Carrusel */}
          <div className="flex overflow-x-auto snap-x snap-mandatory gap-8 no-scrollbar pb-10 scroll-smooth">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="min-w-[80%] md:min-w-[calc(40%-2rem)] snap-start bg-white group/item hover:shadow-2xl transition-shadow duration-300 flex-shrink-0"
              >
                {/* --- NUEVO TAMAÑO DE IMAGEN (Mediano-Grande) --- */}
                {/* 'h-72 md:h-96' sube la altura para que la toalla se aprecie bien */}
                <div className="w-full h-72 md:h-96 flex-shrink-0 overflow-hidden bg-zinc-100">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>

                {/* --- TEXTO Y BOTÓN AJUSTADOS --- */}
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-1.5 tracking-tight">{product.name}</h3>
                  <p className="text-zinc-600 text-sm md:text-base mb-5 font-light">{product.color}</p>

                  {/* Precio y Botón */}
                  <div className="flex items-center justify-between">
                    <span className="text-3xl md:text-4xl font-black">S/.{product.price}</span>

                    {/* Botón AÑADIR (He mantenido el botón elegante, solo he subido un poco el texto) */}
                    <button className="bg-black text-white px-5 md:px-6 py-3 font-bold text-xs tracking-[0.2em] hover:bg-zinc-800 transition-colors flex items-center gap-2">
                      <ShoppingCart className="w-4 h-4 md:w-5 md:h-5 text-white" strokeWidth={2.5} />
                      <span>AÑADIR</span>
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
