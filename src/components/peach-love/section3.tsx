"use client"
import Image from "next/image";
import CountdownTimer from "./components/countdown_timer";
import Button from "./components/button";
import { MapPin } from "lucide-react";

/* eslint-disable @typescript-eslint/no-explicit-any */
export default function Section3({ content }: { content: any }) {
    const handleMap = (url: string) => {
        window.open(url, "_blank")
    }
    return (
        <div className="px-6 py-10 flex flex-col gap-10 items-center">
            <div>
                <CountdownTimer targetDate="2025-12-31T00:00:00" />
            </div>
            <div className="flex flex-col items-center gap-4">
                <p className="text-rose1 text-heading1 font-bold">{content.title}</p>
                <p className="text-neutral-text4 text-center">{content.desc}</p>
            </div>
            {content.events.map((item: any, index: number) => (
                <div key={index} className="rounded-2xl border border-rose4 max-w-[320px] flex flex-col items-center gap-4 px-4 py-6">
                    <div className="flex flex-col gap-2 items-center">
                        <Image src={item.icon} width={48} height={48} alt="acara" />
                        <p className="text-rose1 text-subheading1 font-semibold">{item.title}</p>
                    </div>
                    <div className="flex flex-col gap-2 text-center items-center font-medium">
                        <p>{item.date}</p>
                        <p>{item.time}</p>
                        <p>{item.address}</p>
                    </div>
                    <Button onClick={() => handleMap("")}><MapPin width={16} height={16} /> Open Google Maps</Button>
                </div>
            ))}
        </div>
    )
}