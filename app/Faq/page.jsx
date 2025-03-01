import React from 'react'
import Navbar from '../components/navbar'
import Footer from '../components/footere'

const Page = () => {
    return (
        <div className='pt-24'>
            <Navbar />
            <div className="flex flex-col md:flex-row text-white">
                <div className="relative w-full md:w-1/2">
                    <img alt="Colorful fursuit characters in a park" className="w-full h-full object-cover" height="800" src="https://storage.googleapis.com/a1aa/image/Xtz2rcoxiEFES0ePwC9zQu7TDnTJtX1SuBIo9c9cjdQ.jpg" width="600" />
                    <div className="absolute top-0 left-0 p-8">
                        <h1 className="text-5xl font-bold">
                            Frequently
                            <br />
                            Asked
                            <br />
                            Questions
                        </h1>
                    </div>
                </div>
                <div className="w-full md:w-1/2 p-8 bg-[#5ce1e6]">
                    <div className="mb-8">
                        <h2 className="text-xl font-bold">
                            Do you make Partial fursuits
                        </h2>
                        <p>
                            Yes we do partial fursuits. Those include the head, hand, feet and tail. Sleeves can be requested.
                        </p>
                    </div>
                    <div className="mb-8">
                        <h2 className="text-xl font-bold">
                            Do I need to make a DTD?
                        </h2>
                        <p>
                            For a full costume yes, we need one. A Tutorial can be found
                            <a className="text-blue-400 underline" href="#">
                                here
                            </a>
                        </p>
                    </div>


                    <div className="mb-8">
                        <h2 className="text-xl font-bold">Do you ship internationally?</h2>
                        <p>Yes! We ship worldwide. Shipping costs to some countries can vary from $150-$600.</p>
                    </div>

                    <div className="mb-8">
                        <h2 className="text-xl font-bold">Do you do payment plans?</h2>
                        <p>
                            Yes! We always start with a 30% nonrefundable deposit, from there you can make payments on your invoice.
                        </p>
                    </div>

                    <div className="mb-8">
                        <h2 className="text-xl font-bold">Do you work with minors?</h2>
                        <p>
                            We will work with a parental guardian with those under the age of 18. Remember our costumes are custom made
                            to your fit, so it is suggested you get a partial suit until you stop growing.
                        </p>
                    </div>

                    <div className="mb-8">
                        <h2 className="text-xl font-bold">Do you make spare fursuit parts? EX: paws, tail, bodies</h2>
                        <p>
                            We occasionally will make spare parts for existing clients. We typically don&lsquo;t offer to the general public
                            unless we state otherwise on social media.
                        </p>
                    </div>

                    <div className="mb-8">
                        <h2 className="text-xl font-bold">Do you make copyright characters?</h2>
                        <p>
                            We will make your custom OC that is inspired by certain characters, but we will not recreate any copyright characters.
                        </p>
                    </div>

                    <div className="mb-8">
                        <h2 className="text-xl font-bold">Do you add electronics? EX: fans, lights</h2>
                        <p>
                            We do not offer any electronics for your suit, but you can let us know if you plan to yourself so we can create extra space.
                        </p>
                    </div>

                    <div className="mb-8">
                        <h2 className="text-xl font-bold">Do you have pets in your workshop?</h2>
                        <p>
                            We have shop dogs that roam around but do not typically interact with our materials.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-xl font-bold">
                            Can you wear glasses inside your heads?
                        </h2>
                        <p>
                            Varies on options &amp; clients face as we try to make the heads form fit to your head. Please tell us ahead of time. We generally think its uncomfortable to fit lenses inside so contacts at highly recommended.
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Page
