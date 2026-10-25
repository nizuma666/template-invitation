"use client"
import { motion } from "motion/react"
import { useState } from "react"
import { Bride, Groom } from "../art"
import { data } from "../data"
import { Burst, DialogBox, SkipLink, useTypewriter } from "../ui"

const last = data.stories.length - 1

// Visual-novel style: tap anywhere to finish the line, tap again for the next; the couple walks closer each chapter
export default function Story({ onNext }: { onNext: () => void }) {
    const [i, setI] = useState(0)
    const story = data.stories[i]
    const { shown, done, finish } = useTypewriter(story.cerita)
    const pos = `${4 + (i / last) * 25.5}%`

    const advance = () => {
        if (!done) finish()
        else if (i < last) setI(i + 1)
        else onNext()
    }

    return (
        <div
            role="button"
            tabIndex={0}
            aria-label="Lanjutkan cerita"
            onClick={advance}
            onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && advance()}
            className="absolute inset-0 cursor-pointer font-akatab touch-manipulation outline-none"
        >
            <p className="absolute inset-x-0 top-[88px] text-center text-xs font-bold tracking-widest text-game">CHAPTER {i + 1}/{data.stories.length}</p>

            <motion.div key={i} initial={{ opacity: 0, y: 14, scale: 0.97 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ duration: 0.4 }} className="absolute inset-x-4 top-[24%]">
                <DialogBox name={story.judul} shown={shown} done={done} />
            </motion.div>

            <motion.div className="absolute bottom-[14%] w-[72px]" animate={{ left: pos }} transition={{ duration: 0.8, ease: "easeInOut" }}>
                <Groom className="bob h-auto w-full" />
            </motion.div>
            <motion.div className="absolute bottom-[14%] w-[72px]" animate={{ right: pos }} transition={{ duration: 0.8, ease: "easeInOut" }}>
                <Bride className="bob h-auto w-full" />
            </motion.div>

            {i === last && done && <Burst />}

            <p className="absolute inset-x-0 bottom-[60px] text-center text-xs font-semibold text-white/90">Ketuk di mana saja</p>
            <SkipLink onClick={(e) => { e.stopPropagation(); onNext() }} />
        </div>
    )
}
