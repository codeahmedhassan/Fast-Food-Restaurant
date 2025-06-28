import React from 'react'
import { motion } from 'framer-motion';

const Stats = () => {
    return (
        <>
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
        </>
    )
}

export default Stats