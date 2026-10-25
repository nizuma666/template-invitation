// Overlay colors come from the Figma exports (bg_general / cover_bg / footer_bg), all at 80% over the same batik pattern
const tones = {
    light: "bg-white/80",
    cover: "bg-[#DBCCB8]/80",
    brown: "bg-[#653C31]/80",
}

export default function PatternBg({ tone, className = "absolute inset-0" }: { tone: keyof typeof tones; className?: string }) {
    return (
        <div className={`${className} bg-[url(/javanera/pattern.webp)] bg-cover bg-center`}>
            <div className={`absolute inset-0 ${tones[tone]}`} />
        </div>
    )
}
