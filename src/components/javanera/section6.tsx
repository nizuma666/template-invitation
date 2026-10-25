"use client"
import { useState } from "react"
import { motion } from "motion/react"
import { ClockIcon } from "@phosphor-icons/react"
import SectionHeading from "./components/section_heading"
import Reveal from "./components/reveal"
import BottomSheet from "./components/bottom_sheet"

const wishes = [
    { nama: "Nizuma", hadir: true, waktu: "2 hari lalu", pesan: "Selamat menempuh hidup baru! Semoga menjadi keluarga yang sakinah, mawaddah, warahmah." },
    { nama: "Ferdian", hadir: false, waktu: "3 hari lalu", pesan: "Mohon maaf belum bisa hadir, doa terbaik untuk kalian berdua. Semoga langgeng sampai kakek nenek." },
    { nama: "Putri", hadir: true, waktu: "4 hari lalu", pesan: "Barakallahu lakuma wa baraka alaikuma wa jama'a bainakuma fii khair." },
    { nama: "Asep", hadir: true, waktu: "5 hari lalu", pesan: "Ikut bahagia! Semoga selalu dilimpahkan cinta dan kebahagiaan." },
    { nama: "Rina", hadir: false, waktu: "1 minggu lalu", pesan: "Selamat ya Sari & Supri, semoga lancar sampai hari H." },
]

const attendanceOptions = [
    { value: "Hadir", label: "Ya, saya hadir", active: "bg-[#FDF5F1] border-javanera text-javanera" },
    { value: "Tidak", label: "Maaf, tidak bisa", active: "bg-red-50 border-red-200 text-red-500" },
]

export default function Section6() {
    const [isOpen, setIsOpen] = useState(false)
    const [formData, setFormData] = useState({ nama: "", kehadiran: "", pesan: "" })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        if (!formData.kehadiran) {
            alert("Silakan pilih kehadiran!")
            return
        }
        setIsOpen(false)
        alert("Terima kasih!")
        setFormData({ nama: "", kehadiran: "", pesan: "" })
    }

    return (
        <section className="relative px-6 py-14 flex flex-col gap-6 font-akatab">
            <SectionHeading title="Ucapan & Doa" script />

            <div className="flex flex-col gap-3 max-h-[420px] overflow-y-auto pr-1">
                {wishes.map((wish, i) => (
                    <Reveal key={wish.nama} delay={i * 0.15}>
                        <div className="rounded-2xl p-4 bg-white/80 border border-javanera/15">
                            <div className="flex justify-between items-start">
                                <h3 className="font-semibold text-[#212121]">{wish.nama}</h3>
                                <span className={`text-[11px] px-3 py-1 rounded-full font-medium ${wish.hadir ? "bg-[#E7F7EF] text-[#2D9E64]" : "bg-[#FEECEC] text-[#EB5757]"}`}>
                                    {wish.hadir ? "Hadir" : "Tidak Hadir"}
                                </span>
                            </div>
                            <div className="flex items-center gap-1.5 text-[#909090] text-xs mt-1 mb-2">
                                <ClockIcon size={14} />
                                <span>{wish.waktu}</span>
                            </div>
                            <p className="text-[13px] text-[#4A4A4A] leading-relaxed">{wish.pesan}</p>
                        </div>
                    </Reveal>
                ))}
            </div>

            <Reveal>
                <motion.button
                    onClick={() => setIsOpen(true)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.97 }}
                    className="w-full py-3 rounded-lg bg-javanera text-white font-bold shadow-lg cursor-pointer"
                >
                    Konfirmasi Kehadiran
                </motion.button>
            </Reveal>

            <BottomSheet open={isOpen} onClose={() => setIsOpen(false)}>
                <p className="font-adelia text-[26px] text-javanera mb-2">Kehadiran</p>
                <h3 className="font-alice text-[24px] text-[#212121] mb-4">Konfirmasi Kehadiran Anda</h3>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                        <label htmlFor="rsvp-nama" className="text-sm font-medium text-[#757575]">Nama</label>
                        <input
                            id="rsvp-nama"
                            type="text"
                            name="nama"
                            value={formData.nama}
                            onChange={handleChange}
                            placeholder="Contoh: John Doe"
                            required
                            className="w-full border border-javanera/20 rounded-lg px-3 py-2 bg-white outline-none focus:border-javanera text-[#4A4A4A]"
                        />
                    </div>

                    <div className="space-y-2">
                        <p className="text-sm font-medium text-[#757575]">Kehadiran</p>
                        <div className="flex gap-3">
                            {attendanceOptions.map((option) => (
                                <button
                                    key={option.value}
                                    type="button"
                                    onClick={() => setFormData({ ...formData, kehadiran: option.value })}
                                    className={`flex-1 py-2 rounded-lg border text-sm transition-all cursor-pointer ${formData.kehadiran === option.value ? option.active : "border-gray-200 text-gray-400 bg-white"}`}
                                >
                                    {option.label}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="rsvp-pesan" className="text-sm font-medium text-[#757575]">Ucapan & Doa</label>
                        <textarea
                            id="rsvp-pesan"
                            name="pesan"
                            rows={4}
                            value={formData.pesan}
                            onChange={handleChange}
                            placeholder="Tulis ucapan dan doa untuk kedua mempelai"
                            className="w-full border border-javanera/20 rounded-lg px-3 py-2 bg-white outline-none focus:border-javanera resize-none text-[#4A4A4A]"
                        />
                    </div>

                    <div className="flex flex-col gap-3 pt-2">
                        <button type="submit" className="w-full py-3 bg-javanera text-white rounded-lg font-bold active:scale-[0.98] transition-transform cursor-pointer">
                            Kirim
                        </button>
                        <button type="button" onClick={() => setIsOpen(false)} className="w-full py-3 bg-white text-javanera border border-javanera rounded-lg font-semibold active:scale-[0.98] transition-transform cursor-pointer">
                            Tutup
                        </button>
                    </div>
                </form>
            </BottomSheet>
        </section>
    )
}
