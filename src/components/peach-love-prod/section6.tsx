"use client"

import { useEffect, useRef, useState } from "react";
import Button from "./components/button";
import { useInView, motion, Variants } from "motion/react";
import { addAcara, getDataByField } from "@/service/checkUrl";
import { addDoc, collection, onSnapshot, orderBy, query, serverTimestamp, where } from "firebase/firestore";
import { db } from "@/service/firebase";

/* eslint-disable @typescript-eslint/no-explicit-any */
export default function Section6({ content, data, greeting }: { content: any; data: any, greeting: any }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.2 });
    const [formData, setFormData] = useState({
        nama: "",
        kehadiran: "",
        pesan: "",
    });
    const [listGreeting, setListGreeting] = useState(greeting)

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

    useEffect(() => {
        if (!data.user_id) return;

        const q = query(collection(db, "greeting"), where("user_id", "==", data.user_id));

        const unsub = onSnapshot(q, (snapshot) => {
            const newData = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));
            setListGreeting(newData);
        });

        return () => unsub();
    }, [data.user_id]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!formData.kehadiran) {
            alert("Silakan pilih kehadiran terlebih dahulu!");
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

            // reset form setelah submit
            setFormData({ nama: "", kehadiran: "", pesan: "" });
        } catch (err) {
            console.error("Gagal menambah acara:", err);
        }
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
                    {listGreeting.map((item: any, i: number) => (
                        <motion.div
                            key={item.id}
                            initial="hidden"
                            animate="visible"
                            variants={fadeUp}
                            className="border border-border-default rounded-lg p-4 flex flex-col gap-2 bg-white/80 backdrop-blur-sm shadow-[0_2px_3px_#9C465720]"
                        >
                            <div className="flex justify-between">
                                <p className="font-semibold text-sm">{item.nama}</p>
                                <div className={`${item.kehadiran === "Ya" ? "border-green200 bg-success-surface text-success-pressed" : "border-danger200 bg-danger-surface text-danger-presssed"} border  px-4 py-1 rounded-full text-xs`}>{item.kehadiran === "Ya" ? "Hadir" : "Tidak Hadir"}</div>
                            </div>
                            <p className="text-sm text-neutral-text4">
                                {item.pesan}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
        </section>
    )
}