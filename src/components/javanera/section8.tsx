"use client"
import { Globe } from "lucide-react"
import { InstagramLogoIcon } from "@phosphor-icons/react"
import Reveal from "./components/reveal"

export default function Section8() {
    return (
        <footer className="relative px-6 py-16 text-white text-center font-akatab bg-[url(/javanera/footer_bg.webp)] bg-cover bg-center flex flex-col items-center">
            <Reveal>
                <p className="font-adelia text-base">See You There</p>
            </Reveal>
            <Reveal delay={0.25}>
                <h2 className="text-[24px] font-bold mt-2">With Love & Gratitude</h2>
            </Reveal>
            <Reveal delay={0.5}>
                <p className="text-sm leading-relaxed mt-3">We are deeply grateful for your love, blessings, and support as we begin this new chapter of our lives.</p>
            </Reveal>
            <Reveal from="zoom" delay={0.75}>
                <p className="font-adelia text-[48px] mt-6 mb-3 leading-tight">Arunara</p>
            </Reveal>
            <Reveal delay={1}>
                <p className="text-sm">The Dawn of Every Beautiful Moment</p>
            </Reveal>
            <Reveal delay={1.25} className="flex gap-3 mt-5">
                <div className="flex gap-1.5 items-center border border-white rounded-lg px-3 py-1.5 text-sm">
                    <InstagramLogoIcon size={18} />
                    arunara
                </div>
                <div className="flex gap-1.5 items-center border border-white rounded-lg px-3 py-1.5 text-sm">
                    <Globe width={16} height={16} />
                    arunara.id
                </div>
            </Reveal>
        </footer>
    )
}
