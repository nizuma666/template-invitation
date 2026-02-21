"use client"
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react"
import Card from "./components/card";
import card1 from "!/landing/card1.png"
import card2 from "!/landing/card2.png"
import card3 from "!/landing/card3.png"
import card4 from "!/landing/card4.png"

// dataTemplates.js
export const templates = [
    {
        id: 1,
        img: card1,
        title: "Black & White",
        price: "Rp 69.000",
        disc: "Rp 125.000",
        category: "premium",
        url: 'https://arunara.id/b&w'
    },
    {
        id: 2,
        img: card2,
        title: "Greenflag",
        price: "Rp 59.000",
        disc: "Rp. 99.000",
        category: "tanpa_photo",
        url: 'https://arunara.id/green-flag'
    },
    {
        id: 3,
        img: card3,
        title: "Peach Love",
        price: "Rp 69.000",
        disc: "Rp 125.0000",
        category: "premium",
        url: 'https://arunara.id/peach-love'
    }
    // {
    //     id: 4,
    //     img: card4,
    //     title: "Blue Sky",
    //     price: "Rp 69.000",
    //     disc: "Rp 125.0000",
    //     category: "premium",
    //     url: ''
    // }
];

const Section3 = ({ id }: { id: string }) => {
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
        <section id={id} className="px-4 py-12 lg:p-16 flex flex-col gap-10 items-center">
            <header className="text-center flex flex-col gap-4">
                <h2 className="font-playfair text-2xl lg:text-heading1 font-semibold">Pilih Template Undanganmu</h2>
                <p className="lg:text-subheading2 text-neutral-text4">Setiap cinta punya gayanya sendiri. Temukan desain yang paling mencerminkan kisahmu.</p>
            </header>
            {/* <div className="p-2.5 border border-border-default rounded-lg flex lg:justify-center items-center gap-2.5 shadow-tab w-full lg:w-fit">
                {tabs.map(({ key, label }) => (
                    <button
                        key={key}
                        onClick={() => handleClick(key)}
                        type="button"
                        className={`relative w-full rounded-lg p-2.5 lg:py-4 lg:px-14 cursor-pointer font-medium transition-colors duration-200 ${tab === key ? "text-white" : "text-black"
                            }`}
                    >
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
                        <span className="relative z-10 text-sm lg:text-base text-nowrap">{label}</span>
                    </button>
                ))}
            </div> */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
                {filteredTemplates.map((item) => (
                    <Card
                        key={item.id}
                        img={item.img}
                        title={item.title}
                        price={item.price}
                        disc={item.disc}
                        url={item.url}
                    />
                ))}
            </div>
        </section>
    )
}

export default Section3