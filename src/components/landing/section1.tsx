import background from "!/landing/bg-section1-landing.png"
import phone from "!/landing/img-phone.png"
import { ChevronRight } from "lucide-react"
import Image from "next/image"

const Section1 = () => {
    return (
        <section className="relative w-full min-h-screen">
            <div className="top-0 left-0 w-full h-full min-h-screen z-0 absolute">
                <Image
                    src={background}
                    fill
                    alt="B&W"
                    className="object-cover object-center z-0"
                />
                <div className="w-full h-full absolute inset-0 z-10 bg-gradient-to-b from-white/0 via-white/95 to-white/50" />
            </div>
            <div className="relative z-20 w-full h-screen flex justify-between items-center px-[160px]">
                <div className="flex flex-col gap-12 max-w-[518px]">
                    <div className="flex flex-col gap-4">
                        <div>
                            <p className="font-playfair text-[64px] text-nowrap">The Dawn Of Every</p>
                            <p className="font-playfair text-rose1 text-[64px]">Beautiful Moment</p>
                        </div>
                        <p className="text-subheading1 text-neutral-text4">Setiap kisah cinta pantas punya awal yang indah. Buat undangan digital yang menyentuh hati dan mencerminkan kisahmu.</p>
                    </div>
                    <div className="flex gap-6">
                        <button type="button" className="cursor-pointer text-subheading2 font-bold rounded-lg py-4 px-12 flex gap-2 items-center bg-rose1 text-white text-nowrap">Lihat Template <ChevronRight /></button>
                        <button type="button" className="cursor-pointer text-subheading2 font-semibold rounded-lg py-4 px-12 flex gap-2 items-center border border-rose1 text-rose1 text-nowrap">Pesan Sekarang <ChevronRight /></button>
                    </div>
                </div>
                <Image src={phone} width={800} height={821} alt="arunara" className="absolute bottom-0 right-20" />
            </div>
        </section>
    )
}

export default Section1