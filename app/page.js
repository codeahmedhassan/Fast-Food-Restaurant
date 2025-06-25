// pages/index.js
"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Home() {
  const menuItems = {
    burgers: {
      name: "Gourmet Burgers",
      headerImage: "/header.jpg",
      description: "Handcrafted burgers made with premium ingredients",
      items: [
        { id: 1, name: "Classic Cheeseburger", price: 12.99, description: "Beef patty with cheddar, lettuce, tomato", calories: 650, image: "/cheeseburger.webp", popular: true },
        { id: 2, name: "Bacon Deluxe", price: 14.99, description: "Double patty with bacon and special sauce", calories: 850, image: "/bacondeluxe.jpg", popular: true },
        { id: 3, name: "Mushroom Swiss", price: 13.99, description: "Beef patty with sautéed mushrooms", calories: 720, image: "/mushroomswiss.jpg" },
        { id: 4, name: "Chicken Burger", price: 11.99, description: "House-made chicken burger with drink", calories: 580, image: "/chicken-burger.webp" },
      ]
    },
    sides: {
      name: "Delicious Sides",
      headerImage: "/sides-header.jpg",
      description: "Perfect accompaniments to your meal",
      items: [
        { id: 5, name: "Crispy Fries", price: 4.99, description: "Golden crispy potatoes with sea salt", calories: 320, image: "/crispyfries.jpg" },
        { id: 6, name: "Onion Rings", price: 5.99, description: "Beer-battered onion rings", calories: 480, image: "/onionrings.jpg", popular: true },
        { id: 7, name: "Sweet Potato Fries", price: 5.49, description: "Cinnamon-dusted sweet potato fries", calories: 380, image: "/sweetpotatofries.jpeg" },
        { id: 8, name: "Truffle Mac & Cheese", price: 7.99, description: "Creamy macaroni with truffle oil", calories: 520, image: "/macandcheese.jpg" },
      ]
    },
    drinks: {
      name: "Refreshing Drinks",
      headerImage: "/drinks-header.jpg",
      description: "Crafted beverages to quench your thirst",
      items: [
        { id: 9, name: "Chocolate Shake", price: 6.99, description: "Rich chocolate milkshake", calories: 550, image: "/chocolateshake.jpg", popular: true },
        { id: 10, name: "Strawberry Lemonade", price: 4.49, description: "Freshly squeezed lemonade", calories: 220, image: "/strawberrylemonade.webp" },
        { id: 11, name: "Craft Soda", price: 3.99, description: "Handcrafted cola with cane sugar", calories: 180, image: "/craftsoda.jpg" },
        { id: 12, name: "Iced Mocha", price: 5.49, description: "Espresso with chocolate and cold milk", calories: 210, image: "/icedmocha.jpg" },
      ]
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-white dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 md:py-40 overflow-hidden caprasimo md:px-20">
        <div className="absolute inset-0 z-0">
          <Image
            src="/header.jpg"
            alt="Restaurant Interior"
            layout="fill"
            objectFit="cover"
            className="w-full h-full"
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-r from-amber-700/90 to-amber-500/30 dark:from-gray-900/90 dark:to-gray-800/70"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <motion.h1
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl font-bold mb-6 text-white dark:text-amber-300"
            >
              Fresh Bites,<br />
              <span className="text-amber-300 dark:text-amber-500">Big Flavors!</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-xl mb-8 max-w-xl text-amber-100 dark:text-gray-300"
            >
              Crafted daily for your cravings
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4"
            >
            </motion.div>
          </div>
        </div>
      </section>

      {/* Menu Categories */}
      <div className="py-16 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-amber-400"
            >
              Our Complete Menu
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="max-w-2xl mx-auto text-gray-600 dark:text-gray-400 text-lg"
            >
              Explore our diverse offerings crafted with passion and premium ingredients
            </motion.p>
          </div>

          {/* Loop through all categories */}
          {Object.entries(menuItems).map(([categoryId, category], catIndex) => (
            <section key={categoryId} className="mb-20">
              <motion.div
                className="text-center mb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: catIndex * 0.1 }}
              >
                <h3 className="text-2xl md:text-3xl font-bold mb-3 text-gray-900 dark:text-white">
                  {category.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                  {category.description}
                </p>
              </motion.div>

              {/* Category Header Image */}
              <motion.div
                className="flex justify-between mb-10 rounded-xl overflow-hidden shadow-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: catIndex * 0.1 + 0.1 }}
              >
                <Image src={category.headerImage} className='border-2 border-dashed rounded-xl w-full h-52 md:h-80 object-cover' alt={category.name} width={1000} height={500} />
              </motion.div>

              {/* Menu Items Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {category.items.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: catIndex * 0.2 + index * 0.1 }}
                    className="rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 bg-white dark:bg-gray-700 flex flex-col h-full"
                  >
                    <div className="relative h-40 md:h-52">
                      {/* Popular badge */}
                      {item.popular && (
                        <div className="absolute top-4 left-4 z-20 bg-gradient-to-r from-amber-500 to-amber-600 text-white text-xs font-bold px-3 py-1 rounded-full flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd" />
                          </svg>
                          Popular
                        </div>
                      )}

                      {/* Image gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>

                      {/* Item image placeholder */}
                      <Image src={item.image} className='border-2 border-dashed rounded-xl w-full h-40 md:h-52 object-cover' alt={item.name} width={1000} height={500} />

                      {/* Price tag */}
                      <div className="absolute bottom-4 right-4 px-2 py-2 rounded-full font-bold z-20 bg-gradient-to-r text-xs from-amber-500 to-amber-600 text-white shadow-md">
                        ${item.price.toFixed(2)}
                      </div>

                      {/* Calories */}
                      <div className="absolute bottom-4 left-4 z-20 bg-white/90 dark:bg-gray-800/90 text-gray-800 dark:text-gray-200 text-sm font-medium px-3 py-1 rounded-full">
                        {item.calories} cal
                      </div>
                    </div>

                    <div className="p-4 flex flex-col flex-grow items-center justify-center text-center">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-lg md:text-xl font-bold text-gray-900 dark:text-white">
                          {item.name}
                        </h3>
                      </div>

                      <p className="mb-4 text-gray-600 dark:text-gray-300 text-sm flex-grow">
                        {item.description}
                      </p>

                      <motion.button
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full cursor-pointer py-2.5 rounded-lg font-medium transition flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 text-white hover:opacity-90"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                        </svg>
                        Add to Order
                      </motion.button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>

      {/* Stats Section */}
      <section className="py-16 bg-amber-50 dark:bg-gray-900">
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
                <div className="text-4xl font-bold mb-2 text-red-600 dark:text-amber-400">
                  {stat.value}
                </div>
                <div className="text-lg text-gray-700 dark:text-gray-400">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-red-600 to-amber-500 dark:from-gray-800 dark:to-amber-900/30">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            className="max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white dark:text-amber-300">
              Ready to Taste Happiness?
            </h2>
            <p className="text-xl mb-10 text-amber-100 dark:text-gray-300">
              Download our app for exclusive deals and faster ordering
            </p>

            <div className="flex flex-wrap justify-center gap-6">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-xl font-bold flex items-center justify-center space-x-3 transition bg-gray-900 text-white hover:bg-gray-800"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
                <span>Get it on Google Play</span>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-xl font-bold flex items-center justify-center space-x-3 transition bg-gray-900 text-white hover:bg-gray-800"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                </svg>
                <span>Download on the App Store</span>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}