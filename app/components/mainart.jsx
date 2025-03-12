import Image from "next/image";
import Link from "next/link";

const images = [
    { src: "/home/Tail (7).jpg", span: "row-span-1 col-span-1" },
    { src: "/home/Tail (6).jpg", span: "row-span-1 col-span-1" },
    { src: "/home/Head (23).jpg", span: "row-span-2 col-span-2" },
    { src: "/home/Feetpaw (4).jpg", span: "row-span-2 col-span-1" },
    { src: "/home/Feetpaw (5).jpg", span: "row-span-1 col-span-1" },

    { src: "/home/Fullsuit (1).jpg", span: "row-span-1 col-span-2" },
    { src: "/home/Fullsuit (19).jpg", span: "row-span-2 col-span-1" },
    { src: "/home/Fullsuit (23).jpg", span: "row-span-1 col-span-1" },
    { src: "/home/Fullsuit (47).jpg", span: "row-span-2 col-span-2" },
    { src: "/home/Fullsuit (50).jpg", span: "row-span-1 col-span-1" },
    { src: "/home/Fullsuit (52).jpg", span: "row-span-1 col-span-1" },
    { src: "/home/Fullsuit (55).jpg", span: "row-span-2 col-span-2" },
    { src: "/home/Tail (5).jpg", span: "row-span-2 col-span-1" },

    { src: "/home/Head (1).jpg", span: "row-span-2 col-span-1" },
    { src: "/home/Head (3).jpg", span: "row-span-1 col-span-2" },
    { src: "/home/Head (5).jpg", span: "row-span-1 col-span-1" },
    { src: "/home/Head (9).jpg", span: "row-span-1 col-span-1" },
    { src: "/home/Head (21).jpg", span: "row-span-2 col-span-1" },

];

const MasonryGallery = () => {
    return (

        <div className="w-full p-4 flex flex-col items-center justify-center">
            <h1 className="text-4xl font-bold text-center">Gallery</h1>
            <div className="grid grid-cols-3 md:grid-cols-4 gap-4 p-4 auto-rows-[200px] md:auto-rows-[250px]">
                {images.map((img, index) => (
                    <div key={index} className={`overflow-hidden rounded-lg shadow-lg ${img.span}`}>
                        <Image
                            src={img.src}
                            alt={`Image ${index + 1}`}
                            width={500}
                            height={500}
                            className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
                        />
                    </div>
                ))}
            </div>
            <button type="button" class="text-white bg-[#fa6ec4] hover:bg-[#fa6ec4]focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-[#fa6ec4] dark:hover:bg-[#fa6ec4] dark:focus:ring-bg-[#fa6ec4]">
                <Link href="/Gallerys">More
                </Link>

            </button>

        </div>
    );
};

export default MasonryGallery;
