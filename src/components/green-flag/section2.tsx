import Image from "next/image";
import instagram from "!/peach-love/instagram.svg"
import { motion, Variants } from "motion/react"
import iconTopLeft from "!/green-flag/floralSec2TopLeft.png"
import iconTopRight from "!/green-flag/floraSec2TopRight.png"
import pengantinWanita from "!/green-flag/pengantinWanita.png"
import pengantinPria from "!/green-flag/pengantinPria.png"
import IconInFrame from "!/green-flag/floral.png"
/* eslint-disable @typescript-eslint/no-explicit-any */
export default function Section2({ content }: { content: any }) {
    const container: Variants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.3,
            },
        },
    };

    const fadeUp: Variants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: "easeOut" },
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
            className="px-4 py-10 w-full bg-white relative overflow-hidden"
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
        >
            <motion.div
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="absolute top-0 left-0 z-0"
            >
                <Image src={iconTopLeft} alt="Arunara Green Flag" width={250} height={100} />
            </motion.div>
            <motion.div
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="absolute top-0 right-0 z-0"
            >
                <Image src={iconTopRight} alt="Arunara Green Flag" width={100} height={100} />
            </motion.div>
            <div className="flex flex-col gap-10 items-center mt-30 relative">
                <motion.div
                    className="flex flex-col gap-4 items-center"
                    variants={fadeUp}
                >
                    <p className="text-heading1 font-bold text-green-primary text-center">{content.title}</p>
                    <p className="text-center text-[#757575]">Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan untukmu pasangan hidup dari jenismu sendiri, supaya kamu merasa tenteram di sisinya, dan dijadikan-Nya di antara kamu rasa kasih dan sayang.<br /><span className="text-[#212121]">Q.S. Ar-Rum: 21</span></p>
                </motion.div>

                <motion.div
                    className="flex flex-col gap-4 items-center"
                    variants={fadeUp}
                    layout
                    whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
                >
                    <motion.div variants={scaleIn} className="border-12 rounded-full border-[#5A7759] shadow-md overflow-hidden relative">
                        <Image
                            src={pengantinWanita}
                            width={175}
                            height={175}
                            alt="Putri Mangku Bumi"
                            className="object-cover max-w-[220px] max-h-[240px] rounded-full"
                        />
                        <motion.div
                            variants={{
                                hidden: { y: 100 },
                                visible: {
                                    y: 0,
                                    transition: { duration: 1, ease: "easeOut" },
                                }
                            }} >
                            <Image src={IconInFrame} alt="Putri Mangku Bumi" width={150} height={50} className="absolute -bottom-17 left-1/2 -translate-x-1/2" />
                        </motion.div>
                    </motion.div>

                    <motion.div
                        className="flex flex-col items-center"
                        variants={fadeUp}
                    >
                        <p className="text-[40px] font-allura text-green-primary">Putri Mangku Bumi</p>
                        <p className="text-neutral-text3">Putri dari</p>
                        <p className="text-center text-[#212121]">Bpk. Ahmad Wijaya & Ibu Siti Aminah</p>
                    </motion.div>
                </motion.div>

                <motion.div
                    className="flex flex-col gap-4 items-center"
                    variants={fadeUp}
                    whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
                >
                    <motion.div variants={scaleIn} className="border-12 rounded-full border-[#5A7759] shadow-md relative overflow-hidden">
                        <Image
                            src={pengantinPria}
                            width={175}
                            height={175}
                            alt="Asep Setiawan"
                            className="object-cover max-w-[220px] max-h-[240px] rounded-full"
                        />

                        <motion.div
                            variants={{
                                hidden: { y: 100 },
                                visible: {
                                    y: 0,
                                    transition: { duration: 1, ease: "easeOut" },
                                }
                            }} >
                            <Image src={IconInFrame} alt="Asep Setiawan" width={150} height={50} className="absolute -bottom-17 left-1/2 -translate-x-1/2" />
                        </motion.div>
                    </motion.div>

                    <motion.div
                        className="flex flex-col items-center"
                        variants={fadeUp}
                    >
                        <p className="text-[40px] font-allura text-green-primary">Asep Setiawan</p>
                        <p className="text-neutral-text3">Putra dari</p>
                        <p className="text-center text-[#212121]">Bpk. Ahmad Wijaya & Ibu Siti Aminah</p>
                    </motion.div>
                </motion.div>
            </div >
        </motion.div >
    )
}