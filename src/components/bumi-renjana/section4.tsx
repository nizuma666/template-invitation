import React from 'react'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCards, Navigation } from 'swiper/modules'
import { CaretLeftIcon, CaretRightIcon } from '@phosphor-icons/react'

import 'swiper/css'
import 'swiper/css/effect-cards'
import 'swiper/css/navigation'

const Section4 = () => {
  const photos = [
    { id: 1, src: '/bumi-renjana/carousel_example.svg', date: '20.01.2026' },
    { id: 2, src: '/bumi-renjana/carousel_example.svg', date: '21.01.2026' },
    { id: 3, src: '/bumi-renjana/carousel_example.svg', date: '22.01.2026' },
    { id: 4, src: '/bumi-renjana/carousel_example.svg', date: '23.01.2026' },
    { id: 5, src: '/bumi-renjana/carousel_example.svg', date: '24.01.2026' },
  ]

  return (
    <div className="w-full bg-no-repeat bg-cover bg-center flex flex-col px-6 py-12 relative overflow-hidden">

      <div className="flex items-start justify-between mb-16 relative z-20">
        <div>
          <p className="text-[#D89F83] italic text-2xl mb-[-8px] font-allison">Spesial Moment</p>
          <h2 className="text-4xl font-bold text-[#0F172A] font-sarabun tracking-tight">Gallery Photo</h2>
        </div>
        <div className="flex gap-2 pt-2">
          <button className="swiper-prev w-10 h-10 rounded-full disabled:text-[#D89F8380] disabled:border-none border border-[#D89F83] disabled:bg-[#FCECE4] flex items-center justify-center text-[#D89F83] transition-all hover:bg-[#FBE0D3]">
            <CaretLeftIcon size={18} weight="bold" />
          </button>
          <button  className="swiper-next w-10 h-10 rounded-full disabled:text-[#D89F8380] disabled:border-none border border-[#D89F83] disabled:bg-[#FCECE4] flex items-center justify-center text-[#D89F83] transition-all hover:bg-[#FFF2EC]">
            <CaretRightIcon size={18} weight="bold" />
          </button>
        </div>
      </div>

      <div className="w-full px-10 relative z-10 mx-auto">
        <Swiper
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
            perSlideOffset: 14,
          }}
          className="gallery-cards-swiper"
        >
          {photos.map((photo) => (
            <SwiperSlide key={photo.id}>
              <div className="bg-white p-3.5 rounded-2xl shadow-[0_16px_48px_rgba(0,0,0,0.13)] flex flex-col gap-3 border border-gray-100">
                <div className="relative w-full aspect-[4/5] rounded-xl overflow-hidden bg-[#F8FAFC]">
                  <Image
                    src={photo.src}
                    alt="Gallery Wedding"
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="flex justify-between items-end px-1 pb-1">
                  <div className="flex gap-1.5">
                    <div className="w-3.5 h-3.5 rounded-full bg-[#3D2317]" />
                    <div className="w-3.5 h-3.5 rounded-full bg-[#7B4D38]" />
                    <div className="w-3.5 h-3.5 rounded-full bg-[#D89F83]" />
                    <div className="w-3.5 h-3.5 rounded-full bg-[#FCECE4]" />
                  </div>
                  <div className="text-right leading-none">
                    <p className="text-[11px] font-bold text-[#0F172A] font-sarabun">{photo.date}</p>
                    <p className="text-2xl italic text-[#D89F83] font-allison mt-1">Wedding</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <style jsx global>{`
        .gallery-cards-swiper {
          width: 260px !important;
          overflow: visible !important;
        }

        .gallery-cards-swiper .swiper-slide {
          border-radius: 18px;
          background: white;
          transition: transform 0.4s cubic-bezier(0.22, 0.9, 0.45, 1);
        }

        /* Kartu di belakang (bukan active) — tampil miring, terpotong sebagian */
        .gallery-cards-swiper .swiper-slide:not(.swiper-slide-active) {
          opacity: 1 !important;
        }

        .gallery-cards-swiper .swiper-slide-shadow {
          background: none !important;
        }

        /* Pastikan kartu belakang tetap kelihatan di sisi kiri & kanan */
        .gallery-cards-swiper .swiper-wrapper {
          overflow: visible !important;
        }
      `}</style>
    </div>
  )
}

export default Section4