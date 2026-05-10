import React, { useState, useRef } from 'react'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCards, Navigation } from 'swiper/modules'
import { CaretLeftIcon, CaretRightIcon } from '@phosphor-icons/react'
import { motion, AnimatePresence } from 'framer-motion'

import 'swiper/css'
import 'swiper/css/effect-cards'
import 'swiper/css/navigation'

const Section4 = () => {
  const [selectedPhoto, setSelectedPhoto] = useState(null)
  const swiperRef = useRef(null)

  const photos = [
    { id: 1, src: '/bumi-renjana/carousel_example.svg', date: '20.01.2026' },
    { id: 2, src: '/bumi-renjana/carousel_example.svg', date: '21.01.2026' },
    { id: 3, src: '/bumi-renjana/carousel_example.svg', date: '22.01.2026' },
    { id: 4, src: '/bumi-renjana/carousel_example.svg', date: '23.01.2026' },
    { id: 5, src: '/bumi-renjana/carousel_example.svg', date: '24.01.2026' },
  ]

  // Sinkronkan data drawer saat slide bergeser
  const handleSlideChange = (swiper) => {
    if (selectedPhoto) {
      setSelectedPhoto(photos[swiper.activeIndex])
    }
  }

  const handlePrev = () => {
    if (swiperRef.current) swiperRef.current.slidePrev()
  }

  const handleNext = () => {
    if (swiperRef.current) swiperRef.current.slideNext()
  }

  return (
    <div className="w-full bg-no-repeat bg-cover bg-center flex flex-col px-6 py-12 relative overflow-hidden">

      {/* Header Utama */}
      <div className="flex items-start justify-between mb-10 relative z-20">
        <div>
          <p className="text-[#D89F83] italic text-xl mb-[-6px] font-allison">Spesial Moment</p>
          <h2 className="text-3xl font-bold text-[#0F172A] font-sarabun tracking-tight">Gallery Photo</h2>
        </div>
        <div className="flex gap-2 pt-1">
          <button className="swiper-prev w-10 h-10 rounded-full disabled:text-[#D89F8380] disabled:border-none border border-[#D89F83] disabled:bg-[#FCECE4] flex items-center justify-center text-[#D89F83] transition-all hover:bg-[#FFF2EC]">
            <CaretLeftIcon size={16} weight="bold" />
          </button>
          <button className="swiper-next w-10 h-10 rounded-full disabled:text-[#D89F8380] disabled:border-none border border-[#D89F83] disabled:bg-[#FCECE4] flex items-center justify-center text-[#D89F83] transition-all hover:bg-[#FFF2EC]">
            <CaretRightIcon size={16} weight="bold" />
          </button>
        </div>
      </div>

      {/* Swiper */}
      <div className="w-full relative z-10 mx-auto">
        <Swiper
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          onSlideChange={handleSlideChange} // Tambahkan ini
          effect="cards"
          centeredSlides={true}
          navigation={{
            prevEl: '.swiper-prev',
            nextEl: '.swiper-next',
          }}
          modules={[EffectCards, Navigation]}
          cardsEffect={{
            slideShadows: false,
            rotate: true,
            perSlideRotate: 4,
            perSlideOffset: 12,
          }}
          className="gallery-cards-swiper"
        >
          {photos.map((photo) => (
            <SwiperSlide key={photo.id} onClick={() => setSelectedPhoto(photo)}>
              <div className="bg-white p-3 rounded-xl shadow-lg flex flex-col gap-2.5 border border-gray-100 cursor-pointer">
                <div className="relative w-full aspect-[4/5] rounded-lg overflow-hidden bg-[#F8FAFC]">
                  <Image src={photo.src} alt="Wedding" fill className="object-cover" />
                </div>
                <div className="flex justify-between items-end px-1 pb-0.5 text-right">
                  <div className="flex gap-1">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#3D2317]" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#7B4D38]" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#D89F83]" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#FCECE4]" />
                  </div>
                  <div className="leading-none">
                    <p className="text-[10px] font-bold text-[#0F172A] font-sarabun">{photo.date}</p>
                    <p className="text-xl italic text-[#D89F83] font-allison mt-0.5">Wedding</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Drawer */}
      <AnimatePresence>
        {selectedPhoto && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedPhoto(null)}
              className="fixed inset-0 bg-black/40 z-[99] backdrop-blur-[2px]"
            />

            <motion.div
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed bottom-0 left-0 right-0 bg-white rounded-t-[28px] z-[100] p-5 shadow-2xl flex flex-col items-center"
            >
              <div className="w-full max-w-[340px]">
                {/* Header Navigasi Aktif */}
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <p className="text-[#D89F83] italic text-lg font-allison leading-none">Spesial Moment</p>
                    <h2 className="text-2xl font-bold text-[#0F172A] font-sarabun tracking-tight">Gallery Photo</h2>
                  </div>
                  <div className="flex gap-1.5">
                    <button
                      onClick={handlePrev}
                      className="swiper-prev w-10 h-10 rounded-full disabled:text-[#D89F8380] disabled:border-none border border-[#D89F83] disabled:bg-[#FCECE4] flex items-center justify-center text-[#D89F83] transition-all hover:bg-[#FFF2EC]">

                      <CaretLeftIcon size={14} weight="bold" />
                    </button>
                    <button
                      onClick={handleNext}
                      className="swiper-next w-10 h-10 rounded-full disabled:text-[#D89F8380] disabled:border-none border border-[#D89F83] disabled:bg-[#FCECE4] flex items-center justify-center text-[#D89F83] transition-all hover:bg-[#FFF2EC]">

                      <CaretRightIcon size={14} weight="bold" />
                    </button>
                  </div>
                </div>

                {/* Tampilan Gambar Detail yang Sinkron */}
                <div className="bg-white p-3 rounded-xl border border-gray-100 shadow-sm flex flex-col gap-3 mb-5">
                  <div className="relative w-full aspect-[4/5] rounded-lg overflow-hidden">
                    {/* Key digunakan agar Framer Motion tahu gambar berubah */}
                    <motion.div
                      key={selectedPhoto.id}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                      className="w-full h-full relative"
                    >
                      <Image src={selectedPhoto.src} alt="Detail" fill className="object-cover" />
                    </motion.div>
                  </div>
                  <div className="flex justify-between items-end px-1 pb-1">
                    <div className="flex gap-1">
                      <div className="w-3 h-3 rounded-full bg-[#3D2317]" />
                      <div className="w-3 h-3 rounded-full bg-[#7B4D38]" />
                      <div className="w-3 h-3 rounded-full bg-[#D89F83]" />
                      <div className="w-3 h-3 rounded-full bg-[#FCECE4]" />
                    </div>
                    <div className="text-right leading-none">
                      <p className="text-[11px] font-bold text-[#0F172A] font-sarabun">{selectedPhoto.date}</p>
                      <p className="text-2xl italic text-[#D89F83] font-allison mt-1">Wedding</p>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => setSelectedPhoto(null)}
                  className="w-full py-3.5 bg-[#D89F83] text-white text-sm font-bold rounded-xl active:scale-[0.97] transition-all shadow-md"
                >
                  Tutup
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <style jsx global>{`
        .gallery-cards-swiper {
          width: 240px !important;
          overflow: visible !important;
        }
      `}</style>
    </div>
  )
}

export default Section4