"use client"
import logo from "!/landing/Arunara.svg"
import Image from "next/image"
import Link from "next/link"

const Navbar = () => {
    const handleScroll = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            const yOffset = -80; // menyesuaikan tinggi navbar
            const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;

            window.scrollTo({ top: y, behavior: "smooth" });
        }
    };
    return (
        <nav className="w-full bg-white flex px-16 justify-between items-center fixed top-0 left-0 z-50 shadow">
            <Image src={logo} alt="Arunara" className="h-10 w-auto" />
            <div className="flex justify-center items-center gap-10 py-[26px]">
                <button
                    onClick={() => handleScroll("home")}
                    className="text-sm text-neutral-text4 hover:text-rose1 transition-colors cursor-pointer"
                >
                    Home
                </button>
                <button
                    onClick={() => handleScroll("product")}
                    className="text-sm text-neutral-text4 hover:text-rose1 transition-colors cursor-pointer"
                >
                    Product
                </button>
                <button
                    onClick={() => handleScroll("about")}
                    className="text-sm text-neutral-text4 hover:text-rose1 transition-colors cursor-pointer"
                >
                    Tentang Arunara
                </button>
            </div>
        </nav>
    )
}

export default Navbar