import React, { useState, useRef, useEffect } from 'react'
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

  // Varian animasi untuk muncul satu persatu (Staggered)
  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delay: i * 0.15,
        duration: 0.6,
        ease: [0.215, 0.61, 0.355, 1], // Cubic-bezier untuk gerakan yang lebih smooth
      }
    })
  }

  const handleSlideChange = (swiper) => {
    if (selectedPhoto) {
      setSelectedPhoto(photos[swiper.activeIndex])
    }
  }

  useEffect(() => {
    if (selectedPhoto) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => { document.body.style.overflow = "" }
  }, [selectedPhoto])

  const handlePrev = () => swiperRef.current?.slidePrev()
  const handleNext = () => swiperRef.current?.slideNext()

  return (
    <div className="w-full bg-no-repeat bg-cover bg-center flex flex-col px-6 py-12 relative overflow-hidden">
      
      {/* Header Utama dengan Animasi Fade-In */}
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="flex items-start justify-between mb-10 relative z-20"
      >
        <div>
          <p className="text-[#D89F83] italic text-xl mb-[-6px] font-allison">Spesial Moment</p>
          <h2 className="text-3xl font-bold text-[#0F172A] font-sarabun tracking-tight">Gallery Photo</h2>
        </div>
        <div className="flex gap-2 pt-1">
          <button className="swiper-prev w-10 h-10 rounded-full border border-[#D89F83] flex items-center justify-center text-[#D89F83] transition-all hover:bg-[#FFF2EC] active:scale-90 disabled:opacity-30">
            <CaretLeftIcon size={16} weight="bold" />
          </button>
          <button className="swiper-next w-10 h-10 rounded-full border border-[#D89F83] flex items-center justify-center text-[#D89F83] transition-all hover:bg-[#FFF2EC] active:scale-90 disabled:opacity-30">
            <CaretRightIcon size={16} weight="bold" />
          </button>
        </div>
      </motion.div>

      {/* Swiper Container */}
      <div className="w-full relative z-10 mx-auto">
        <Swiper
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          onSlideChange={handleSlideChange}
          effect="cards"
          grabCursor={true}
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
          {photos.map((photo, index) => (
            <SwiperSlide key={photo.id} onClick={() => setSelectedPhoto(photo)}>
              <motion.div
                custom={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileTap={{ scale: 0.96 }}
                className="bg-white p-3 rounded-xl shadow-lg flex flex-col gap-2.5 border border-gray-100 cursor-pointer"
              >
                <div className="relative w-full aspect-[4/5] rounded-lg overflow-hidden bg-[#F8FAFC]">
                  <Image 
                    src={photo.src} 
                    alt={`Wedding Photo ${photo.id}`} 
                    fill 
                    className="object-cover"
                    priority={index < 2} 
                  />
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
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Detail Drawer (Lightbox-style) */}
      <AnimatePresence>
        {selectedPhoto && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedPhoto(null)}
              className="fixed inset-0 bg-black/60 z-[99] backdrop-blur-sm"
            />

            {/* Content Drawer */}
            <motion.div
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed bottom-0 left-0 right-0 bg-white rounded-t-[32px] z-[100] p-6 shadow-2xl flex flex-col items-center"
            >
              <div className="w-full max-w-[400px]">
                {/* Drawer Navigation */}
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <p className="text-[#D89F83] italic text-lg font-allison leading-none">Spesial Moment</p>
                    <h2 className="text-2xl font-bold text-[#0F172A] font-sarabun tracking-tight">Detail Photo</h2>
                  </div>
                  <div className="flex gap-2">
                    <button onClick={handlePrev} className="w-9 h-9 rounded-full border border-[#D89F83] flex items-center justify-center text-[#D89F83]">
                      <CaretLeftIcon size={16} weight="bold" />
                    </button>
                    <button onClick={handleNext} className="w-9 h-9 rounded-full border border-[#D89F83] flex items-center justify-center text-[#D89F83]">
                      <CaretRightIcon size={16} weight="bold" />
                    </button>
                  </div>
                </div>

                {/* Detail Card Content */}
                <div className="bg-white p-3 rounded-2xl border border-gray-100 shadow-sm flex flex-col gap-4 mb-6">
                  <div className="relative w-full aspect-[4/5] rounded-xl overflow-hidden">
                    <motion.div
                      key={selectedPhoto.id}
                      initial={{ opacity: 0, scale: 1.1 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4 }}
                      className="w-full h-full relative"
                    >
                      <Image src={selectedPhoto.src} alt="Detail View" fill className="object-cover" />
                    </motion.div>
                  </div>
                  <div className="flex justify-between items-end px-1 pb-1">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-[#3D2317]" />
                      <div className="w-3 h-3 rounded-full bg-[#7B4D38]" />
                      <div className="w-3 h-3 rounded-full bg-[#D89F83]" />
                      <div className="w-3 h-3 rounded-full bg-[#FCECE4]" />
                    </div>
                    <div className="text-right leading-none">
                      <p className="text-xs font-bold text-[#0F172A] font-sarabun">{selectedPhoto.date}</p>
                      <p className="text-2xl italic text-[#D89F83] font-allison mt-1">Wedding</p>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => setSelectedPhoto(null)}
                  className="w-full py-4 bg-[#D89F83] text-white text-sm font-bold rounded-2xl active:scale-95 transition-all shadow-lg shadow-[#D89F8340]"
                >
                  Kembali ke Galeri
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <style jsx global>{`
        .gallery-cards-swiper {
          width: 260px !important;
          overflow: visible !important;
          padding-top: 10px;
          padding-bottom: 20px;
        }
        /* Menghilangkan efek biru saat klik di mobile */
        * {
          -webkit-tap-highlight-color: transparent;
        }
      `}</style>
    </div>
  )
}

export default Section4