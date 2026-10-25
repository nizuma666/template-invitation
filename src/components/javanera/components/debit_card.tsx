"use client"
import { Copy, Check } from "lucide-react";
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
        <div className="relative overflow-hidden rounded-2xl p-6 h-48 flex flex-col justify-between shadow-sm border border-javanera/10 bg-white">
            <div className="absolute inset-0 opacity-30 bg-[url(/javanera/pattern.webp)] bg-cover" />

            <p className="relative text-lg font-black text-javanera tracking-tighter uppercase">{bank}</p>

            <div className="relative flex justify-between items-end">
                <div className="flex flex-col gap-1">
                    <p className="text-[#4A4A4A] font-medium text-sm leading-none uppercase tracking-wide">{name}</p>
                    <p className="text-[#1A1A1A] font-bold text-lg tracking-wider">{rekening}</p>
                </div>

                <button
                    onClick={handleCopy}
                    className={`flex items-center gap-2 px-5 py-2 rounded-lg text-xs font-bold transition-all active:scale-90 shadow-md cursor-pointer text-white ${
                        copied ? "bg-[#2D9E64]" : "bg-javanera hover:bg-[#5f3f37]"
                    }`}
                >
                    {copied ? <Check size={14} strokeWidth={3} /> : <Copy size={14} strokeWidth={3} />}
                    <span>{copied ? "Copied" : "Copy"}</span>
                </button>
            </div>
        </div>
    );
}
