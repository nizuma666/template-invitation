// All art is inline SVG: no image requests, a few hundred bytes each

export const HEART = "M12 21s-7.5-4.6-9.6-9.2C.9 8.4 3 4.5 6.7 4.5c2 0 3.5 1.1 5.3 3 1.8-1.9 3.3-3 5.3-3 3.7 0 5.8 3.9 4.3 7.3C19.5 16.4 12 21 12 21z"
export const STAR = "M12 2l2.9 6.3 6.9.8-5.1 4.7 1.4 6.8L12 17l-6.1 3.6 1.4-6.8L2.2 9.1l6.9-.8z"

export function Glyph({ d, className }: { d: string; className?: string }) {
    return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden>
            <path d={d} fill="currentColor" />
        </svg>
    )
}

const SKIN = "#F4CDA5"
const INK = "#2E2321"
const GOLD = "#F2B544"

function Face() {
    return (
        <>
            <circle cx="26" cy="26" r="1.8" fill={INK} />
            <circle cx="38" cy="26" r="1.8" fill={INK} />
            <circle cx="22" cy="31" r="3" fill="#F29B8E" opacity=".55" />
            <circle cx="42" cy="31" r="3" fill="#F29B8E" opacity=".55" />
            <path d="M28 31Q32 35 36 31" stroke={INK} strokeWidth="1.6" fill="none" strokeLinecap="round" />
        </>
    )
}

// Same viewBox for both so they stand at the same height when placed side by side
export function Groom({ className }: { className?: string }) {
    return (
        <svg viewBox="0 -8 64 118" className={className} role="img" aria-label="Supri">
            <ellipse cx="32" cy="106" rx="20" ry="3" fill="#000" opacity=".15" />
            <path d="M14 62h36l4 42H10z" fill="#8B5A3C" />
            <path d="M32 72l4 4-4 4-4-4zM20 88l3 3-3 3-3-3zM44 88l3 3-3 3-3-3z" fill={GOLD} opacity=".7" />
            <ellipse cx="22" cy="105" rx="8" ry="3.5" fill={INK} />
            <ellipse cx="42" cy="105" rx="8" ry="3.5" fill={INK} />
            <rect x="10" y="40" width="9" height="26" rx="4.5" fill={INK} />
            <rect x="45" y="40" width="9" height="26" rx="4.5" fill={INK} />
            <circle cx="14.5" cy="67" r="4" fill={SKIN} />
            <circle cx="49.5" cy="67" r="4" fill={SKIN} />
            <rect x="16" y="38" width="32" height="28" rx="8" fill={INK} />
            <circle cx="32" cy="46" r="1.6" fill={GOLD} />
            <circle cx="32" cy="53" r="1.6" fill={GOLD} />
            <rect x="16" y="61" width="32" height="5" fill={GOLD} />
            <rect x="28" y="34" width="8" height="6" fill={SKIN} />
            <circle cx="32" cy="24" r="14" fill={SKIN} />
            <path d="M17 21Q17 6 32 6Q47 6 47 21Q40 16 32 16Q24 16 17 21z" fill="#6B4423" />
            <path d="M17 21Q32 14 47 21v3Q32 17 17 24z" fill={GOLD} />
            <Face />
        </svg>
    )
}

