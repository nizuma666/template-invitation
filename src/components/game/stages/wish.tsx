"use client"
import { useState } from "react"
import { ClockIcon } from "@phosphor-icons/react"
import { data } from "../data"
import BottomSheet from "../components/bottom_sheet"
import { GameButton } from "../ui"

const options = [
    { value: true, label: "Ya, saya hadir", active: "bg-[#E7F7EF] border-[#2D9E64] text-[#2D9E64]" },
    { value: false, label: "Maaf, tidak bisa", active: "bg-[#FEECEC] border-[#EB5757] text-[#EB5757]" },
]

// Your own wish is added to the top of the list as a new dialog box
export default function Wish({ onNext }: { onNext: () => void }) {
    const [list, setList] = useState(data.wishes)
    const [sheet, setSheet] = useState(false)
    const [form, setForm] = useState<{ nama: string; hadir: boolean | null; pesan: string }>({ nama: "", hadir: null, pesan: "" })
    const [error, setError] = useState(false)

    const submit = (e: React.FormEvent) => {
        e.preventDefault()
        if (form.hadir === null) return setError(true)
        setList([{ nama: form.nama, hadir: form.hadir, waktu: "Baru saja", pesan: form.pesan || "Selamat berbahagia!" }, ...list])
        setForm({ nama: "", hadir: null, pesan: "" })
        setError(false)
        setSheet(false)
    }

    return (
        <div className="absolute inset-0 font-akatab">
            <div className="absolute inset-x-0 bottom-[84px] top-[72px] space-y-6 overflow-y-auto overscroll-contain px-5 pb-4 pt-5">
                <p className="text-center font-alice text-[28px] text-game">Ucapan & Doa</p>
                {list.map((w, i) => (
                    <div key={`${w.nama}-${i}`} className="relative rounded-2xl border-[3px] border-game bg-game-cream p-4 pt-5 shadow-[0_5px_0_var(--color-game)]">
                        <span className="absolute -top-3.5 left-4 rounded-lg bg-game px-3 py-0.5 text-xs font-bold text-game-gold">{w.nama}</span>
                        <span className={`absolute -top-3 right-4 rounded-full border px-3 py-0.5 text-[11px] font-semibold ${w.hadir ? "border-[#2D9E64]/40 bg-[#E7F7EF] text-[#2D9E64]" : "border-[#EB5757]/40 bg-[#FEECEC] text-[#EB5757]"}`}>
                            {w.hadir ? "Hadir" : "Tidak Hadir"}
                        </span>
                        <p className="text-[13px] leading-relaxed text-[#4A4A4A]">{w.pesan}</p>
                        <p className="mt-2 flex items-center gap-1.5 text-xs text-[#909090]"><ClockIcon size={14} />{w.waktu}</p>
                    </div>
                ))}
            </div>

            <div className="absolute inset-x-0 bottom-0 flex gap-3 border-t-4 border-game-gold bg-game-cream p-4">
                <GameButton onClick={() => setSheet(true)} className="flex-1">✎ Tulis Ucapan</GameButton>
                <GameButton onClick={onNext} className="bg-game">Selesai ▶</GameButton>
            </div>

            <BottomSheet open={sheet} onClose={() => setSheet(false)}>
                <p className="mb-2 font-adelia text-[26px] text-game">Kehadiran</p>
                <h3 className="mb-4 font-alice text-[22px] text-[#212121]">Konfirmasi Kehadiran Anda</h3>
                <form onSubmit={submit} className="space-y-4">
                    <div className="space-y-2">
                        <label htmlFor="g-nama" className="text-sm font-medium text-[#757575]">Nama</label>
                        <input id="g-nama" required value={form.nama} onChange={(e) => setForm({ ...form, nama: e.target.value })} placeholder="Contoh: John Doe" className="w-full rounded-lg border border-game/20 bg-white px-3 py-3 text-base text-[#4A4A4A] outline-none focus:border-game" />
                    </div>
                    <div className="space-y-2">
                        <p className="text-sm font-medium text-[#757575]">Kehadiran</p>
                        <div className="flex gap-3">
                            {options.map((o) => (
                                <button key={o.label} type="button" onClick={() => { setForm({ ...form, hadir: o.value }); setError(false) }} className={`min-h-11 flex-1 rounded-lg border text-sm touch-manipulation cursor-pointer ${form.hadir === o.value ? o.active : "border-gray-200 bg-white text-gray-400"}`}>
                                    {o.label}
                                </button>
                            ))}
                        </div>
                        {error && <p className="text-xs text-[#EB5757]">Silakan pilih kehadiran dulu.</p>}
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="g-pesan" className="text-sm font-medium text-[#757575]">Ucapan & Doa</label>
                        <textarea id="g-pesan" rows={3} value={form.pesan} onChange={(e) => setForm({ ...form, pesan: e.target.value })} placeholder="Tulis ucapan dan doa untuk kedua mempelai" className="w-full resize-none rounded-lg border border-game/20 bg-white px-3 py-3 text-base text-[#4A4A4A] outline-none focus:border-game" />
                    </div>
                    <GameButton type="submit" className="w-full">Kirim</GameButton>
                    <button type="button" onClick={() => setSheet(false)} className="min-h-11 w-full rounded-2xl border border-game bg-white font-semibold text-game cursor-pointer">Tutup</button>
                </form>
            </BottomSheet>
        </div>
    )
}
