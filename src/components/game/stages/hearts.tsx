"use client"
import { useEffect, useState } from "react"
import { motion } from "motion/react"
import { MapPinIcon } from "@phosphor-icons/react"
import { Couple, Glyph, HEART } from "../art"
import { data } from "../data"
import { GameButton, Panel, SkipLink } from "../ui"

const spots = [
    { x: 18, y: 26 }, { x: 74, y: 22 }, { x: 44, y: 40 }, { x: 80, y: 52 }, { x: 22, y: 56 },
]

// Catch every floating heart to unlock the event "missions"
export default function Hearts({ onNext }: { onNext: () => void }) {
    const [caught, setCaught] = useState<number[]>([])
    const [done, setDone] = useState(false)

    useEffect(() => {
        if (caught.length < spots.length) return
        const t = setTimeout(() => setDone(true), 700)
        return () => clearTimeout(t)
    }, [caught])

    return (
        <div className="absolute inset-0 font-akatab">
            <p className="absolute inset-x-0 top-[88px] text-center text-sm font-semibold text-game">Ketuk hati untuk menangkapnya!</p>
            <p className="absolute inset-x-0 top-[112px] text-center text-2xl font-bold text-game">♥ {caught.length}/{spots.length}</p>

            {spots.map((s, i) => {
                const popped = caught.includes(i)
                return (
                    <motion.button
                        key={i}
                        onClick={() => setCaught((c) => (c.includes(i) ? c : [...c, i]))}
                        aria-label={`Hati ${i + 1}`}
                        initial={{ scale: 0 }}
                        animate={popped ? { scale: 1.8, opacity: 0 } : { scale: 1, opacity: 1 }}
                        transition={{ duration: 0.35, delay: popped ? 0 : i * 0.12 }}
                        style={{ left: `${s.x}%`, top: `${s.y}%` }}
                        className="absolute z-10 size-14 -translate-x-1/2 -translate-y-1/2 touch-manipulation cursor-pointer text-[#E58A8A]"
                    >
                        <span className="float-y block size-full drop-shadow-md" style={{ animationDelay: `${i * -0.5}s` }}>
                            <Glyph d={HEART} className="size-full" />
                        </span>
                    </motion.button>
                )
            })}

            <Couple className="absolute bottom-[14%] left-1/2 -translate-x-1/2" />

            {!done && <SkipLink onClick={() => { setCaught(spots.map((_, i) => i)); setDone(true) }} />}

            {done && (
                <Panel title="MISI TERBUKA">
                    <div className="flex flex-col gap-4">
                        {data.events.map((ev, i) => (
                            <div key={ev.title} className="relative rounded-2xl border-[3px] border-game-gold bg-white/70 px-4 pb-4 pt-6 text-center">
                                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full border-2 border-game-gold bg-game px-4 py-0.5 text-[11px] font-bold tracking-widest text-game-gold">MISI {i + 1}</span>
                                <p className="font-alice text-[22px]">{ev.title}</p>
                                <p className="mt-1 text-lg font-bold">{ev.date}</p>
                                <p className="text-sm font-semibold">{ev.time}</p>
                            </div>
                        ))}
                        <p className="text-center text-sm leading-relaxed text-[#4A4A4A]">{data.address}</p>
                        <a href={data.mapLink} target="_blank" rel="noopener noreferrer" className="flex min-h-12 items-center justify-center gap-2 rounded-2xl border-b-4 border-[#5A2F1D] bg-game-accent font-bold text-white touch-manipulation">
                            <MapPinIcon size={18} weight="bold" /> Buka Maps
                        </a>
                    </div>
                    <GameButton onClick={onNext} className="mt-4 w-full">Lanjut ▶</GameButton>
                </Panel>
            )}
        </div>
    )
}
