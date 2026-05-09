import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Section3() {
  const [isExpanded, setIsExpanded] = useState(false);

const stories = [
    {
      id: 1,
      title: "The First Meeting",
      description: "What started as a brief meeting slowly unfolded into meaningful conversations.",
      alignment: "left",
      gradientDirection: "to-r", // Gradient dari kiri ke kanan
      imageUrl: "https://via.placeholder.com/600x300/87CEFA/FFFFFF?text=Image+1" 
    },
    {
      id: 2,
      title: "Growing Together",
      description: "Love grew not from perfection, but from understanding, patience, and shared dreams.",
      alignment: "right",
      gradientDirection: "to-t", // Gradient dari bawah ke atas
      imageUrl: "https://via.placeholder.com/600x300/87CEFA/FFFFFF?text=Image+2" 
    },
    {
      id: 3,
      title: "Growing Together",
      description: "Love grew not from perfection, but from understanding, patience, and shared dreams.",
      alignment: "left",
      gradientDirection: "to-t", // Gradient dari bawah ke atas
      imageUrl: "https://via.placeholder.com/600x300/87CEFA/FFFFFF?text=Image+3" 
    }
  ];

  return (
    <section className="max-w-md mx-auto p-4 flex flex-col items-center font-sans">
      
      {/* Header Section */}
      <div className="text-center mb-6">
        <h3 className="text-xl text-[#78A2C4] mb-1" style={{ fontFamily: 'cursive' }}>
          Our Journey
        </h3>
        <h2 className="text-3xl font-semibold text-gray-800">
          A Story Written by Fate
        </h2>
      </div>

      {/* Cards Container */}
      {/* motion.div dengan layout agar saat elemen masuk/keluar, elemen sekitarnya bergeser mulus */}
      <motion.div layout className="w-full flex flex-col gap-4 relative">
        <AnimatePresence>
          {stories.map((story, index) => {
            // Cegah render kartu ke-3 dst jika belum di-expand
            if (!isExpanded && index > 1) return null;

            return (
              <motion.div
                key={story.id}
                layout // Memastikan pergeseran layout mulus
                initial={index > 1 ? { opacity: 0, height: 0, scale: 0.95 } : false}
                animate={{ opacity: 1, height: "auto", scale: 1 }}
                exit={{ opacity: 0, height: 0, scale: 0.95 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="overflow-hidden origin-top"
              >
                <div className="relative w-full h-52 rounded-xl overflow-hidden shadow-sm">
                  
                  {/* Background Image */}
                  <img
                    src={story.imageUrl}
                    alt={story.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />

                  {/* Gradient Overlay */}
                 <div className={`absolute inset-0 ${
                    story.gradientDirection === 'to-r'
                      ? 'bg-gradient-to-r from-[#6B98B5]/90 via-[#6B98B5]/40 to-transparent'
                      : 'bg-gradient-to-t from-[#6B98B5]/95 via-[#6B98B5]/60 to-transparent'
                  }`} />

                  {/* Konten Teks - Menyesuaikan posisi vertikal berdasarkan arah gradient */}
                  <div className={`relative h-full flex flex-col p-6 ${
                    story.gradientDirection === 'to-t' ? 'justify-end pb-6' : 'justify-center'
                  } ${
                    story.alignment === 'left' ? 'items-start text-left' : 'items-end text-right'
                  }`}>
                    <h4 className="text-white font-sarabun text-2xl font-medium w-3/5 mb-2 leading-tight">
                      {story.title}
                    </h4>
                    <p className="text-white/90 text-sm w-3/5 leading-snug font-sarabun">
                      {story.description}
                    </p>
                  </div>

                  {/* Overlay Fade & Tombol (Hanya pada kartu ke-2) */}
                  <AnimatePresence>
                    {index === 1 && !isExpanded && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0, y: 20 }} // Slide ke bawah saat menghilang
                        transition={{ duration: 0.4 }}
                        className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-white/10 flex items-center justify-center"
                      >
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => setIsExpanded(true)}
                          className="mt-12 px-6 py-2 bg-white border font-sarabun border-[#629BC0] text-[#629BC0] rounded-full text-sm font-medium"
                        >
                          See more story
                        </motion.button>
                      </motion.div>
                    )}
                  </AnimatePresence>

                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.div>

      {/* Tombol Show Less */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0, marginTop: 0 }}
            animate={{ opacity: 1, height: "auto", marginTop: 24 }}
            exit={{ opacity: 0, height: 0, marginTop: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsExpanded(false)}
              className="px-8 py-2 bg-white border border-[#78A2C4] font-sarabun text-[#78A2C4] rounded-full text-sm font-medium hover:bg-[#f0f8ff] shadow-sm"
            >
              Show Less
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
      
    </section>
  );
}