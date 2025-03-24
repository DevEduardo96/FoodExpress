import React from 'react';
import { User, MapPin, Clock, CreditCard } from 'lucide-react';

export default function Profile() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="bg-orange-600 px-6 py-8">
          <div className="flex items-center">
            <div className="h-20 w-20 rounded-full bg-white flex items-center justify-center">
              <User size={40} className="text-orange-600" />
            </div>
            <div className="ml-6">
              <h1 className="text-2xl font-bold text-white">John Doe</h1>
              <p className="text-orange-100">john.doe@example.com</p>
            </div>
          </div>
        </div>

        <div className="p-6">
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-semibold mb-4">Personal Information</h2>
              <div className="space-y-4">
                <div className="flex items-center">
                  <User className="text-gray-400" size={20} />
                  <span className="ml-3">John Doe</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="text-gray-400" size={20} />
                  <span className="ml-3">123 Main St, City, Country</span>
                </div>
                <div className="flex items-center">
                  <Clock className="text-gray-400" size={20} />
                  <span className="ml-3">Member since March 2024</span>
                </div>
              </div>
            </div>

            <div className="border-t pt-6">
              <h2 className="text-xl font-semibold mb-4">Payment Methods</h2>
              <div className="space-y-4">
                <div className="flex items-center">
                  <CreditCard className="text-gray-400" size={20} />
                  <span className="ml-3">•••• •••• •••• 1234</span>
                </div>
              </div>
            </div>

            <div className="border-t pt-6">
              <h2 className="text-xl font-semibold mb-4">Preferences</h2>
              <div className="space-y-4">
                <label className="flex items-center">
                  <input type="checkbox" className="mr-3" checked />
                  Email notifications for orders
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-3" checked />
                  SMS notifications for delivery updates
                </label>
              </div>
            </div>

            <button className="w-full bg-orange-600 text-white py-3 rounded-lg hover:bg-orange-700 transition-colors">
              Edit Profile
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}