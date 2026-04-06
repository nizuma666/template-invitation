"use client"

import { useRef, useState } from "react";
import Button from "./components/button";
import { useInView, motion, Variants, AnimatePresence } from "motion/react";

/* eslint-disable @typescript-eslint/no-explicit-any */
export default function Section6({ content }: { content: any }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.2 });
    
    // State untuk toggle antara List Ucapan dan Form
    const [isFormOpen, setIsFormOpen] = useState(false);
    
    const [formData, setFormData] = useState({
        nama: "",
        kehadiran: "",
        pesan: "",
    });
    const [showAll, setShowAll] = useState(false);
    const shortItem = [1, 2, 3];
    const longItem = [1, 2, 3, 4, 5, 6];

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
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
        exit: { opacity: 0, scale: 0.95, transition: { duration: 0.2 } },
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!formData.kehadiran) {
            alert("Silakan pilih kehadiran!");
            return;
        }
        console.log("Data terkirim:", formData);
        alert("Terima kasih!");
        setFormData({ nama: "", kehadiran: "", pesan: "" });
        setIsFormOpen(false); // Kembali ke list setelah submit
    };

    return (
        <section ref={ref} className="py-12 px-6 flex flex-col gap-8 bg-white overflow-hidden">
            <motion.div
                variants={container}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className="flex flex-col gap-6"
            >
                {/* Header Section */}
                <motion.div variants={fadeUp} className="flex flex-col items-center">
                    <p className="text-[#629BC0] font-allison text-[28px] -mb-2">Kehadiran</p>
                    <h2 className="text-[#212121] font-sarabun text-[32px] font-bold">Confirm Your Presence</h2>
                </motion.div>

                <AnimatePresence mode="wait">
                    {!isFormOpen ? (
                        /* TAMPILAN DAFTAR UCAPAN (image_c51c54.png) */
                        <motion.div
                            key="list-section"
                            variants={fadeUp}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            className="flex flex-col gap-4"
                        >
                            <div className="flex flex-col gap-4 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
                                {(showAll ? longItem : shortItem).map((_, i) => (
                                    <div key={i} className="border border-gray-100 rounded-xl p-4 bg-white shadow-sm">
                                        <div className="flex justify-between items-center mb-2">
                                            <p className="font-bold text-[#212121]">Nizuma {i + 1}</p>
                                            <span className={`text-[10px] px-3 py-1 rounded-full ${i % 2 === 0 ? 'bg-green-50 text-green-600' : 'bg-red-50 text-red-600'}`}>
                                                {i % 2 === 0 ? 'Will Attend' : 'Will Not Attend'}
                                            </span>
                                        </div>
                                        <p className="text-[10px] text-gray-400 mb-2">🕒 2 hari lalu</p>
                                        <p className="text-sm text-gray-600 leading-relaxed">
                                            We would be delighted to celebrate this beautiful moment together with you.
                                        </p>
                                    </div>
                                ))}
                            </div>

                            <div className="flex flex-col gap-3 mt-4">
                                <button 
                                    onClick={() => setShowAll(!showAll)}
                                    className="text-sm text-gray-400 hover:text-[#629BC0] transition-colors"
                                >
                                    {showAll ? "Show Less" : "View More"}
                                </button>
                                
                                <Button 
                                    onClick={() => setIsFormOpen(true)}
                                    className="w-full bg-[#629BC0] hover:bg-[#5386a8] text-white py-4 rounded-full shadow-lg transition-transform active:scale-95"
                                >
                                    Confirm Attendance
                                </Button>
                            </div>
                        </motion.div>
                    ) : (
                        <motion.form
                            key="form-section"
                            onSubmit={handleSubmit}
                            variants={fadeUp}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
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
                                        onClick={() => setFormData({...formData, kehadiran: "Hadir"})}
                                        className={`flex-1 py-3 rounded-xl border text-sm transition-all ${formData.kehadiran === "Hadir" ? 'bg-[#E3EEFA] border-[#629BC0] text-[#629BC0]' : 'border-gray-200 text-gray-400'}`}
                                    >
                                        Yes, I will attend
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => setFormData({...formData, kehadiran: "Tidak"})}
                                        className={`flex-1 py-3 rounded-xl border text-sm transition-all ${formData.kehadiran === "Tidak" ? 'bg-red-50 border-red-200 text-red-500' : 'border-gray-200 text-gray-400'}`}
                                    >
                                        Sorry, I can't attend
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
                                <Button type="submit">
                                    Kirim
                                </Button>
                                <button 
                                    type="button"
                                    onClick={() => setIsFormOpen(false)}
                                    className="text-sm text-gray-400 py-2 hover:text-gray-600"
                                >
                                    Batal
                                </button>
                            </div>
                        </motion.form>
                    )}
                </AnimatePresence>
            </motion.div>
        </section>
    );
}