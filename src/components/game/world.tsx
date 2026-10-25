"use client"
import { motion } from "motion/react"

// Stage -> sky (dawn / day / dusk) and sun position, so moving on feels like the day passing
const skyOf = [0, 0, 1, 1, 1, 2, 2, 2]
const skies = [
    "linear-gradient(#FFD2A8, #FFF0D9 72%)",
    "linear-gradient(#9CD3F0, #E9F6FB 76%)",
    "linear-gradient(#F59E6B, #FFD9A8 58%, #FFF0D9)",
]
const sunColor = ["#FFB36B", "#FFE08A", "#FF8A5C"]
const sunLeft = [14, 22, 36, 50, 62, 72, 80, 50]
const sunTop = [36, 28, 17, 12, 15, 26, 34, 30]

function Palm({ x }: { x: number }) {
    return (
        <g>
            <path d={`M${x} 92Q${x + 6} 52 ${x - 4} 22`} stroke="#6B4423" strokeWidth="6" fill="none" strokeLinecap="round" />
            {[-30, 15, -75, 60].map((r) => (
                <ellipse key={r} cx={x - 4} cy="22" rx="26" ry="7" fill="#5E9078" transform={`rotate(${r} ${x - 4} 22)`} />
            ))}
        </g>
    )
}

export default function World({ stage }: { stage: number }) {
    const sky = skyOf[stage] ?? 2

    return (
        <div className="absolute inset-0 overflow-hidden" aria-hidden>
            {skies.map((bg, i) => (
                <motion.div key={i} className="absolute inset-0" style={{ background: bg }} animate={{ opacity: sky === i ? 1 : 0 }} transition={{ duration: 1.6 }} />
            ))}

            <motion.div
                className="absolute size-20 rounded-full -translate-x-1/2 -translate-y-1/2"
                animate={{ left: `${sunLeft[stage]}%`, top: `${sunTop[stage]}%`, backgroundColor: sunColor[sky] }}
                style={{ boxShadow: "0 0 0 14px rgba(255,255,255,.25)" }}
                transition={{ duration: 1.6, ease: "easeInOut" }}
            />

            <svg viewBox="0 0 64 28" className="cloud-drift absolute top-[20%] left-0 w-24 opacity-90">
                <g fill="#fff"><circle cx="18" cy="18" r="10" /><circle cx="32" cy="13" r="12" /><circle cx="46" cy="18" r="9" /><rect x="14" y="18" width="38" height="9" rx="4" /></g>
            </svg>
            <svg viewBox="0 0 64 28" className="cloud-drift absolute top-[34%] left-0 w-16 opacity-70" style={{ animationDelay: "-35s" }}>
                <g fill="#fff"><circle cx="18" cy="18" r="10" /><circle cx="32" cy="13" r="12" /><circle cx="46" cy="18" r="9" /><rect x="14" y="18" width="38" height="9" rx="4" /></g>
            </svg>

            <motion.svg viewBox="0 0 1200 220" preserveAspectRatio="none" className="absolute bottom-[18%] left-0 h-[26%] w-[320%]" animate={{ x: `${-stage * 3}%` }} transition={{ duration: 1.6, ease: "easeInOut" }}>
                <path d="M0 220V150L120 70L240 140L380 40L520 150L640 100L800 150L960 60L1100 140L1200 110V220z" fill="#BFD3C4" opacity=".75" />
                <g fill="#9DB7A4">
                    <rect x="650" y="170" width="140" height="50" /><rect x="665" y="140" width="110" height="30" /><rect x="680" y="112" width="80" height="28" /><path d="M695 112L720 70L745 112z" />
                    <rect x="80" y="185" width="80" height="35" /><rect x="92" y="162" width="56" height="23" /><path d="M100 162L120 130L140 162z" />
                </g>
            </motion.svg>

            <motion.svg viewBox="0 0 1200 160" preserveAspectRatio="none" className="absolute bottom-[13%] left-0 h-[22%] w-[320%]" animate={{ x: `${-stage * 6}%` }} transition={{ duration: 1.6, ease: "easeInOut" }}>
                <path d="M0 160V90Q150 30 320 80T640 70T960 60T1200 80V160z" fill="#8FB59A" />
                <Palm x={200} /><Palm x={760} /><Palm x={1060} />
            </motion.svg>

            <div className="absolute inset-x-0 bottom-0 h-[16%] border-t-4 border-[#A8D1A0]" style={{ background: "linear-gradient(#6E9C7E, #4F7F63)" }} />
        </div>
    )
}
