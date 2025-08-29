"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Kopi from "../../../public/expertise/coffes.png";
import Tamar from "../../../public/expertise/brands.png";
import Cody from "../../../public/expertise/coder.png";

const images = [
    { src: Kopi, alt: "coffeship", scale: "scale-[50%]" },
    { src: Tamar, alt: "conferention", scale: "scale-[70%]" },
    { src: Cody, alt: "coder", scale: "scale-[50%]" },
];

export default function Uppertise() {
    return (
        <div className="max-w-full w-full lg:px-20 lg:pt-12 lg:pb-18 px-5 pt-6 pb-14">
            <div className="w-full flex flex-col justify-left gap-20">
                {/* Manual horizontal overflow (no auto) */}
                <div className="w-full overflow-x-auto scroll-smooth snap-x snap-mandatory [-ms-overflow-style:none] [scrollbar-width:none]"
                    style={{ WebkitOverflowScrolling: "touch" }}>
                    {/* hide scrollbar (optional) */}
                    <style jsx>{`div::-webkit-scrollbar { display: none; }`}</style>

                    <div className="flex items-center gap-6 lg:gap-10 px-5">
                        <div className="flex-none snap-start">
                            <h3 className="text-neutral-800 lg:text-3xl text-lg font-medium font-sans">01/ DIGITAL STRATEGY</h3>
                            <Image src={Kopi} alt="coffeship" className="h-[370px] lg:h-[700px] w-auto object-contain" />
                        </div>
                        <div className="flex-none snap-start">
                            <h3 className="text-neutral-800 lg:text-3xl text-lg font-medium font-sans">02/ BRANDING</h3>
                            <Image src={Tamar} alt="conferention" className="h-[370px] lg:h-[700px] w-auto object-contain" />
                        </div>
                        <div className="flex-none snap-start">
                            <h3 className="text-neutral-800 lg:text-3xl text-lg font-medium font-sans">03/ WEB DEVELOPMENT</h3>
                            <Image src={Cody} alt="coder" className="h-[370px] lg:h-[700px] w-auto object-contain" />
                        </div>
                    </div>
                </div>

                {/* Text Section */}
                <div className="w-full flex lg:flex-row flex-col lg:justify-between justify-left items-left gap-10">
                    <h3 className="text-neutral-800 font-sans font-medium lg:text-5xl text-3xl text-left leading-[140%] pl-5">
                        Few of Our <br /> Specialites
                    </h3>
                    <p className="text-neutral-800 font-sans font-medium lg:text-3xl text-base leading-[140%] pl-5">
                        — From creative projects that push the <br /> boundaries of our
                        team&apos;s imagination. <br /> Build it into all of our works.
                    </p>
                </div>
            </div>
        </div>
    );
}
