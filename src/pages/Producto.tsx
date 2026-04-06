import React from "react";
import Header from "../components/Header";

const Product = () => {
  return (
    <div>
      <Header />
    <div className="min-h-screen bg-white text-gray-800">
      {/* HERO */}
      <section className="text-center py-20 px-6">
        <h1 className="text-5xl font-bold mb-4">
          Toalla de Microfibra Premium
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Diseñada para quienes buscan rendimiento, comodidad y estilo en su vida activa.
        </p>
      </section>

      {/* IMAGEN + INFO */}
      <section className="grid md:grid-cols-2 gap-10 px-10 py-16 items-center">
        <img
          src="/product.jpg"
          alt="Producto"
          className="rounded-2xl shadow-lg"
        />

        <div>
          <h2 className="text-3xl font-semibold mb-4">
            Rendimiento superior
          </h2>
          <p className="text-gray-600 mb-6">
            Nuestra toalla de microfibra absorbe hasta 5 veces más rápido que una
            toalla tradicional, permitiéndote mantenerte seco en menos tiempo.
          </p>

          <ul className="space-y-3">
            <li>✔ Secado ultra rápido</li>
            <li>✔ Antibacteriana</li>
            <li>✔ Compacta y ligera</li>
            <li>✔ Resistente a +500 lavados</li>
          </ul>

          <button className="mt-8 bg-black text-white px-6 py-3 rounded-xl hover:bg-gray-800 transition">
            Comprar ahora
          </button>
        </div>
      </section>

      {/* BENEFICIOS */}
      <section className="bg-gray-100 py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-10">
          ¿Por qué elegirla?
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="font-semibold text-xl mb-2">
              Tecnología avanzada
            </h3>
            <p className="text-gray-600">
              Microfibra de última generación que mejora absorción y durabilidad.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="font-semibold text-xl mb-2">
              Ideal para viajes
            </h3>
            <p className="text-gray-600">
              Ocupa poco espacio y pesa casi nada.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="font-semibold text-xl mb-2">
              Diseño moderno
            </h3>
            <p className="text-gray-600">
              Colores elegantes que combinan con tu estilo.
            </p>
          </div>
        </div>
      </section>
    </div>
    </div>
  );
};

export default Product;