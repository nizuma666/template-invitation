"use client"
import love from "!/landing/icon-love-landing-section2.svg"
import glass from "!/landing/icon-glass-landing-section2.svg"
import makeup from "!/landing/icon-makeup-landing-section2.svg"
import Image from "next/image"
import img from "!/landing/img-section2-landing.png"
import { useState } from "react"

const featureData = [
    {
        id: 1,
        title: "Unlimited Guest",
        description:
            "Undang tamu sebanyak yang kamu mau tanpa batasan. Cocok untuk acara besar maupun kecil.",
        image: img,
    },
    {
        id: 2,
        title: "Ubah Tanpa Ribet",
        description:
            "Edit tampilan undangan kapan saja tanpa proses yang merepotkan.",
        image: img,
    },
    {
        id: 3,
        title: "Real-Time Preview",
        description:
            "Setiap perubahan langsung terlihat saat itu juga, tanpa refresh.",
        image: img,
    },
    {
        id: 4,
        title: "Atur Rekening Gift",
        description:
            "Tambahkan dan kelola rekening digital untuk memudahkan tamu memberikan hadiah tanpa repot.",
        image: img,
    },
    {
        id: 5,
        title: "Instan Share",
        description:
            "Bagikan undangan dengan cepat melalui WhatsApp, sosial media, atau link personal hanya dengan sekali klik.",
        image: img,
    },
    {
        id: 6,
        title: "Link to Google Maps",
        description:
            "Sisipkan lokasi acara secara langsung dengan integrasi Google Maps sehingga tamu bisa langsung menuju lokasi.",
        image: img,
    },
    {
        id: 7,
        title: "RSVP & Wedding Wishes",
        description:
            "Fitur RSVP untuk konfirmasi kehadiran dan kolom Wedding Wishes agar tamu dapat meninggalkan ucapan spesial.",
        image: img,
    },
    {
        id: 8,
        title: "Countdown Timer",
        description:
            "Tampilkan hitung mundur ke hari pernikahan untuk meningkatkan antusiasme tamu dan mempercantik undangan.",
        image: img,
    },
];
const Section2 = ({ id }: { id: string }) => {
    const [active, setActive] = useState(featureData[2]);
    return (
        <section id={id} className="w-full min-h-screen bg-white relative pt-[80px] px-16">
            <div className="bg-white border w-[1200px] border-rose4 rounded-xl p-8 flex justify-center items-center gap-8 absolute -top-20 z-30 mx-auto left-1/2 -translate-x-1/2">
                <div className="flex items-center justify-center gap-4">
                    <Image src={love} width={64} height={64} alt="Meaningful" />
                    <div className="flex flex-col gap-1">
                        <p className="text-neutral-text5 text-subheading1 font-semibold">Meaningful</p>
                        <p className="text-neutral-text4">Dirancang untuk menyampaikan kisah cintamu.</p>
                    </div>
                </div>
                <div className="h-16 border-rose3 border" />
                <div className="flex items-center justify-center gap-4">
                    <Image src={glass} width={64} height={64} alt="Meaningful" />
                    <div className="flex flex-col gap-1">
                        <p className="text-neutral-text5 text-subheading1 font-semibold">Effortless</p>
                        <p className="text-neutral-text4">Siap dalam hitungan menit, persiapan tanpa ribet.</p>
                    </div>
                </div>
                <div className="h-16 border-rose3 border" />
                <div className="flex items-center justify-center gap-4">
                    <Image src={makeup} width={64} height={64} alt="Meaningful" />
                    <div className="flex flex-col gap-1">
                        <p className="text-neutral-text5 text-subheading1 font-semibold">Personalized</p>
                        <p className="text-neutral-text4">Undangan bisa disesuaikan dengan keinginan kamu.</p>
                    </div>
                </div>
            </div>
            <div className="w-full h-full flex flex-col gap-10 p-16">
                <header className="flex flex-col justify-center items-center gap-4 text-center px-[175px]">
                    <p className="font-playfair font-semibold text-heading1">Kemudahan di Persiapan Nikahmu</p>
                    <p className="text-subheading2 text-neutral-text4">Karena setiap momen berharga pantas dijalani tanpa stres. Biarkan Arunara bantu kamu menikmati setiap langkah menuju hari bahagia.</p>
                </header>
                {/* <div className="flex gap-6 justify-center items-stretch">
                    <div className="bg-rose5 rounded-2xl border border-rose3 flex flex-col gap-6 p-10 w-1/4">
                        <p className="text-center font-bold text-heading2">Fitur Arunara</p>
                        <div className="rounded-lg border border-rose3 bg-white hover:bg-rose3 py-4 text-center text-rose1 cursor-pointer transition ease-in-out duration-200">Unlimited Guess</div>
                        <div className="rounded-lg border border-rose3 bg-white hover:bg-rose3 py-4 text-center text-rose1 cursor-pointer transition ease-in-out duration-200">Ubah Tanpa Ribet</div>
                        <div className="rounded-lg border border-rose3 bg-white hover:bg-rose3 py-4 text-center text-rose1 cursor-pointer transition ease-in-out duration-200">Real-Time Preview</div>
                        <div className="rounded-lg border border-rose3 bg-white hover:bg-rose3 py-4 text-center text-rose1 cursor-pointer transition ease-in-out duration-200">Atur Rekening Gift</div>
                        <div className="rounded-lg border border-rose3 bg-white hover:bg-rose3 py-4 text-center text-rose1 cursor-pointer transition ease-in-out duration-200">Instan Share</div>
                        <div className="rounded-lg border border-rose3 bg-white hover:bg-rose3 py-4 text-center text-rose1 cursor-pointer transition ease-in-out duration-200">Link to Google Maps</div>
                        <div className="rounded-lg border border-rose3 bg-white hover:bg-rose3 py-4 text-center text-rose1 cursor-pointer transition ease-in-out duration-200">RSVP & Wedding Wishes</div>
                        <div className="rounded-lg border border-rose3 bg-white hover:bg-rose3 py-4 text-center text-rose1 cursor-pointer transition ease-in-out duration-200">Countdown Timer</div>
                    </div>
                    <div className="w-3/4 p-10 rounded-2xl border border-[#D9D9D9] flex flex-col gap-8 justify-center items-center">
                        <Image src={img} width={808} height={400} alt="Real Time" className="w-full h-full object-cover rounded-2xl" />
                        <div className="flex flex-col gap-2">
                            <p className="font-bold font-playfair text-2xl">Lihat Hasilnya Secara Real-Time</p>
                            <p className="text-subheading2 text-neutral-text4">Setiap perubahan yang kamu buat langsung terupdate tanpa harusmenunggu lama. Kamu bisa memastikan foto, dan teks tampil seindah yang kamu bayangkan. Dengan pengalaman yang cepat dan responsif, membuat undangan jadi terasa menyenangkan dan intuitif.</p>
                        </div>
                    </div>
                </div> */}
                <div className="flex gap-6 justify-center items-stretch">
                    {/* LIST */}
                    <div className="bg-rose5 rounded-2xl border border-rose3 flex flex-col gap-6 p-10 w-1/4">

                        <p className="text-center font-bold text-heading2">Fitur Arunara</p>

                        {featureData.map((item) => (
                            <div
                                key={item.id}
                                onClick={() => setActive(item)}
                                className={`rounded-lg border border-rose3 py-4 text-center cursor-pointer transition ease-in-out duration-200
              ${active.id === item.id
                                        ? "bg-rose1 text-white"
                                        : "bg-white text-rose1 hover:bg-rose3"
                                    }
            `}
                            >
                                {item.title}
                            </div>
                        ))}
                    </div>

                    {/* CONTENT */}
                    <div className="w-3/4 p-10 rounded-2xl border border-[#D9D9D9] flex flex-col gap-8 ">
                        <Image
                            src={active.image}
                            width={808}
                            height={400}
                            alt={active.title}
                            className="w-full h-full object-cover rounded-2xl"
                        />

                        <div className="flex flex-col gap-2">
                            <p className="font-bold font-playfair text-2xl">{active.title}</p>
                            <p className="text-subheading2 text-neutral-text4">
                                {active.description}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )

}

export default Section2