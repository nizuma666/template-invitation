import React, { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCards, Navigation } from 'swiper/modules'
import type { Swiper as SwiperType } from 'swiper'
import { CaretLeftIcon, CaretRightIcon } from '@phosphor-icons/react'
import { motion, AnimatePresence, Variants } from 'framer-motion'

import 'swiper/css'
import 'swiper/css/effect-cards'
import 'swiper/css/navigation'

const Section4 = ({ content }: any) => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)
  const [isBeginning, setIsBeginning] = useState(true)
  const [isEnd, setIsEnd] = useState(false)
  const swiperRef = useRef<SwiperType | null>(null)

  const images: string[] = content?.images ?? []

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delay: i * 0.15,
        duration: 0.6,
        ease: [0.215, 0.61, 0.355, 1],
      },
    }),
  }

  const handleSlideChange = (swiper: SwiperType) => {
    setIsBeginning(swiper.isBeginning)
    setIsEnd(swiper.isEnd)
    if (selectedIndex !== null) {
      setSelectedIndex(swiper.activeIndex)
    }
  }

  useEffect(() => {
    if (selectedIndex !== null) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [selectedIndex])

  const handlePrev = () => swiperRef.current?.slidePrev()
  const handleNext = () => swiperRef.current?.slideNext()

  const selectedSrc = selectedIndex !== null ? images[selectedIndex] : null

  return (
    <div
      id="3"
      className="w-full bg-no-repeat bg-cover bg-center flex flex-col px-6 py-12 relative overflow-hidden"
    >
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="flex items-start justify-between mb-10 relative z-20"
      >
        <div>
          <p className="text-[#D89F83] italic text-[32px] mb-[-6px] font-allison">
            Spesial Moment
          </p>
          <h2 className="text-[32px] font-semibold text-[#212121] font-sarabun tracking-tight">
            Gallery Photo
          </h2>
        </div>

        <div className="flex gap-2 pt-1">
          <button
            onClick={handlePrev}
            disabled={isBeginning}
            className="w-10 h-10 rounded-full border border-[#D89F83] flex items-center justify-center text-[#D89F83] transition-all hover:bg-[#FFF2EC] active:scale-90 disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <CaretLeftIcon size={16} weight="bold" />
          </button>
          <button
            onClick={handleNext}
            disabled={isEnd}
            className="w-10 h-10 rounded-full border border-[#D89F83] flex items-center justify-center text-[#D89F83] transition-all hover:bg-[#FFF2EC] active:scale-90 disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <CaretRightIcon size={16} weight="bold" />
          </button>
        </div>
      </motion.div>

      <div className="w-full relative z-10 mx-auto">
        <Swiper
          onSwiper={(swiper) => {
            swiperRef.current = swiper
            setIsBeginning(swiper.isBeginning)
            setIsEnd(swiper.isEnd)
          }}
          onSlideChange={handleSlideChange}
          effect="cards"
          grabCursor={true}
          centeredSlides={true}
          modules={[EffectCards, Navigation]}
          cardsEffect={{
            slideShadows: false,
            rotate: true,
            perSlideRotate: 4,
            perSlideOffset: 12,
          }}
          className="gallery-cards-swiper"
        >
          {images.map((src, index) => (
            <SwiperSlide key={index} onClick={() => setSelectedIndex(index)}>
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
                    src={src}
                    alt={`Wedding Photo ${index + 1}`}
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
                                                              <p className="text-[10px] font-bold text-[#212121] font-sarabun">{content?.tanggal_1}</p>
                    <p className="text-xl italic text-[#757575] font-allison mt-0.5">Wedding</p>
                  </div>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <AnimatePresence>
        {selectedIndex !== null && selectedSrc && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedIndex(null)}
              className="fixed inset-0 bg-black/60 z-[99] backdrop-blur-sm"
            />

            <motion.div
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed bottom-0 left-0 right-0 bg-white rounded-t-[32px] z-[100] p-5 shadow-2xl flex flex-col items-center"
            >
              <div className="w-full max-w-[340px]">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <p className="text-[#D89F83] italic text-[32px] font-allison leading-none">
                      Spesial Moment
                    </p>
                    <h2 className="text-[32px] font-bold text-[#212121] font-sarabun tracking-tight">
                      Detail Photo
                    </h2>
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={handlePrev}
                      disabled={isBeginning}
                      className="w-8 h-8 rounded-full border border-[#D89F83] flex items-center justify-center text-[#D89F83] disabled:opacity-30"
                    >
                      <CaretLeftIcon size={14} weight="bold" />
                    </button>
                    <button
                      onClick={handleNext}
                      disabled={isEnd}
                      className="w-8 h-8 rounded-full border border-[#D89F83] flex items-center justify-center text-[#D89F83] disabled:opacity-30"
                    >
                      <CaretRightIcon size={14} weight="bold" />
                    </button>
                  </div>
                </div>

                <div className="bg-white p-2.5 rounded-lg border border-gray-100 shadow-sm flex flex-col gap-3 mb-5">
                  <div className="relative w-full aspect-[4/5] rounded-xl overflow-hidden bg-gray-50">
                    <motion.div
                      key={selectedIndex}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3 }}
                      className="w-full h-full relative"
                    >
                      <Image
                        src={selectedSrc}
                        alt="Detail View"
                        fill
                        className="object-cover"
                      />
                    </motion.div>
                  </div>
                  <div className="flex justify-between items-end px-1 pb-1">
                    <div className="flex gap-1">
                      <div className="w-2 h-2 rounded-full bg-[#3D2317]" />
                      <div className="w-2 h-2 rounded-full bg-[#7B4D38]" />
                      <div className="w-2 h-2 rounded-full bg-[#D89F83]" />
                      <div className="w-2 h-2 rounded-full bg-[#FCECE4]" />
                    </div>
                    <div className="text-right leading-none">
                                          <p className="text-[10px] font-bold text-[#212121] font-sarabun">{content?.tanggal_1}</p>
                      <p className="text-lg italic text-[#757575] font-allison mt-0.5">Wedding</p>

                    </div>
                  </div>
                </div>

                <button
                  onClick={() => setSelectedIndex(null)}
                  className="w-full py-3 bg-[#D89F83] text-white text-sm font-bold rounded-lg active:scale-95 transition-all shadow-md shadow-[#D89F8340]"
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
        * {
          -webkit-tap-highlight-color: transparent;
        }
      `}</style>
    </div>
  )
}

export default Section4