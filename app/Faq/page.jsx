import React from 'react'

const Page = () => {
    return (
        <div className='pt-24'>
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
                            Do you make partial fursuits?
                        </h2>
                        <p>
                            Yes, I offer partial fursuits. These typically include the head, hands, feet,
                            and tail. You can also request sleeves
                        </p>
                    </div>
                    <div className="mb-8">
                        <h2 className="text-xl font-bold">
                            Can I wear glasses inside the head?

                        </h2>
                        <p>
                            This depends on the design and fit of the head. I try to make the head fit
                            comfortably to your face, but I recommend contacts since fitting glasses
                            inside might be uncomfortable.
                        </p>
                    </div>


                    <div className="mb-8">
                        <h2 className="text-xl font-bold">Do you ship internationally?
                        </h2>
                        <p>Yes! I ship worldwide. Shipping costs vary depending on the country, and I
                            will provide you with an estimate when processing your order.
                        </p>
                    </div>

                    <div className="mb-8">
                        <h2 className="text-xl font-bold">Do you offer payment plans?
                        </h2>
                        <p>
                            Absolutely! I start with a 30% non-refundable deposit, and then you can
                            pay the remaining balance in installments.
                        </p>
                    </div>

                    <div className="mb-8">
                        <h2 className="text-xl font-bold">Do you make spare parts such as paws, tails, or bodies?
                        </h2>
                        <p>
                            Yes, I create spare parts based on the client&apos;s size and preferences, such
                            as hand/foot paws, tails, bodies, etc.
                        </p>
                    </div>

                    <div className="mb-8">
                        <h2 className="text-xl font-bold">Do you add electronics like fans or lights to suits?
                        </h2>
                        <p>
                            I do not provide electronics, but if you plan to install electronics yourself, let
                            me know, and I can create extra space in the suit for them.
                        </p>
                    </div>

                    <div className="mb-8">
                        <h2 className="text-xl font-bold">Do you have pets in your workshop?
                        </h2>
                        <p>
                            No, I do not have any pets in my workshop. In fact, I keep all items
                            completely separate from pets to ensure no harm comes to any of the
                            materials.
                        </p>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default Page
