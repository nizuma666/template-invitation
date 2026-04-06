"use client"
import { Copy, Check } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion"

interface DebitCardProps {
    bank: string;
    name: string;
    rekening: string;
    bg: string;
    logo: string; // Menggunakan logo bank (BSI/Mandiri) dari referensi
}

export default function DebitCard({ bank, name, rekening, bg, logo }: DebitCardProps) {
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
        <div className={`relative overflow-hidden rounded-2xl p-6 h-48 flex flex-col justify-between shadow-sm border border-gray-100 ${bg}`}>
            {/* Dekorasi Background Bulatan (dari kode Anda) */}
            <div className="absolute w-40 h-40 rounded-full bg-white/10 -top-10 -right-10 z-0" />
            <div className="absolute w-24 h-24 rounded-full bg-white/5 bottom-5 left-1/2 z-0" />

            <div className="relative z-10 flex justify-between items-start">
                {/* Logo Bank */}
                <div className="bg-white/90 p-2 rounded-lg inline-block">
                    <p className="text-xs font-bold text-gray-800">{bank}</p>
                </div>
                <Image src="/mastercard-logo.svg" width={40} height={25} alt="Mastercard" className="opacity-80" />
            </div>

            <div className="relative z-10">
                <p className="text-white/70 text-[10px] uppercase tracking-widest mb-1">Account Name</p>
                <p className="text-white font-medium text-sm mb-3">{name}</p>
                
                <div className="flex justify-between items-end">
                    <div>
                        <p className="text-white/70 text-[10px] uppercase tracking-widest mb-1">Account Number</p>
                        <p className="text-white font-bold text-lg tracking-wider">{rekening}</p>
                    </div>

                    <button
                        onClick={handleCopy}
                        className="flex items-center gap-2 bg-white/20 hover:bg-white/30 backdrop-blur-md text-white px-4 py-2 rounded-full text-xs transition-all active:scale-95"
                    >
                        {copied ? <Check size={14} /> : <Copy size={14} />}
                        <span>{copied ? "Copied" : "Copy"}</span>
                    </button>
                </div>
            </div>
        </div>
    );
}