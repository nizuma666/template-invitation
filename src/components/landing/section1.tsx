"use client"
import background from "!/landing/bg-section1-landing.png"
import phone from "!/landing/img-phone.png"
import { ChevronRight } from "lucide-react"
import Image from "next/image"

const Section1 = ({ id }: { id: string }) => {
    const handleScroll = (key: string) => {
        const element = document.getElementById(key);
        if (element) {
            const yOffset = -80; // sesuaikan tinggi navbar
            const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;

            window.scrollTo({ top: y, behavior: "smooth" });
        }
    };
    return (
        <section id={id} className="relative w-full min-h-screen">
            <div className="top-0 left-0 w-full min-h-screen z-0 absolute">
                <Image
                    src={background}
                    fill
                    alt="B&W"
                    className="object-cover object-center z-0"
                />
                <div className="w-full h-full absolute inset-0 z-10 bg-gradient-to-b from-white/0 via-white/95 to-white/50" />
            </div>
            <div className="relative z-20 w-full h-screen flex justify-between pt-32 lg:pt-0 lg:items-center px-6 lg:px-[160px]">
                <div className="flex flex-col gap-6 lg:gap-12 max-w-[340px] lg:max-w-[518px]">
                    <div className="flex flex-col gap-4">
                        <p className="font-playfair text-5xl lg:text-[64px] lg:text-nowrap">The Dawn Of Every</p>
                            <span className="font-playfair text-rose1 text-5xl lg:text-[64px]">Beautiful Moment</span>
                        <p className="text-xl lg:text-subheading1 text-neutral-text4">Setiap kisah cinta pantas punya awal yang indah. Buat undangan digital yang menyentuh hati dan mencerminkan kisahmu.</p>
                    </div>
                    <div className="flex flex-col lg:flex-row gap-4 lg:gap-6">
                        <button type="button" onClick={() => handleScroll("product")} className="cursor-pointer lg:text-subheading2 font-semibold lg:font-bold rounded-lg py-3 lg:py-4 px-6 lg:px-12 flex gap-2 justify-center lg:justify-start items-center bg-rose1 text-white text-nowrap" >Lihat Template <ChevronRight className="hidden lg:block" /></button>
                        <a
                            href="https://wa.me/6288802877549?text=Halo%20Arunara,%20saya%20ingin%20memesan%20undangan"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="z-20 cursor-pointer lg:text-subheading2 font-semibold rounded-lg py-3 lg:py-4 px-6 lg:px-12 flex gap-2 justify-center lg:justify-start items-center border border-rose1 text-rose1 text-nowrap"
                        >
                            Pesan Sekarang
                            <ChevronRight className="hidden lg:block" />
                        </a>

                    </div>
                </div>
                <Image src={phone} width={800} height={821} alt="arunara" className="absolute bottom-0 right-20 hidden lg:block" />
            </div>
        </section>
    )
}

export default Section1