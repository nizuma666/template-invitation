import Image from "next/image";
import instagram from "!/instagram.svg"
/* eslint-disable @typescript-eslint/no-explicit-any */
export default function Section2({ content }: { content: any }) {
    return (
        <div className="px-4 py-10 w-full">
            <div className="flex flex-col gap-10 items-center">
                <div className="flex flex-col gap-4 items-center">
                    <p className="text-heading1 font-bold text-rose1">{content.title}</p>
                    <p className="text-center">{content.desc}</p>
                </div>
                {content.couple.map((item: any, index: number) => (
                    <div key={index} className="flex flex-col gap-4 items-center">
                        <div>
                            <Image src={item.img} width={220} height={240} alt="Best Wife" className="object-cover" />
                        </div>
                        <div className="flex flex-col gap-2 items-center">
                            <p className="text-[40px] font-allura text-rose1">{item.name}</p>
                            <p className="text-neutral-text3">{item.ref}</p>
                            <p className="">{item.parents}</p>
                        </div>
                        <div className="bg-rose4 flex justify-center items-center gap-1 rounded-2xl px-2 py-1">
                            <Image src={instagram} width={20} height={20} alt="arunara official" />
                            <p className="text-rose1 text-sm font-semibold">{item.ig}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}