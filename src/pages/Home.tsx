import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function Home() {
  const features = [
    {
      title: "Fast Delivery",
      description: "Get your food delivered in 30 minutes or less",
      image: "https://images.unsplash.com/photo-1621510456681-2330135ff585?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Local Restaurants",
      description: "Support your favorite local restaurants",
      image: "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Easy Ordering",
      description: "Order with just a few clicks",
      image: "https://images.unsplash.com/photo-1493770348161-369560ae357d?auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-[600px]">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=2000&q=80"
            alt="Food delivery"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Comida Deliciosa<br />Entregue à Sua Porta
            </h1>
            <p className="text-xl mb-8 max-w-2xl">
            Encomende de seus restaurantes favoritos e receba comida diretamente à sua porta.
            </p>
            <Link
              to="/restaurants"
              className="inline-flex items-center px-6 py-3 text-lg font-medium rounded-full bg-orange-600 hover:bg-orange-700 transition-colors"
            >
              Novo Pedido
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Por que escolher o FoodExpress?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}