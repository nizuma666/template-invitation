"use client"
import arunara from "!/landing/Arunara-footer.svg"
import { Mail } from "lucide-react"
import Image from "next/image"
import wa from "!/landing/WA.svg"
import Link from "next/link"
import facebook from "!/landing/facebook.svg"
import instagram from "!/landing/instagram.svg"
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
        <footer className="bg-rose1 px-16 pt-16 pb-10 flex flex-col justify-center items-center gap-6 text-white">
            <div className="px-10 flex justify-between w-full">
                <div className="flex flex-col gap-4 max-w-[421px]">
                    <Image src={arunara} alt="Arunara" />
                    <h4 className="font-semibold text-white">The Dawn of Every Beautiful Moment</h4>
                    <p>Platform undangan digital yang praktis dan elegan untuk awal kisah indahmu</p>
                    <div className="flex flex-col gap-2">
                        <div className="flex gap-2">
                            <Mail className="text-white" />
                            <p>arunara.asli@gmail.com</p>
                        </div>
                        <div className="flex gap-2">
                            <Image src={wa} alt="whatsapp arunara" className="text-white" />
                            <p>+62 888 0287 7549</p>
                        </div>
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
                        <button
                            onClick={() => handleScroll("testimoni")}
                            className="text-left cursor-pointer"
                        >
                            Testimoni
                        </button>
                    </div>
                </div>
                <div className="flex flex-col gap-4">
                    <h4 className="font-bold">Social Media</h4>
                    <div className="flex gap-3">
                        <Image src={facebook} alt="Facebokk Arunara" />
                        <Image src={instagram} alt="Instagram Arunara" />
                        <Image src={twitter} alt="Twitter Arunara" />
                        <Image src={tiktok} alt="Tiktok Arunara" />
                        <Image src={youtube} alt="Youtube Arunara" />
                    </div>
                </div>
            </div>
            <div className="h-[1px] border border-white w-full" />
            <p className="text-center">Copyright @ 2025 Arunara. All Rights Reserved</p>
        </footer>
    )
}

export default Footer