import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/* eslint-disable @typescript-eslint/no-explicit-any */

export default function Section3({ content }: { content?: any }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const stories = content?.stories ?? [];

  return (
    <section className="max-w-md mx-auto p-4 flex flex-col items-center font-sans">

      <div className="text-center mb-6">
        <h3 className="text-xl text-[#78A2C4] mb-1" style={{ fontFamily: 'cursive' }}>
          Our Journey
        </h3>
        <h2 className="text-3xl font-semibold text-gray-800">
          A Story Written by Fate
        </h2>
      </div>

      <motion.div layout className="w-full flex flex-col gap-4 relative">
        <AnimatePresence>
          {stories.map((story: any, index: number) => {
            if (!isExpanded && index > 1) return null;

            return (
              <motion.div
                key={story.id ?? index}
                layout
                initial={index > 1 ? { opacity: 0, height: 0, scale: 0.95 } : false}
                animate={{ opacity: 1, height: "auto", scale: 1 }}
                exit={{ opacity: 0, height: 0, scale: 0.95 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="overflow-hidden origin-top"
              >
                <div className="relative w-full h-52 rounded-xl overflow-hidden shadow-sm">

                  <img
                    src={story.imageUrl || story.image}
                    alt={story.title || story.judul}
                    className="absolute inset-0 w-full h-full object-cover"
                  />

                 <div className={`absolute inset-0 ${
                    index % 2 === 0
                      ? 'bg-gradient-to-r from-[#6B98B5]/90 via-[#6B98B5]/40 to-transparent'
                      : 'bg-gradient-to-t from-[#6B98B5]/95 via-[#6B98B5]/60 to-transparent'
                  }`} />

                  <div className={`relative h-full flex flex-col p-6 ${
                    index % 2 !== 0 ? 'justify-end pb-6' : 'justify-center'
                  } ${
                    index % 2 === 0 ? 'items-start text-left' : 'items-end text-right'
                  }`}>
                    <h4 className="text-white font-sarabun text-2xl font-medium w-3/5 mb-2 leading-tight">
                      {story.title || story.judul}
                    </h4>
                    <p className="text-white/90 text-sm w-3/5 leading-snug font-sarabun">
                      {story.description || story.cerita}
                    </p>
                  </div>

                  <AnimatePresence>
                    {index === 1 && !isExpanded && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0, y: 20 }}
                        transition={{ duration: 0.4 }}
                        className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-white/10 flex items-center justify-center"
                      >
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => setIsExpanded(true)}
                          className="mt-12 px-6 py-2 bg-white border font-sarabun border-[#629BC0] text-[#629BC0] rounded-lg text-sm font-medium"
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
              className="px-8 py-2 bg-white border border-[#78A2C4] font-sarabun text-[#78A2C4] rounded-lg text-sm font-medium hover:bg-[#f0f8ff] shadow-sm"
            >
              Show Less
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}
