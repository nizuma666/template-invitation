"use client"
import { motion } from "motion/react"

const offsets = {
    up: { y: 40 },
    left: { x: -40 },
    right: { x: 40 },
    zoom: { scale: 0.85 },
}

type RevealProps = {
    children: React.ReactNode
    from?: keyof typeof offsets
    delay?: number
    className?: string
}

export default function Reveal({ children, from = "up", delay = 0, className }: RevealProps) {
    return (
        <motion.div
            initial={{ opacity: 0, ...offsets[from] }}
            whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.2, delay, ease: [0.22, 1, 0.36, 1] }}
            className={className}
        >
            {children}
        </motion.div>
    )
}
