"use client"
import Image from 'next/image'
import React from 'react'
import { motion } from "motion/react";
const MotionImage = motion.create(Image);

const Outside = () => {
    return (
        <div className='w-full flex-col lg:flex justify-between hidden h-screen bg-[#E7DCD4] sticky top-0 overflow-hidden'>
            <div className="relative flex flex-col h-[40vh]">
                <div className="bg-white/50 w-full rounded-b-full absolute -top-[60vh] xl:-top-[50vh] h-[80vh]"></div>
                <div className="bg-javanera flex items-center justify-center size-[150px] rounded-full z-10 absolute left-[50%] -translate-x-1/2 top-[10vh] xl:top-[20vh]">
                    <Image src="/peach-love/Arunara.svg" alt='Arunara' width={100} height={37} />
                </div>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
                className="relative flex flex-col items-center justify-center"
            >
                <p className='text-[#212121] font-adelia text-[66px] mb-3'>Sari & Supri</p>
                <p className='text-[#212121] font-akatab font-medium flex items-center'>
                    <span className='size-[8px] mr-2 rounded-full bg-[#212121] block'></span> 02 02 2027 <span className='size-[8px] ml-2 rounded-full bg-[#212121] block'></span>
                </p>
            </motion.div>

            <div className="relative flex w-full flex-col h-[40vh] self-end">
                <div className="bg-white/50 w-[70%] xl:w-[50%] absolute h-[50vh] -bottom-[30vh] xl:-bottom-[40vh] left-[50%] rounded-t-full -translate-x-1/2"></div>
                <div className="bg-white/50 w-[70%] xl:w-[50%] absolute h-[50vh] -bottom-[40vh] xl:-bottom-[30vh] left-[50%] rounded-t-full -translate-x-1/2"></div>

                <MotionImage
                    src="/javanera/bunga_bg.svg"
                    alt=''
                    width={120}
                    height={237}
                    className='absolute bottom-0 left-[50%] -translate-x-1/2'
                    style={{ transformOrigin: "bottom center" }}
                    animate={{ rotate: [-3, 3, -3] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                />
            </div>
        </div>
    )
}

export default Outside
