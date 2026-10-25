"use client"
import { motion } from "motion/react"
import { Bride, Groom } from "../art"
import { data } from "../data"
import { GameButton } from "../ui"

export default function Title({ onStart }: { onStart: () => void }) {
    return (
        <div className="absolute inset-0 flex flex-col items-center px-6 pt-[14%] text-center font-akatab text-game">
            <motion.p initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.8 }} className="text-lg">
                the wedding of
            </motion.p>
            <motion.h1 initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.5, type: "spring", stiffness: 120, damping: 12 }} className="mt-2 font-alice text-[46px] leading-[1.1] text-game">
                Sari <span className="text-game-accent">&</span> Supri
            </motion.h1>
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }} className="mt-4 font-alice text-lg">
                02.02.2027
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.2, duration: 0.8 }} className="mb-[34%] mt-auto flex flex-col items-center rounded-3xl bg-game-cream/85 px-6 py-4 shadow-md">
                <p className="text-sm">Dear,</p>
                <p className="mb-4 text-lg font-bold">{data.guest}</p>
                <motion.div animate={{ scale: [1, 1.06, 1] }} transition={{ duration: 1.6, repeat: Infinity }}>
                    <GameButton onClick={onStart} className="px-8 text-lg">▶ Press Start</GameButton>
                </motion.div>
                <p className="mt-3 text-[13px] font-semibold text-game">Ketuk untuk memulai petualangan</p>
            </motion.div>

            <Groom className="bob absolute bottom-[14%] left-[6%] h-auto w-[72px]" />
            <Bride className="bob absolute bottom-[14%] right-[6%] h-auto w-[72px]" />
        </div>
    )
}
