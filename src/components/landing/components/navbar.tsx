import logo from "!/landing/Arunara.svg"
import Image from "next/image"
import Link from "next/link"

const Navbar = () => {
    return (
        <nav className="w-full bg-white flex px-16 justify-between items-center fixed z-90 shadow">
            <Image src={logo} alt="Arunara" />
            <div className="flex justify-center items-center gap-10 py-[26px]">
                <Link href="" className="text-sm text-neutral-text4">Home</Link>
                <Link href="" className="text-sm text-neutral-text4">Product</Link>
                <Link href="" className="text-sm text-neutral-text4">Tentang Arunara</Link>
            </div>
        </nav>
    )
}

export default Navbar