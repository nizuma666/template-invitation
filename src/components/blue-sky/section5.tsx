"use client"
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Copy } from "lucide-react";
import Image from "next/image";
import DebitCard from "./components/debit-card";

export default function Section5({ content }: { content: any }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="px-8 bg-[#629BC033] p-6">
            <div className="relative mx-auto aspect-[16/12] rounded-xl  overflow-hidden shadow-lg">
                <Image
                    src="/blue-sky/bgHadiah.png"
                    alt="Wedding Gift"
                    fill
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-[#629BC0]/70 flex flex-col justify-center p-6 text-white">
                    <p className="font-allison text-4xl md:text-5xl text-left italic">Wedding Gift</p>
                    <h2 className="text-xl md:text-4xl font-bold mb-8 font-sarabun">
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
                            initial={{ y: "100%" }}
                            animate={{ y: 0 }}
                            exit={{ y: "100%" }}
                            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                            className="absolute bottom-0 left-0 right-0 bg-white rounded-t-[32px] p-6 max-h-[90dvh] overflow-auto shadow-2xl z-[10000]"
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
                                    <DebitCard key={index} bank={item.bank} name={item.name} rekening={item.rekening} />
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
        </div>
    );
}