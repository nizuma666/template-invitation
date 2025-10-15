import Image from "next/image";
import instagram from "!/instagram.svg"
import {motion, Variants} from "motion/react"
/* eslint-disable @typescript-eslint/no-explicit-any */
export default function Section2({ content }: { content: any }) {
    const container: Variants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.8, // tiap elemen anak delay 0.3 detik
            },
        },
    };

    const fadeUp: Variants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: "easeOut" },
        },
    };

    const scaleIn: Variants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: { duration: 0.8, ease: "easeOut" },
        },
    };
    return (
        <motion.div
            className="px-4 py-10 w-full bg-white"
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }} // 🟢 aktif tiap kali muncul di viewport
        >
            <div className="flex flex-col gap-10 items-center">
                {/* ✨ Title + Description */}
                <motion.div
                    className="flex flex-col gap-4 items-center"
                    variants={fadeUp}
                >
                    <p className="text-heading1 font-bold text-rose1">{content.title}</p>
                    <p className="text-center">{content.desc}</p>
                </motion.div>

                {/* ✨ Couple Section */}
                {content.couple.map((item: any, index: number) => (
                    <motion.div
                        key={index}
                        className="flex flex-col gap-4 items-center"
                        variants={fadeUp}
                        whileHover={{ scale: 1.05, transition: { duration: 0.3 } }} // 🩷 efek lembut saat hover
                    >
                        <motion.div variants={scaleIn}>
                            <Image
                                src={item.img}
                                width={220}
                                height={240}
                                alt={item.name}
                                className="object-cover rounded-2xl shadow-md"
                            />
                        </motion.div>

                        <motion.div
                            className="flex flex-col gap-2 items-center"
                            variants={fadeUp}
                        >
                            <p className="text-[40px] font-allura text-rose1">{item.name}</p>
                            <p className="text-neutral-text3">{item.ref}</p>
                            <p>{item.parents}</p>
                        </motion.div>

                        <motion.div
                            className="bg-rose4 flex justify-center items-center gap-1 rounded-2xl px-2 py-1"
                            variants={fadeUp}
                        >
                            <Image
                                src={instagram}
                                width={20}
                                height={20}
                                alt="Instagram"
                            />
                            <p className="text-rose1 text-sm font-semibold">{item.ig}</p>
                        </motion.div>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    )
}