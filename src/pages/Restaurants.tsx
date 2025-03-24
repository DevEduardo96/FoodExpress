import React from 'react';
import { Link } from 'react-router-dom';
import { Star, Clock } from 'lucide-react';

const restaurants = [
  {
    id: 1,
    name: "Burger House",
    image: "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?auto=format&fit=crop&w=800&q=80",
    cuisine: "American",
    rating: 4.5,
    deliveryTime: "25-35",
    minOrder: 15
  },
  {
    id: 2,
    name: "Pizza Palace",
    image: "https://images.unsplash.com/photo-1579751626657-72bc17010498?auto=format&fit=crop&w=800&q=80",
    cuisine: "Italian",
    rating: 4.7,
    deliveryTime: "30-45",
    minOrder: 20
  },
  {
    id: 3,
    name: "Sushi Master",
    image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=800&q=80",
    cuisine: "Japanese",
    rating: 4.8,
    deliveryTime: "35-50",
    minOrder: 25
  }
];

export default function Restaurants() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold mb-8">Restaurants</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {restaurants.map((restaurant) => (
          <Link
            key={restaurant.id}
            to={`/restaurant/${restaurant.id}`}
            className="block bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
          >
            <div className="relative h-48">
              <img
                src={restaurant.image}
                alt={restaurant.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
                <h3 className="text-xl font-semibold text-white">{restaurant.name}</h3>
                <p className="text-white opacity-90">{restaurant.cuisine}</p>
              </div>
            </div>
            <div className="p-4">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center">
                  <Star className="text-yellow-400" size={20} />
                  <span className="ml-1 font-medium">{restaurant.rating}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Clock size={20} />
                  <span className="ml-1">{restaurant.deliveryTime} min</span>
                </div>
              </div>
              <p className="text-sm text-gray-600">
                Minimum order: ${restaurant.minOrder}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}