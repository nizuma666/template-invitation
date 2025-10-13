"use client"
import { Copy } from "lucide-react";
import Image from "next/image";

export default function DebitCard({ bank, name, rekening, bg, chip, masterCard }: { bank: string, name: string, rekening: string, bg: string, chip: string, masterCard: string }) {
    return (
        <div className={`${bg} rounded-lg py-6 px-4 flex flex-col gap-[45px] justify-between relative overflow-hidden`}>
            <div className="absolute w-[256px] h-[256px] rounded-full bg-[#FFFFFF1A] z-0 -translate-y-1/2 top-1/2 left-1/2"></div>
            <div className="absolute w-[330px] h-[330px] rounded-full bg-[#FFFFFF1A] z-10 -translate-y-1/2 top-1/2 left-22"></div>
            <div className="flex justify-between items-center z-20">
                <div className="flex gap-3 items-center">
                    <div className="bg-white rounded-md">
                        <Image src={chip} width={31.5} height={20} alt="debit card" />
                    </div>
                    <p className="font-semibold text-white">{bank}</p>
                </div>
                <Image src={masterCard} alt="debit card" />
            </div>
            <div className="flex justify-between items-end z-10">
                <div className="flex flex-col gap-1">
                    <p className="text-sm text-white">{name}</p>
                    <p className="text-white font-bold">{rekening}</p>
                </div>
                <div className="flex gap-2 items-center text-white">
                    <Copy width={20} height={20} color="white" />
                    Copy
                </div>
            </div>
        </div>
    )
}