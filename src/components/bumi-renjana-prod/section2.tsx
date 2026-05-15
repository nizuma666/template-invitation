'use client'

import { InstagramLogoIcon } from '@phosphor-icons/react'
import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'
/* eslint-disable @typescript-eslint/no-explicit-any */

const Section2 = ({content}: any) => {
  const transitionConfig = {
    duration: 1.2, // Lebih lambat dari sebelumnya (0.8s)
    ease: [0.25, 0.1, 0.25, 1], // Cubic-bezier untuk gerakan yang lebih smooth
  }


  return (
    <div id='1'  className="w-full min-h-screen  bg-no-repeat bg-cover bg-center flex flex-col px-6 py-12 relative overflow-hidden font-serif">
      
      {/* 1. Judul - Muncul Perlahan dari Atas */}
      <motion.div 
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={transitionConfig}
        className="mb-10 text-left"
      >
        <p className="text-brown italic text-[32px] mb-[-10px] font-allison">Tentang</p>
        <h2 className="text-[32px] font-semibold text-[#212121] font-sarabun">Kedua Mempelai</h2>
      </motion.div>

      <div className="flex flex-col gap-6 mb-12">
        {/* 2. Kartu Wanita - Muncul Perlahan dari Kiri */}
        <motion.div 
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ ...transitionConfig, delay: 0.3 }}
          className="border bg-white border-border-default rounded-2xl p-2 flex items-center gap-4"
        >
          <div className="flex-1 ml-2">
            <h3 className="text-2xl italic leading-1.5 text-[#2C2C2C] mb-1 font-corsiva">{content?.nama_pengantin_wanita}</h3>
            <p className="text-xs lg:text-sm text-[#909090] mb-4 leading-tight font-sarabun">
              Putri dari Bpk. {content?.nama_pengantin_bapak_wanita} & Ibu {content?.nama_pengantin_ibu_wanita}
            </p>
            <div className={` ${content?.sosial_media_wanita ? "flex" : "hidden"} inline-flex items-center gap-1 px-3 bg-[#D89F8333] font-sarabun py-1 rounded-full text-xs lg:text-sm text-[#A96139] font-medium`}>
              <InstagramLogoIcon size={16} />
                           {content?.sosial_media_wanita}
            </div>
          </div>
          <div className="relative w-38 h-40 rounded-xl overflow-hidden">
            <Image
              src={content?.image_pengantin_wanita}
              alt="Jane Angeline"
              fill
              className="object-cover"
            />
          </div>
        </motion.div>

        {/* 3. Kartu Pria - Muncul Perlahan dari Kanan */}
        <motion.div 
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ ...transitionConfig, delay: 0.6 }}
          className="border bg-white border-border-default rounded-2xl p-2 flex items-center justify-between gap-4"
        >
          <div className="relative w-38 h-40 rounded-xl overflow-hidden">
            <Image
              src={content?.image_pengantin_pria}
              alt="Ratno Mangku Bumi"
              fill
              className="object-cover"
            />
          </div>
          <div className="flex-1">
            <h3 className="text-2xl italic leading-1.5 text-[#2C2C2C] mb-1 font-corsiva">{content?.nama_pengantin_pria}</h3>
            <p className="text-xs lg:text-sm text-[#909090] mb-4 leading-tight font-sarabun">
              Putra dari Bpk. {content?.nama_pengantin_bapak_pria} & Ibu {content?.nama_pengantin_ibu_pria}
            </p>
            <div className={` ${content?.sosial_media_pria ? "flex" : "hidden"} inline-flex items-center gap-1 px-3 bg-[#D89F8333] font-sarabun px-1 py-1 rounded-full text-xs lg:text-sm text-[#A96139] font-medium`}>
              <InstagramLogoIcon size={16} />
             {content?.sosial_media_pria}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Indikator Dot */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="flex gap-2 mb-8"
      >
        <div className="w-4 h-4 rounded-full bg-brown"></div>
        <div className="w-4 h-4 rounded-full bg-[#FBE0D3]"></div>
        <div className="w-4 h-4 rounded-full bg-[#FFF2EC]"></div>
      </motion.div>

      {/* 4. Ayat - Muncul Perlahan dari Bawah */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ ...transitionConfig, delay: 1 }}
        className="space-y-6 text-[#757575] font-sarabun leading-relaxed relative z-10"
      >
        <p className="text-[15px]">
          Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan pasangan-pasangan
          untukmu dari jenismu sendiri, agar kamu cenderung dan merasa tenteram kepada-Nya,
          dan Dia menjadikan di antaramu rasa kasih {`'`}dan sayang. Sungguh, pada yang demikian itu
          benar-benar terdapat tanda-tanda (kebesaran Allah) bagi kaum yang berfikir.
        </p>
        <p className="font-medium">( QS. Ar-Rum: 21 )</p>
      </motion.div>

    </div>
  )
}

export default Section2