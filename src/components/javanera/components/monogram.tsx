import Image from "next/image"

// The Figma frame only carries the diagonal slash, so the initials are text on top of it
export default function Monogram({ left, right, className = "w-[200px]" }: { left: string; right: string; className?: string }) {
    return (
        <div className={`relative ${className}`}>
            <Image src="/javanera/section_1_singkatan.svg" alt="" width={233} height={190} className="w-full h-auto" priority />
            <span className="absolute left-[38%] top-[44%] -translate-x-1/2 -translate-y-1/2 font-alice text-[30px] text-javanera leading-none">{left}</span>
            <span className="absolute left-[62%] top-[55%] -translate-x-1/2 -translate-y-1/2 font-alice text-[30px] text-javanera leading-none">{right}</span>
        </div>
    )
}