export function Bride({ className }: { className?: string }) {
    return (
        <svg viewBox="0 -8 64 118" className={className} role="img" aria-label="Sari">
            <ellipse cx="32" cy="106" rx="20" ry="3" fill="#000" opacity=".15" />
            <path d="M16 62h32l6 42H10z" fill="#7A4B3A" />
            <path d="M12 80Q22 74 32 80T52 80M11 92Q22 86 32 92T53 92" stroke={GOLD} strokeWidth="2" fill="none" opacity=".8" />
            <ellipse cx="22" cy="105" rx="7" ry="3.5" fill={INK} />
            <ellipse cx="42" cy="105" rx="7" ry="3.5" fill={INK} />
            <rect x="11" y="40" width="9" height="26" rx="4.5" fill="#E58A8A" />
            <rect x="44" y="40" width="9" height="26" rx="4.5" fill="#E58A8A" />
            <circle cx="15.5" cy="67" r="4" fill={SKIN} />
            <circle cx="48.5" cy="67" r="4" fill={SKIN} />
            <rect x="17" y="38" width="30" height="28" rx="10" fill="#E58A8A" />
            <path d="M26 38l6 12 6-12" stroke={GOLD} strokeWidth="2.5" fill="none" strokeLinejoin="round" />
            <path d="M17 44l30 18v5L17 49z" fill={GOLD} opacity=".9" />
            <rect x="28" y="34" width="8" height="6" fill={SKIN} />
            <circle cx="32" cy="4" r="9" fill="#2B1B17" />
            <circle cx="32" cy="24" r="14" fill={SKIN} />
            <path d="M17 24Q15 6 32 6Q49 6 47 24Q42 13 32 13Q22 13 17 24z" fill="#2B1B17" />
            <circle cx="42" cy="3" r="3.4" fill="#E58A8A" />
            <circle cx="42" cy="3" r="1.2" fill={GOLD} />
            <circle cx="22" cy="2" r="1.8" fill="#fff" />
            <circle cx="25" cy="-2" r="1.8" fill="#fff" />
            <Face />
        </svg>
    )
}

export function Couple({ className = "" }: { className?: string }) {
    return (
        <div className={`flex -space-x-2 ${className}`}>
            <Groom className="w-[72px] h-auto bob" />
            <Bride className="w-[72px] h-auto bob" />
        </div>
    )
}

// Memory-card faces
export const HeartIcon = ({ className }: { className?: string }) => <Glyph d={HEART} className={`${className} text-[#E58A8A]`} />
export const RingIcon = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
        <circle cx="12" cy="15" r="6" fill="none" stroke={GOLD} strokeWidth="2.6" />
        <path d="M9 6l3-3 3 3-3 3z" fill="#7FD1E8" />
    </svg>
)
export const FlowerIcon = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
        <g fill="#E58A8A">
            <circle cx="12" cy="6" r="4.2" />
            <circle cx="18" cy="10.5" r="4.2" />
            <circle cx="16" cy="17" r="4.2" />
            <circle cx="8" cy="17" r="4.2" />
            <circle cx="6" cy="10.5" r="4.2" />
        </g>
        <circle cx="12" cy="12" r="3" fill={GOLD} />
    </svg>
)
export const GununganIcon = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
        <path d="M12 2Q18 10 18 14Q18 22 12 22Q6 22 6 14Q6 10 12 2z" fill="#744F45" />
        <path d="M12 7Q15 12 15 15Q15 19 12 19Q9 19 9 15Q9 12 12 7z" fill={GOLD} />
    </svg>
)
export const memoryIcons = [HeartIcon, RingIcon, FlowerIcon, GununganIcon]

// Lid lifts off its left hinge when open
export function Chest({ open, className }: { open: boolean; className?: string }) {
    return (
        <svg viewBox="0 0 120 96" className={`${className} overflow-visible`} role="img" aria-label="Peti hadiah">
            <ellipse cx="60" cy="46" rx="40" ry="14" fill="#FFD76A" opacity={open ? 0.95 : 0} style={{ transition: "opacity .5s" }} />
            <rect x="10" y="46" width="100" height="44" rx="6" fill="#8B5A3C" stroke="#4A2E22" strokeWidth="3" />
            <rect x="52" y="46" width="16" height="44" fill={GOLD} stroke="#4A2E22" strokeWidth="2" />
            <g style={{ transform: open ? "translateY(-20px) rotate(-14deg)" : "none", transformOrigin: "10px 48px", transition: "transform .6s cubic-bezier(.3,1.6,.5,1)" }}>
                <path d="M10 48V36a26 26 0 0 1 26-26h48a26 26 0 0 1 26 26v12z" fill="#A0583A" stroke="#4A2E22" strokeWidth="3" />
                <rect x="52" y="10" width="16" height="38" fill={GOLD} stroke="#4A2E22" strokeWidth="2" />
                <circle cx="60" cy="48" r="7" fill={GOLD} stroke="#4A2E22" strokeWidth="2.5" />
            </g>
        </svg>
    )
}
