import { useState } from "react"
import Image from "next/image"

interface Props {
    src: string
    alt: string
    onClick?: () => void
    className?: string
}

export default function ImageWithSkeleton({
    src,
    alt,
    onClick,
    className = ""
}: Props) {
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    return (
        <div
            className={`relative w-full h-full overflow-hidden rounded-lg ${className}`}
            onClick={onClick}
        >
            {/* Skeleton */}
            {(loading || error) && (
                <div className="absolute inset-0 bg-gray-200 animate-pulse" />
            )}

            {/* Image */}
            {!error && (
                <Image
                    src={src}
                    alt={alt}
                    fill
                    className="object-cover"
                    onLoadingComplete={() => setLoading(false)}
                    onError={() => {
                        setLoading(false)
                        setError(true)
                    }}
                />
            )}
        </div>
    )
}
