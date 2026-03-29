import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Send } from 'lucide-react';

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contacto" className="py-24 bg-white" ref={ref}>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl font-black text-center mb-4 tracking-tight"
        >
          CONTÁCTANOS
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-zinc-600 text-center mb-16 text-lg font-light"
        >
          ¿Tienes preguntas? Estamos aquí para ayudarte
        </motion.p>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          onSubmit={handleSubmit}
          className="space-y-6"
        >
          <div>
            <label htmlFor="name" className="block text-sm font-bold mb-2 tracking-wide">
              NOMBRE
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border-2 border-zinc-200 focus:border-black outline-none transition-colors font-light"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-bold mb-2 tracking-wide">
              EMAIL
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border-2 border-zinc-200 focus:border-black outline-none transition-colors font-light"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-bold mb-2 tracking-wide">
              MENSAJE
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={6}
              className="w-full px-4 py-3 border-2 border-zinc-200 focus:border-black outline-none transition-colors font-light resize-none"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-black text-white px-8 py-4 font-bold text-sm tracking-wider hover:bg-zinc-800 transition-colors flex items-center justify-center space-x-2"
          >
            <span>ENVIAR MENSAJE</span>
            <Send className="w-4 h-4" />
          </button>
        </motion.form>
      </div>
    </section>
  );
}
