import React from 'react';
import { motion } from "framer-motion";

const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
};

const Contact = () => {
    return (
        <motion.div
            initial="initial"
            animate="animate"
            className="bg-gradient-to-br from-black via-red-900 to-red-700 min-h-screen flex items-center justify-center px-4 py-20"
        >
            <motion.div
                variants={fadeInUp}
                className="backdrop-blur-md bg-white/10 border border-white/30 shadow-2xl rounded-3xl p-10 w-full max-w-xl text-white"
            >
                <motion.h2
                    variants={fadeInUp}
                    className="text-4xl font-extrabold text-center mb-8 tracking-tight"
                >
                    Contact Me
                </motion.h2>

                <motion.form
                    variants={fadeInUp}
                    className="space-y-6"
                    action="#"
                    method="POST"
                >
                    
                    <motion.div variants={fadeInUp}>
                        <label htmlFor="name" className="block text-sm font-medium mb-2">Your Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            placeholder="John Doe"
                            className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-white/80 text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500 transition duration-300"
                        />
                    </motion.div>

                    
                    <motion.div variants={fadeInUp}>
                        <label htmlFor="email" className="block text-sm font-medium mb-2">Your Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            placeholder="you@example.com"
                            className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-white/80 text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500 transition duration-300"
                        />
                    </motion.div>

                    
                    <motion.div variants={fadeInUp}>
                        <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            rows="4"
                            required
                            placeholder="Type your message here..."
                            className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-white/80 text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500 transition duration-300"
                        ></textarea>
                    </motion.div>

                    
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        type="submit"
                        className="w-full bg-neutral-900 hover:bg-red-700 transition-all duration-300 text-white font-semibold py-3 px-6 rounded-xl shadow-lg"
                    >
                        ✉️ Send Message
                    </motion.button>
                </motion.form>
            </motion.div>
        </motion.div>
    );
};

export default Contact;
