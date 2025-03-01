import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'

const About2 = () => {
    return (
        <div>
            <div class="container  mx-auto p-4">
                <div class="bg-gray-800 text-white p-6 rounded-lg flex flex-col md:flex-row ">
                    <div class="w-full md:w-1/2 mb-4 md:mb-0">
                        <h2 class="text-3xl font-bold mb-4">
                            ABOUT

                        </h2>
                        <h3 class="text-xl font-semibold mb-2">
                            IK BUNNY

                        </h3>
                        <p class="mb-4 w-[90%]">
                            My name is Issac Kenzo, originally from Manaus, and now residing in
                            the US. My passion for fursuit designing began years ago and has
                            since turned into a profession that I truly enjoy. I created my first
                            fursuit in 2016, and since then, I’ve made countless fursuits, although
                            I’ve honestly lost count! Over the years, I’ve participated in various
                            workshops and courses related to costume and fursuit designing,
                            which have helped me grow and improve my skills, adding to my
                            experience and creativity. This continuous learning process has been
                            incredibly rewarding, and it’s reflected in my work. On this website,
                            you’ll find a collection of my dedicated creations, showcasing my
                            experience, style, and passion. Every fursuit I make is crafted with the
                            same energy and enthusiasm as my first one, and I strive to maintain
                            that joy with each new piece I create. In addition to fursuit making, I
                            also have significant experience in furry art, including reference
                            sheets, fursonas, and various forms of furry artwork. I’ve sharpened
                            my skills through workshops and consistent practice, and I can
                            confidently say I’m a professional artist, skilled in a wide range of furry
                            art. This is just a small glimpse into my journey. If you’d like to know
                            more or have any questions, feel free to reach out to me via email or my
                            social media channels. Thank you for visiting
                        </p>
                        <div class="flex space-x-4">
                            <a class="text-white hover:text-gray-400" href="#">

                                <FaFacebook />

                            </a>
                            <a class="text-white hover:text-gray-400" href="#">
                                <FaTwitter />

                            </a>
                            <a class="text-white hover:text-gray-400" href="#">
                                <FaInstagram />

                            </a>

                        </div>
                    </div>
                    <div class="w-full md:w-1/2">
                        <img alt="Group of colorful characters in costumes" class="rounded-lg w-full" height="400" src="furryabout.jpeg" width="400" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About2
