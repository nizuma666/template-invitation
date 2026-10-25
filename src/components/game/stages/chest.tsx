"use client"
import { useEffect, useState } from "react"
import { Chest as ChestArt } from "../art"
import { data } from "../data"
import DebitCard from "../components/debit_card"
import { Burst, GameButton, Panel, SkipLink } from "../ui"

const TAPS = 3

// Tap the chest three times to open it; each tap shakes it harder
export default function ChestStage({ onNext }: { onNext: () => void }) {
    const [taps, setTaps] = useState(0)
    const [done, setDone] = useState(false)
    const open = taps >= TAPS

    useEffect(() => {
        if (!open) return
        const t = setTimeout(() => setDone(true), 1000)
        return () => clearTimeout(t)
    }, [open])

    return (
        <div className="absolute inset-0 font-akatab">
            <p className="absolute inset-x-0 top-[88px] text-center text-sm font-semibold text-game">Ketuk peti {TAPS}× untuk membukanya!</p>
            <div className="absolute inset-x-0 top-[112px] flex justify-center gap-2 text-2xl text-game-gold drop-shadow">
                {Array.from({ length: TAPS }, (_, i) => (
                    <span key={i} className={i < taps ? "opacity-100" : "opacity-30"}>★</span>
                ))}
            </div>

            <button onClick={() => setTaps((t) => Math.min(t + 1, TAPS))} disabled={open} aria-label="Ketuk peti hadiah" className="absolute left-1/2 top-[34%] w-[190px] -translate-x-1/2 touch-manipulation cursor-pointer disabled:cursor-default">
                <div key={taps} className={taps > 0 && !open ? "shake" : ""}>
                    <ChestArt open={open} className="h-auto w-full" />
                </div>
            </button>

            {open && <Burst icon="star" className="left-1/2 top-[44%]" />}

            {!done && <SkipLink onClick={() => { setTaps(TAPS); setDone(true) }} />}

            {done && (
                <Panel title="PETI TERBUKA">
                    <p className="mb-4 text-center font-alice text-[19px] leading-snug">Doa restu Anda adalah hadiah terindah bagi kami.</p>
                    <div className="space-y-4">
                        {data.gifts.map((g) => (
                            <DebitCard key={g.bank} {...g} />
                        ))}
                    </div>
                    <GameButton onClick={onNext} className="mt-5 w-full">Lanjut ▶</GameButton>
                </Panel>
            )}
        </div>
    )
}
