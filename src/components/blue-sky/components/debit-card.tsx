"use client"
import { Copy, Check } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion"
import ImageBgCard from "!/blue-sky/imageBgCard.png";

interface DebitCardProps {
    bank: string;
    name: string;
    rekening: string;
    bg: string;
    logo: string; // Menggunakan logo bank (BSI/Mandiri) dari referensi
}

export default function DebitCard({ bank, name, rekening, }: DebitCardProps) {
    const [copied, setCopied] = useState(false);


    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(rekening);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error("Copy failed", err);
        }
    };

    return (
        <div className={`relative overflow-hidden rounded-2xl p-6 px-3 h-48 flex flex-col justify-between shadow-sm border border-gray-100`}>
            <Image src={ImageBgCard} alt="Background Card" className="absolute  object-cover -z-10 right-0 top-0" />

            <div className="relative z-10 flex justify-between items-start">
                <div className="bg-white/90 p-2 rounded-lg inline-block">
                    <p className="text-xs font-bold text-gray-800">{bank}</p>
                </div>
                {/* <Image src="/mastercard-logo.svg" width={40} height={25} alt="Mastercard" className="opacity-80" /> */}
            </div>

            <div className="relative z-10">

                <div className="flex justify-between items-end">
                    <div>
                        <p className="text-[#212121] font-medium text-sm mb-3">{name}</p>
                        <p className="text-[#212121] font-bold text-lg ">{rekening}</p>
                    </div>

                    <button
                        onClick={handleCopy}
                        className="flex items-center gap-2 border border-[#629BC0]  text-[#629BC0] px-4 py-2 rounded-full text-xs transition-all active:scale-95"
                    >
                        {copied ? <Check size={14} /> : <Copy size={14} />}
                        <span>{copied ? "Copied" : "Copy"}</span>
                    </button>
                </div>
            </div>
        </div>
    );
}