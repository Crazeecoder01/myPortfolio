import React, { useRef } from "react";
import { motion } from "framer-motion";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import emailjs from "emailjs-com";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

const Contact = () => {
    const formRef = useRef(null);

    useGSAP(() => {
        gsap.from(".contact-title", {
            opacity: 0,
            y: -50,
            duration: 1,
            delay: 0.3,
            ease: "power3.out",
        });

        gsap.from(".contact-card", {
            opacity: 1,
            y: 50,
            stagger: 0.2,
            duration: 1,
            delay: 0.5,
            ease: "power2.out",
        });
    });

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "service_l0x2lm8",
                "template_ssmsmlg",
                formRef.current,
                "ckjRE08s4sGRuBY6Y"
            )
            .then(
                () => {
                    alert("Message Sent Successfully!");
                    formRef.current.reset();
                },
                () => {
                    alert("Message failed to send. Try again later.");
                }
            );
    };

    return (
        <div className="flex flex-col items-center py-20 px-6 bg-black text-white">
            {/* Section Title */}
           

            <div className="flex flex-col lg:flex-row items-center w-full max-w-5xl space-y-8 lg:space-y-0 lg:space-x-10">
               
                {/* Contact Card */}
                <motion.div
                    className="contact-card w-full lg:w-2/5 p-6 bg-gray-900 bg-opacity-60 backdrop-blur-md rounded-xl shadow-lg text-center transition-all transform hover:scale-105"
                    whileHover={{ scale: 1.05 }}
                >
                    <h3 className="text-2xl font-semibold mb-4 text-gray-200">Get in Touch</h3>
                    <p className="text-gray-400">Drop a message or connect with me on socials.</p>

                    {/* Social Media Links */}
                    <div className="flex justify-center space-x-6 mt-6">
                        <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
                            <FaGithub className="text-3xl text-gray-400 hover:text-white transition" />
                        </a>
                        <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin className="text-3xl text-gray-400 hover:text-white transition" />
                        </a>
                        <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                            <FaTwitter className="text-3xl text-gray-400 hover:text-white transition" />
                        </a>
                        <a href="mailto:your@email.com">
                            <FaEnvelope className="text-3xl text-gray-400 hover:text-white transition" />
                        </a>
                    </div>
                </motion.div>

                <motion.form
                    ref={formRef}
                    onSubmit={sendEmail}
                    className="contact-card w-full lg:w-3/5 p-6 bg-gray-900 bg-opacity-60 backdrop-blur-md rounded-xl shadow-lg transition-all transform hover:scale-105"
                    whileHover={{ scale: 1.05 }}
                >
                    <h3 className="text-2xl font-semibold mb-4 text-gray-200">Message Me</h3>

                    <div className="mb-4">
                        <label className="block text-gray-400">Your Name</label>
                        <input
                            type="text"
                            name="name"
                            required
                            className="w-full p-3 mt-1 rounded-lg bg-gray-800 text-white border border-gray-700 focus:ring-2 focus:ring-gray-500 outline-none"
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-400">Your Email</label>
                        <input
                            type="email"
                            name="email"
                            required
                            className="w-full p-3 mt-1 rounded-lg bg-gray-800 text-white border border-gray-700 focus:ring-2 focus:ring-gray-500 outline-none"
                        />
                    </div>

                    {/* Message Field */}
                    <div className="mb-4">
                        <label className="block text-gray-400">Message</label>
                        <textarea
                            name="message"
                            rows="4"
                            required
                            className="w-full p-3 mt-1 rounded-lg bg-gray-800 text-white border border-gray-700 focus:ring-2 focus:ring-gray-500 outline-none"
                        ></textarea>
                    </div>

                    {/* Submit Button */}
                    <motion.button
                        type="submit"
                        className="w-full bg-white text-black py-3 rounded-lg shadow-lg transition-all transform hover:scale-105 hover:bg-gray-300"
                        whileHover={{ scale: 1.1 }}
                    >
                        Send Message
                    </motion.button>
                </motion.form>
            </div>
        </div>
    );
};

export default Contact;
