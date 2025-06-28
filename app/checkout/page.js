'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Checkout = () => {
    // Mock cart data
    const [cartItems] = useState([
        { id: 1, name: "Classic Cheeseburger", price: 12.99, quantity: 2, image: "/cheeseburger.webp" },
        { id: 2, name: "Crispy Fries", price: 4.99, quantity: 1, image: "/crispyfries.jpg" },
        { id: 3, name: "Chocolate Shake", price: 6.99, quantity: 1, image: "/chocolateshake.jpg" },
    ]);

    // Form state
    const [formData, setFormData] = useState({
        email: '',
        fullName: '',
        phone: '',
        orderType: 'delivery',
        city: '',
        sector: '',
        address: '',
        notes: '',
        paymentMethod: 'cod'
    });

    const [cities] = useState([
        { id: 1, name: "New York" },
        { id: 2, name: "Los Angeles" },
        { id: 3, name: "Chicago" },
        { id: 4, name: "Miami" },
    ]);

    const [sectors] = useState([
        { id: 1, cityId: 1, name: "Manhattan" },
        { id: 2, cityId: 1, name: "Brooklyn" },
        { id: 3, cityId: 1, name: "Queens" },
        { id: 4, cityId: 2, name: "Hollywood" },
        { id: 5, cityId: 2, name: "Beverly Hills" },
        { id: 6, cityId: 3, name: "Downtown" },
        { id: 7, cityId: 4, name: "South Beach" },
    ]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const tax = subtotal * 0.08;
    const deliveryFee = formData.orderType === 'delivery' ? 5.99 : 0;
    const total = subtotal + tax + deliveryFee;

    const filteredSectors = sectors.filter(sector =>
        formData.city ? sector.cityId === parseInt(formData.city) : false
    );

    return (
        <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white dark:from-gray-900 dark:to-gray-800 py-32 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-12"
                >
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-amber-400 mb-4">
                        Complete Your Order
                    </h1>
                    <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        Almost there! Please provide your details to complete your delicious order
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Order Summary */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 }}
                        className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 h-fit"
                    >
                        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6 pb-2 border-b border-gray-200 dark:border-gray-700">
                            Order Summary
                        </h2>

                        <div className="space-y-6 mb-8">
                            {cartItems.map(item => (
                                <div key={item.id} className="flex items-center justify-between">
                                    <div className="flex items-center space-x-4">
                                        <div className="relative w-16 h-16 rounded-lg overflow-hidden">
                                            <div className="bg-gray-200 dark:bg-gray-700 border-2 border-dashed rounded-xl w-full h-full" />
                                            <div className="absolute top-0 right-0 bg-amber-500 text-white text-xs font-bold rounded-bl-lg px-2 py-1">
                                                {item.quantity}
                                            </div>
                                        </div>
                                        <div>
                                            <h3 className="font-medium text-gray-900 dark:text-white">{item.name}</h3>
                                            <p className="text-amber-600 dark:text-amber-500 font-medium">
                                                ${item.price.toFixed(2)}
                                            </p>
                                        </div>
                                    </div>
                                    <p className="text-gray-900 dark:text-white font-bold">
                                        ${(item.price * item.quantity).toFixed(2)}
                                    </p>
                                </div>
                            ))}
                        </div>

                        <div className="space-y-3 pt-4 border-t border-gray-200 dark:border-gray-700">
                            <div className="flex justify-between">
                                <span className="text-gray-600 dark:text-gray-400">Subtotal</span>
                                <span className="text-gray-900 dark:text-white">${subtotal.toFixed(2)}</span>
                            </div>

                            <div className="flex justify-between">
                                <span className="text-gray-600 dark:text-gray-400">Tax (8%)</span>
                                <span className="text-gray-900 dark:text-white">${tax.toFixed(2)}</span>
                            </div>

                            {formData.orderType === 'delivery' && (
                                <div className="flex justify-between">
                                    <span className="text-gray-600 dark:text-gray-400">Delivery Fee</span>
                                    <span className="text-gray-900 dark:text-white">${deliveryFee.toFixed(2)}</span>
                                </div>
                            )}

                            <div className="flex justify-between pt-3 border-t border-gray-200 dark:border-gray-700">
                                <span className="text-lg font-bold text-gray-900 dark:text-white">Total</span>
                                <span className="text-xl font-bold text-amber-600 dark:text-amber-500">
                                    ${total.toFixed(2)}
                                </span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Checkout Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6"
                    >
                        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6 pb-2 border-b border-gray-200 dark:border-gray-700">
                            Customer Information
                        </h2>

                        <form className="space-y-6">
                            {/* Contact Info */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                        Email Address
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 dark:bg-gray-700 dark:text-white transition"
                                        required
                                    />
                                </div>

                                <div>
                                    <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                        Full Name
                                    </label>
                                    <input
                                        type="text"
                                        id="fullName"
                                        name="fullName"
                                        value={formData.fullName}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 dark:bg-gray-700 dark:text-white transition"
                                        required
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                    Phone Number
                                </label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 dark:bg-gray-700 dark:text-white transition"
                                    required
                                />
                            </div>

                            {/* Order Type */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                                    Order Type
                                </label>
                                <div className="grid grid-cols-2 gap-4">
                                    {['delivery', 'takeaway'].map(type => (
                                        <label
                                            key={type}
                                            className={`flex items-center justify-center p-4 rounded-lg border transition-colors cursor-pointer ${formData.orderType === type
                                                    ? 'border-amber-500 bg-amber-50/50 dark:bg-amber-900/20'
                                                    : 'border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700/50'
                                                }`}
                                        >
                                            <input
                                                type="radio"
                                                name="orderType"
                                                value={type}
                                                checked={formData.orderType === type}
                                                onChange={handleChange}
                                                className="h-4 w-4 text-amber-600 dark:text-amber-500 focus:ring-amber-500 dark:focus:ring-amber-600"
                                            />
                                            <span className="ml-2 text-sm font-medium text-gray-900 dark:text-white capitalize">
                                                {type === 'delivery' ? 'Delivery' : 'Take Away'}
                                            </span>
                                        </label>
                                    ))}
                                </div>
                            </div>

                            {/* Delivery Address */}
                            {formData.orderType === 'delivery' && (
                                <>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label htmlFor="city" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                                City
                                            </label>
                                            <select
                                                id="city"
                                                name="city"
                                                value={formData.city}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 dark:bg-gray-700 dark:text-white appearance-none bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMTQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjE0IiBmaWxsPSJjdXJyZW50Q29sb3IiPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTEyIDE1bC01LTVoMTB6Ii8+PC9zdmc+')] bg-no-repeat bg-[center_right_1rem]"
                                                required
                                            >
                                                <option value="">Select City</option>
                                                {cities.map(city => (
                                                    <option key={city.id} value={city.id}>{city.name}</option>
                                                ))}
                                            </select>
                                        </div>

                                        <div>
                                            <label htmlFor="sector" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                                Sector/Area
                                            </label>
                                            <select
                                                id="sector"
                                                name="sector"
                                                value={formData.sector}
                                                onChange={handleChange}
                                                disabled={!formData.city}
                                                className={`w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-amber-500 focus:border-amber-500 dark:bg-gray-700 dark:text-white appearance-none bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMTQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjE0IiBmaWxsPSJjdXJyZW50Q29sb3IiPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTEyIDE1bC01LTVoMTB6Ii8+PC9zdmc+')] bg-no-repeat bg-[center_right_1rem] ${!formData.city
                                                        ? 'border-gray-200 dark:border-gray-700 bg-gray-100 dark:bg-gray-700 text-gray-400'
                                                        : 'border-gray-300 dark:border-gray-600'
                                                    }`}
                                                required
                                            >
                                                <option value="">Select Sector</option>
                                                {filteredSectors.map(sector => (
                                                    <option key={sector.id} value={sector.id}>{sector.name}</option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="address" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                            Delivery Address
                                        </label>
                                        <textarea
                                            id="address"
                                            name="address"
                                            rows="3"
                                            value={formData.address}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 dark:bg-gray-700 dark:text-white transition"
                                            required
                                        ></textarea>
                                    </div>
                                </>
                            )}

                            {/* Order Notes */}
                            <div>
                                <label htmlFor="notes" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                    Order Notes (Optional)
                                </label>
                                <textarea
                                    id="notes"
                                    name="notes"
                                    rows="3"
                                    value={formData.notes}
                                    onChange={handleChange}
                                    placeholder="Special instructions, allergies, etc."
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 dark:bg-gray-700 dark:text-white transition"
                                ></textarea>
                            </div>

                            {/* Payment Method */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                                    Payment Method
                                </label>
                                <div className="grid grid-cols-2 gap-4">
                                    {[
                                        { id: 'cod', label: 'Cash on Delivery' },
                                        { id: 'wallet', label: 'Mobile Wallet' }
                                    ].map(method => (
                                        <label
                                            key={method.id}
                                            className={`flex items-center p-4 rounded-lg border transition-colors cursor-pointer ${formData.paymentMethod === method.id
                                                    ? 'border-amber-500 bg-amber-50/50 dark:bg-amber-900/20'
                                                    : 'border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700/50'
                                                }`}
                                        >
                                            <input
                                                type="radio"
                                                name="paymentMethod"
                                                value={method.id}
                                                checked={formData.paymentMethod === method.id}
                                                onChange={handleChange}
                                                className="h-4 w-4 text-amber-600 dark:text-amber-500 focus:ring-amber-500 dark:focus:ring-amber-600"
                                            />
                                            <span className="ml-3 text-sm font-medium text-gray-900 dark:text-white">
                                                {method.label}
                                            </span>
                                        </label>
                                    ))}
                                </div>
                            </div>

                            {/* Submit Button */}
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="w-full py-4 px-6 rounded-lg bg-gradient-to-r from-amber-500 to-amber-600 text-white font-bold hover:opacity-90 transition duration-300 shadow-lg shadow-amber-500/20 dark:shadow-amber-600/30"
                            >
                                Place Order - ${total.toFixed(2)}
                            </motion.button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Checkout;