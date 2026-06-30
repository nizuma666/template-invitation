"use client"
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { CaretLeftIcon, CaretRightIcon } from "@phosphor-icons/react";

import "swiper/css";
/* eslint-disable @typescript-eslint/no-explicit-any */

export default function Section4({ content }: { content: any }) {
  const images: string[] = content?.images ?? [];

  return (
    <section className="w-full py-12 px-6 bg-white overflow-hidden">
      <div className="max-w-md mx-auto">

        <div className="flex justify-between items-end mb-8">
          <div>
            <p className="text-[#629BC0] font-allison text-[28px] -mb-2">Special Moment</p>
            <h2 className="text-[#212121] font-sarabun text-[32px] font-bold">Gallery Photo</h2>
          </div>

          <div className="flex gap-2">
            <button className="swiper-prev-btn w-10 h-10 rounded-full border border-[#629BC0] flex items-center justify-center text-[#629BC0] transition-all active:scale-90 disabled:bg-[#629BC04D] disabled:border-none disabled:text-[#629BC080]">
              <CaretLeftIcon size={20} weight="bold" />
            </button>
            <button className="swiper-next-btn w-10 h-10 rounded-full border border-[#629BC0] flex items-center justify-center text-[#629BC0] transition-all active:scale-90 disabled:bg-[#629BC04D] disabled:border-none disabled:text-[#629BC080]">
              <CaretRightIcon size={20} weight="bold" />
            </button>
          </div>
        </div>

        <Swiper
          modules={[Navigation]}
          spaceBetween={20}
          slidesPerView={1.2}
          navigation={{
            prevEl: ".swiper-prev-btn",
            nextEl: ".swiper-next-btn",
          }}
          className="gallery-swiper !overflow-visible"
        >
          {images.map((src, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white p-4 rounded-xl shadow-lg shadow-blue-100/50 border border-gray-50">
                <div className="relative aspect-square w-full overflow-hidden rounded-lg">
                  <Image
                    src={src}
                    alt={`Gallery ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="flex gap-x-1.5 mt-4">
                  <div className="bg-[#E3EEFA] h-3 w-3 rounded-full" />
                  <div className="bg-[#9BD1F4] h-3 w-3 rounded-full" />
                  <div className="bg-[#F1EBE5] h-3 w-3 rounded-full" />
                  <div className="bg-[#D8C0AF] h-3 w-3 rounded-full" />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
