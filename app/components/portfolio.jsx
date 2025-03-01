import Image from "next/image";

const images = [
    { src: "/f1.jpeg", span: "row-span-1 col-span-1" },
    { src: "/f2.jpeg", span: "row-span-1 col-span-1" },
    { src: "/f3.jpeg", span: "row-span-2 col-span-2" },
    { src: "/f4.jpeg", span: "row-span-2 col-span-1" },
    { src: "/f4.jpeg", span: "row-span-1 col-span-1" },
    { src: "/f5.jpeg", span: "row-span-1 col-span-2" },
    { src: "/f6.jpeg", span: "row-span-2 col-span-1" },
    { src: "/f7.jpeg", span: "row-span-1 col-span-1" },
    { src: "/f8.jpeg", span: "row-span-2 col-span-2" },
    { src: "/f9.jpeg", span: "row-span-1 col-span-1" },
    { src: "/f10.jpeg", span: "row-span-1 col-span-1" },
    { src: "/f11.jpeg", span: "row-span-2 col-span-2" },
    { src: "/f12.jpeg", span: "row-span-2 col-span-1" },
    { src: "/f12.jpeg", span: "row-span-2 col-span-1" },
    { src: "/f13.jpeg", span: "row-span-1 col-span-2" },
    { src: "/f14.jpeg", span: "row-span-2 col-span-1" },
    { src: "/f15.jpeg", span: "row-span-1 col-span-1" },
    { src: "/f16.jpeg", span: "row-span-2 col-span-2" },
    { src: "/f16.jpeg", span: "row-span-1 col-span-1" },
    { src: "/f16.jpeg", span: "row-span-1 col-span-1" },

    { src: "/f17.jpeg", span: "row-span-2 col-span-1" },
    { src: "/f20.jpeg", span: "row-span-1 col-span-2" },
    { src: "/f21.jpeg", span: "row-span-1 col-span-1" },
    // { src: "/f19.jpeg", span: "row-span-1 col-span-1" },
    // { src: "/f20.jpeg", span: "row-span-1 col-span-1" },
];

const MasonryGallery = () => {
    return (
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
    );
};

export default MasonryGallery;
