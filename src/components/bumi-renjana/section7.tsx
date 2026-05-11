"use client"
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import DebitCard from "./components/debit-card";
/* eslint-disable @typescript-eslint/no-explicit-any */

export default function Section7({ content }: { content: any }) {
    const [isOpen, setIsOpen] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        if (isOpen) {
            window.document.body.style.overflowY = "hidden";
        } else {
            window.document.body.style.overflowY = "";
        }
    }, [isOpen]);

    const drawer = (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 flex items-end justify-center" style={{ zIndex: 99999 }}>
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
                        className="relative bg-white rounded-t-[40px] p-8 w-full max-w-md max-h-[90dvh] overflow-auto shadow-2xl"
                    >
                        <div className="w-12 h-1.5 bg-gray-200 rounded-full mx-auto mb-8" />

                        <div className="text-left mb-8">
                            <p className="font-allison text-[#D89F83] text-[32px] mb-[-5px]">Wedding Gift</p>
                            <h3 className="text-2xl font-semibold text-[#212121]  font-sarabun">
                                Given with love, received <br /> with gratitude.
                            </h3>
                        </div>

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
                            className="w-full mt-10 py-4 bg-[#D89F83] text-white rounded-lg font-bold text-lg shadow-lg shadow-[#D89F83]/20 hover:bg-[#c58d72] transition-all"
                        >
                            Tutup
                        </button>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );

    return (
        <div id='4' className="px-8 bg-[#D89F8333] w-full z-10 relative py-12">
            {/* CARD UTAMA */}
            <div className="w-full h-[203px] relative">
                <Image
                    src="/bumi-renjana/image-hadiah.png"
                    alt="Wedding Gift"
                    fill
                    className="object-cover rounded-lg"
                />
                <div className="absolute inset-0 rounded-lg bg-[#653C3099] flex flex-col justify-center p-3 text-white">
                    <p className="font-allison text-5xl text-left italic mb-[-8px]">Wedding Gift</p>
                    <h2 className="text-2xl font-bold font-sarabun leading-tight">
                        Given with love, received with gratitude.
                    </h2>
                    <button
                        onClick={() => setIsOpen(true)}
                        className="bg-white cursor-pointer text-[#D89F83] w-full py-2 rounded-[8px] mt-3 font-bold shadow-md hover:bg-gray-50 transition-all text-lg"
                    >
                        See Gift Option
                    </button>
                </div>
            </div>

            {/* Portal: render drawer langsung ke document.body */}
            {mounted && createPortal(drawer, document.body)}
        </div>
    );
}