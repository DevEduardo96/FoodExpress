import React from 'react';
import { useParams } from 'react-router-dom';
import { Star, Clock, Plus } from 'lucide-react';
import { useCartStore } from '../store/cartStore';

const menuCategories = [
  {
    name: "Popular Items",
    items: [
      {
        id: 1,
        name: "Classic Burger",
        price: 15.99,
        description: "Juicy beef patty with fresh lettuce, tomato, and special sauce",
        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80"
      },
      {
        id: 2,
        name: "Cheese Fries",
        price: 8.99,
        description: "Crispy fries topped with melted cheese and bacon bits",
        image: "https://images.unsplash.com/photo-1585109649139-366815a0d713?auto=format&fit=crop&w=800&q=80"
      }
    ]
  },
  {
    name: "Main Dishes",
    items: [
      {
        id: 3,
        name: "Grilled Chicken",
        price: 18.99,
        description: "Herb-marinated chicken breast with roasted vegetables",
        image: "https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&w=800&q=80"
      }
    ]
  }
];

export default function RestaurantMenu() {
  const { id } = useParams();
  const { addToCart } = useCartStore();
  const restaurantId = parseInt(id || '1');

  const handleAddToCart = async (item: any) => {
    await addToCart({
      restaurant_id: restaurantId,
      item_id: item.id,
      name: item.name,
      price: item.price,
      quantity: 1
    });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Restaurant Header */}
      <div className="relative h-64 -mx-4 sm:-mx-6 lg:-mx-8 mb-8">
        <img
          src="https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?auto=format&fit=crop&w=2000&q=80"
          alt="Restaurant cover"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <h1 className="text-3xl font-bold text-white mb-2">Burger House</h1>
          <div className="flex items-center space-x-4 text-white">
            <div className="flex items-center">
              <Star className="text-yellow-400" size={20} />
              <span className="ml-1">4.5</span>
            </div>
            <div className="flex items-center">
              <Clock size={20} />
              <span className="ml-1">25-35 min</span>
            </div>
            <span>Minimum order: $15</span>
          </div>
        </div>
      </div>

      {/* Menu Categories */}
      <div className="space-y-8">
        {menuCategories.map((category) => (
          <div key={category.name}>
            <h2 className="text-2xl font-semibold mb-4">{category.name}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {category.items.map((item) => (
                <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden flex">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-1/3 object-cover"
                  />
                  <div className="p-4 flex-1">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-lg font-semibold">{item.name}</h3>
                      <span className="text-orange-600 font-bold">${item.price}</span>
                    </div>
                    <p className="text-gray-600 text-sm mb-4">{item.description}</p>
                    <button
                      onClick={() => handleAddToCart(item)}
                      className="flex items-center space-x-1 bg-orange-600 text-white px-4 py-2 rounded-full hover:bg-orange-700 transition-colors"
                    >
                      <Plus size={16} />
                      <span>Add to Cart</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}