"use client"
import { useState } from "react"
import { motion } from "motion/react"
import SectionHeading from "./components/section_heading"
import Reveal from "./components/reveal"
import BottomSheet from "./components/bottom_sheet"
import DebitCard from "./components/debit_card"

const cards = [
    { bank: "BCA", name: "Sari Wulandari", rekening: "1234 5678 9876 5431" },
    { bank: "BRI", name: "Supri Hartono", rekening: "9876 5432 1234 5678" },
]

export default function Section7() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <section id="4" className="relative px-6 py-14 flex flex-col gap-6 font-akatab">
            <SectionHeading title="Wedding Gift" script />

            <Reveal className="relative w-full min-h-[198px] rounded-2xl overflow-hidden bg-[url(/javanera/gift_bg.webp)] bg-[length:100%_100%] p-6 flex flex-col justify-center items-start text-white">
                <h3 className="font-alice text-[32px] leading-tight">Kirim Hadiah</h3>
                <p className="text-base leading-snug mt-2 max-w-[85%]">Pilih opsi pengiriman dan kirimkan hadiah untuk pasangan pengantin</p>
                <motion.button
                    onClick={() => setIsOpen(true)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="mt-4 bg-white text-javanera rounded-lg px-4 py-2 text-base leading-5 font-quicksand font-medium cursor-pointer"
                >
                    Kirim Hadiah Sekarang
                </motion.button>
            </Reveal>

            <BottomSheet open={isOpen} onClose={() => setIsOpen(false)}>
                <p className="font-charmonman font-bold text-[24px] leading-[30px] text-javanera mb-2">Wedding Gift</p>
                <h3 className="font-alice text-[22px] text-[#212121] mb-6">Doa restu Anda adalah hadiah terindah bagi kami.</h3>
                <div className="space-y-4">
                    {cards.map((card) => (
                        <DebitCard key={card.bank} {...card} />
                    ))}
                </div>
                <button onClick={() => setIsOpen(false)} className="w-full mt-8 py-3 bg-javanera text-white rounded-lg font-bold cursor-pointer">
                    Tutup
                </button>
            </BottomSheet>
        </section>
    )
}
