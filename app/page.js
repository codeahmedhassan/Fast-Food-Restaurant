// pages/index.js
"use client";

import CTA from '@/components/CTA';
import Menu from '@/components/Menu';
import Stats from '@/components/Stats';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Home() {

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

      <Menu />

      <Stats />

      <CTA />

    </div>
  );
}