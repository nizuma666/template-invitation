"use client"
import arunara from "!/landing/Arunara-footer.svg"
import { Mail } from "lucide-react"
import Image from "next/image"
import wa from "!/landing/WA.svg"
import Link from "next/link"
import facebook from "!/landing/facebook.svg"
import instagram from "!/landing/instagram-svgrepo-com 1.svg"
import twitter from "!/landing/twitter.svg"
import tiktok from "!/landing/tiktok.svg"
import youtube from "!/landing/youtube.svg"
const Footer = () => {
    const handleScroll = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            const yOffset = -80; // sesuaikan tinggi navbar
            const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;

            window.scrollTo({ top: y, behavior: "smooth" });
        }
    };
    return (
        <footer className="bg-rose1 px-6 lg:px-16 py-10 lg:pt-16 lg:pb-10 flex flex-col justify-center items-center gap-6 text-white">
            <div className="lg:px-10 flex flex-col gap-6 lg:flex-row justify-between w-full">
                <div className="flex flex-col gap-4 max-w-[421px]">
                    <Image src={arunara} alt="Arunara" />
                    <h4 className="font-semibold text-white">The Dawn of Every Beautiful Moment</h4>
                    <p>Platform undangan digital yang praktis dan elegan untuk awal kisah indahmu</p>
                    <div className="flex flex-col gap-2">
                        <a className="flex gap-2" href="mailto:arunara.asli@gmail.com" >
                            <Mail className="text-white" />
                            <p>arunara.asli@gmail.com</p>
                        </a>
                        <a className="flex gap-2" href="https://wa.me/6288802877549" target="_blank">
                            <Image src={wa} alt="whatsapp arunara" className="text-white" />
                            <p>+62 888 0287 7549</p>
                        </a>
                    </div>
                </div>
                <div className="flex flex-col gap-4">
                    <h4 className="font-bold">Navigasi</h4>
                    <div className="flex flex-col gap-2">
                        <button
                            onClick={() => handleScroll("home")}
                            className="text-left cursor-pointer"
                        >
                            Home
                        </button>
                        <button
                            onClick={() => handleScroll("fitur")}
                            className="text-left cursor-pointer"
                        >
                            Fitur
                        </button>
                        <button
                            onClick={() => handleScroll("product")}
                            className="text-left cursor-pointer"
                        >
                            Product
                        </button>
                        {/* <button
                            onClick={() => handleScroll("testimoni")}
                            className="text-left cursor-pointer"
                        >
                            Testimoni
                        </button> */}
                    </div>
                </div>
                <div className="flex flex-col gap-4">
                    <h4 className="font-bold">Social Media</h4>
                    <a
                        href="https://www.instagram.com/arunara.undangan?igsh=am9mNDl6aDI4djB4"
                        target="_blank"
                        rel="noopener noreferrer" className="flex items-center gap-2.5 px-4 py-2 w-fit lg:w-full bg-white rounded-4xl">
                        <Image src={instagram} alt="Instagram Arunara" />
                        <span className="text-rose1">arunara.undangan</span>
                    </a>
                </div>
            </div>
            <div className="h-[1px] border border-white w-full" />
            <p className="text-center">Copyright @ 2025 Arunara. All Rights Reserved</p>
        </footer>
    )
}

export default Footer