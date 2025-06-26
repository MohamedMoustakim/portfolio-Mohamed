import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {

    return (
        <nav className="bg-black shadow-md fixed w-full top-0 left-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    
                   
                    <div className="text-2xl font-bold text-blue-600 hover:text-blue-50">
                        Mohamed Moustakim
                    </div>

                    
                    <div className="hidden md:flex space-x-8">
                        <Link to="/" className="text-blue-50 hover:text-blue-600 font-medium transition duration-300">Home</Link>
                        <Link to="/About" className="text-blue-50 hover:text-blue-600 font-medium transition duration-300">About</Link>
                        <Link to="/Portfolio" className="text-blue-50 hover:text-blue-600 font-medium transition duration-300">Portfolio</Link>
                        <Link to="/contact" className="text-blue-50 hover:text-blue-600 font-medium transition duration-300">Contact</Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
