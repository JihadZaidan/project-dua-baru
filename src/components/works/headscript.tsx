"use client"

import { useRef } from "react"
import { useSlideFromLeft, useSlideFromRight } from "@/library/animations"

export default function HeaderWork() {

    const headRef = useRef<HTMLHeadingElement>(null);
    const graphyRef = useRef<HTMLParagraphElement>(null);
    useSlideFromLeft(headRef, 0.3);
    useSlideFromRight(graphyRef, 0.3);

    return (
        <div className="max-w-full w-full bg-neutral-100 lg:px-20 lg:pt-16 lg:pb-20 px-8 pt-6 pb-14">
            <div className="w-full flex flex-col lg:gap-25 gap-16">
                <h1 ref={headRef} className="font-sans font-medium text-left lg:text-7xl text-4xl text-neutral-800 leading-[130%]">Check Our <br /> Works</h1>
                <p ref={graphyRef} className="font-sans font-medium lg:text-right lg:w-full lg:text-3xl text-base text-neutral-800 leading-[150%]">
                    — Dive into Our Works and Explore <br />
                    Transformative Digital Strategies, <br />
                    Branding Initiatives, and Innovative Web <br />
                    and App Developments.
                </p>
            </div>
        </div>
    )
}
