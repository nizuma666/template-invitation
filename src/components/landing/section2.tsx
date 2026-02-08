"use client"
import love from "!/landing/icon-love-landing-section2.svg"
import glass from "!/landing/icon-glass-landing-section2.svg"
import makeup from "!/landing/icon-makeup-landing-section2.svg"
import Image, { StaticImageData } from "next/image"
import img from "!/landing/unlimited_guest.png"
import img2 from "!/landing/easy-change.png"
import img3 from "!/landing/realtime.png"
import img4 from "!/landing/gift-account.png"
import img5 from "!/landing/send-fast.png"
import img6 from "!/landing/connect-with-gmaps.png"
import img7 from "!/landing/rsvp.png"
import { useState } from "react"
import { AnimatePresence, motion } from "motion/react"
import { ChevronDown } from "lucide-react"

const featureData = [
    {
        id: 1,
        title: "Undangan Tanpa Batas (Unlimited Guests)",
        description:
            "Kabar bahagiamu pantas dirayakan bersama siapa pun tanpa batas jumlah tamu. Arunara memudahkanmu untuk menyebarkan undangan ke banyak orang sekaligus tanpa kendala. Semua orang yang berarti bagimu bisa turut merasakan kebahagiaan di hari spesialmu.",
        image: img,
        tab: 'Unlimited Guests'
    },
    {
        id: 2,
        title: "Ubah Tanpa Ribet",
        description:
            "Atur semua detail undangan dengan mudah dari satu dashboard, mulai dari mengganti nama, hingga musik dan galeri foto. Kamu bisa menyesuaikan tampilannya sesuai keinginan tanpa perlu keahlian teknis. ",
        image: img2,
        tab: 'Ubah Tanpa Ribet'
    },
    {
        id: 3,
        title: "Lihat Hasilnya Secara Real-Time",
        description:
            "Setiap perubahan yang kamu buat langsung terupdate tanpa harusmenunggu lama. Kamu bisa memastikan foto, dan teks tampil seindah yang kamu bayangkan. Dengan pengalaman yang cepat dan responsif, membuat undangan jadi terasa menyenangkan dan intuitif.",
        image: img3,
        tab: 'Real-Time Preview'
    },
    {
        id: 4,
        title: "Atur Rekening Gift dengan Elegan",
        description:
            "Tambahkan rekening untuk tamu yang ingin berbagi kebahagiaan dengan cara praktis. Semua tersaji dalam tampilan yang rapi dan menyatu dengan desain undanganmu. Kamu tak perlu lagi kirim nomor rekening secara terpisah semuanya sudah tertata indah di satu tempat.",
        image: img4,
        tab: 'Atur Rekening Gift'
    },
    {
        id: 5,
        title: "Kirim Undangan Sekejap Mata",
        description:
            "Selesai membuat undangan? Langsung bagikan ke siapa pun hanya dengan satu klik. Kamu bisa mengirimnya lewat WhatsApp atau tautan pribadi dengan mudah. Tak ada batasan atau proses rumit hanya langkah sederhana untuk membagikan kebahagiaanmu.",
        image: img5,
        tab: 'Instan Share'
    },
    {
        id: 6,
        title: "Alamat Terhubung ke Google Maps",
        description:
            "Lokasi acara langsung terhubung ke Google Maps agar tamu tak perlu repot mencari arah. Cukup satu sentuhan, mereka bisa menavigasi perjalanan dengan mudah dan tepat waktu. Tak ada lagi momen panik di hari istimewa karena semua sudah terintegrasi dengan sempurna.",
        image: img6,
        tab: 'Link to Google Maps'
    },
    {
        id: 7,
        title: "RSVP & Wedding Wishes",
        description:
            "Fitur RSVP untuk konfirmasi kehadiran dan kolom Wedding Wishes agar tamu dapat meninggalkan ucapan spesial.",
        image: img7,
        tab: 'RSVP & Wedding Wishes'
    }
];
const Section2 = ({ id }: { id: string }) => {
    type Feature = (typeof featureData)[number]

    const [active, setActive] = useState<Feature | null>(featureData[0])
    return (
        <section id={id} className="w-full min-h-screen bg-white relative pt-72 lg:pt-[80px] px-4 lg:px-16">
            <div className="absolute -top-28 lg:-top-30 z-30 lg:mx-auto left-1/2 -translate-x-1/2 p-6 w-full lg:w-[1200px]">
                <div className="bg-white border border-rose4 rounded-xl py-4 px-6 lg:p-8 flex flex-col lg:flex-row justify-center items-center gap-6 lg:gap-8">
                    <div className="flex items-center justify-center gap-4">
                        <Image src={love} width={64} height={64} alt="Meaningful" />
                        <div className="flex flex-col gap-1">
                            <p className="text-neutral-text5 text-subheading2 lg:text-subheading1 font-semibold">Meaningful</p>
                            <p className="text-neutral-text4 text-sm lg:text-base">Dirancang untuk menyampaikan kisah cintamu.</p>
                        </div>
                    </div>
                    <div className="h-[1px] w-full lg:w-[1px] lg:h-16 border-rose3 border" />
                    <div className="flex items-center justify-center gap-4">
                        <Image src={glass} width={64} height={64} alt="Meaningful" />
                        <div className="flex flex-col gap-1">
                            <p className="text-neutral-text5 text-subheading2 lg:text-subheading1 font-semibold">Effortless</p>
                            <p className="text-neutral-text4 text-sm lg:text-base">Siap dalam hitungan menit, persiapan tanpa ribet.</p>
                        </div>
                    </div>
                    <div className="h-[1px] w-full lg:w-[1px] lg:h-16 border-rose3 border" />
                    <div className="flex items-center justify-center gap-4">
                        <Image src={makeup} width={64} height={64} alt="Meaningful" />
                        <div className="flex flex-col gap-1">
                            <p className="text-neutral-text5 text-subheading2 lg:text-subheading1 font-semibold">Personalized</p>
                            <p className="text-neutral-text4 text-sm lg:text-base">Undangan bisa disesuaikan dengan keinginan kamu.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* MOBILE VERSION */}
            <div className="flex flex-col gap-6 lg:hidden px-4">
                <header className="flex flex-col gap-2 text-center">
                    <p className="font-playfair font-semibold text-heading2">
                        Kemudahan di Persiapan Nikahmu
                    </p>
                    <p className="text-sm text-neutral-text4">
                        Nikmati setiap langkah menuju hari bahagia tanpa ribet.
                    </p>
                </header>

                {featureData.map((item) => {
                    const isActive = active?.id === item.id

                    return (
                        <div
                            key={item.id}
                            className="rounded-2xl border border-rose3 bg-white overflow-hidden"
                        >
                            {/* HEADER */}
                            <button
                                onClick={() => setActive(isActive ? null : item)}
                                className="w-full flex justify-between items-center px-4 py-4 text-left"
                            >
                                <p className="font-semibold text-rose1">{item.title}</p>

                                <motion.span
                                    animate={{ rotate: isActive ? 180 : 0 }}
                                    transition={{ duration: 0.25 }}
                                    className="text-sm"
                                >
                                    <ChevronDown color="#9E354A" />
                                </motion.span>
                            </button>

                            {/* CONTENT */}
                            <AnimatePresence initial={false}>
                                {isActive && (
                                    <motion.div
                                        key="content"
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{
                                            duration: 0.35,
                                            ease: "easeInOut"
                                        }}
                                        className="overflow-hidden"
                                    >
                                        <div className="flex flex-col gap-4 px-4 pb-4">
                                            <motion.div
                                                initial={{ scale: 0.95, opacity: 0 }}
                                                animate={{ scale: 1, opacity: 1 }}
                                                transition={{ delay: 0.1 }}
                                            >
                                                <Image
                                                    src={item.image}
                                                    alt={item.title}
                                                    className="w-full h-[180px] object-cover rounded-xl"
                                                />
                                            </motion.div>

                                            <motion.p
                                                initial={{ y: 8, opacity: 0 }}
                                                animate={{ y: 0, opacity: 1 }}
                                                transition={{ delay: 0.15 }}
                                                className="text-sm text-neutral-text4"
                                            >
                                                {item.description}
                                            </motion.p>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    )
                })}
            </div>

            {/* DESKTOP VERSION */}
            <div className="w-full h-full hidden lg:flex flex-col gap-10 lg:p-16">
                <header className="hidden lg:flex flex-col justify-center items-center gap-4 text-center px-[175px]">
                    <p className="font-playfair font-semibold text-heading1">Kemudahan di Persiapan Nikahmu</p>
                    <p className="text-subheading2 text-neutral-text4">Karena setiap momen berharga pantas dijalani tanpa stres. Biarkan Arunara bantu kamu menikmati setiap langkah menuju hari bahagia.</p>
                </header>
                <div className="flex gap-6 justify-center items-stretch">
                    <div className="bg-rose5 rounded-2xl border border-rose3 flex flex-col gap-2 lg:gap-6 p-10 w-full lg:w-1/4">

                        <p className="text-center font-bold text-heading2">Fitur Arunara</p>

                        {featureData.map((item) => (
                            <div
                                key={item.id}
                                onClick={() => setActive(item)}
                                className={`rounded-lg border border-rose3 py-4 text-center cursor-pointer transition ease-in-out duration-200
              ${active?.id === item.id
                                        ? "bg-rose1 text-white"
                                        : "bg-white text-rose1 hover:bg-rose3"
                                    }
            `}
                            >
                                {item.tab}
                            </div>
                        ))}
                    </div>

                    {/* CONTENT */}
                    <div className="w-3/4 hidden p-10 rounded-2xl border border-[#D9D9D9] lg:flex flex-col gap-8 ">
                        {active && (
                            <Image
                                src={active.image}
                                alt={active.title}
                                className="w-full object-cover rounded-xl"
                            />
                        )}

                        <div className="flex flex-col gap-2">
                            <p className="font-bold font-playfair text-2xl">{active?.title}</p>
                            <p className="text-subheading2 text-neutral-text4">
                                {active?.description}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )

}

export default Section2