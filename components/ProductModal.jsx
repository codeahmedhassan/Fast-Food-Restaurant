// components/ProductModal.jsx
'use client';
import { useState, useEffect } from 'react';

const ProductModal = ({ isOpen, onClose }) => {
    const [quantity, setQuantity] = useState(1);
    const [selectedAddons, setSelectedAddons] = useState([]);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isOpen) return null;

    // Addon data
    const addons = [
        { id: 1, name: 'Mayo Dip', price: 0.50 },
        { id: 2, name: 'Pink Sauce Dip', price: 0.50 },
        { id: 3, name: 'Garlic Mayo Dip', price: 0.75 },
        { id: 4, name: '7UP', price: 1.99 },
        { id: 5, name: 'Pepsi', price: 1.99 },
        { id: 6, name: 'Cola', price: 1.99 },
        { id: 7, name: 'Colanext', price: 1.99 },
        { id: 8, name: 'Gourment', price: 2.49 },
        { id: 9, name: 'Marinda', price: 1.99 },
    ];

    // Product details
    const product = {
        name: 'Gourmet Burger Deluxe',
        price: 14.99,
        description: 'Premium beef patty with melted cheddar, crispy bacon, fresh lettuce, tomato, and our signature sauce, served on a brioche bun with a side of golden fries.',
        discountPrice: 17.99,
        rating: 4.5,
        reviews: 124
    };

    // Calculate total price
    const addonsTotal = selectedAddons.reduce((sum, addonId) => {
        const addon = addons.find(a => a.id === addonId);
        return sum + (addon ? addon.price : 0);
    }, 0);

    const total = (product.price + addonsTotal) * quantity;

    // Toggle addon selection
    const toggleAddon = (id) => {
        if (selectedAddons.includes(id)) {
            setSelectedAddons(selectedAddons.filter(addonId => addonId !== id));
        } else {
            setSelectedAddons([...selectedAddons, id]);
        }
    };

    // Render star rating
    const renderStars = () => {
        const stars = [];
        const fullStars = Math.floor(product.rating);
        const hasHalfStar = product.rating % 1 >= 0.5;

        for (let i = 0; i < fullStars; i++) {
            stars.push(<i key={`full-${i}`} className="fas fa-star text-amber-400" />);
        }

        if (hasHalfStar) {
            stars.push(<i key="half" className="fas fa-star-half-alt text-amber-400" />);
        }

        const emptyStars = 5 - stars.length;
        for (let i = 0; i < emptyStars; i++) {
            stars.push(<i key={`empty-${i}`} className="far fa-star text-amber-400" />);
        }

        return stars;
    };

    return (
        <div className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-opacity ${isMounted ? 'opacity-100' : 'opacity-0'}`}>
            {/* Backdrop */}
            <div
                className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm transition-opacity duration-300"
                onClick={onClose}
            />

            {/* Modal Container */}
            <div className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-xl max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col transform transition-transform duration-300 scale-100">
                {/* Modal Header */}
                <div className="flex justify-between items-center px-6 py-4 border-b border-gray-200 dark:border-gray-700">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">Customize Your Order</h3>
                    <button
                        onClick={onClose}
                        className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
                    >
                        <i className="fas fa-times text-xl" />
                    </button>
                </div>

                {/* Modal Content */}
                <div className="overflow-y-auto flex-1">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6">
                        {/* Left Column - Product Image */}
                        <div>
                            <div className="aspect-w-1 aspect-h-1 rounded-xl overflow-hidden bg-gradient-to-br from-primary-400 to-primary-600">
                                <div className="w-full h-full flex items-center justify-center p-8">
                                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl w-full h-full flex flex-col items-center justify-center p-4">
                                        <i className="fas fa-burger text-white text-7xl mb-4" />
                                        <h3 className="text-white text-2xl font-bold text-center">{product.name}</h3>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-4">
                                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Description</h4>
                                <p className="text-gray-600 dark:text-gray-300">
                                    {product.description}
                                </p>

                                <div className="mt-4 flex items-center">
                                    {renderStars()}
                                    <span className="ml-2 text-gray-600 dark:text-gray-300">({product.reviews} reviews)</span>
                                </div>
                            </div>
                        </div>

                        {/* Right Column - Customization */}
                        <div>
                            <div className="flex justify-between items-center">
                                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{product.name}</h3>
                                <div className="flex items-end">
                                    <span className="text-xl font-bold text-primary-600 dark:text-primary-400">${product.price.toFixed(2)}</span>
                                    {product.discountPrice && (
                                        <span className="ml-2 text-sm text-gray-500 dark:text-gray-400 line-through">${product.discountPrice.toFixed(2)}</span>
                                    )}
                                </div>
                            </div>

                            <div className="mt-6">
                                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Quantity</h4>
                                <div className="flex items-center">
                                    <button
                                        onClick={() => setQuantity(q => Math.max(1, q - 1))}
                                        className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 flex items-center justify-center hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                                    >
                                        <i className="fas fa-minus" />
                                    </button>
                                    <span className="mx-4 text-xl font-bold text-gray-900 dark:text-white">{quantity}</span>
                                    <button
                                        onClick={() => setQuantity(q => q + 1)}
                                        className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 flex items-center justify-center hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                                    >
                                        <i className="fas fa-plus" />
                                    </button>
                                </div>
                            </div>

                            {/* Add-ons Section */}
                            <div className="mt-8">
                                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Add Extra Toppings</h4>
                                <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">Select additional items to enhance your meal</p>

                                <div className="grid grid-cols-2 gap-3">
                                    {addons.map((addon) => (
                                        <div
                                            key={addon.id}
                                            onClick={() => toggleAddon(addon.id)}
                                            className={`addon-item rounded-lg p-3 cursor-pointer transition-all duration-200 border ${selectedAddons.includes(addon.id)
                                                ? 'border-primary-500 bg-primary-50 dark:bg-primary-900/20'
                                                : 'border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700'
                                                } hover:shadow-md hover:border-primary-400 dark:hover:border-primary-400`}
                                        >
                                            <div className="flex items-center">
                                                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${selectedAddons.includes(addon.id)
                                                    ? 'bg-primary-100 dark:bg-primary-900/30'
                                                    : 'bg-gray-100 dark:bg-gray-600'
                                                    }`}>
                                                    {addon.name.includes('Dip') ? (
                                                        <i className="fas fa-jar text-primary-500" />
                                                    ) : (
                                                        <i className="fas fa-glass-whiskey text-primary-500" />
                                                    )}
                                                </div>
                                                <div className="ml-3 flex-1">
                                                    <div className="font-medium text-gray-900 dark:text-white">{addon.name}</div>
                                                    <div className="text-sm text-primary-600 dark:text-primary-400">+${addon.price.toFixed(2)}</div>
                                                </div>
                                                <div className={`w-5 h-5 rounded-full border flex items-center justify-center ${selectedAddons.includes(addon.id)
                                                    ? 'bg-primary-500 border-primary-500'
                                                    : 'border-gray-300 dark:border-gray-500'
                                                    }`}>
                                                    {selectedAddons.includes(addon.id) && (
                                                        <i className="fas fa-check text-white text-xs" />
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Modal Footer */}
                <div className="border-t border-gray-200 dark:border-gray-700 px-6 py-4 bg-gray-50 dark:bg-gray-750">
                    <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                        <div>
                            <span className="text-gray-600 dark:text-gray-300">Total:</span>
                            <span className="ml-2 text-xl font-bold text-primary-600 dark:text-primary-400">${total.toFixed(2)}</span>
                        </div>
                        <button
                            className="bg-primary-500 hover:bg-primary-600 text-white py-3 px-8 rounded-lg font-semibold transition duration-300 flex items-center w-full sm:w-auto justify-center"
                            onClick={() => {
                                alert(`Added ${quantity}x ${product.name} to cart!`);
                                onClose();
                            }}
                        >
                            <i className="fas fa-shopping-cart mr-2" /> Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductModal;