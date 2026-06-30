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

    useEffect(() => {
        if (isDrawerOpen) {
            window.document.body.style.overflowY = "hidden";
        } else {
            window.document.body.style.overflowY = "";
        }
    }, [isDrawerOpen]);

    useEffect(() => {
        if (!data?.user_id) return;

        const q = query(
            collection(db, "greeting"),
            where("user_id", "==", data.user_id),
            orderBy("createdAt", "desc")
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
        return dayjs(timestamp).fromNow();
    };

    return (
        <section ref={ref} className="py-12 px-6 flex flex-col gap-8 bg-white overflow-hidden font-sarabun">
            <motion.div
                variants={container}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className="flex flex-col gap-6"
            >

                <motion.div variants={fadeUp} className="flex flex-col">
                    <p className="text-[#629BC0] font-allison text-[28px] -mb-2">Kehadiran</p>
                    <h2 className="text-[#212121] font-sarabun text-[30px] text-nowrap font-bold">Confirm Your Presence</h2>
                </motion.div>

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

                <motion.div variants={fadeUp} className="flex flex-col gap-3">
                    <div className="flex flex-col gap-3 max-h-[450px] overflow-y-auto pr-2 custom-scrollbar">
                        {listGreeting.length === 0 ? (
                            <p className="text-gray-400 text-sm text-center py-6">Belum ada konfirmasi kehadiran.</p>
                        ) : (
                            listGreeting.map((item: any, i: number) => (
                                <div key={item.id ?? i} className="border border-gray-100 rounded-xl p-4 bg-white shadow-sm">
                                    <div className="flex justify-between items-center mb-2">
                                        <p className="font-bold text-[#212121]">{item.nama}</p>
                                        <span
                                            className={`text-[10px] px-3 py-1 rounded-full ${
                                                item.kehadiran === "Ya" || item.kehadiran === "Hadir"
                                                    ? "bg-green-50 text-green-600"
                                                    : "bg-red-50 text-red-600"
                                            }`}
                                        >
                                            {item.kehadiran === "Ya" || item.kehadiran === "Hadir"
                                                ? "Will Attend"
                                                : "Will Not Attend"}
                                        </span>
                                    </div>
                                    <p className="text-[10px] text-gray-400 mb-2 flex items-center gap-1">
                                        <Clock size={12} weight="regular" /> {formatRelativeTime(item.createdAt)}
                                    </p>
                                    {item.pesan && (
                                        <p className="text-sm text-gray-600 leading-relaxed">
                                            {item.pesan}
                                        </p>
                                    )}
                                </div>
                            ))
                        )}
                    </div>

                    <div className="flex flex-col gap-3 mt-2">
                        <Button
                            onClick={() => setIsDrawerOpen(true)}
                            className="w-full"
                        >
                            Confirm Attendance
                        </Button>
                    </div>
                </motion.div>
            </motion.div>

            <AnimatePresence>
                {isDrawerOpen && (
                    <div className="fixed inset-0 z-[9999] flex flex-col justify-end">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsDrawerOpen(false)}
                            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                        />

                        <motion.div
                            initial={{ y: "100%" }}
                            animate={{ y: 0 }}
                            exit={{ y: "100%" }}
                            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                            className="relative bg-white rounded-t-[32px] p-6 max-h-[90dvh] overflow-auto z-[10000]"
                        >
                            <div className="w-12 h-1.5 bg-gray-200 rounded-full mx-auto mb-6" />

                            <div className="flex flex-col mb-6">
                                <p className="text-[#629BC0] font-allison text-[28px] -mb-2">Kehadiran</p>
                                <h2 className="text-[#212121] font-sarabun text-[28px] font-bold">Confirm Your Presence</h2>
                            </div>

                            <motion.form
                                onSubmit={handleSubmit}
                                initial={{ opacity: 0, y: 16 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3 }}
                                className="space-y-5"
                            >
                                <div className="space-y-1">
                                    <label className="text-sm font-medium text-gray-500">Name</label>
                                    <input
                                        type="text"
                                        name="nama"
                                        value={formData.nama}
                                        onChange={handleChange}
                                        placeholder="Contoh: John Doe"
                                        className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:border-[#629BC0] outline-none transition-all"
                                        required
                                    />
                                </div>

                                <div className="space-y-1">
                                    <label className="text-sm font-medium text-gray-500">Attendance</label>
                                    <div className="flex gap-3">
                                        <button
                                            type="button"
                                            onClick={() => setFormData({ ...formData, kehadiran: "Ya" })}
                                            className={`flex-1 py-3 rounded-xl border text-sm transition-all ${formData.kehadiran === "Ya" ? 'bg-[#E3EEFA] border-[#629BC0] text-[#629BC0]' : 'border-gray-200 text-gray-400'}`}
                                        >
                                            Yes, I will attend
                                        </button>
                                        <button
                                            type="button"
                                            onClick={() => setFormData({ ...formData, kehadiran: "Tidak" })}
                                            className={`flex-1 py-3 rounded-xl border text-sm transition-all ${formData.kehadiran === "Tidak" ? 'bg-red-50 border-red-200 text-red-500' : 'border-gray-200 text-gray-400'}`}
                                        >
                                            Sorry, I can't
                                        </button>
                                    </div>
                                </div>

                                <div className="space-y-1">
                                    <label className="text-sm font-medium text-gray-500">Message / Wishes</label>
                                    <textarea
                                        name="pesan"
                                        rows={4}
                                        value={formData.pesan}
                                        onChange={handleChange}
                                        placeholder="Leave your wishes or prayers for the couple"
                                        className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:border-[#629BC0] outline-none transition-all resize-none"
                                    />
                                </div>

                                <div className="flex flex-col gap-2 pt-2">
                                    <Button>Kirim</Button>
                                    <button
                                        type="button"
                                        onClick={() => setIsDrawerOpen(false)}
                                        className="text-sm text-gray-400 py-2 hover:text-gray-600"
                                    >
                                        Batal
                                    </button>
                                </div>
                            </motion.form>
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
                    background: #629BC0;
                    border-radius: 10px;
                }
                .custom-scrollbar {
                    scrollbar-width: thin;
                    scrollbar-color: #629BC0 #f1f1f1;
                }
            `}</style>
        </section>
    );
}
