import React, { useRef } from "react";
import { motion } from "framer-motion";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import emailjs from "emailjs-com";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";

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
        <div className="flex flex-col items-center min-h-screen px-6 bg-white text-black py-20">
            <div className="container mx-auto py-2 px-4">

                <Link to={"/"}>
                    <div className="hover:cursor-pointer">
                        <i className="text-3xl ri-arrow-left-circle-fill"></i>
                    </div>
                </Link>
                {/* Page Title */}
                <h1 className="text-5xl font-bold uppercase text-center text-gray-900 dark:text-white mb-4">
                    Contacts
                </h1>
                <p className="text-lg text-center text-gray-600 dark:text-gray-300 mb-12">
                    Let's connect and collaborate!
                </p>

                <div className="flex flex-col lg:flex-row items-center w-full max-w-5xl space-y-10 lg:space-y-0 lg:space-x-12">
                    {/* Contact Info Card */}
                    <motion.div
                        className="contact-card w-full lg:w-2/5 p-8 bg-black text-white rounded-2xl shadow-lg text-center hover:shadow-xl transition-all"
                        whileHover={{ scale: 1.05 }}
                    >
                        <h3 className="text-2xl font-semibold mb-4">Get in Touch</h3>
                        <p className="text-gray-300">Let's connect on social media or drop me an email.</p>

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

                    {/* Contact Form */}
                    <motion.form
                        ref={formRef}
                        onSubmit={sendEmail}
                        className="contact-card w-full lg:w-3/5 p-8 bg-gray-100 rounded-2xl shadow-lg transition-all hover:shadow-xl"
                        whileHover={{ scale: 1.05 }}
                    >
                        <h3 className="text-2xl font-semibold mb-6 text-center text-black">Send a Message</h3>

                        <div className="mb-4">
                            <label className="block text-gray-700 font-medium">Your Name</label>
                            <input
                                type="text"
                                name="name"
                                required
                                className="w-full p-3 mt-1 rounded-lg bg-white text-black border border-gray-400 focus:ring-2 focus:ring-black outline-none"
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700 font-medium">Your Email</label>
                            <input
                                type="email"
                                name="email"
                                required
                                className="w-full p-3 mt-1 rounded-lg bg-white text-black border border-gray-400 focus:ring-2 focus:ring-black outline-none"
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700 font-medium">Message</label>
                            <textarea
                                name="message"
                                rows="4"
                                required
                                className="w-full p-3 mt-1 rounded-lg bg-white text-black border border-gray-400 focus:ring-2 focus:ring-black outline-none"
                            ></textarea>
                        </div>

                        <motion.button
                            type="submit"
                            className="w-full bg-black text-white py-3 rounded-lg shadow-lg transition-all hover:scale-105 hover:bg-gray-900"
                            whileHover={{ scale: 1.1 }}
                        >
                            Send Message
                        </motion.button>
                    </motion.form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
