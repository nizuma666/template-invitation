import Image from 'next/image'
import React from 'react'
import { motion } from "framer-motion";
const MotionImage = motion(Image);


const Outside = () => {
    return (
        <div className='w-full   flex-col lg:flex justify-between  hidden bg-no-repeat h-screen bg-[#D89F834D] sticky top-0'>
            <div className="relative flex flex-col h-[40vh]">
                <div className="bg-[#FFFFFF80] w-full rounded-b-full absolute -top-[60vh] xl:-top-[50vh] h-[80vh]"></div>
                <div className="bg-[#D89F83] flex items-center justify-center size-[150px] rounded-full z-10 absolute mx-auto left-[50%] -translate-x-1/2 top-[10vh] xl:top-[20vh]">
                <Image src="/peach-love/Arunara.svg" alt='' width={100} height={100} />
                </div>
            </div>
            <div className="flex flex-col items-center justify-center">
                <p className='text-[#212121] font-allura text-[50px]'>Ferdian & Septiawan</p>
                <p className='text-[#212121] font-medium flex  items-center'><span className='size-[8px] mr-2 rounded-full bg-[#212121] block'></span> 02 02 2022 <span className='size-[8px] ml-2 rounded-full bg-[#212121] block'></span></p>

            </div>

            <div className="relative flex w-full flex-col h-[40vh] self-end">
                <div className="bg-[#FFFFFF80] w-[70%] xl:w-[50%] absolute h-[50vh] -bottom-[30vh] xl:-bottom-[40vh]  left-[50%] rounded-t-full -translate-x-1/2"></div>
                <div className="bg-[#FFFFFF80] w-[70%] xl:w-[50%] absolute h-[50vh]  -bottom-[40vh] xl:-bottom-[30vh]  left-[50%] rounded-t-full -translate-x-1/2"></div>

                <MotionImage
                    src="/bumi-renjana/bunga-outside.png"
                    alt=''
                    width='120'
                    height='400'
                    className='absolute bottom-0 left-[50%] -translate-x-1/2'

                    style={{ transformOrigin: "bottom center" }} // Membuat tumpuan rotasi di paling bawah
                    animate={{ rotate: [-3, 3, -3] }} // Bergoyang ke kiri 3 derajat dan kanan 3 derajat
                    transition={{
                        duration: 4, // Kecepatan satu siklus goyangan (4 detik = pelan dan natural)
                        repeat: Infinity, // Mengulang terus menerus
                        ease: "easeInOut" // Pergerakan halus saat berpindah arah
                    }}
                />
            </div>

        </div>
    )
}

export default Outside