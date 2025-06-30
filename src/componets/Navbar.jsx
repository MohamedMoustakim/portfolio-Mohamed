import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Navbar = () => {
    return (
        <motion.nav
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="bg-black shadow-md fixed w-full top-0 left-0 z-50"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">

                    {/* TAHIYA */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1.2, duration: 1 }}
                    >
                        <span className="text-white hover:text-red-500 text-xl md:text-2xl font-bold"><span className="text-red-600">Mohamed</span> Moustakim</span>
                    </motion.div>

                    {/* LINKS */}
                    <div className=" md:flex space-x-6 flex items-center">
                        <Link to="/" className="font-bold text-red-50 hover:text-red-500 transition duration-300 font-bold">Home</Link>
                        <Link to="/About" className="text-red-50 font-bold hover:text-red-500 transition duration-300 ">About</Link>
                        <Link to="/Portfolio" className="text-red-50 hover:text-red-500 transition duration-300 font-bold">Portfolio</Link>
                        <Link
                            to="/contact"
                            className="bg-red-600 text-white hover:text-black font-bold px-4 py-1 rounded-xl transition duration-300"
                        >
                            Contact
                        </Link>
                    </div>
                </div>
            </div>
        </motion.nav>
    );
};

export default Navbar;


