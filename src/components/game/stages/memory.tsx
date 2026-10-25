"use client"
import { useEffect, useState } from "react"
import Image from "next/image"
import { motion } from "motion/react"
import { Couple, Glyph, STAR, memoryIcons } from "../art"
import { data } from "../data"
import { GameButton, Panel, SkipLink } from "../ui"

const shuffle = <T,>(a: T[]) => {
    const b = [...a]
    for (let i = b.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1))
        ;[b[i], b[j]] = [b[j], b[i]]
    }
    return b
}

const hidden = { backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden" } as const

// Match all four pairs to unlock the photo gallery
export default function Memory({ onNext }: { onNext: () => void }) {
    const [cards] = useState(() => shuffle([0, 1, 2, 3, 0, 1, 2, 3]))
    const [open, setOpen] = useState<number[]>([])
    const [matched, setMatched] = useState<number[]>([])
    const [moves, setMoves] = useState(0)
    const [done, setDone] = useState(false)

    useEffect(() => {
        if (matched.length < cards.length) return
        const t = setTimeout(() => setDone(true), 800)
        return () => clearTimeout(t)
    }, [matched, cards.length])

    const flip = (i: number) => {
        if (open.length === 2 || open.includes(i) || matched.includes(i)) return
        const next = [...open, i]
        setOpen(next)
        if (next.length < 2) return
        setMoves((m) => m + 1)
        const [a, b] = next
        if (cards[a] === cards[b]) setTimeout(() => { setMatched((m) => [...m, a, b]); setOpen([]) }, 450)
        else setTimeout(() => setOpen([]), 800)
    }

    return (
        <div className="absolute inset-0 font-akatab">
            <p className="absolute inset-x-0 top-[88px] text-center text-sm font-semibold text-game">Cocokkan semua pasangan kartu!</p>
            <p className="absolute inset-x-0 top-[110px] text-center text-sm font-bold text-game">Langkah: {moves}</p>

            <div className="absolute inset-x-5 top-[150px] grid grid-cols-4 gap-2.5">
                {cards.map((kind, i) => {
                    const face = open.includes(i) || matched.includes(i)
                    const Icon = memoryIcons[kind]
                    return (
                        <button key={i} onClick={() => flip(i)} aria-label={face ? `Kartu ${kind + 1}` : "Kartu tertutup"} className="relative aspect-[3/4] w-full touch-manipulation cursor-pointer" style={{ perspective: 600 }}>
                            <motion.div animate={{ rotateY: face ? 180 : 0 }} transition={{ duration: 0.35 }} className="absolute inset-0" style={{ transformStyle: "preserve-3d" }}>
                                <div style={hidden} className="absolute inset-0 flex items-center justify-center rounded-xl border-2 border-game-gold bg-game shadow-md">
                                    <Glyph d={STAR} className="size-1/2 text-game-gold" />
                                </div>
                                <div style={{ ...hidden, transform: "rotateY(180deg)" }} className={`absolute inset-0 flex items-center justify-center rounded-xl border-2 bg-game-cream shadow-md ${matched.includes(i) ? "border-game-gold" : "border-game"}`}>
                                    <Icon className="size-2/3" />
                                </div>
                            </motion.div>
                        </button>
                    )
                })}
            </div>

            <Couple className="absolute bottom-[14%] left-1/2 -translate-x-1/2" />

            {!done && <SkipLink onClick={() => { setMatched(cards.map((_, i) => i)); setDone(true) }} />}

            {done && (
                <Panel title="GALERI TERBUKA">
                    <div className="grid grid-cols-2 gap-3">
                        {data.photos.map((src) => (
                            <div key={src} className="relative aspect-square overflow-hidden rounded-2xl border-2 border-game/30">
                                <Image src={src} alt="Foto galeri" fill sizes="200px" className="object-cover" />
                            </div>
                        ))}
                    </div>
                    <GameButton onClick={onNext} className="mt-5 w-full">Lanjut ▶</GameButton>
                </Panel>
            )}
        </div>
    )
}
