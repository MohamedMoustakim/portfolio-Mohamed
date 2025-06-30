

import React from 'react';
import { motion } from 'framer-motion';
import images from '../contants/images';

const Portfolio = () => {
    return (
        <section className="bg-gray-950 min-h-screen py-16 px-6 text-white" id="projects">
            <div className="max-w-6xl mx-auto text-center mb-12">
                <h2 className="text-4xl font-bold">
                    My <span className="text-red-500">Projects</span>
                </h2>
            </div>

            <div className="flex flex-col md:flex-row gap-10 items-center justify-center">

                <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.4 }}
                    className="relative group bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl overflow-hidden shadow-xl w-[320px]"
                >
                    <div className="relative w-full h-48 overflow-hidden">
                        <img src={images.doomToob} alt="Portfolio" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                        <div className="absolute inset-0 bg-red-600/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    <div className="p-5">
                        <h3 className="text-xl font-semibold mb-2">Yummy </h3>
                        <p className="text-sm text-gray-300 mb-3"> Yummy is a modern and fully responsive restaurant website built using HTML, CSS, JavaScript, and Bootstrap.</p>
                        <a href="#" className="text-red-400 hover:underline text-sm">🔗 View Project</a>
                    </div>
                </motion.div>


                <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.4 }}
                    className="relative group bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl overflow-hidden shadow-xl w-[320px]"
                >
                    <div className="relative w-full h-48 overflow-hidden">
                        <img src={images.array} alt="ToDo App" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                        <div className="absolute inset-0 bg-red-600/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    <div className="p-5">
                        <h3 className="text-xl font-semibold mb-2">arrya</h3>
                        <p className="text-sm text-gray-300 mb-3">A responsive and visually appealing web application built using modern front-end technologies...</p>
                        <a href="#" className="text-red-400 hover:underline text-sm">🔗 View Project</a>
                    </div>
                </motion.div>

                {/* <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.4 }}
                    className="relative group bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl overflow-hidden shadow-xl w-[320px]"
                >
                    <div className="relative w-full h-48 overflow-hidden">
                        <img src={images.imag2} alt="Weather App" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                        <div className="absolute inset-0 bg-red-600/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    <div className="p-5">
                        <h3 className="text-xl font-semibold mb-2">Weather App</h3>
                        <p className="text-sm text-gray-300 mb-3">Check the weather anywhere in real-time.</p>
                        <a href="#" className="text-red-400 hover:underline text-sm">🔗 View Project</a>
                    </div>
                </motion.div> */}
            </div>
        </section>
    );
};

export default Portfolio;

