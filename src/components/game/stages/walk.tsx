"use client"
import { useEffect, useState } from "react"
import { motion } from "motion/react"
import { Bride, Groom } from "../art"
import { data } from "../data"
import { Burst, GameButton, Panel, SkipLink, TypedDialog } from "../ui"

const STEPS = 5

// Tap JALAN until the couple meets; the profiles are the reward
export default function Walk({ onNext }: { onNext: () => void }) {
    const [steps, setSteps] = useState(0)
    const [done, setDone] = useState(false)
    const met = steps >= STEPS
    const pos = `${4 + steps * 5.1}%`

    useEffect(() => {
        if (!met) return
        const t = setTimeout(() => setDone(true), 1100)
        return () => clearTimeout(t)
    }, [met])

    return (
        <div className="absolute inset-0 font-akatab">
            <TypedDialog name="Dalang" text="Bantu Sari dan Supri bertemu! Ketuk tombol JALAN untuk melangkah." className="absolute inset-x-4 top-[20%]" />

            <motion.div className="absolute bottom-[14%] w-[72px]" animate={{ left: pos }} transition={{ duration: 0.6, ease: "easeOut" }}>
                <div key={steps} className="hop"><Groom className="h-auto w-full" /></div>
            </motion.div>
            <motion.div className="absolute bottom-[14%] w-[72px]" animate={{ right: pos }} transition={{ duration: 0.6, ease: "easeOut" }}>
                <div key={steps} className="hop"><Bride className="h-auto w-full" /></div>
            </motion.div>

            {met && <Burst />}

            {!done && (
                <>
                    <GameButton onClick={() => setSteps((s) => Math.min(s + 1, STEPS))} disabled={met} className="absolute bottom-[52px] left-1/2 -translate-x-1/2 px-8">
                        JALAN ▶ {steps}/{STEPS}
                    </GameButton>
                    <SkipLink onClick={() => { setSteps(STEPS); setDone(true) }} />
                </>
            )}

            {done && (
                <Panel title="KENALAN DULU">
                    <p className="text-center font-alice text-[20px]">Assalamualaikum Wr. Wb.</p>
                    <p className="mt-1 text-center text-sm leading-relaxed text-[#757575]">{data.greeting}</p>
                    <div className="mt-4 flex flex-col gap-3">
                        {[
                            { who: data.bride, art: <Bride className="h-auto w-12" /> },
                            { who: data.groom, art: <Groom className="h-auto w-12" /> },
                        ].map(({ who, art }) => (
                            <div key={who.name} className="flex items-center gap-3 rounded-2xl border-2 border-game/30 bg-white/70 p-3">
                                <div className="shrink-0">{art}</div>
                                <div>
                                    <p className="font-alice text-[19px]">{who.name}</p>
                                    <p className="text-xs leading-relaxed text-[#757575]">{who.label} {who.parents}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <GameButton onClick={onNext} className="mt-5 w-full">Lanjut ▶</GameButton>
                </Panel>
            )}
        </div>
    )
}
