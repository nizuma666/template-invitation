"use client"
import Image from "next/image";
import background from "@/assets/peach-love/background.png"
import Logo from "../../../public/Arunara.svg"
import FlowerLeft from "../../../public/flowerleft.svg"
import FlowerRight from "../../../public/flowerright.svg"
import Button from "../general/button";
import BottomGradient from "../../../public/bottomgradient.png"
import ArrowRight from "../../../public/arrowright.svg"
import ArrowLeft from "../../../public/arrowleft.svg"
/* eslint-disable @typescript-eslint/no-explicit-any */
export default function Section1({ content }: { content: any }) {
    console.log("content: ", content);

    return (
        <div className="w-full relative h-screen mb-24">
            <Image src={background} alt="background" fill className="object-cover z-0" />
            <div className="absolute inset-0 bg-black/60 z-10"></div>
            <div className="absolute inset-0 z-20 text-white flex flex-col gap-[100px] items-center py-[120px]">
                <Image src={Logo} alt="Arunara" width={175} height={32} />
                <div className="flex flex-col gap-24 items-center">
                    <div className="flex flex-col gap-6 items-center">
                        <p className="text-white text-subheading1 font-medium">{content.title}</p>
                        <div className="flex gap-1 items-center">
                            <Image src={FlowerLeft} alt="Arunara" width={40} height={60} />
                            <p className="text-white font-allura text-[50px]">{content.name}</p>
                            <Image src={FlowerRight} alt="Arunara" width={40} height={60} />
                        </div>
                        <div className="flex gap-6 items-center">
                            <div className="w-[9px] h-[9px] rounded-full bg-[#D9D9D9]"></div>
                            <p className="text-white text-subheading1">{content.date}</p>
                            <div className="w-[9px] h-[9px] rounded-full bg-[#D9D9D9]"></div>
                        </div>
                    </div>
                    <div className="border border-color-peach4 py-4 px-6 flex flex-col gap-2 items-center rounded-lg">
                        <p className="text-white">{content.inviteTo}</p>
                        <div className="border border-color-peach4 w-full h-[1px]"></div>
                        <p className="text-white text-subheading2">{content.inviteName}</p>
                    </div>
                    <div className="absolute bottom-0 z-20 flex gap-6 justify-center items-center">
                        <Image src={ArrowRight} alt="Arunara" width={23} height={23} />
                        <Button label="Open Invitation" onClick={() => console.log("")} />
                        <Image src={ArrowLeft} alt="Arunara" width={23} height={23} />
                    </div>
                    <Image src={BottomGradient} alt="Arunara" width={175} height={32} className="w-full absolute -bottom-30" />
                </div>

            </div>
        </div>
    )
}