"use client"
import bgFooter from "!/bgFooter.png"
import Image from "next/image"
import Logo from "!/Arunara.svg"
import instagram from "!/instagram.svg"
import { Globe } from "lucide-react"
export default function Section7() {
    return (
        <div className="w-full relative h-[400px]">
            <Image src={bgFooter} alt="Arunara" fill className="object-cover z-0" />
            <div className="absolute inset-0 bg-[#712635CC] z-10"></div>
            <div className="absolute inset-0 z-20 text-white flex flex-col gap-10 items-center py-10 px-5">
                <div className="flex flex-col items-center gap-4 text-white">
                    <p className="font-semibold text-subheading1">Dengan Cinta & Rasa Syukur</p>
                    <p className="text-center"> Kami sangat berterima kasih atas kasih sayang, doa, dan dukungan yang diberikan saat kami memulai babak baru kehidupan.</p>
                </div>
                <div className="flex flex-col gap-4 items-center">
                    <Image src={Logo} alt="Arunara" width={175} height={32} />
                    <p className="text-white">Awal dari Setiap Momen Indah</p>
                    <div className="flex gap-4 items-center">
                        <div className="bg-rose4 flex gap-1 items-center text-rose1 font-semibold px-2 py-1 rounded-2xl">
                            <Image src={instagram} alt="arunara" />
                            arunara
                        </div>
                        <div className="bg-rose4 flex gap-1 items-center text-rose1 font-semibold px-2 py-1 rounded-2xl">
                            <Globe width={16} height={16} />
                            arunara.id
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}