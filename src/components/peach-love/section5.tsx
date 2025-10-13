"use client"
/* eslint-disable @typescript-eslint/no-explicit-any */
import grid1 from "!/grid1.png"
import grid2 from "!/grid2.png"
import grid3 from "!/grid3.png"
import grid4 from "!/grid4.png"
import grid5 from "!/grid5.png"
import grid6 from "!/grid6.png"
import Image from "next/image"
export default function Section5({ content }: { content: any }) {
    return (
        <div className="py-10 px-6 flex flex-col gap-10 bg-rose5">
            <div className="flex flex-col items-center gap-4">
                <p className="text-rose1 text-heading1 font-bold">{content.title}</p>
                <p className="text-neutral-text4 text-center">{content.desc}</p>
            </div>
            <div className="flex flex-col gap-2">
                <div className="grid grid-cols-2 grid-rows-2 gap-2 overflow-hidden rounded-xl w-full">
                    <div className="row-span-2 h-full">
                        <Image src={grid1} alt="Gallery 1" className="object-cover w-full rounded-lg" />
                    </div>
                    <div className="h-full w-full">
                        <Image src={grid2} alt="Gallery 2" className="object-cover w-full h-full rounded-lg" />
                    </div>
                    <div className="h-full w-full">
                        <Image src={grid3} alt="Gallery 3" className="object-cover w-full h-full rounded-lg" />
                    </div>
                </div>
                <div className="grid grid-cols-2 grid-rows-2 gap-2 overflow-hidden rounded-xl w-full">
                    <div className="h-full w-full">
                        <Image src={grid4} alt="Gallery 1" className="object-cover w-full h-full rounded-lg" />
                    </div>
                    <div className="row-span-2 h-full">
                        <Image src={grid6} alt="Gallery 3" className="object-cover w-full rounded-lg" />
                    </div>
                    <div className="h-full w-full">
                        <Image src={grid5} alt="Gallery 2" className="object-cover w-full h-full rounded-lg" />
                    </div>
                    
                </div>
            </div>
        </div>
    )
}