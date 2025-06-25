// pages/index.js
"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();
  const [activeCategory, setActiveCategory] = useState('burgers');

  const menuItems = {
    burgers: [
      { id: 1, name: "Classic Cheeseburger", price: 12.99, description: "Beef patty with cheddar, lettuce, tomato", calories: 650, image: "/cheeseburger.webp" },
      { id: 2, name: "Bacon Deluxe", price: 14.99, description: "Double patty with bacon and special sauce", calories: 850, image: "/bacondeluxe.jpg" },
      { id: 3, name: "Mushroom Swiss", price: 13.99, description: "Beef patty with sautéed mushrooms", calories: 720, image: "/mushroomswiss.jpg" },
    ],
    sides: [
      { id: 4, name: "Crispy Fries", price: 4.99, description: "Golden crispy potatoes with sea salt", calories: 320, image: "/crispyfries.jpg" },
      { id: 5, name: "Onion Rings", price: 5.99, description: "Beer-battered onion rings", calories: 480, image: "/onionrings.jpg" },
      { id: 6, name: "Sweet Potato Fries", price: 5.49, description: "Cinnamon-dusted sweet potato fries", calories: 380, image: "/sweetpotatofries.jpeg" },
    ],
    drinks: [
      { id: 7, name: "Chocolate Shake", price: 6.99, description: "Rich chocolate milkshake", calories: 550, image: "/chocolateshake.jpg" },
      { id: 8, name: "Strawberry Lemonade", price: 4.49, description: "Freshly squeezed lemonade", calories: 220, image: "/strawberrylemonade.webp" },
      { id: 9, name: "Craft Soda", price: 3.99, description: "Handcrafted cola with cane sugar", calories: 180, image: "/craftsoda.jpg" },
    ]
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 dark:bg-gradient-to-br dark:from-gray-900 to-gray-800 bg-gradient-to-br from-amber-50 to-white'}`}>
      {/* Header */}


      {/* Hero Section */}
      <section className="relative pt-32 pb-16 md:py-40 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/header.jpg"
            alt="Restaurant Interior"
            layout="fill"
            objectFit="cover"
            className="w-full h-full"
          />
        </div>

        {/* Gradient Overlay */}
        <div className={`absolute inset-0 z-1 dark:bg-gradient-to-r dark:from-gray-900/90 dark:to-gray-800/70 bg-gradient-to-r from-amber-700/90 to-amber-500/30`}></div>

        {/* Content */}
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <motion.h1
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className={`text-4xl md:text-6xl font-bold mb-6 dark:text-amber-300 text-white`}
            >
              Fresh Bites,<br />
              <span className={`dark:text-amber-500 text-amber-300`}>Big Flavors!</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className={`text-xl mb-8 max-w-xl dark:text-gray-300 text-amber-100`}
            >
              Crafted daily for your cravings
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4"
            >
              <button className={`px-8 py-4 rounded-full font-bold text-lg transition shadow-lg dark:bg-amber-600 dark:text-white dark:hover:bg-amber-700 bg-red-600 text-white hover:bg-red-700`}>
                Order Now
              </button>
              <button className={`px-8 py-4 rounded-full font-bold text-lg transition shadow-lg dark:bg-gray-800 dark:text-amber-400 dark:hover:bg-gray-700 bg-white text-amber-800 hover:bg-amber-100`}>
                View Menu
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Menu */}
      <section className={`py-20 dark:bg-gray-800 bg-white`}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className={`text-3xl md:text-4xl font-bold mb-4 dark:text-amber-400 text-gray-900`}>
              Our Signature Dishes
            </h2>
            <p className={`max-w-2xl mx-auto dark:text-gray-400 text-gray-600`}>
              Discover our chef{"'"}s special creations that have won the hearts of thousands of food lovers
            </p>
          </div>

          <div className="flex justify-between mb-10">
            <div className="flex space-x-2 bg-amber-100 p-1 rounded-full">
              {['burgers', 'sides', 'drinks'].map(category => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-6 py-2 rounded-full capitalize transition ${activeCategory === category
                    ? 'dark:bg-amber-600 dark:text-white bg-red-600 text-white'
                    : 'hover:bg-amber-200 cursor-pointer text-black'
                    }`}
                >
                  {category}
                </button>
              ))}
            </div>


            <button
              onClick={() => router.push('/menu')}
              className={`px-6 py-2 rounded-full font-medium transition dark:bg-amber-700 dark:text-white dark:hover:bg-amber-600 bg-red-700 text-white hover:bg-red-600`}
            >
              View Full Menu
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {menuItems[activeCategory].map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.2 }}
                className={`rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 dark:bg-gray-700 bg-white`}
              >
                <div className="relative h-64">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10"></div>
                  <Image
                    src={item.image}
                    alt={item.name}
                    layout="fill"
                    objectFit="cover"
                    className="w-full h-full"
                  />
                  <div className={`absolute top-4 right-4 px-3 py-1 rounded-full font-bold z-20 dark:bg-amber-600 dark:text-white bg-red-600 text-white`}>
                    ${item.price.toFixed(2)}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className={`text-xl font-bold dark:text-white text-gray-900`}>
                      {item.name}
                    </h3>
                    <span className={`text-sm dark:text-gray-400 text-gray-500`}>
                      {item.calories} cal
                    </span>
                  </div>
                  <p className={`mb-5 dark:text-gray-400 text-gray-600`}>
                    {item.description}
                  </p>
                  <button className={`w-full py-3 rounded-lg font-medium transition dark:bg-amber-600 dark:text-white dark:hover:bg-amber-500 bg-amber-500 text-white hover:bg-amber-600`}>
                    Add to Order
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className={`py-16 dark:bg-gray-900 bg-amber-50`}>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "10K+", label: "Happy Customers" },
              { value: "15+", label: "Years Experience" },
              { value: "50+", label: "Menu Items" },
              { value: "24/7", label: "Online Ordering" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className={`text-4xl font-bold mb-2 dark:text-amber-400 text-red-600'}`}>
                  {stat.value}
                </div>
                <div className={`text-lg dark:text-gray-400 text-gray-700'}`}>
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className={`py-20 dark:bg-gradient-to-br dark:from-gray-800 dark:to-amber-900/30 bg-gradient-to-br from-red-600 to-amber-500`}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className={`text-3xl md:text-4xl font-bold mb-4 dark:text-amber-300 text-white`}>
              What Our Customers Say
            </h2>
            <p className={`max-w-2xl mx-auto dark:text-gray-300 text-amber-100`}>
              Don{"'"}t just take our word for it - hear from our satisfied customers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                role: "Regular Customer",
                comment: "The best burgers in town! Always fresh ingredients and amazing flavors. Their service is fast and the staff is super friendly. Highly recommend!",
                rating: 5
              },
              {
                name: "Michael Chen",
                role: "Food Blogger",
                comment: "I've tried burgers all over the city, and Burger Bliss stands out. The flavor combinations are innovative yet classic. Their shakes are to die for!",
                rating: 5
              },
              {
                name: "Emma Rodriguez",
                role: "Local Resident",
                comment: "Consistently excellent food and service. The sweet potato fries are my absolute favorite. This is my go-to spot for a delicious, satisfying meal.",
                rating: 5
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`rounded-2xl p-6 dark:bg-gray-800/80 dark:backdrop-blur-sm bg-white/90 backdrop-blur-sm`}
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 dark:text-amber-400 text-amber-500`} viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className={`mb-6 dark:text-gray-300 text-gray-700`}>
                  {'"'}{testimonial.comment}{'"'}
                </p>
                <div className="flex items-center">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center mr-4 dark:bg-amber-900 dark:text-amber-400 bg-red-100 text-red-700`}>
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className={`font-bold dark:text-white text-gray-900`}>
                      {testimonial.name}
                    </h4>
                    <p className={`text-sm dark:text-gray-400 text-gray-600`}>
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={`py-20 dark:bg-gray-800 bg-amber-50`}>
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className={`text-3xl md:text-4xl font-bold mb-6 dark:text-amber-400 text-gray-900`}>
              Ready to Taste Happiness?
            </h2>
            <p className={`text-xl mb-10 dark:text-gray-400 text-gray-600`}>
              Download our app for exclusive deals and faster ordering
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-8 py-4 rounded-xl font-bold flex items-center justify-center space-x-3 transition dark:bg-gray-900 dark:text-white dark:hover:bg-gray-800 bg-gray-900 text-white hover:bg-gray-800`}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
                <span>Get it on Google Play</span>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-8 py-4 rounded-xl font-bold flex items-center justify-center space-x-3 transition dark:bg-gray-900 dark:text-white dark:hover:bg-gray-800 bg-gray-900 text-white hover:bg-gray-800`}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                </svg>
                <span>Download on the App Store</span>
              </motion.button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}

    </div>
  );
}