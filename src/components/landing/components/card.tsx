import { ChevronRight } from "lucide-react"
import Image, { StaticImageData } from "next/image"

const Card = ({ img, title, price, disc }: { img: StaticImageData, title: string, price: string, disc?: string }) => {
    return (
        <div className="flex flex-col gap-3">
            <Image src={img} alt={title} width={310} height={350} className="rounded-lg" />
            <div className="flex flex-col gap-2">
                <p className="text-neutral-text5 font-medium">{title}</p>
                <p className="text-text-title font-bold">{price} <span className="text-text-body line-through font-normal">{disc}</span></p>
            </div>
            <div className="flex gap-4">
                <button type="button" className="border border-rose1 rounded-lg py-4 px-8 bg-white text-rose1 font-semibold flex items-center justify-center gap-2 cursor-pointer">Pesan <ChevronRight className="text-rose1" /></button>
                <button type="button" className="border bg-rose1 rounded-lg py-4 px-8 text-white font-bold flex items-center justify-center cursor-pointer">Demo <ChevronRight /></button>
            </div>
        </div>
    )
}

export default Card