"use client"
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react"
import Card from "./components/card";
import card1 from "!/landing/card1.png"
import card2 from "!/landing/card2.png"

// dataTemplates.js
export const templates = [
    {
        id: 1,
        img: card1,
        title: "Elegant Rose",
        price: "Rp 150.000",
        disc: "Rp 120.000",
        category: "premium",
    },
    {
        id: 2,
        img: card2,
        title: "Classic Ivory",
        price: "Rp 0",
        disc: "Gratis",
        category: "tanpa_photo",
    },
    {
        id: 3,
        img: card1,
        title: "Golden Charm",
        price: "Rp 200.000",
        disc: "Rp 160.000",
        category: "premium",
    },
    {
        id: 4,
        img: card2,
        title: "Minimal Bliss",
        price: "Rp 0",
        disc: "Gratis",
        category: "tanpa_photo",
    },
    {
        id: 5,
        img: card1,
        title: "Floral Serenity",
        price: "Rp 180.000",
        disc: "Rp 150.000",
        category: "premium",
    },
    {
        id: 6,
        img: card2,
        title: "Minimal Bliss",
        price: "Rp 0",
        disc: "Gratis",
        category: "tanpa_photo",
    },
    {
        id: 7,
        img: card1,
        title: "Minimal Bliss",
        price: "Rp 0",
        disc: "Gratis",
        category: "tanpa_photo",
    },
    {
        id: 8,
        img: card2,
        title: "Minimal Bliss",
        price: "Rp 0",
        disc: "Gratis",
        category: "tanpa_photo",
    },
];

const Section3 = () => {
    const [tab, setTab] = useState("semua")
    const tabs = [
        { key: "semua", label: "Semua" },
        { key: "premium", label: "Premium" },
        { key: "tanpa_photo", label: "Tanpa Photo" },
    ];

    const handleClick = (name: string) => {
        setTab(name)
    }

    const filteredTemplates =
        tab === "semua"
            ? templates
            : templates.filter((item) => item.category === tab);

    return (
        <section className="p-16 flex flex-col gap-10 items-center">
            <header className="text-center flex flex-col gap-4">
                <h2 className="font-playfair text-heading1 font-semibold">Pilih Template Undanganmu</h2>
                <p className="text-subheading2 text-neutral-text4">Setiap cinta punya gayanya sendiri. Temukan desain yang paling mencerminkan kisahmu.</p>
            </header>
            <div className="p-2.5 border border-border-default rounded-lg flex justify-center items-center gap-2.5 shadow-tab w-fit">
                {tabs.map(({ key, label }) => (
                    <button
                        key={key}
                        onClick={() => handleClick(key)}
                        type="button"
                        className={`relative rounded-lg py-4 px-14 cursor-pointer font-medium transition-colors duration-200 ${tab === key ? "text-white" : "text-black"
                            }`}
                    >
                        {/* Latar belakang animasi */}
                        <AnimatePresence>
                            {tab === key && (
                                <motion.span
                                    layoutId="active-tab-bg"
                                    className="absolute inset-0 bg-rose1 rounded-lg z-0"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                />
                            )}
                        </AnimatePresence>

                        {/* Teks tombol */}
                        <span className="relative z-10">{label}</span>
                    </button>
                ))}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {filteredTemplates.map((item) => (
                    <Card
                        key={item.id}
                        img={item.img}
                        title={item.title}
                        price={item.price}
                        disc={item.disc}
                    />
                ))}
            </div>
        </section>
    )
}

export default Section3