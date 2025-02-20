import { useGSAP } from '@gsap/react';
import React, { useRef, useState } from 'react';
import gsap from 'gsap';

const Footer = () => {
    const socials = useRef(null);
    const [arrow, setArrow] = useState(true);
    const [rollOut, setRollOut] = useState(false);

    useGSAP(() => {
        gsap.to(socials.current, {
            maxHeight: rollOut ? "300px" : "0px", // Controls visibility smoothly
            opacity: rollOut ? 1 : 0,
            visibility: rollOut ? "visible" : "hidden",
            duration: 0.5,
        });
    }, [rollOut]);

    return (
        <div className='fixed z-20 left-0 px-4 md:px-16 pb-6 md:pb-10 flex items-end justify-between bottom-0 w-full'>
            {/* Name & Designation */}
            <div>
                <h2 className='text-lg md:text-2xl font-[woff2]' style={{ WebkitTextStroke: '0.2px white' }}>
                    HIMANSHU GUPTA
                </h2>
                <h3 className='text-sm md:text-xl text-gray-400 uppercase font-[woff3]'>Portfolio website</h3>
            </div>

            <div className="relative flex flex-col items-center">
                <div
                    ref={socials}
                    className={`overflow-hidden w-full flex flex-col items-center gap-6 sm:gap-8 transition-all duration-500`}
                    style={{
                        maxHeight: rollOut ? "300px" : "0px",
                    }}
                >
                    {[
                        { href: 'https://github.com/Crazeecoder01', icon: 'ri-github-fill' },
                        { href: 'https://www.linkedin.com/in/himanshu-gupta-15703a250/', icon: 'ri-linkedin-box-fill' },
                        { href: 'https://www.instagram.com/guptahimanshu177', icon: 'ri-instagram-fill' }, 
                        { href: 'https://leetcode.com/u/Crazeecoder01/', icon: 'ri-code-s-slash-fill' }
                    ].map(({ href, icon }, index) => (
                        <div key={index} className='bg-white shadow-lg border-2 rounded-full hover:text-white hover:bg-black h-8 w-8 md:h-10 md:w-10 flex items-center hover:scale-110 justify-center mb-2'>
                            <a href={href} target="_blank" rel="noopener noreferrer">
                                <i className={`text-2xl md:text-3xl ${icon} `}></i>
                            </a>
                        </div>
                    ))}
                </div>

                {/* Toggle Button */}
                <div
                    onClick={() => {
                        setRollOut(!rollOut);
                        setArrow(!arrow);
                    }}
                    className='mt-4 shadow-lg shadow-slate-400 z-20 rounded-full bg-white outline outline-2 outline-offset-4 outline-white 
                                w-12 h-12 md:w-16 md:h-16 flex items-center justify-center cursor-pointer'
                >
                    {arrow ? (
                        <i className="ri-arrow-up-s-line text-xl md:text-2xl"></i>
                    ) : (
                        <i className="ri-arrow-down-s-line text-xl md:text-2xl"></i>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Footer;
