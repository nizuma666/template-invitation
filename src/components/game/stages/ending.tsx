"use client"
import { motion } from "motion/react"
import { Couple, Glyph, STAR } from "../art"
import { data } from "../data"
import CountdownTimer from "../components/countdown_timer"

// Eight fixed petals; plenty for low-end phones
const petals = [
    { left: "6%", delay: "0s", dx: "30px" }, { left: "18%", delay: "2.1s", dx: "-20px" },
    { left: "30%", delay: "4.3s", dx: "25px" }, { left: "42%", delay: "1.2s", dx: "-30px" },
    { left: "56%", delay: "3.4s", dx: "20px" }, { left: "68%", delay: "5.2s", dx: "-25px" },
    { left: "80%", delay: "0.8s", dx: "30px" }, { left: "92%", delay: "2.9s", dx: "-15px" },
]

const chips = [
    { label: "Mempelai", stage: 1 },
    { label: "Acara", stage: 2 },
    { label: "Hadiah", stage: 5 },
]

export default function Ending({ onJump, onRestart }: { onJump: (stage: number) => void; onRestart: () => void }) {
    return (
        <div className="absolute inset-0 font-akatab">
            <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
                {petals.map((p, i) => (
                    <span key={i} className="petal" style={{ left: p.left, animationDelay: p.delay, "--dx": p.dx } as React.CSSProperties} />
                ))}
            </div>

            <div className="absolute inset-x-0 top-[84px] flex flex-col items-center px-6 text-center">
                <motion.p initial={{ opacity: 0, scale: 0.7 }} animate={{ opacity: 1, scale: 1 }} transition={{ type: "spring", stiffness: 140, damping: 11 }} className="font-ceviche text-[44px] leading-none text-game-gold" style={{ textShadow: "0 3px 0 #744F45" }}>
                    LEVEL COMPLETE
                </motion.p>
                <div className="mt-2 flex gap-2 text-game-gold">
                    {[0, 1, 2].map((i) => (
                        <motion.span key={i} initial={{ scale: 0, rotate: -90 }} animate={{ scale: 1, rotate: 0 }} transition={{ type: "spring", stiffness: 160, damping: 10, delay: 0.4 + i * 0.25 }}>
                            <Glyph d={STAR} className="size-9 drop-shadow" />
                        </motion.span>
                    ))}
                </div>
                <p className="mt-5 font-alice text-[30px] text-game">Sampai jumpa!</p>
                <p className="mt-1 text-sm font-semibold text-game">{data.events[0].date}</p>
                <div className="mt-4 w-full"><CountdownTimer targetDate={data.target} /></div>
            </div>

            <Couple className="absolute bottom-[14%] left-1/2 -translate-x-1/2" />

            <div className="absolute inset-x-0 bottom-1 flex items-center justify-center gap-2 px-3">
                {chips.map((c) => (
                    <button key={c.label} onClick={() => onJump(c.stage)} className="min-h-11 rounded-full border-2 border-game-gold bg-game px-3 text-xs font-bold text-white touch-manipulation cursor-pointer">
                        {c.label}
                    </button>
                ))}
                <button onClick={onRestart} className="min-h-11 rounded-full border-2 border-game bg-game-cream px-3 text-xs font-bold text-game touch-manipulation cursor-pointer">
                    ↺ Main Lagi
                </button>
            </div>
        </div>
    )
}
