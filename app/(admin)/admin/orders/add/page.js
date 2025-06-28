'use client';
import React, { useState } from 'react';

const AddOrderPage = () => {
    const [orderType, setOrderType] = useState('delivery');
    const [orderStatus, setOrderStatus] = useState('pending');
    const [items, setItems] = useState([
        { id: 1, name: 'Margherita Pizza', price: 12.99, quantity: 1 },
        { id: 2, name: 'Caesar Salad', price: 8.99, quantity: 1 }
    ]);
    const [customerName, setCustomerName] = useState('');

    // Sample products for adding to order
    const products = [
        { id: 1, name: 'Margherita Pizza', price: 12.99 },
        { id: 2, name: 'Pepperoni Pizza', price: 14.99 },
        { id: 3, name: 'Caesar Salad', price: 8.99 },
        { id: 4, name: 'Chicken Burger', price: 10.99 },
        { id: 5, name: 'Vegetable Pasta', price: 11.99 },
        { id: 6, name: 'Chocolate Cake', price: 6.99 },
        { id: 7, name: 'Iced Coffee', price: 4.50 },
        { id: 8, name: 'Mineral Water', price: 2.50 }
    ];

    // Calculate total price
    const totalPrice = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    // Add new item to order
    const addItem = () => {
        const newItem = {
            id: items.length + 1,
            name: products[0].name,
            price: products[0].price,
            quantity: 1
        };
        setItems([...items, newItem]);
    };

    // Update item quantity
    const updateQuantity = (id, quantity) => {
        if (quantity < 1) return;

        setItems(items.map(item =>
            item.id === id ? { ...item, quantity } : item
        ));
    };

    // Remove item from order
    const removeItem = (id) => {
        setItems(items.filter(item => item.id !== id));
    };

    // Handle product selection for an item
    const handleProductChange = (id, productId) => {
        const product = products.find(p => p.id === parseInt(productId));
        if (product) {
            setItems(items.map(item =>
                item.id === id ? { ...item, name: product.name, price: product.price } : item
            ));
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 py-8 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-10">
                    <h1 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
                        Create New Order
                    </h1>
                    <p className="mt-3 text-lg text-gray-600 dark:text-gray-300">
                        Add customer details and order items to create a new order
                    </p>
                </div>

                <div className="bg-white dark:bg-gray-800 shadow-xl rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-2xl">
                    <div className="p-6 sm:p-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {/* Left Column - Customer Details */}
                            <div>
                                <div className="mb-10">
                                    <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 pb-2 border-b border-gray-200 dark:border-gray-700">
                                        Customer Information
                                    </h2>

                                    {/* Order Type */}
                                    <div className="mb-8">
                                        <label className="block text-lg font-medium text-gray-900 dark:text-white mb-3">
                                            Order Type
                                        </label>
                                        <div className="flex space-x-4">
                                            <button
                                                type="button"
                                                onClick={() => setOrderType('delivery')}
                                                className={`flex-1 py-3 px-4 rounded-xl text-center font-medium transition-all duration-300 ${orderType === 'delivery'
                                                    ? 'bg-indigo-600 text-white shadow-md'
                                                    : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                                                    }`}
                                            >
                                                <div className="flex items-center justify-center">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                                                        <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                                                        <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1v-1h4.05a2.5 2.5 0 014.9 0H20a1 1 0 001-1v-5a1 1 0 00-.293-.707l-4-4A1 1 0 0016 4H3z" />
                                                    </svg>
                                                    Delivery
                                                </div>
                                            </button>
                                            <button
                                                type="button"
                                                onClick={() => setOrderType('pickup')}
                                                className={`flex-1 py-3 px-4 rounded-xl text-center font-medium transition-all duration-300 ${orderType === 'pickup'
                                                    ? 'bg-indigo-600 text-white shadow-md'
                                                    : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                                                    }`}
                                            >
                                                <div className="flex items-center justify-center">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                                                    </svg>
                                                    Pickup
                                                </div>
                                            </button>
                                        </div>
                                    </div>

                                    {/* Customer Name */}
                                    <div className="mb-8">
                                        <label
                                            htmlFor="customerName"
                                            className="block text-lg font-medium text-gray-900 dark:text-white mb-3"
                                        >
                                            Customer Name
                                        </label>
                                        <input
                                            type="text"
                                            id="customerName"
                                            value={customerName}
                                            onChange={(e) => setCustomerName(e.target.value)}
                                            className="w-full px-4 py-3 text-lg bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:focus:ring-indigo-500 dark:focus:border-indigo-500 transition-colors"
                                            placeholder="Enter customer name"
                                        />
                                    </div>

                                    {/* Contact Information */}
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                                        <div>
                                            <label
                                                htmlFor="phone"
                                                className="block text-lg font-medium text-gray-900 dark:text-white mb-3"
                                            >
                                                Phone Number
                                            </label>
                                            <input
                                                type="tel"
                                                id="phone"
                                                className="w-full px-4 py-3 text-lg bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:focus:ring-indigo-500 dark:focus:border-indigo-500 transition-colors"
                                                placeholder="(123) 456-7890"
                                            />
                                        </div>
                                        <div>
                                            <label
                                                htmlFor="email"
                                                className="block text-lg font-medium text-gray-900 dark:text-white mb-3"
                                            >
                                                Email (Optional)
                                            </label>
                                            <input
                                                type="email"
                                                id="email"
                                                className="w-full px-4 py-3 text-lg bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:focus:ring-indigo-500 dark:focus:border-indigo-500 transition-colors"
                                                placeholder="customer@example.com"
                                            />
                                        </div>
                                    </div>

                                    {/* Address - only show for delivery */}
                                    {orderType === 'delivery' && (
                                        <div className="mb-8">
                                            <label
                                                htmlFor="address"
                                                className="block text-lg font-medium text-gray-900 dark:text-white mb-3"
                                            >
                                                Delivery Address
                                            </label>
                                            <textarea
                                                id="address"
                                                rows={3}
                                                className="w-full px-4 py-3 text-lg bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:focus:ring-indigo-500 dark:focus:border-indigo-500 transition-colors"
                                                placeholder="Street address, city, zip code"
                                            ></textarea>
                                        </div>
                                    )}

                                    {/* Order Notes */}
                                    <div className="mb-8">
                                        <label
                                            htmlFor="notes"
                                            className="block text-lg font-medium text-gray-900 dark:text-white mb-3"
                                        >
                                            Order Notes
                                        </label>
                                        <textarea
                                            id="notes"
                                            rows={2}
                                            className="w-full px-4 py-3 text-lg bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:focus:ring-indigo-500 dark:focus:border-indigo-500 transition-colors"
                                            placeholder="Special instructions, allergies, etc."
                                        ></textarea>
                                    </div>
                                </div>
                            </div>

                            {/* Right Column - Order Items */}
                            <div>
                                <div className="mb-10">
                                    <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 pb-2 border-b border-gray-200 dark:border-gray-7flex items-center justify-between">
                                        <span>Order Items</span>
                                        <button
                                            type="button"
                                            onClick={addItem}
                                            className="text-sm font-medium text-indigo-600 dark:text-indigo-400 hover:text-indigo-500 dark:hover:text-indigo-300 flex items-center"
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" />
                                            </svg>
                                            Add Item
                                        </button>
                                    </h2>

                                    {/* Order Items List */}
                                    <div className="space-y-6 mb-8">
                                        {items.map((item) => (
                                            <div key={item.id} className="flex items-start p-4 bg-gray-50 dark:bg-gray-700/50 rounded-xl transition-all duration-300 hover:bg-gray-100 dark:hover:bg-gray-700">
                                                <div className="flex-1">
                                                    <div className="mb-2">
                                                        <select
                                                            value={item.id}
                                                            onChange={(e) => handleProductChange(item.id, e.target.value)}
                                                            className="w-full px-3 py-2 text-base bg-white dark:bg-gray-600 border border-gray-300 dark:border-gray-500 rounded-lg focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 dark:focus:ring-indigo-500 dark:focus:border-indigo-500 transition-colors"
                                                        >
                                                            {products.map((product) => (
                                                                <option key={product.id} value={product.id}>
                                                                    {product.name} - ${product.price.toFixed(2)}
                                                                </option>
                                                            ))}
                                                        </select>
                                                    </div>

                                                    <div className="flex items-center space-x-4">
                                                        <div className="flex items-center">
                                                            <button
                                                                type="button"
                                                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                                className="p-1.5 rounded-lg bg-gray-200 dark:bg-gray-600 hover:bg-gray-300 dark:hover:bg-gray-500"
                                                            >
                                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                                                    <path fillRule="evenodd" d="M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z" clipRule="evenodd" />
                                                                </svg>
                                                            </button>
                                                            <span className="mx-3 font-medium">{item.quantity}</span>
                                                            <button
                                                                type="button"
                                                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                                className="p-1.5 rounded-lg bg-gray-200 dark:bg-gray-600 hover:bg-gray-300 dark:hover:bg-gray-500"
                                                            >
                                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                                                    <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" />
                                                                </svg>
                                                            </button>
                                                        </div>
                                                        <div className="font-medium text-indigo-600 dark:text-indigo-400">
                                                            ${(item.price * item.quantity).toFixed(2)}
                                                        </div>
                                                        <button
                                                            type="button"
                                                            onClick={() => removeItem(item.id)}
                                                            className="ml-auto p-1.5 text-red-500 hover:bg-red-50 dark:hover:bg-red-900/30 rounded-lg"
                                                        >
                                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                                <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                                                            </svg>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Order Summary */}
                                    <div className="bg-gray-50 dark:bg-gray-700/50 rounded-xl p-6 mb-8">
                                        <div className="flex justify-between mb-3">
                                            <span className="text-gray-600 dark:text-gray-300">Subtotal</span>
                                            <span className="font-medium">${totalPrice.toFixed(2)}</span>
                                        </div>
                                        {orderType === 'delivery' && (
                                            <div className="flex justify-between mb-3">
                                                <span className="text-gray-600 dark:text-gray-300">Delivery Fee</span>
                                                <span className="font-medium">$3.99</span>
                                            </div>
                                        )}
                                        <div className="flex justify-between mb-3">
                                            <span className="text-gray-600 dark:text-gray-300">Tax (8.5%)</span>
                                            <span className="font-medium">${(totalPrice * 0.085).toFixed(2)}</span>
                                        </div>
                                        <div className="flex justify-between pt-4 mt-4 border-t border-gray-200 dark:border-gray-600">
                                            <span className="text-lg font-semibold text-gray-900 dark:text-white">Total</span>
                                            <span className="text-xl font-bold text-indigo-600 dark:text-indigo-400">
                                                ${orderType === 'delivery' ? (totalPrice + 3.99 + (totalPrice * 0.085)).toFixed(2) : (totalPrice + (totalPrice * 0.085)).toFixed(2)}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Order Status */}
                                    <div className="mb-8">
                                        <label
                                            htmlFor="status"
                                            className="block text-lg font-medium text-gray-900 dark:text-white mb-3"
                                        >
                                            Order Status
                                        </label>
                                        <div className="relative">
                                            <select
                                                id="status"
                                                value={orderStatus}
                                                onChange={(e) => setOrderStatus(e.target.value)}
                                                className="w-full px-4 py-3 text-lg bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:focus:ring-indigo-500 dark:focus:border-indigo-500 transition-colors appearance-none pr-10"
                                            >
                                                <option value="pending">Pending</option>
                                                <option value="preparing">Preparing</option>
                                                <option value="ready">Ready for Pickup</option>
                                                <option value="onTheWay">On the Way (Delivery)</option>
                                                <option value="completed">Completed</option>
                                                <option value="cancelled">Cancelled</option>
                                            </select>
                                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-700 dark:text-gray-300">
                                                <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
                            <button
                                type="button"
                                className="px-6 py-3.5 text-lg font-semibold bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white rounded-xl shadow-sm transition-all duration-300 transform hover:-translate-y-0.5 dark:focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 flex-1 text-center flex items-center justify-center"
                            >
                                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                </svg>
                                Create Order
                            </button>
                            <button
                                type="button"
                                className="px-6 py-3.5 text-lg font-semibold bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white rounded-xl shadow-sm hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors duration-300 flex-1"
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>

                <div className="mt-8 text-center text-gray-500 dark:text-gray-400 text-sm">
                    <p>Orders will appear in the system immediately after creation</p>
                </div>
            </div>
        </div>
    );
};

export default AddOrderPage;