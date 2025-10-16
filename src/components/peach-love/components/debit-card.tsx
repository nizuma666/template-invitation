"use client"
import { Copy } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react"

export default function DebitCard({ bank, name, rekening, bg, chip, masterCard }: { bank: string, name: string, rekening: string, bg: string, chip: string, masterCard: string }) {
    const [copied, setCopied] = useState(false);

    const handleCopy = async () => {
        // coba API modern dulu
        try {
            if (navigator.clipboard && typeof navigator.clipboard.writeText === "function") {
                await navigator.clipboard.writeText(rekening);
            } else {
                // fallback: buat textarea sementara
                const ta = document.createElement("textarea");
                ta.value = rekening;
                ta.style.position = "fixed";
                ta.style.left = "-9999px";
                document.body.appendChild(ta);
                ta.select();
                document.execCommand("copy");
                document.body.removeChild(ta);
            }

            setCopied(true);
            // reset setelah 1.5s
            setTimeout(() => setCopied(false), 1500);
        } catch (err) {
            console.error("Copy failed", err);
            // opsional: beri notifikasi error
        }
    };
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

                <div
                    role="button"
                    aria-label={`Copy rekening ${rekening}`}
                    onClick={handleCopy}
                    onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                            e.preventDefault();
                            handleCopy();
                        }
                    }}
                    tabIndex={0}
                    className="flex gap-2 items-center text-white cursor-pointer select-none"
                >
                    <Copy width={20} height={20} color="white" />
                    <span>Copy</span>

                    {/* Feedback kecil: muncul saat copied === true */}
                    <AnimatePresence>
                        {copied && (
                            <motion.span
                                initial={{ opacity: 0, y: 6, scale: 0.95 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, y: 6, scale: 0.95 }}
                                transition={{ duration: 0.18 }}
                                className="ml-2 text-xs bg-white/10 px-2 py-1 rounded-full"
                            >
                                Copied!
                            </motion.span>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </div>
    )
}