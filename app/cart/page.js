// app/cart/page.jsx
'use client';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

const CartPage = () => {
  const [deliveryMethod, setDeliveryMethod] = useState('delivery');
  const [selectedBranch, setSelectedBranch] = useState(null);
  const router = useRouter();

  // Cart items data
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Truffle Arancini",
      description: "Crispy risotto balls with black truffle and mozzarella",
      price: 12,
      quantity: 2,
      image: "/arancini.jpg"
    },
    {
      id: 2,
      name: "Filet Mignon",
      description: "8oz grass-fed beef with roasted garlic mashed potatoes",
      price: 36,
      quantity: 1,
      image: "/filet-mignon.jpg"
    },
    {
      id: 3,
      name: "Chocolate Soufflé",
      description: "Warm chocolate soufflé with vanilla bean ice cream",
      price: 14,
      quantity: 1,
      image: "/souffle.jpg"
    }
  ]);

  // Branch data (same as location page)
  const branches = [
    {
      id: 1,
      name: "Karachi Downtown",
      city: "Karachi",
      location: "Main Clifton Road, Block 3"
    },
    {
      id: 2,
      name: "Lahore Food Court",
      city: "Lahore",
      location: "Liberty Market, Gulberg"
    },
    {
      id: 3,
      name: "Islamabad Central",
      city: "Islamabad",
      location: "Blue Area, Sector F-7"
    }
  ];

  // Calculate subtotal
  const subtotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);

  // Calculate tax (10%)
  const tax = subtotal * 0.1;

  // Delivery fee
  const deliveryFee = deliveryMethod === 'delivery' ? 5 : 0;

  // Total
  const total = subtotal + tax + deliveryFee;

  // Update quantity
  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return;

    setCartItems(cartItems.map(item =>
      item.id === id ? { ...item, quantity: newQuantity } : item
    ));
  };

  // Remove item
  const removeItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  return (
    <div className="min-h-screen transition-colors duration-300 bg-gradient-to-br from-amber-50 to-white text-gray-900 dark:bg-gradient-to-br dark:from-gray-900 dark:to-gray-800 dark:text-white">
      {/* Hero Section */}
      <section className="py-28 md:py-28 px-4 md:px-8 bg-gradient-to-r from-red-700 to-amber-600 dark:bg-gradient-to-r dark:from-gray-800 dark:to-gray-900">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white dark:text-amber-300">
            Your Cart
          </h1>
          <p className="text-xl max-w-2xl mx-auto text-amber-100 dark:text-gray-300">
            Review your delicious selections before checkout
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Cart Items */}
          <div className="w-full lg:w-7/12">
            {/* Delivery Method */}
            <div className="mb-8 p-6 rounded-2xl shadow-xl bg-gradient-to-br from-white to-amber-50 border border-amber-100 dark:bg-gradient-to-br dark:from-gray-800 dark:to-gray-900 dark:border dark:border-gray-700">
              <h2 className="text-2xl font-bold mb-4 text-red-800 dark:text-amber-400">
                Delivery Method
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <button
                  onClick={() => setDeliveryMethod('delivery')}
                  className={`p-6 rounded-xl text-left transition-all ${deliveryMethod === 'delivery'
                      ? 'bg-red-100 border-2 border-red-600 dark:bg-amber-900 dark:border-2 dark:border-amber-500'
                      : 'bg-amber-50 border border-amber-200 dark:bg-gray-700 dark:border dark:border-gray-600'
                    }`}
                >
                  <div className="flex items-center">
                    <div className="p-3 rounded-xl mr-4 bg-red-200 dark:bg-amber-800">
                      <svg className="w-6 h-6 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">Home Delivery</h3>
                      <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                        Delivered to your doorstep
                      </p>
                    </div>
                  </div>
                </button>

                <button
                  onClick={() => setDeliveryMethod('pickup')}
                  className={`p-6 rounded-xl text-left transition-all ${deliveryMethod === 'pickup'
                      ? 'bg-red-100 border-2 border-red-600 dark:bg-amber-900 dark:border-2 dark:border-amber-500'
                      : 'bg-amber-50 border border-amber-200 dark:bg-gray-700 dark:border dark:border-gray-600'
                    }`}
                >
                  <div className="flex items-center">
                    <div className="p-3 rounded-xl mr-4 bg-red-200 dark:bg-amber-800">
                      <svg className="w-6 h-6 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path>
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">Pickup</h3>
                      <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                        Pick up from our branch
                      </p>
                    </div>
                  </div>
                </button>
              </div>

              {/* Branch Selector (only for pickup) */}
              {deliveryMethod === 'pickup' && (
                <div className="mt-6">
                  <label className="block text-sm font-medium mb-2 text-red-800 dark:text-amber-300">
                    Select Branch for Pickup
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {branches.map(branch => (
                      <div
                        key={branch.id}
                        onClick={() => setSelectedBranch(branch.id)}
                        className={`p-4 rounded-xl cursor-pointer transition-all ${selectedBranch === branch.id
                            ? 'bg-red-100 border-2 border-red-600 dark:bg-amber-800 dark:border-2 dark:border-amber-500'
                            : 'bg-amber-50 border border-amber-200 dark:bg-gray-700 dark:border dark:border-gray-600'
                          }`}
                      >
                        <h3 className="font-bold">{branch.name}</h3>
                        <p className="text-sm mt-1 text-gray-600 dark:text-gray-400">
                          {branch.location}, {branch.city}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Cart Items */}
            <div className="p-6 rounded-2xl shadow-xl bg-gradient-to-br from-white to-amber-50 border border-amber-100 dark:bg-gradient-to-br dark:from-gray-800 dark:to-gray-900 dark:border dark:border-gray-700">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-red-800 dark:text-amber-400">
                  Your Order
                </h2>
                <span className="px-3 py-1 rounded-full bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-300">
                  {cartItems.length} {cartItems.length === 1 ? 'item' : 'items'}
                </span>
              </div>

              {cartItems.length === 0 ? (
                <div className="text-center py-12">
                  <div className="mb-4">
                    <svg className="w-16 h-16 mx-auto text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-medium mb-2">Your cart is empty</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Add delicious items from our menu
                  </p>
                  <button className="mt-4 py-2 px-6 rounded-lg font-medium transition-colors bg-red-600 hover:bg-red-700 text-white dark:bg-amber-700 dark:hover:bg-amber-600">
                    View Menu
                  </button>
                </div>
              ) : (
                <div className="space-y-6">
                  {cartItems.map(item => (
                    <div key={item.id} className="flex items-start border-b pb-6 border-amber-100 dark:border-gray-700">
                      {/* Item Image */}
                      <div className="w-24 h-24 rounded-xl overflow-hidden mr-4 flex-shrink-0 bg-amber-100 dark:bg-gray-700">
                        <div className="w-full h-full flex items-center justify-center">
                          <div className="text-center">
                            <div className="text-2xl mb-1">🍔</div>
                            <p className="text-xs">Item Image</p>
                          </div>
                        </div>
                      </div>

                      {/* Item Details */}
                      <div className="flex-grow">
                        <div className="flex justify-between">
                          <div>
                            <h3 className="font-bold text-lg">{item.name}</h3>
                            <p className="text-sm mt-1 text-gray-600 dark:text-gray-400">
                              {item.description}
                            </p>
                          </div>
                          <button
                            onClick={() => removeItem(item.id)}
                            className="p-2 rounded-full hover:bg-amber-100 dark:hover:bg-gray-700"
                          >
                            <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                            </svg>
                          </button>
                        </div>

                        <div className="flex justify-between items-center mt-4">
                          <div className="font-bold text-red-700 dark:text-amber-400">
                            ${(item.price * item.quantity).toFixed(2)}
                          </div>

                          {/* Quantity Adjuster */}
                          <div className="flex items-center">
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="w-8 h-8 flex items-center justify-center rounded-l-lg bg-amber-100 hover:bg-amber-200 dark:bg-gray-700 dark:hover:bg-gray-600"
                            >
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 12H4"></path>
                              </svg>
                            </button>
                            <span className="w-10 h-8 flex items-center justify-center bg-amber-50 border-y border-amber-200 dark:bg-gray-800 dark:border-y dark:border-gray-700">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="w-8 h-8 flex items-center justify-center rounded-r-lg bg-amber-100 hover:bg-amber-200 dark:bg-gray-700 dark:hover:bg-gray-600"
                            >
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                              </svg>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Order Summary */}
          <div className="w-full lg:w-5/12">
            <div className="sticky top-4 rounded-2xl overflow-hidden shadow-xl bg-gradient-to-br from-white to-amber-50 border border-amber-100 dark:bg-gradient-to-br dark:from-gray-800 dark:to-gray-900 dark:border dark:border-gray-700">
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-6 text-red-800 dark:text-amber-400">
                  Order Summary
                </h2>

                {/* Summary Details */}
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Tax (10%)</span>
                    <span>${tax.toFixed(2)}</span>
                  </div>

                  {deliveryMethod === 'delivery' && (
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Delivery Fee</span>
                      <span>${deliveryFee.toFixed(2)}</span>
                    </div>
                  )}

                  <div className="pt-4 border-t border-amber-100 dark:border-gray-700">
                    <div className="flex justify-between font-bold">
                      <span>Total</span>
                      <span className="text-xl text-red-700 dark:text-amber-400">
                        ${total.toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Checkout Button */}
                <button
                  disabled={cartItems.length === 0 || (deliveryMethod === 'pickup' && !selectedBranch)}
                  onClick={() => { router.push('/checkout') }}
                  className={`cursor-pointer w-full py-4 px-6 rounded-xl font-bold text-lg transition-all ${cartItems.length === 0 || (deliveryMethod === 'pickup' && !selectedBranch)
                      ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                      : 'bg-gradient-to-r from-red-700 to-red-600 hover:from-red-600 hover:to-red-500 text-white shadow-lg hover:shadow-xl dark:bg-gradient-to-r dark:from-amber-700 dark:to-amber-600 dark:hover:from-amber-600 dark:hover:to-amber-500'
                    }`}
                >
                  Proceed to Checkout
                </button>

                {/* Payment Options */}
                <div className="mt-6 pt-6 border-t border-amber-100 dark:border-gray-700">
                  <h3 className="font-medium mb-3 text-red-700 dark:text-amber-300">
                    We Accept
                  </h3>
                  <div className="flex justify-center gap-4">
                    <div className="p-3 rounded-xl bg-amber-100 dark:bg-gray-700">
                      <svg className="w-6 h-6 text-blue-500" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                    </div>
                    <div className="p-3 rounded-xl bg-amber-100 dark:bg-gray-700">
                      <svg className="w-6 h-6 text-yellow-500" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7 11H1v11h6V11zm9 4H8v7h8v-7zm9-8h-6v15h6V7z" />
                      </svg>
                    </div>
                    <div className="p-3 rounded-xl bg-amber-100 dark:bg-gray-700">
                      <svg className="w-6 h-6 text-purple-500" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm1 17h-2v-2h2v2zm0-4h-2l-.5-6h3l-.5 6z" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Order Notes */}
                <div className="mt-6">
                  <label className="block text-sm font-medium mb-2 text-red-800 dark:text-amber-300">
                    Special Instructions
                  </label>
                  <textarea
                    placeholder="Add any special requests or dietary restrictions..."
                    className="w-full p-4 rounded-xl border min-h-[100px] bg-amber-50 border-amber-200 text-gray-900 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  ></textarea>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Action Button */}
      <button
        className="fixed bottom-6 right-6 p-4 rounded-full shadow-lg transition-all transform hover:scale-110 z-10 bg-gradient-to-r from-red-700 to-red-600 text-white dark:bg-gradient-to-r dark:from-amber-700 dark:to-amber-600"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
        </svg>
      </button>
    </div>
  );
};

export default CartPage;