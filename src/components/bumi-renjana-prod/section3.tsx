'use client'
import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'
import dayjs from 'dayjs'

// bg-[url('/bumi-renjana/bg-section1.svg')]
const Section3 = ({content}: any) => {
  return (
    <div id='2' className="w-full min-h-screen  bg-no-repeat bg-cover bg-center flex flex-col px-6 py-12 relative overflow-hidden">
      
      {/* Header Animasi - Durasi 1.5 detik */}
      <motion.div 
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        viewport={{ once: true }}
        className="mb-12 relative z-10"
      >
        <p className="text-[#D89F83] italic text-[32px] mb-[-10px] font-allison">Hari Bahagia</p>
        <h2 className="text-[32px] font-semibold text-[#212121] font-sarabun tracking-wide">Hari Pernikahan Kami</h2>
      </motion.div>

      <div className="flex flex-col gap-20 items-center relative z-10">
        
        {/* --- AKAD NIKAH SECTION --- */}
        <div className="relative w-full max-w-[340px] aspect-square flex items-center justify-center">
          
          {/* Animasi Bunga: Durasi 2.5 detik agar gerakan melengkung lebih terasa */}
          <motion.div 
            initial={{ opacity: 0, x: -150, rotate: -15, scale: 0.9 }}
            whileInView={{ opacity: 1, x: 0, rotate: 0, scale: 1 }}
            transition={{ 
                duration: 2.5, 
                ease: [0.22, 1, 0.36, 1], // Custom cubic-bezier untuk gerakan yang sangat smooth
            }}
            viewport={{ once: true }}
            className="absolute top-[-31%] left-[-5%] w-[110%] h-[110%] z-0"
          >
            <Image 
              src="/bumi-renjana/frame-bunga.png" 
              alt="Ornamen Bunga Akad"
              fill
              className="object-contain"
            />
          </motion.div>

          <div className="absolute inset-0 w-full h-full z-10">
            <Image 
              src="/bumi-renjana/frame-coklat.png" 
              alt="Frame Akad Nikah"
              fill
              className="object-contain"
            />
          </div>
          
          {/* Animasi Teks: Muncul perlahan setelah bunga hampir selesai (delay 1.2s) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.8, delay: 1.2, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative z-20 text-center text-white px-8 flex flex-col items-center"
          >
            <p className="font-corsiva text-2xl italic  mb-2">Akad Nikah</p>
            <h3 className="font-sarabun text-[26px] font-bold mb-1">{dayjs(content?.tanggal_1).format("DD MMMM YYYY")}</h3>
            <p className="font-sarabun text-sm mb-4">{content?.waktu_1_mulai} - {content?.waktu_1_selesai ? content?.waktu_1_selesai : 'Selesai'}</p>
            <p className="font-manrope text-[16px] leading-relaxed mb-6 opacity-90 px-4">
               {content?.alamat_1}
            </p>
            <button  onClick={() => window.open(content?.google_map_1 || "", "_blank")}  className="bg-[#D89F83] outline-none cursor-pointer font-quicksand text-white lg:text-base text-sm py-2 px-4 lg:px-6 rounded-lg border border-[#FBE0D3] active:scale-95 transition-transform">
              Buka Google Maps
            </button>
          </motion.div>
        </div>

        {/* --- RESEPSI SECTION --- */}
        <div className="relative w-full max-w-[340px] aspect-square flex items-center justify-center">
          
          {/* Animasi Bunga: Dari Kanan dengan durasi 2.5 detik */}
          <motion.div 
            initial={{ opacity: 0, x: 150, rotate: 15, scale: 0.9 }}
            whileInView={{ opacity: 1, x: 0, rotate: 0, scale: 1 }}
            transition={{ 
                duration: 2.5, 
                ease: [0.22, 1, 0.36, 1] 
            }}
            viewport={{ once: true }}
            className="absolute top-[-31%] left-[-5%] w-[110%] h-[110%] z-0"
          >
            <Image 
              src="/bumi-renjana/frame-bunga-resepsi.png" 
              alt="Ornamen Bunga Resepsi"
              fill
              className="object-contain"
            />
          </motion.div>

          <div className="absolute inset-0 w-full h-full z-10">
            <Image 
              src="/bumi-renjana/frame-coklat.png" 
              alt="Frame Resepsi"
              fill
              className="object-contain"
            />
          </div>
          
          {/* Animasi Teks: Muncul perlahan dengan durasi 1.8 detik */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.8, delay: 1.2, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative z-20 text-center text-white px-8 flex flex-col items-center"
          >
            <p className="font-corsiva text-2xl italic  mb-2">Resepsi</p>
            <h3 className="font-sarabun text-[26px] font-bold mb-1">{dayjs(content?.tanggal_2).format("DD MMMM YYYY")}</h3>
            <p className="font-sarabun text-sm mb-4">{content?.waktu_2_mulai} - {content?.waktu_2_selesai ? content?.waktu_2_selesai : 'Selesai'}</p>
            <p className="font-manrope text-[16px] leading-relaxed mb-6 opacity-90 px-4">
             {content?.alamat_2}
            </p>
            <button   onClick={() => window.open(content?.google_map_2 || "", "_blank")} className="bg-brown outline-none text-white font-quicksand lg:text-base text-sm  py-2 px-4 lg:px-6 rounded-lg border border-[#FBE0D3] active:scale-95 transition-transform">
              Buka Google Maps
            </button>
          </motion.div>
        </div>

      </div>
    </div>
  )
}

export default Section3