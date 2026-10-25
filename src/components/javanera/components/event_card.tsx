"use client"
import { motion } from "motion/react"
import { MapPinIcon } from "@phosphor-icons/react"

type EventCardProps = {
    icon: React.ReactNode
    title: string
    date: string
    time: string
    address: string
    mapLink: string
}

export default function EventCard({ icon, title, date, time, address, mapLink }: EventCardProps) {
    return (
        <div className="bg-white/15 border border-white/20 rounded-2xl p-5 text-white text-center flex flex-col items-center">
            <div className="flex items-center gap-2">
                <div className="size-9 rounded-full border border-white flex items-center justify-center">{icon}</div>
                <p className="font-semibold">{title}</p>
            </div>
            <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
                className="w-full h-px bg-white/50 my-4"
            />
            <p className="text-[22px] font-bold">{date}</p>
            <p className="text-sm font-semibold mt-1">{time}</p>
            <p className="text-sm mt-3 leading-relaxed">{address}</p>
            <motion.a
                href={mapLink}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-4 bg-white text-javanera rounded-lg px-5 py-2 flex items-center gap-2 font-semibold text-sm"
            >
                <MapPinIcon size={16} weight="bold" /> Buka Maps
            </motion.a>
        </div>
    )
}
