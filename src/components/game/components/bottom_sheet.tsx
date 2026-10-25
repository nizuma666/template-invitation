"use client"
import { useEffect, useState } from "react"
import { createPortal } from "react-dom"
import { motion, AnimatePresence } from "motion/react"

type BottomSheetProps = {
    open: boolean
    onClose: () => void
    children: React.ReactNode
}

export default function BottomSheet({ open, onClose, children }: BottomSheetProps) {
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    useEffect(() => {
        if (!open) return
        document.body.style.overflowY = "hidden"
        return () => {
            document.body.style.overflowY = ""
        }
    }, [open])

    // Portal so the fixed sheet escapes transformed (animated) ancestors
    if (!mounted) return null
    return createPortal(
        <AnimatePresence>
            {open && (
                <div className="fixed inset-0 flex items-end justify-center font-akatab" style={{ zIndex: 99999 }}>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-black/70"
                    />
                    <motion.div
                        initial={{ y: "100%" }}
                        animate={{ y: 0 }}
                        exit={{ y: "100%" }}
                        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                        className="relative bg-[#FBF7F2] rounded-t-[32px] p-6 w-full max-w-md max-h-[90dvh] overflow-auto shadow-2xl"
                    >
                        <div className="w-12 h-1.5 bg-game/20 rounded-full mx-auto mb-6" />
                        {children}
                    </motion.div>
                </div>
            )}
        </AnimatePresence>,
        document.body
    )
}
