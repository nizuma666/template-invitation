import bg from "!/landing/bs-section4-landing.png"
import why from "!/landing/Why.png"
import Image from "next/image"
import list from "!/landing/list_icon_landing.svg"
import { ChevronRight } from "lucide-react"
const Section4 = () => {
    return (
        <section className="lg:p-16 p-6">
            <div className="p-6 lg:p-10 relative flex">
                <div className="absolute top-0 left-0 z-10 w-full h-full bg-rose1/70 rounded-2xl" />
                <Image src={bg} fill alt="Hubungi Kami" className="object-cover rounded-2xl w-full h-full absolute" />
                <div className="flex flex-col gap-6 lg:flex-row lg:gap-16 justify-center items-center relative z-20 w-full">
                    <div className=" w-full lg:w-2/5">
                        <Image src={why} alt="Why?" />
                    </div>
                    <div className="flex flex-col gap-6 w-full lg:w-3/5">
                        <div className="flex flex-col gap-4">
                            <h2 className="text-white font-bold font-playfair text-2xl lg:text-heading1">Ingin Undangan yang Unik dan Kamu Banget?</h2>
                            <p className="text-base lg:text-subheading2 text-white">Buat undangan digital yang sepenuhnya sesuai dengan visimu. Tim Arunara siap membantu mewujudkannya</p>
                        </div>
                        <div className="flex flex-col gap-3">
                            <div className="flex gap-2">
                                <Image src={list} alt="Desain Ekslusif" />
                                <p className="text-white text-sm lg:text-subheading2">Desain Eksklusif, Hanya untuk Kamu</p>
                            </div>
                            <div className="flex gap-2">
                                <Image src={list} alt="Desain Ekslusif" />
                                <p className="text-white text-sm lg:text-subheading2">Tentukan Domain yang Kamu Banget</p>
                            </div>
                            <div className="flex gap-2">
                                <Image src={list} alt="Desain Ekslusif" />
                                <p className="text-white text-sm lg:text-subheading2">Integrasi Fitur Sesuai Kebutuhanmu</p>
                            </div>
                        </div>
                        <a href="https://wa.me/6288802877549" target="_blank" className="bg-rose5 rounded-lg flex gap-2 justify-center items-center cursor-pointer text-rose1 w-fit py-2 lg:py-4 px-4 lg:px-6 font-bold text-base lg:text-subheading2">Hubungi Tim Arunara <ChevronRight /></a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Section4