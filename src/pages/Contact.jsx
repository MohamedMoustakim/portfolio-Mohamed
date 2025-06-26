import React from 'react';

const Contact = () => {
    return (
        <div className="bg-gradient-to-br bg-black min-h-screen flex items-center justify-center pt-30 pb-30">

            <div className="backdrop-blur-lg bg-white/30 border  border-white/50 shadow-xl rounded-xl p-8 w-full max-w-lg">
                <h2 className="text-3xl font-bold text-center text-white mb-6">CONTACT Me</h2>

                <form action="#" method="POST" className="space-y-5">
                    <div>
                        <label for="name" className="block text-white font-semibold mb-1">Your Name</label>
                        <input type="text" id="name" name="name" required
                            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-700 focus:outline-none bg-white/70 placeholder-gray-500" placeholder="John Doe" />
                    </div>

                    <div>
                        <label for="email" className="block text-white font-semibold mb-1">Your Email</label>
                        <input type="email" id="email" name="email" required
                            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-700 focus:outline-none bg-white/70 placeholder-gray-500" placeholder="you@example.com" />
                    </div>

                    <div>
                        <label for="message" className="block text-white font-semibold mb-1">Message</label>
                        <textarea id="message" name="message" rows="4" required
                            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-700 focus:outline-none bg-white/70 placeholder-gray-500" placeholder="Type your message here..."></textarea>
                    </div>

                    <button type="submit"
                        className="w-full hover:bg-blue-300 bg-blue-800 text-white font-semibold py-2 px-6 rounded-lg shadow-md transition duration-300">
                        Send Message ✉️
                    </button>
                </form>
            </div>

        </div>
    );
};

export default Contact;