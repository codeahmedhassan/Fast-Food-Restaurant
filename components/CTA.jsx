import React from 'react'
import { motion } from 'framer-motion';

const CTA = () => {
    return (
        <>
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
        </>
    )
}

export default CTA