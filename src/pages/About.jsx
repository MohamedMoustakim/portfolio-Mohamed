import { motion } from "framer-motion";
import images from "../contants/images";

const About = () => {
    return (
        <section className="bg-gradient-to-br from-red-600 via-gray-900 to-black min-h-screen flex items-center justify-center px-4 py-20 w-full">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-14">

                {/* === IMAGE === */}
                <motion.div
                    initial={{ opacity: 0, x: -60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="w-full md:w-1/2"
                >
                    <motion.img
                        whileHover={{ scale: 1.05, rotate: 1 }}
                        transition={{ type: "spring", stiffness: 100 }}
                        src={images.imag1} 
                        className="rounded-2xl object-cover bg-gradient-to-br from-red-600 via-gray-900 to-black min-h-screen flex items-center justify-center px-4 py-10 "
                    />
                </motion.div>

                
                <motion.div
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="w-full md:w-1/2"
                >
                    <h2 className="text-4xl font-bold text-red-400 mb-4">À propos de moi</h2>
                    <p className="text-lg leading-relaxed text-gray-300 mb-6">
                        Ana <span className="text-white font-semibold">Mohamed Moustakim</span>, développeur web & UI designer.
                        Kansayb expériences fluides, modern & user-friendly b tech comme React, Tailwind, ou JavaScript.
                    </p>

                    
                    <motion.div
                        className="flex flex-wrap gap-3"
                        initial="hidden"
                        whileInView="visible"
                        transition={{ staggerChildren: 0.15 }}
                        viewport={{ once: true }}
                    >
                        {["JavaScript", "React", "TailwindCSS", "Html", "CSS"].map((skill, i) => (
                            <motion.span
                                key={i}
                                className="bg-red-600 text-white px-4 py-2 rounded-full text-sm"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: i * 0.2 }}
                            >
                                {skill}
                            </motion.span>
                        ))}
                    </motion.div>

                    {/* === BUTTON === */}
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="mt-8 px-6 py-3 bg-red-500 hover:bg-red-600 transition rounded-xl shadow-lg text-white"
                    >
                        Télécharger mon CV
                    </motion.button>
                </motion.div>
            </div>
        </section>
    );
};

export default About;


//**yugyuftyciyv */
// import React from 'react';
// import { motion } from "framer-motion";
// import images from '../contants/images';

// const About = () => {
//     return (
//         <section className="min-h-screen bg-black text-white flex flex-col md:flex-row items-center justify-center px-6 gap-10">

//             {/* TEXT */}
//             <motion.div
//                 initial={{ opacity: 0, y: 40 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 1, ease: "easeOut" }}
//                 className="text-center md:text-left max-w-xl"
//             >
//                 <h1 className="text-4xl md:text-5xl font-bold mb-4">
//                     👋 Hi, i'm <span className="text-indigo-500">Mohamed Moustakim</span>
//                 </h1>
//                 <motion.p
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ delay: 0.4, duration: 0.8 }}
//                     className="text-lg mb-6"
//                 >
//                     Développeur web passionné & designer créatif. Marhba bik f portfolio dyali.
//                 </motion.p>

//                 <motion.button
//                     whileHover={{ scale: 1.05 }}
//                     whileTap={{ scale: 0.95 }}
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ delay: 0.6, duration: 0.7 }}
//                     className="bg-indigo-600 hover:bg-indigo-700 transition text-white px-6 py-3 rounded-xl shadow-lg"
//                 >Voir mon travail
//                 </motion.button>
//             </motion.div>

//             {/* IMAGE */}
//             <motion.img
//                 src={images.imag1} // Remplace b tswira dyalek
//                 alt="Hero"
//                 className="w-[300px]  rounded-2xl shadow-2xl"
//                 initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
//                 animate={{ opacity: 1, scale: 1, rotate: 0 }}
//                 transition={{ duration: 1, ease: "easeOut" }}
//             />
//         </section>
//     );
// };

// export default About;