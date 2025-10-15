/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import Image from "next/image"
import chip from "!/chip.svg"
import masterCard from "!/master-card.svg"
import { Copy } from "lucide-react"
import DebitCard from "./components/debit-card"
export default function Section4({ content }: { content: any }) {
    return (
        <div className="py-10 px-6 flex flex-col gap-10 bg-white">
            <div className="flex flex-col items-center gap-4">
                <p className="text-rose1 text-heading1 font-bold text-center text-nowrap">{content.title}</p>
                <p className="text-neutral-text4 text-center">{content.desc}</p>
            </div>
            <div className="flex flex-col gap-4">
                {content.card.map((item: any, index: number) => (
                    <DebitCard key={index} bank={item.bank} name={item.name} bg={item.background} rekening={item.rekening} chip={chip} masterCard={masterCard} />
                ))}
            </div>
        </div>
    )
}