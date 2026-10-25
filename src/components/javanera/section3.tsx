"use client"
import { HandHeartIcon, ChampagneIcon } from "@phosphor-icons/react"
import PatternBg from "./components/pattern_bg"
import SectionHeading from "./components/section_heading"
import EventCard from "./components/event_card"
import Reveal from "./components/reveal"

const address = "Jl Pemuda No 28 RT 10 RW 10 Kel. Serdang, Kec. Kemayoran, Jakarta Pusat, Indonesia"
const mapLink = "https://maps.app.goo.gl/8w6CskV7inVUunUv8"

const events = [
    { icon: <HandHeartIcon size={20} />, title: "Akad Nikah", date: "02 Februari 2027", time: "08:00 WIB - 10:00 WIB", address, mapLink },
    { icon: <ChampagneIcon size={20} />, title: "Resepsi", date: "02 Februari 2027", time: "11:00 WIB - 18:00 WIB", address, mapLink },
]

export default function Section3() {
    return (
        <section id="2" className="relative px-6 py-14 font-akatab overflow-hidden">
            <PatternBg tone="brown" />
            <div className="relative flex flex-col gap-6">
                <SectionHeading title="Save The Date" light />
                {events.map((event, i) => (
                    <Reveal key={event.title} delay={i * 0.25}>
                        <EventCard {...event} />
                    </Reveal>
                ))}
            </div>
        </section>
    )
}
