"use client"

import { useRef, useState } from "react";
import Button from "./components/button";
import { useInView, motion, Variants } from "motion/react";

/* eslint-disable @typescript-eslint/no-explicit-any */
export default function Section6({ content }: { content: any }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.2 });
    const [formData, setFormData] = useState({
        nama: "",
        kehadiran: "",
        pesan: "",
    });

    const container: Variants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.12,
                delayChildren: 0.08,
            },
        },
    };

    const fadeUp: Variants = {
        hidden: { opacity: 0, y: 24 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
        },
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
        <section ref={ref} className="py-10 px-6 flex flex-col gap-10 bg-white overflow-hidden">
            <motion.div
                variants={container}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className="flex flex-col gap-10"
            >
                <motion.div variants={fadeUp} className="flex flex-col items-center gap-4">
                    <p className="text-rose1 text-heading1 font-bold text-center">{content.title}</p>
                    <p className="text-neutral-text4 text-center">{content.desc}</p>
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
                            className="w-full border border-border-default placeholder:text-neutral-text3 rounded-lg px-4 py-2 focus:border-transparent focus:ring-2 focus:ring-rose4 outline-none"
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
                                    className={`flex-1 py-1.5 text-sm rounded-lg border focus:ring-2 focus:ring-rose4 outline-none transition cursor-pointer ${formData.kehadiran === status
                                            ? "bg-rose3 border-transparent text-rose1 font-semibold"
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
                            className="w-full border border-border-default placeholder:text-neutral-text3 rounded-lg px-4 py-2 focus:ring-2 focus:ring-rose3 outline-none"
                        />
                    </div>

                    <div className="pt-2">
                        <Button className="w-full">Kirim Pesan</Button>
                    </div>
                </motion.form>

                <motion.div
                    className="flex flex-col gap-4 max-h-[420px] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent"
                    variants={container}
                >
                    {content.messages?.length ? (
                        content.messages.map((msg: any, idx: number) => (
                            <motion.div
                                key={idx}
                                variants={fadeUp}
                                className="border border-border-default rounded-lg p-4 flex flex-col gap-2 bg-white/80 backdrop-blur-sm shadow-[0_2px_3px_#9C465720]"
                            >
                                <div className="flex justify-between items-center gap-3">
                                    <p className="font-semibold text-sm">{msg.name}</p>
                                    <div className={`px-3 py-1 rounded-full text-xs ${msg.attend ? "bg-success-surface text-success-pressed border border-green200" : "bg-gray-100 text-gray-700 border border-border-default"}`}>
                                        {msg.attend ? "Will Attend" : "Not Attend"}
                                    </div>
                                </div>
                                <p className="text-sm text-neutral-text4">{msg.message}</p>
                            </motion.div>
                        ))
                    ) : (
                        [1, 2, 3, 4].map((_, i) => (
                            <motion.div
                                key={i}
                                variants={fadeUp}
                                className="border border-border-default rounded-lg p-4 flex flex-col gap-2 bg-white/80 backdrop-blur-sm shadow-[0_2px_3px_#9C465720]"
                            >
                                <div className="flex justify-between">
                                    <p className="font-semibold text-sm">Nizuma</p>
                                    <div className="border border-green200 bg-success-surface text-success-pressed px-4 py-1 rounded-full text-xs">Will Attend</div>
                                </div>
                                <p className="text-sm text-neutral-text4">
                                    We would be delighted to celebrate this beautiful moment together with you. Kindly confirm your attendance below.
                                </p>
                            </motion.div>
                        ))
                    )}
                </motion.div>
            </motion.div>
        </section>
    )
}