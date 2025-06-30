import React from 'react';
import images from '../contants/images';
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';


const Home = () => {

    return (
        <>
            <section
            className="relative bg-cover bg-center  bg-no-repeat min-h-screen flex items-center justify-center">

                <div className="bg-gradient-to-br from-red-600 via-gray-900 to-black min-h-screen flex items-center justify-center px-4 py-20 w-full">



                <div className="relative z-10 text-center text-white px-4">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 animate-fadeInDown">
                        Hi, i'm <span className="text-red-600">Mohamed Moustakim</span>
                    </h1>
                    <p className="text-lg sm:text-xl md:text-2xl mb-6 font-light animate-fadeInUp">
                        Développeur Full Stack | Passionné par la création web moderne
                    </p>
                    <div className="space-x-4">
                        <Link to={"/portfolio"}
                            className="inline-block px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-medium rounded-lg transition duration-300"
                        >
                            Voir mon travail
                        </Link>
                        <Link to={"/contact"}
                            className="inline-block px-6 py-3 bg-transparent border border-white hover:bg-white hover:text-black text-white font-medium rounded-lg transition duration-300"
                        >
                            Contactez-moi
                        </Link>
                    </div>
                </div>
                </div>

            </section>



        </>

    );
};

export default Home;

