"use client"
import { Copy, Check } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

interface DebitCardProps {
    bank: string;
    name: string;
    rekening: string;
}

export default function DebitCard({ bank, name, rekening }: DebitCardProps) {
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
        <div className="relative overflow-hidden rounded-2xl p-6 h-52 flex flex-col justify-between shadow-sm border border-gray-100 bg-white group">
            
            {/* Background Texture (Kertas/Marmer) */}
            <div className="absolute inset-0 opacity-40 z-0">
                <Image
                    src="/bumi-renjana/bg-gift-card.png"
                    alt="card texture"
                    fill
                    className="object-cover"
                />
            </div>

          

            {/* Logo Bank (Tulisan) */}
            <div className="relative z-20">
                <p className="text-lg font-black text-[#1A1A1A] tracking-tighter  uppercase flex items-center gap-1">
                    {bank}
                </p>
            </div>

            {/* Informasi Nama & Nomor Rekening */}
            <div className="relative z-20 flex justify-between items-end">
                <div className="flex flex-col gap-1">
                    <p className="text-[#4A4A4A] font-medium text-sm leading-none uppercase tracking-wide">
                        {name}
                    </p>
                    <p className="text-[#1A1A1A] font-bold text-lg tracking-wider font-sarabun">
                        {rekening}
                    </p>
                </div>

                {/* Button Copy Sesuai Desain */}
                <button
                    onClick={handleCopy}
                    className={`flex bg-[#D89F83] items-center gap-2 px-5 py-2 rounded-full text-xs font-bold transition-all active:scale-90 shadow-md ${
                        copied 
                        ? " text-white" 
                        : " text-white hover:bg-[#c58d72]"
                    }`}
                >
                    {copied ? <Check size={14} strokeWidth={3}/> : <Copy size={14} strokeWidth={3}/>}
                    <span>{copied ? "Copied" : "Copy"}</span>
                </button>
            </div>

            {/* Efek Gradasi Halus di bawah */}
            <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-gray-50/50 to-transparent z-10 pointer-events-none"></div>
        </div>
    );
}