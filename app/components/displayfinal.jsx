import React from 'react'

const Displayfinal = () => {
    return (
        <div className='w-full flex relative'>
            <div className='w-[90%] md:w-[40%] flex flex-col justify-center items-center absolute top-[30%] left-5 md:left-40 z-20 ' >
                <h1 className='text-4xl font-bold text-white my-4'> WELCOME
                </h1>
                <p className='text-white'>Welcome to Ik Bunny! Here, every fursuit is crafted with passion, creativity,
                    and attention to detail. Whether you’re bringing a character to life or
                    expressing yourself in a new way, we’re here to make it happen. Step into a
                    world where imagination meets craftsmanship, your journey starts here!
                </p>
                <button className='bg-white text-black px-4 py-2 rounded-lg mt-4'>  GALLERY</button>

            </div>
            <img src="/back.jfif" className='w-full brightness-50 ' alt="" />
        </div>
    )
}

export default Displayfinal
