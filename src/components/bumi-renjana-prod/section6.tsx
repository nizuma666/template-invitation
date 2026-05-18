"use client"

import { useEffect, useRef, useState } from "react";
import Button from "./components/button";
import { useInView, motion, Variants, AnimatePresence } from "motion/react";
import { Clock } from "@phosphor-icons/react";
import { addDoc, collection, onSnapshot, orderBy, query, serverTimestamp, where } from "firebase/firestore";
import { db } from "@/service/firebase";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import "dayjs/locale/id";

dayjs.extend(relativeTime);
dayjs.locale("id");

/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/no-unescaped-entities */

export default function Section6({ content, data, greeting }: { content?: any; data: any; greeting: any }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.2 });

    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [formData, setFormData] = useState({ nama: "", kehadiran: "", pesan: "" });
    const [listGreeting, setListGreeting] = useState<any[]>(greeting);
    const [messageSuccess, setMessageSuccess] = useState("");

    const container: Variants = {
        hidden: {},
        visible: { transition: { staggerChildren: 0.12, delayChildren: 0.08 } },
    };

    const fadeUp: Variants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
    };

    // Lock body scroll when drawer is open
    useEffect(() => {
        if (isDrawerOpen) {
            window.document.body.style.overflowY = "hidden";
        } else {
            window.document.body.style.overflowY = "";
        }
    }, [isDrawerOpen]);

    // Realtime listener dari Firestore
   useEffect(() => {
    if (!data?.user_id) return;

    const q = query(
        collection(db, "greeting"),
        where("user_id", "==", data.user_id),
        orderBy("createdAt", "desc") // ✅ tambah ini
    );

    const unsub = onSnapshot(q, (snapshot) => {
        const newData = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
        }));
        setListGreeting(newData);
    });

    return () => unsub();
}, [data?.user_id]);

    // Auto-hide success message setelah 3 detik
    useEffect(() => {
        if (messageSuccess !== "") {
            const timer = setTimeout(() => {
                setMessageSuccess("");
            }, 3000);
            return () => clearTimeout(timer);
        }
    }, [messageSuccess]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!formData.kehadiran) {
            alert("Silakan pilih kehadiran!");
            return;
        }

        try {
            await addDoc(collection(db, "greeting"), {
                nama: formData.nama,
                kehadiran: formData.kehadiran,
                pesan: formData.pesan,
                user_id: data.user_id,
                createdAt: serverTimestamp(),
                updatedAt: serverTimestamp(),
            });

            setFormData({ nama: "", kehadiran: "", pesan: "" });
            setIsDrawerOpen(false);
            setMessageSuccess("Berhasil kirim pesan");
        } catch (err) {
            console.error("Gagal mengirim pesan:", err);
        }
    };

