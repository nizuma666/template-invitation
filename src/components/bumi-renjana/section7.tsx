"use client"
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import DebitCard from "./components/debit-card"; // Pastikan component ini menerima props bank, name, rekening


export default function Section7({ content }: { content: any }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="px-8 bg-[#F3E9E2] py-12">
            {/* CARD UTAMA */}
            <div className="relative mx-auto aspect-[15/17] rounded-[32px] overflow-hidden shadow-xl">
                <Image
                    src="/bumi-renjana/image-hadiah.png" // Ganti dengan path image kado cokelat Anda
                    alt="Wedding Gift"
                    fill
                    className="object-cover"
                />
                {/* Overlay Cokelat */}
                <div className="absolute inset-0 bg-[#3D2317]/70 flex flex-col justify-center p-8 text-white">
                    <p className="font-allison text-3xl text-left italic mb-[-8px]">Wedding Gift</p>
                    <h2 className="text-2xl font-bold mb-8 font-sarabun leading-tight">
                        Given with love, received <br /> with gratitude.
                    </h2>
                    <button
                        onClick={() => setIsOpen(true)}
                        className="bg-white text-[#D89F83] w-full py-4 rounded-2xl font-bold shadow-md hover:bg-gray-50 transition-all text-lg"
                    >
                        See Gift Option
                    </button>
                </div>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <div className="fixed inset-0 z-[9999] flex items-end justify-center">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsOpen(false)}
                            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                        />

                        <motion.div
                            initial={{ y: "100%" }}
                            animate={{ y: 0 }}
                            exit={{ y: "100%" }}
                            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                            className="relative bg-white rounded-t-[40px] p-8 w-full max-w-md max-h-[90dvh] overflow-auto shadow-2xl z-[10000]"
                        >
                            <div className="w-12 h-1.5 bg-gray-200 rounded-full mx-auto mb-8" />

                            <div className="text-left mb-8">
                                <p className="font-allison text-[#D89F83] text-3xl italic mb-[-5px]">Wedding Gift</p>
                                <h3 className="text-2xl font-bold text-[#1A1A1A] leading-tight font-sarabun">
                                    Given with love, received <br /> with gratitude.
                                </h3>
                            </div>

                            {/* Rekening Cards */}
                            <div className="space-y-6">
                                {content?.card?.map((item: any, index: number) => (
                                    <DebitCard 
                                        key={index} 
                                        bank={item.bank} 
                                        name={item.name} 
                                        rekening={item.rekening} 
                                    />
                                ))}
                            </div>

                            <button
                                onClick={() => setIsOpen(false)}
                                className="w-full mt-10 py-4 bg-[#D89F83] text-white rounded-xl font-bold text-lg shadow-lg shadow-[#D89F83]/20 hover:bg-[#c58d72] transition-all"
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