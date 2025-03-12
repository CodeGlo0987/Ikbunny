import Image from "next/image";

const images = [
    { src: "/Portfolio/Feetpaw (1).jpg", span: "row-span-1 col-span-1" },
    { src: "/Portfolio/Feetpaw (2).jpg", span: "row-span-1 col-span-1" },
    { src: "/Portfolio/Feetpaw (3).jpg", span: "row-span-2 col-span-2" },
    { src: "/Portfolio/Feetpaw (4).jpg", span: "row-span-2 col-span-1" },
    { src: "/Portfolio/Feetpaw (5).jpg", span: "row-span-1 col-span-1" },

    { src: "/Portfolio/Fullsuit (1).jpg", span: "row-span-1 col-span-2" },
    { src: "/Portfolio/Fullsuit (19).jpg", span: "row-span-2 col-span-1" },
    { src: "/Portfolio/Fullsuit (20).jpg", span: "row-span-1 col-span-1" },
    { src: "/Portfolio/Fullsuit (21).jpg", span: "row-span-2 col-span-2" },
    { src: "/Portfolio/Fullsuit (22).jpg", span: "row-span-1 col-span-1" },
    { src: "/Portfolio/Fullsuit (23).jpg", span: "row-span-1 col-span-1" },
    { src: "/Portfolio/Fullsuit (32).jpg", span: "row-span-2 col-span-2" },
    { src: "/Portfolio/Fullsuit (33).jpg", span: "row-span-2 col-span-1" },
    { src: "/Portfolio/Fullsuit (34).jpg", span: "row-span-2 col-span-1" },
    { src: "/Portfolio/Fullsuit (35).jpg", span: "row-span-1 col-span-2" },
    { src: "/Portfolio/Fullsuit (36).jpg", span: "row-span-2 col-span-1" },
    { src: "/Portfolio/Fullsuit (37).jpg", span: "row-span-1 col-span-1" },
    { src: "/Portfolio/Fullsuit (38).jpg", span: "row-span-2 col-span-2" },
    { src: "/Portfolio/Fullsuit (39).jpg", span: "row-span-1 col-span-1" },
    { src: "/Portfolio/Fullsuit (40).jpg", span: "row-span-1 col-span-1" },
    { src: "/Portfolio/Fullsuit (41).jpg", span: "row-span-2 col-span-1" },
    { src: "/Portfolio/Fullsuit (42).jpg", span: "row-span-1 col-span-2" },
    { src: "/Portfolio/Fullsuit (43).jpg", span: "row-span-1 col-span-1" },
    { src: "/Portfolio/Fullsuit (44).jpg", span: "row-span-1 col-span-1" },
    { src: "/Portfolio/Fullsuit (45).jpg", span: "row-span-2 col-span-2" },
    { src: "/Portfolio/Fullsuit (46).jpg", span: "row-span-1 col-span-1" },
    { src: "/Portfolio/Fullsuit (47).jpg", span: "row-span-1 col-span-1" },
    { src: "/Portfolio/Fullsuit (48).jpg", span: "row-span-2 col-span-1" },
    { src: "/Portfolio/Fullsuit (49).jpg", span: "row-span-1 col-span-2" },
    { src: "/Portfolio/Fullsuit (50).jpg", span: "row-span-1 col-span-1" },
    { src: "/Portfolio/Fullsuit (51).jpg", span: "row-span-1 col-span-1" },
    { src: "/Portfolio/Fullsuit (52).jpg", span: "row-span-2 col-span-1" },
    { src: "/Portfolio/Fullsuit (53).jpg", span: "row-span-1 col-span-2" },
    { src: "/Portfolio/Fullsuit (54).jpg", span: "row-span-1 col-span-1" },
    { src: "/Portfolio/Fullsuit (55).jpg", span: "row-span-2 col-span-2" },
    { src: "/Portfolio/Fullsuit (56).jpg", span: "row-span-1 col-span-1" },
    { src: "/Portfolio/Fullsuit (57).jpg", span: "row-span-1 col-span-1" },
    { src: "/Portfolio/Fullsuit (58).jpg", span: "row-span-2 col-span-1" },
    { src: "/Portfolio/Fullsuit (59).jpg", span: "row-span-1 col-span-2" },

    { src: "/Portfolio/Handpaw (1).jpg", span: "row-span-1 col-span-1" },
    { src: "/Portfolio/Handpaw (2).jpg", span: "row-span-1 col-span-1" },
    { src: "/Portfolio/Handpaw (3).jpg", span: "row-span-1 col-span-1" },
    { src: "/Portfolio/Handpaw (4).jpg", span: "row-span-1 col-span-1" },
    { src: "/Portfolio/Handpaw (5).jpg", span: "row-span-1 col-span-1" },

    { src: "/Portfolio/Head (1).jpg", span: "row-span-1 col-span-1" },
    { src: "/Portfolio/Head (2).jpg", span: "row-span-1 col-span-1" },
    { src: "/Portfolio/Head (3).jpg", span: "row-span-1 col-span-1" },
    { src: "/Portfolio/Head (4).jpg", span: "row-span-1 col-span-1" },
    { src: "/Portfolio/Head (5).jpg", span: "row-span-1 col-span-1" },
    { src: "/Portfolio/Head (6).jpg", span: "row-span-1 col-span-1" },
    { src: "/Portfolio/Head (7).jpg", span: "row-span-1 col-span-1" },
    { src: "/Portfolio/Head (8).jpg", span: "row-span-1 col-span-1" },
    { src: "/Portfolio/Head (9).jpg", span: "row-span-1 col-span-1" },
    { src: "/Portfolio/Head (10).jpg", span: "row-span-1 col-span-1" },
    { src: "/Portfolio/Head (11).jpg", span: "row-span-1 col-span-1" },
    { src: "/Portfolio/Head (12).jpg", span: "row-span-1 col-span-1" },
    { src: "/Portfolio/Head (13).jpg", span: "row-span-1 col-span-1" },
    { src: "/Portfolio/Head (14).jpg", span: "row-span-1 col-span-1" },
    { src: "/Portfolio/Head (15).jpg", span: "row-span-1 col-span-1" },

    { src: "/Portfolio/Tail (1).jpg", span: "row-span-1 col-span-1" },
    { src: "/Portfolio/Tail (2).jpg", span: "row-span-1 col-span-1" },
    { src: "/Portfolio/Tail (3).jpg", span: "row-span-1 col-span-1" },
    { src: "/Portfolio/Tail (4).jpg", span: "row-span-1 col-span-1" },
    { src: "/Portfolio/Tail (5).jpg", span: "row-span-1 col-span-1" },
    { src: "/Portfolio/Tail (6).jpg", span: "row-span-1 col-span-1" },
    { src: "/Portfolio/Tail (7).jpg", span: "row-span-1 col-span-1" },
    { src: "/Portfolio/Tail (8).jpg", span: "row-span-1 col-span-1" },
    { src: "/Portfolio/Tail (9).jpg", span: "row-span-1 col-span-1" },
    { src: "/Portfolio/Tail (10).jpg", span: "row-span-1 col-span-1" },

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
