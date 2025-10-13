/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import Image from "next/image"
import chip from "!/chip.svg"
import masterCard from "!/master-card.svg"
import { Copy } from "lucide-react"
import DebitCard from "./components/debit-card"
export default function Section4({ content }: { content: any }) {
    return (
        <div className="py-10 px-6 flex flex-col gap-10">
            <div className="flex flex-col items-center gap-4">
                <p className="text-rose1 text-heading1 font-bold">{content.title}</p>
                <p className="text-neutral-text4 text-center">{content.desc}</p>
            </div>
            <div className="flex flex-col gap-4">
                {content.card.map((item: any, index: number) => (
                    <DebitCard key={index} bank={item.bank} name={item.name} bg={item.background} rekening={item.rekening} chip={chip} masterCard={masterCard} />
                ))}
                {/* <div className="bg-rose1 rounded-lg py-6 px-4 flex flex-col gap-[45px] justify-between relative overflow-hidden">
                    <div className="absolute w-[256px] h-[256px] rounded-full bg-[#FFFFFF1A] z-0 -translate-y-1/2 top-1/2 left-1/2"></div>
                    <div className="absolute w-[330px] h-[330px] rounded-full bg-[#FFFFFF1A] z-10 -translate-y-1/2 top-1/2 left-22"></div>
                    <div className="flex justify-between items-center z-20">
                        <div className="flex gap-3 items-center">
                            <div className="bg-white rounded-md">
                                <Image src={chip} width={31.5} height={20} alt="debit card" />
                            </div>
                            <p className="font-semibold text-white">BCA</p>
                        </div>
                        <Image src={masterCard} alt="debit card" />
                    </div>
                    <div className="flex justify-between items-end z-10">
                        <div className="flex flex-col gap-1">
                            <p className="text-sm text-white">JHON DOE</p>
                            <p className="text-white font-bold">1234 5678 9876 5431</p>
                        </div>
                        <div className="flex gap-2 items-center text-white">
                            <Copy width={20} height={20} color="white"/>
                            Copy
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
    )
}