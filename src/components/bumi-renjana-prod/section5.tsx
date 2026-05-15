import React, { useState, useRef } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'

const Section5 = ({ content }: any) => {
  const [showAll, setShowAll] = useState(false)
  const containerRef = useRef(null)

  const handleToggle = () => {
    if (showAll) {
      containerRef.current?.scrollIntoView({ behavior: 'smooth' })
    }
    setShowAll(!showAll)
  }

  const displayedJourneys = showAll ? content[0]?.stories : content[0]?.stories.slice(0, 1)

  return (
    <div ref={containerRef} className="w-full flex flex-col px-6 py-14 relative overflow-hidden ">

      <div className="mb-10 text-left px-2">
        <p className="text-[#D89F83] italic text-[32px] font-allison mb-[-8px]">Our Journey</p>
        <h2 className="text-3xl font-bold text-[#212121] font-sarabun leading-tight">Jalan Menjadi Satu</h2>
      </div>

      <div className="flex flex-col relative z-10">
        <AnimatePresence mode="popLayout" initial={false}>
          {displayedJourneys?.map((item, index) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-full min-h-[200px] rounded-[20px] overflow-hidden shadow-sm mb-6 last:mb-0"
            >
              <Image
                src="/bumi-renjana/story-bg.png"
                alt="Journey"
                fill
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#3D2317]/80 via-[#3D2317]/10 to-transparent" />

              <div className="relative z-10 p-6 flex flex-col gap-4 min-h-[200px]">
                <div className={`${index % 2 != 0 ? 'text-left' : 'text-right'} w-full`}>
                  <div className={`w-12 h-12 rounded-full border-2 border-[#D89F83] bg-[#E6D8C1]/90 flex items-center justify-center text-[#A96139] font-bold text-xl font-sarabun inline-flex`}>
                    {index + 1}
                  </div>
                </div>

                <div className={`w-full -mt-2 flex flex-col ${index % 2 != 0 ? 'items-end text-right' : 'items-start text-left'}`}>
                  <h3 className="text-white text-xl font-semibold font-sarabun mb-1 tracking-tight">{item.tahun}</h3>
                  <h3 className="text-white text-2xl font-bold font-sarabun mb-1 tracking-tight">{item.judul}</h3>
                  <p className="text-white/90 text-[13px] font-sarabun leading-relaxed max-w-[85%] h-fit">
                    {item.cerita}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>

        {!showAll && (
          <div className="relative w-full flex flex-col items-center">
            {/* Card Preview Stack (Shadow/Fade Effect) */}
            <div className="absolute  w-full h-24 bg-white rounded-[20px] shadow-md z-0 overflow-hidden opacity-50">
              <Image src="/bumi-renjana/story-bg.png" alt="peek" fill className="object-cover blur-[2px]" />
              <div className="absolute inset-0 bg-white/40" />
            </div>

            <div className="w-full h-32 bg-gradient-to-t from-white via-white/80 to-transparent relative z-10 mt-[-20px]" />

            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={handleToggle}
              className="relative z-20 mt-[-50px] px-10 py-2.5 rounded-full border border-[#D89F83] text-[#A96139] font-sarabun text-sm bg-white shadow-sm"
            >
              See more story
            </motion.button>
          </div>
        )}
      </div>

      {showAll && (
        <div className="flex justify-center mt-10">
          <button
            onClick={handleToggle}
            className="px-10 py-2.5 rounded-full border border-[#D89F83] text-[#D89F83] font-sarabun text-sm bg-white active:scale-95 transition-all shadow-sm"
          >
            Show Less
          </button>
        </div>
      )}
    </div>
  )
}

export default Section5