"use client"
import { useEffect, useState } from "react"
import { motion } from "motion/react"
import { Glyph, HEART, STAR } from "./art"
import { stageLabels } from "./data"

export function GameButton({ className = "", ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
    return (
        <button
            {...props}
            className={`touch-manipulation cursor-pointer rounded-2xl border-b-4 border-[#5A2F1D] bg-game-accent px-6 min-h-12 font-bold tracking-wide text-white shadow-lg active:translate-y-[2px] active:border-b-2 disabled:opacity-60 ${className}`}
        />
    )
}

// Every level can be skipped: info is never locked behind the game
export function SkipLink({ onClick }: { onClick: (e: React.MouseEvent) => void }) {
    return (
        <button onClick={onClick} className="absolute bottom-1 left-1/2 -translate-x-1/2 min-h-11 px-4 text-xs font-semibold text-white/90 underline touch-manipulation cursor-pointer">
            Lewati ▶
        </button>
    )
}

export function Hud({ stage, total, music, onMusic }: { stage: number; total: number; music: boolean; onMusic: () => void }) {
    return (
        <div className="absolute top-0 inset-x-0 z-30 flex items-center justify-between gap-2 px-3 pt-3 pointer-events-none">
            <div className="rounded-full bg-game-cream border-2 border-game px-3 py-1 shadow-md">
                <p className="text-[11px] font-bold text-game">LV {stage}/{total} · {stageLabels[stage]}</p>
                <div className="flex gap-1 mt-0.5">
                    {Array.from({ length: total }, (_, i) => (
                        <span key={i} className={`h-1 flex-1 rounded-full ${i < stage ? "bg-game-gold" : "bg-game/20"}`} />
                    ))}
                </div>
            </div>
            <button
                onClick={onMusic}
                aria-label={music ? "Matikan musik" : "Putar musik"}
                className="pointer-events-auto size-11 rounded-full bg-game-cream border-2 border-game text-lg shadow-md touch-manipulation cursor-pointer"
            >
                {music ? "♪" : "✕"}
            </button>
        </div>
    )
}

export function useTypewriter(text: string, speed = 28) {
    const [n, setN] = useState(0)
    useEffect(() => {
        setN(0)
        const t = setInterval(() => setN((c) => (c >= text.length ? c : c + 1)), speed)
        return () => clearInterval(t)
    }, [text, speed])
    return { shown: text.slice(0, n), done: n >= text.length, finish: () => setN(text.length) }
}

// RPG dialog: name plate on the top edge, caret once the line is fully typed
export function DialogBox({ name, shown, done, className = "" }: { name: string; shown: string; done: boolean; className?: string }) {
    return (
        <div className={className}>
            <div className="relative rounded-2xl border-[3px] border-game bg-game-cream px-4 pb-4 pt-5 shadow-[0_5px_0_var(--color-game)]">
                <span className="absolute -top-3.5 left-4 rounded-lg bg-game px-3 py-0.5 text-xs font-bold text-game-gold">{name}</span>
                <p className="min-h-[4.5rem] text-[14px] leading-relaxed text-[#4A4A4A]">{shown}</p>
                {done && <span className="blink-caret absolute bottom-2 right-3 text-sm text-game">▼</span>}
            </div>
        </div>
    )
}

export function TypedDialog({ name, text, className }: { name: string; text: string; className?: string }) {
    const { shown, done } = useTypewriter(text)
    return <DialogBox name={name} shown={shown} done={done} className={className} />
}

// Slides up over the lower scene: the "reward" a finished level reveals
export function Panel({ title, children }: { title: string; children: React.ReactNode }) {
    return (
        <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ type: "spring", damping: 26, stiffness: 190 }}
            className="absolute inset-x-0 bottom-0 z-20 max-h-[82%] overflow-y-auto overscroll-contain rounded-t-[28px] border-t-4 border-game-gold bg-game-cream p-5 pb-6 text-game shadow-[0_-8px_24px_rgba(0,0,0,.25)]"
        >
            <p className="mb-3 text-center text-[11px] font-bold tracking-widest text-game-accent">★ {title} ★</p>
            {children}
        </motion.div>
    )
}

const angles = [-150, -120, -90, -60, -30, -105, -75]

// One-shot burst of icons from a point; deterministic so it never re-randomizes
export function Burst({ icon = "heart", className = "left-1/2 bottom-[30%]" }: { icon?: "heart" | "star"; className?: string }) {
    return (
        <div className={`pointer-events-none absolute z-10 ${className}`} aria-hidden>
            {angles.map((a, i) => (
                <motion.span
                    key={a}
                    initial={{ opacity: 1, x: 0, y: 0, scale: 0.5 }}
                    animate={{ opacity: 0, x: Math.cos((a * Math.PI) / 180) * 110, y: Math.sin((a * Math.PI) / 180) * 110, scale: 1.3 }}
                    transition={{ duration: 1.3, delay: i * 0.04, ease: "easeOut" }}
                    className={`absolute -ml-3 -mt-3 block size-6 ${icon === "heart" ? "text-[#E58A8A]" : "text-game-gold"}`}
                >
                    <Glyph d={icon === "heart" ? HEART : STAR} className="size-full" />
                </motion.span>
            ))}
        </div>
    )
}
