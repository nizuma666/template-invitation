"use client"
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Copy } from "lucide-react";
import Image from "next/image";

export default function Section6({ content }: { content: any }) {
    const [isOpen, setIsOpen] = useState(false);

    const copyToClipboard = (text: string) => {
        navigator.clipboard.writeText(text);
        alert("Nomor rekening berhasil disalin!");
    };

    return (
        <>
            {/* 1. BANNER UTAMA (Disesuaikan agar mirip image_c58dab.png) */}
            <div className="relative w-full max-w-4xl mx-auto aspect-[16/9] md:aspect-[21/9] rounded-[32px] overflow-hidden shadow-lg mb-20">
                <Image 
                    src="/blue-sky/bgHadiah.png" 
                    alt="Wedding Gift" 
                    fill 
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-[#629BC0]/70 flex flex-col justify-center items-center text-center p-6 text-white">
                    <p className="font-allison text-4xl md:text-5xl mb-2 italic">Wedding Gift</p>
                    <h2 className="text-2xl md:text-4xl font-bold mb-8 font-sarabun">
                        Given with love, received <br /> with gratitude.
                    </h2>
                    <button
                        onClick={() => setIsOpen(true)}
                        className="bg-white text-[#629BC0] px-12 py-3 rounded-full font-bold shadow-md hover:bg-gray-100 transition-all"
                    >
                        See Gift Option
                    </button>
                </div>
            </div>

            {/* 2. MODAL (Mengikuti image_c5ef23.png & image_c5916a.png) */}
            <AnimatePresence>
                {isOpen && (
                    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsOpen(false)}
                            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                        />

                        {/* Modal Content */}
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="relative w-full max-w-md bg-white rounded-[40px] p-10 shadow-2xl z-[10000]"
                        >
                            <div className="text-center mb-8">
                                <p className="font-allison text-[#629BC0] text-4xl italic mb-1">Wedding Gift</p>
                                <h3 className="text-2xl font-bold text-gray-800 leading-tight mb-4 font-sarabun">
                                    Given with love, received <br /> with gratitude.
                                </h3>
                                <p className="text-[13px] text-gray-400 leading-relaxed px-4">
                                    Should you wish to share your love and prayers through a wedding gift, it would be gratefully received and sincerely appreciated.
                                </p>
                            </div>

                            {/* Rekening Cards (Disesuaikan detailnya) */}
                            <div className="space-y-6">
                                {content.card.map((item: any, index: number) => (
                                    <div key={index} className="relative bg-white border border-gray-100 rounded-[24px] p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden">
                                        {/* Aksen Lingkaran di Pojok (Sesuai image_c5916a.png) */}
                                        <div className="absolute -top-6 -right-6 w-24 h-24 bg-[#629BC0]/5 rounded-full" />
                                        
                                        <div className="relative z-10">
                                            {/* Bank Label/Logo */}
                                            <div className="mb-6">
                                                <span className="text-xl font-bold text-[#629BC0] tracking-tighter italic uppercase">{item.bank}</span>
                                            </div>

                                            {/* Account Info */}
                                            <div className="mb-4">
                                                <p className="text-[10px] text-gray-400 uppercase tracking-widest mb-1">Account Name</p>
                                                <p className="font-bold text-gray-700 text-lg uppercase font-sarabun">{item.name}</p>
                                            </div>

                                            {/* Account Number & Copy Button */}
                                            <div className="flex items-center justify-between mt-2">
                                                <p className="text-xl font-bold text-gray-800 tracking-wider font-mono">
                                                    {item.rekening}
                                                </p>
                                                <button 
                                                    onClick={() => copyToClipboard(item.rekening)}
                                                    className="flex items-center gap-1.5 py-1.5 px-4 rounded-full border border-[#629BC0] text-[#629BC0] text-sm font-bold hover:bg-[#629BC0] hover:text-white transition-colors"
                                                >
                                                    <Copy size={14} />
                                                    Copy
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Tombol Tutup (Sesuai image_c5916a.png) */}
                            <button
                                onClick={() => setIsOpen(false)}
                                className="w-full mt-10 py-4 bg-[#629BC0] text-white rounded-full font-bold text-lg shadow-lg shadow-blue-200 hover:bg-[#5386a8] transition-all"
                            >
                                Tutup
                            </button>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </>
    );
}