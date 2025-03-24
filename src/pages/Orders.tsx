import React from 'react';
import { Clock, MapPin } from 'lucide-react';

const orders = [
  {
    id: 1,
    restaurant: "Burger House",
    items: [
      { name: "Classic Burger", quantity: 2, price: 15.99 },
      { name: "Cheese Fries", quantity: 1, price: 8.99 }
    ],
    status: "Delivered",
    date: "March 15, 2024",
    total: 40.97
  },
  {
    id: 2,
    restaurant: "Pizza Palace",
    items: [
      { name: "Margherita Pizza", quantity: 1, price: 18.99 },
      { name: "Garlic Bread", quantity: 1, price: 5.99 }
    ],
    status: "In Progress",
    date: "March 14, 2024",
    total: 24.98
  }
];

export default function Orders() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold mb-8">My Orders</h1>

      <div className="space-y-6">
        {orders.map((order) => (
          <div key={order.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h2 className="text-xl font-semibold">{order.restaurant}</h2>
                  <div className="flex items-center text-gray-600 mt-1">
                    <Clock size={16} className="mr-1" />
                    <span>{order.date}</span>
                  </div>
                </div>
                <div className={`px-3 py-1 rounded-full text-sm font-medium ${
                  order.status === 'Delivered' ? 'bg-green-100 text-green-800' : 'bg-orange-100 text-orange-800'
                }`}>
                  {order.status}
                </div>
              </div>

              <div className="border-t border-b py-4 mb-4">
                {order.items.map((item, index) => (
                  <div key={index} className="flex justify-between items-center mb-2">
                    <div>
                      <span className="font-medium">{item.quantity}x</span> {item.name}
                    </div>
                    <span>${(item.price * item.quantity).toFixed(2)}</span>
                  </div>
                ))}
              </div>

              <div className="flex justify-between items-center">
                <span className="font-semibold">Total</span>
                <span className="font-bold text-lg">${order.total.toFixed(2)}</span>
              </div>

              <button className="w-full mt-4 bg-orange-600 text-white py-2 rounded-lg hover:bg-orange-700 transition-colors">
                Reorder
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}