const formatRelativeTime = (timestamp: any) => {
    // if (!timestamp?.seconds) return "Baru saja";
    return dayjs(dayjs.unix(timestamp?.seconds)).fromNow();
};

    return (
        <section ref={ref} className="py-12 px-6 relative flex flex-col gap-8 overflow-hidden font-sarabun">
            <motion.div
                variants={container}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className="flex flex-col gap-6"
            >
                <motion.div variants={fadeUp} className="flex flex-col mb-2">
                    <p className="text-[#D89F83] font-allison text-5xl -mb-3">Kehadiran</p>
                    <h2 className="text-[#212121] text-[32px] font-semibold">Konfirmasi Segera</h2>
                </motion.div>

                {/* Success message */}
                <AnimatePresence>
                    {messageSuccess && (
                        <motion.div
                            initial={{ opacity: 0, y: -8 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -8 }}
                            className="bg-green-50 border border-green-200 text-green-700 text-sm px-4 py-2 rounded-lg"
                        >
                            {messageSuccess}
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* List Greeting */}
                <motion.div variants={fadeUp} className="relative">
                    <div className="flex flex-col gap-4 max-h-[450px] overflow-y-auto pr-2 custom-scrollbar">
                        {listGreeting.length === 0 ? (
                            <p className="text-gray-400 text-sm text-center py-6">Belum ada konfirmasi kehadiran.</p>
                        ) : (
                            listGreeting.map((item: any, i: number) => (
                                <div
                                    key={item.id ?? i}
                                    className="border border-gray-100 rounded-2xl p-5 bg-white shadow-[0_2px_10px_rgba(0,0,0,0.03)]"
                                >
                                    <div className="flex justify-between items-start mb-1">
                                        <h3 className="font-semibold text-[#212121] text-lg">{item.nama}</h3>
                                        <span
                                            className={`text-[11px] px-3 py-1 rounded-full font-medium ${
                                                item.kehadiran === "Ya" || item.kehadiran === "Hadir"
                                                    ? "bg-[#E7F7EF] text-[#2D9E64]"
                                                    : "bg-[#FEECEC] text-[#EB5757]"
                                            }`}
                                        >
                                            {item.kehadiran === "Ya" || item.kehadiran === "Hadir"
                                                ? "Will Attend"
                                                : "Will Not Attend"}
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-1.5 text-gray-400 text-xs mb-3">
                                        <Clock size={14} weight="regular" />
                                        <span>{formatRelativeTime(item.createdAt)}</span>
                                    </div>
                                    {item.pesan && (
                                        <p className="text-[13px] text-[#4A4A4A] leading-relaxed">{item.pesan}</p>
                                    )}
                                </div>
                            ))
                        )}
                    </div>
                </motion.div>

                <motion.div variants={fadeUp} className="mt-2">
                    <Button
                        onClick={() => setIsDrawerOpen(true)}
                        className="w-full py-1 rounded-lg bg-[#D89F83] hover:bg-[#c58d72] text-white font-bold text-lg outline-none transition-all"
                    >
                        Confirm Attendance
                    </Button>
                </motion.div>
            </motion.div>

            {/* DRAWER KONFIRMASI */}
            <AnimatePresence>
                {isDrawerOpen && (
                    <div className="fixed inset-0 z-[9999] flex flex-col justify-end">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsDrawerOpen(false)}
                            className="absolute inset-0 bg-black/40 backdrop-blur-[2px]"
                        />

                        <motion.div
                            initial={{ y: "100%" }}
                            animate={{ y: 0 }}
                            exit={{ y: "100%" }}
                            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                            className="relative bg-white rounded-t-[18px] p-4 h-fit w-full lg:min-h-[96vh] mx-auto lg:w-[600px] z-[10000] font-sarabun"
                        >
                            {/* Header Form */}
                            <div className="flex flex-col mb-2">
                                <p className="text-[#D89F83] font-allison text-[32px] -mb-3">Kehadiran</p>
                                <h2 className="text-[#1A1A1A] text-[28px] font-bold leading-tight">Confirm Your Presence</h2>
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-3">
                                {/* Input Name */}
                                <div className="space-y-2">
                                    <label className="text-[15px] font-medium text-gray-500 ml-1">Name</label>
                                    <input
                                        type="text"
                                        name="nama"
                                        value={formData.nama}
                                        onChange={handleChange}
                                        placeholder="Contoh: John Doe"
                                        className="w-full border border-gray-200 rounded-lg px-2 py-2 focus:border-[#D89F83] outline-none transition-all text-gray-600 placeholder:text-gray-300"
                                        required
                                    />
                                </div>

                                {/* Attendance Buttons */}
                                <div className="space-y-2">
                                    <label className="text-[15px] font-medium text-gray-500 ml-1">Attendance</label>
                                    <div className="flex gap-4">
                                        <button
                                            type="button"
                                            onClick={() => setFormData({ ...formData, kehadiran: "Ya" })}
                                            className={`flex-1 py-2 rounded-lg border text-[15px] transition-all ${
                                                formData.kehadiran === "Ya"
                                                    ? "bg-[#FDF5F1] border-[#D89F83] text-[#D89F83]"
                                                    : "border-gray-200 text-gray-400 bg-white"
                                            }`}
                                        >
                                            Yes, I will attend
                                        </button>
                                        <button
                                            type="button"
                                            onClick={() => setFormData({ ...formData, kehadiran: "Tidak" })}
                                            className={`flex-1 py-2 rounded-lg border text-[15px] transition-all ${
                                                formData.kehadiran === "Tidak"
                                                    ? "bg-red-50 border-red-200 text-red-500"
                                                    : "border-gray-200 text-gray-400 bg-white"
                                            }`}
                                        >
                                            Sorry, I can't attend
                                        </button>
                                    </div>
                                </div>

                                {/* Message */}
                                <div className="space-y-2">
                                    <label className="text-[15px] font-medium text-gray-500 ml-1">Message / Wishes</label>
                                    <textarea
                                        name="pesan"
                                        rows={5}
                                        value={formData.pesan}
                                        onChange={handleChange}
                                        placeholder="Leave your wishes or prayers for the couple"
                                        className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:border-[#D89F83] outline-none transition-all resize-none text-gray-600 placeholder:text-gray-300"
                                    />
                                </div>

                                <div className="flex flex-col gap-3 pt-4">
                                    <button
                                        type="submit"
                                        className="w-full py-2 bg-[#D89F83] text-white rounded-lg font-bold text-lg active:scale-[0.98] transition-transform shadow-sm"
                                    >
                                        Kirim
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => setIsDrawerOpen(false)}
                                        className="w-full py-2 bg-white text-brown border border-brown rounded-lg font-semibold text-lg active:scale-[0.98] transition-transform shadow-sm"
                                    >
                                        Tutup
                                    </button>
                                </div>
                            </form>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>

            <style jsx global>{`
                .custom-scrollbar::-webkit-scrollbar {
                    width: 4px;
                }
                .custom-scrollbar::-webkit-scrollbar-track {
                    background: #f1f1f1;
                    border-radius: 10px;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb {
                    background: #D89F83;
                    border-radius: 10px;
                }
                .custom-scrollbar {
                    scrollbar-width: thin;
                    scrollbar-color: #D89F83 #f1f1f1;
                }
            `}</style>
        </section>
    );
}