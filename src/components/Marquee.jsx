import React from 'react'

const Marquee = () => {
    return (
        <div>
            <div className="relative overflow-hidden bg-black py-5">
                <div className="flex whitespace-nowrap animate-marquee">
                    <h1 className="text-8xl font-bold text-white px-10">SAY HELLO!</h1>
                    <h1 className="text-8xl font-bold text-white px-10">SAY HELLO!</h1>
                    <h1 className="text-8xl font-bold text-white px-10">SAY HELLO!</h1>
                    <h1 className="text-8xl font-bold text-white px-10">SAY HELLO!</h1>
                </div>
            </div>

        </div>
    )
}

export default Marquee