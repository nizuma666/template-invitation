"use client"
import { ChevronRight } from "lucide-react"
import Image, { StaticImageData } from "next/image"

const Card = ({ img, title, price, disc, url }: { img: StaticImageData, title: string, price: string, disc?: string, url: string }) => {
    return (
        <div className="flex flex-col gap-3">
            <Image src={img} alt={title} width={310} height={350} className="rounded-lg w-[163px] h-[163px] lg:w-[310px] lg:h-[350px]" />
            <div className="flex flex-col gap-2">
                <p className="text-neutral-text5 font-medium text-sm lg:text-base">{title}</p>
                <p className="text-text-title font-bold text-sm lg:text-base">{price} <span className="text-text-body line-through font-normal text-xs lg:text-base">{disc}</span></p>
            </div>
            <div className="flex flex-col lg:flex-row gap-2 lg:gap-4">
                <a
                    href="https://wa.me/6288802877549?text=Halo%20Arunara,%20saya%20ingin%20memesan%20undangan"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-rose1 rounded-lg py-2 lg:py-4 px-8 bg-white text-rose1 font-semibold flex items-center justify-center gap-2 cursor-pointer">Pesan <ChevronRight className="text-rose1" /></a>
                <button onClick={() => window.open(url)} type="button" className="border bg-rose1 rounded-lg py-2 lg:py-4 px-8 text-white font-bold flex items-center justify-center cursor-pointer">Demo <ChevronRight /></button>
            </div>
        </div>
    )
}

export default Card