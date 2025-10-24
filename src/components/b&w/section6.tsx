"use client"

import { useRef, useState } from "react";
import Button from "./components/button";
import { useInView, motion, Variants, AnimatePresence } from "motion/react";

/* eslint-disable @typescript-eslint/no-explicit-any */
export default function Section6() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.2 });
    const [formData, setFormData] = useState({
        nama: "",
        kehadiran: "",
        pesan: "",
    });
    const [showAll, setShowAll] = useState(false);
    const shortItem = [1, 2, 3];
    const longItem = [1, 2, 3, 4, 5, 6]

    const container: Variants = {
        hidden: { },
        visible: {
            transition: {
                staggerChildren: 0.12,
                delayChildren: 0.08,
            },
        },
    };

    const fadeUp: Variants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
        exit: { opacity: 0, y: -20, transition: { duration: 0.3, ease: "easeIn" } },
    };


    const cardVariant: Variants = {
        hidden: { opacity: 0, y: 20, scale: 0.98 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: { duration: 0.55, ease: "easeOut" },
        },
    };

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSelectKehadiran = (value: string) => {
        setFormData({ ...formData, kehadiran: value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!formData.kehadiran) {
            alert("Silakan pilih kehadiran terlebih dahulu!");
            return;
        }
        console.log("Data terkirim:", formData);
        alert("Terima kasih atas ucapan dan konfirmasinya!");
        setFormData({ nama: "", kehadiran: "", pesan: "" });
    };
    return (
        <section ref={ref} className="py-10 px-6 flex flex-col gap-10 bg-[#FFF7EE] overflow-hidden">
            <motion.div
                variants={container}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className="flex flex-col gap-10"
            >
                <motion.div variants={fadeUp} className="flex flex-col items-center gap-4">
                    <p className="text-green-primary text-heading1 font-bold text-center">Confirm Your Attendance</p>
                    <p className="text-neutral-text4 text-center">Kindly let us know if you’ll be joining our celebration.</p>
                </motion.div>

                <motion.form
                    onSubmit={handleSubmit}
                    variants={cardVariant}
                    className="p-6 bg-white rounded-xl border border-rose4 shadow-[0_4px_5px_#9C46571F] space-y-4"
                >
                    <div>
                        <label className="block text-sm font-medium text-neutral-text4 mb-1">Nama</label>
                        <input
                            type="text"
                            name="nama"
                            value={formData.nama}
                            onChange={handleChange}
                            placeholder="Contoh: Jhon Doe"
                            className="w-full border border-border-default placeholder:text-neutral-text3 rounded-lg px-4 py-2 focus:border-transparent focus:ring-2 focus:ring-green-primary/25 outline-none"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-neutral-text4 mb-2">Kehadiran</label>
                        <div className="flex gap-3">
                            {["Ya", "Tidak"].map((status) => (
                                <button
                                    key={status}
                                    type="button"
                                    onClick={() => handleSelectKehadiran(status)}
                                    className={`flex-1 py-1.5 text-sm rounded-lg border focus:ring-2 focus:ring-green200/25 outline-none transition cursor-pointer ${formData.kehadiran === status
                                        ? "bg-green-primary border-transparent text-white font-semibold"
                                        : "border-border-default text-gray-700 hover:bg-gray-100"
                                        }`}
                                >
                                    {status === "Ya" ? "Ya, hadir" : "Tidak hadir"}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Pesan</label>
                        <textarea
                            name="pesan"
                            value={formData.pesan}
                            onChange={handleChange}
                            placeholder="Tulis pesan disini"
                            className="w-full border border-border-default placeholder:text-neutral-text3 rounded-lg px-4 py-2 focus:ring-2 focus:ring-green200/25 outline-none"
                        />
                    </div>

                    <div className="pt-2">
                        <Button className="w-full">Kirim Pesan</Button>
                    </div>
                </motion.form>

                <motion.div
                    className="flex flex-col gap-4"
                    variants={container}
                    initial="hidden"
                    animate="visible"
                >
                    <AnimatePresence mode="wait">
                        {showAll ? (
                            <motion.div
                                key="all"
                                variants={container}
                                initial="hidden"
                                animate="visible"
                                exit="hidden"
                                layout
                                className="flex flex-col gap-4"
                            >
                                {longItem.map((_: any, i: number) => (
                                    <motion.div
                                        key={i}
                                        variants={fadeUp}
                                        layout
                                        className="border border-border-default rounded-lg p-4 flex flex-col gap-2 bg-white/80 backdrop-blur-sm shadow-[0_2px_3px_#9C465720]" >
                                        <div className="flex justify-between">
                                            <p className="font-semibold text-sm">Nizuma {i}</p>
                                            <div className="border border-green200 bg-success-surface text-success-pressed px-4 py-1 rounded-full text-xs"> Will Attend </div>
                                        </div>
                                        <p className="text-sm text-neutral-text4"> We would be delighted to celebrate this beautiful moment together with you. Kindly confirm your attendance below. </p>
                                    </motion.div>
                                ))}
                            </motion.div>
                        ) : (
                            <motion.div
                                key="short"
                                variants={container}
                                initial="hidden"
                                animate="visible"
                                exit="hidden"
                                layout
                                className="flex flex-col gap-4"
                            >
                                {shortItem.map((_: any, i: number) => (
                                    <motion.div
                                        key={i}
                                        variants={fadeUp}
                                        layout
                                        className="border border-border-default rounded-lg p-4 flex flex-col gap-2 bg-white/80 backdrop-blur-sm shadow-[0_2px_3px_#9C465720]" >
                                        <div className="flex justify-between">
                                            <p className="font-semibold text-sm">Nizuma {i}</p>
                                            <div className="border border-green200 bg-success-surface text-success-pressed px-4 py-1 rounded-full text-xs"> Will Attend </div>
                                        </div>
                                        <p className="text-sm text-neutral-text4"> We would be delighted to celebrate this beautiful moment together with you. Kindly confirm your attendance below. </p>
                                    </motion.div>
                                ))}
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* Tombol "Lihat Semua" */}
                    <motion.button
                        variants={fadeUp}
                        onClick={() => setShowAll(!showAll)}
                        className="text-green-primary py-2 border border-green-primary w-full rounded-lg font-medium hover:underline mx-auto mt-2"
                    >
                        {showAll ? "Lihat Sedikit" : "Lihat Semua"}
                    </motion.button>
                </motion.div>
            </motion.div>
        </section>
    )
}