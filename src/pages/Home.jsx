import React from 'react';
import images from '../contants/images';
import { motion } from "framer-motion";


const Home = () => {

    return (
        <>
            <section
                id="home"
                className="relative bg-cover bg-center bg-no-repeat min-h-screen flex items-center justify-center"
                style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1950&q=80')`
                }}
            >

                <div className="absolute inset-0 bg-black bg-opacity-60"></div>



                <div className="relative z-10 text-center text-white px-4">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 animate-fadeInDown">
                        Hi, i'm <span className="text-blue-400">Mohamed Moustakim</span>
                    </h1>
                    <p className="text-lg sm:text-xl md:text-2xl mb-6 font-light animate-fadeInUp">
                        Développeur Full Stack | Passionné par la création web moderne
                    </p>
                    <div className="space-x-4">
                        <a
                            href="#portfolio"
                            className="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition duration-300"
                        >
                            Voir mon travail
                        </a>
                        <a
                            href="#contact"
                            className="inline-block px-6 py-3 bg-transparent border border-white hover:bg-white hover:text-black text-white font-medium rounded-lg transition duration-300"
                        >
                            Contactez-moi
                        </a>
                    </div>
                </div>

            </section>

            

        </>

    );
};

export default Home;

