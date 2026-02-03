"use client"
import logo from "!/landing/Arunara.svg"
import { Menu, X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

const Navbar = () => {
    const [openMenu, setOpenMenu] = useState(false);
    const handleScroll = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            const yOffset = -80; // menyesuaikan tinggi navbar
            const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;

            window.scrollTo({ top: y, behavior: "smooth" });
        }
    };
    return (
        <>
            <nav className="w-full bg-white flex px-6 md:px-16 justify-between items-center fixed top-0 left-0 z-50 shadow h-16">
                <Image src={logo} alt="Arunara" className="h-10 w-auto cursor-pointer" onClick={() => handleScroll("home")} />

                {/* Desktop Menu */}
                <div className="hidden md:flex justify-center items-center gap-10">
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

                    {/* <button
                        onClick={() => handleScroll("about")}
                        className="text-sm text-neutral-text4 hover:text-rose1 transition-colors cursor-pointer"
                    >
                        Tentang Arunara
                    </button> */}
                </div>

                {/* Mobile Hamburger */}
                <button
                    className="md:hidden"
                    onClick={() => setOpenMenu(true)}
                >
                    <Menu className="h-7 w-7" />
                </button>
            </nav>

            {/* DARK OVERLAY */}
            <div
                className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-40 transition-opacity duration-300 ${openMenu ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                    }`}
                onClick={() => setOpenMenu(false)}
            />

            {/* SIDEBAR */}
            <div
                className={`
                    fixed top-0 right-0 h-full w-64 bg-white shadow-xl z-50 p-6 
                    flex flex-col gap-8 pt-20
                    transform transition-transform duration-300 ease-in-out
                    ${openMenu ? "translate-x-0" : "translate-x-full"}
                `}
            >
                {/* Close Button */}
                <button
                    className="absolute top-5 right-5"
                    onClick={() => setOpenMenu(false)}
                >
                    <X className="h-7 w-7" />
                </button>

                <button
                    onClick={() => {
                        setOpenMenu(false);
                        handleScroll("home");
                    }}
                    className="text-lg text-neutral-text4 hover:text-rose1 transition-colors text-left"
                >
                    Home
                </button>

                <button
                    onClick={() => {
                        setOpenMenu(false);
                        handleScroll("product");
                    }}
                    className="text-lg text-neutral-text4 hover:text-rose1 transition-colors text-left"
                >
                    Product
                </button>

                {/* <button
                    onClick={() => {
                        setOpenMenu(false);
                        handleScroll("about");
                    }}
                    className="text-lg text-neutral-text4 hover:text-rose1 transition-colors text-left"
                >
                    Tentang Arunara
                </button> */}
            </div>
        </>
    )
}

export default Navbar