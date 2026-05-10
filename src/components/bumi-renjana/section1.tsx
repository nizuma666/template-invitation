'use client';

import Image from 'next/image';
import React, { useState } from 'react';
import Button from './components/button';
import CountdownTimer from './components/countdown_timer';
import { motion, AnimatePresence } from 'framer-motion';
/* eslint-disable @typescript-eslint/no-explicit-any */

const Section1 = ({ onOpen }: any) => {
	const [isOpened, setIsOpened] = useState(false);

	const handleOpen = () => {
		setIsOpened(true);
		if (onOpen) onOpen();
	};

	const handleScrollDown = () => {
		window.scrollBy({ top: window.innerHeight, behavior: 'smooth' });
	};

	return (
		<div className={`w-full relative z-10 min-h-[100dvh] ${!isOpened && " bg-brown-background"} flex flex-col gap-y-4 items-center`}>
			<AnimatePresence mode="wait">
				{!isOpened ? (
					<motion.div key="cover" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ y: '100vh', opacity: 0 }} transition={{ duration: 1, ease: 'easeInOut' }} className="relative w-full min-h-screen bg-[#FCFAF6] overflow-hidden flex flex-col justify-center px-8 md:px-16 font-benne">
						<motion.div
							initial={{ opacity: 0, x: 50, y: -50 }}
							animate={{
								opacity: 1,
								x: 0,
								y: 0,
								rotate: [0, 3, 0, -3, 0], // Efek bergoyang
							}}
							transition={{
								opacity: { duration: 1.2 },
								x: { duration: 1.2 },
								y: { duration: 1.2 },
								rotate: { duration: 5, repeat: Infinity, ease: 'easeInOut' }, // Animasi goyang jalan terus
							}}
							className="absolute top-0 right-0 w-2/3 max-w-md pointer-events-none z-0"
						>
							<Image src="/bumi-renjana/flower-right-top.png" alt="" width={300} height={372} className="w-full h-auto object-cover" />
						</motion.div>

						<motion.div
							initial={{ opacity: 0, x: -50, y: 50 }}
							animate={{
								opacity: 1,
								x: 0,
								y: 0,
								rotate: [0, -2, 0, 2, 0], // Goyangan berlawanan arah agar lebih natural
							}}
							transition={{
								opacity: { duration: 1.2 },
								x: { duration: 1.2 },
								y: { duration: 1.2 },
								rotate: { duration: 6, repeat: Infinity, ease: 'easeInOut' },
							}}
							className="absolute bottom-0 left-0 w-2/3 max-w-sm pointer-events-none z-0"
						>
							<Image src="/bumi-renjana/flower-left-bottom.svg" alt="" width={300} height={372} className="w-full h-auto object-cover" />
						</motion.div>
						<div className="absolute right-8 md:right-16 top-1/2 -translate-y-1/2 w-12 pointer-events-none z-0">
							<motion.div
								animate={{ y: [0, -12, 0] }}
								transition={{
									duration: 2.5,
									repeat: Infinity,
									ease: 'easeInOut',
								}}
							>

								{/* <Image src="/bumi-renjana/lebah.svg" width={48} height={53} alt="" className="w-full h-auto object-cover" /> */}
							</motion.div>
						</div>

						<div className="relative z-10 w-full max-w-md mx-auto flex flex-col min-h-[85vh] justify-between pt-12 pb-8 overflow-hidden">
							<Image src='/bumi-renjana/logo.svg' alt="Arunara bumi" width={170} height={100} className="-mt-10" />

							<div className="flex flex-col items-start ">
								<motion.p initial={{ x: -50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.8, ease: 'easeOut', delay: 0.4 }} className="text-2xl text-[#232323] mb-2 tracking-wide">
									The wedding of
								</motion.p>

								<motion.h2 initial={{ x: 50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.8, ease: 'easeOut', delay: 0.6 }} className="text-5xl md:text-6xl text-[#212121] leading-tight mb-8">
									Ferdian <span className="text-brown">&</span>
									<br />
									Septiawan
								</motion.h2>

								<motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 0.8, ease: 'easeOut', delay: 0.8 }} className="w-16 border-t-[1.5px] border-[#8D908A] mb-6 origin-left"></motion.div>

								<motion.p initial={{ x: -50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.8, ease: 'easeOut', delay: 1 }} className="text-lg text-[#232323] uppercase mb-2">
									23 MEI 2026 . 10:00 WIB
								</motion.p>

								<motion.p initial={{ x: 50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.8, ease: 'easeOut', delay: 1.2 }} className="text-lg text-[#232323]">
									Kebumen City
								</motion.p>
							</div>

							<motion.div initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8, ease: 'easeOut', delay: 1.5 }} className="flex flex-col items-end mt-auto text-right">
								<p className="text-[#6D6F6A] text-base mb-4 flex items-center gap-1">
									Dear, <span className="text-[#2C2E2A] text-base md:text-lg">Ferdian Septiawan</span>
								</p>
								<motion.div
									animate={{ y: [0, -8, 0] }} // Bergerak dari 0 ke -8px lalu kembali ke 0
									transition={{
										duration: 2,
										repeat: Infinity,
										ease: 'easeInOut',
									}}
									onClick={handleOpen}
									className="cursor-pointer"
								>
									<Button>Open Invitation</Button>
								</motion.div>
							</motion.div>
						</div>
					</motion.div>

					// bg-[url('/bumi-renjana/bg-section1.svg')]
				) : (
					<motion.div key="main-content" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} className="w-full   bg-no-repeat bg-cover bg-center flex flex-col px-6 py-12 relative overflow-hidden">
						<div className="relative lg:min-h-screen z-10 w-full max-w-md mx-auto flex flex-col h-full">
							<div className="flex flex-col items-start mb-8 mt-12 overflow-hidden">
								<motion.h3 initial={{ x: -50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }} className="text-[32px] text-brown font-allison">
									Undangan
								</motion.h3>

								<motion.h2 initial={{ x: 50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.8, ease: 'easeOut', delay: 0.4 }} className="text-[32px] text-[#212121] -mt-5 font-sarabun font-semibold mb-4">
									Spesial untuk Kamu
								</motion.h2>

								<motion.p initial={{ y: -30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8, ease: 'easeOut', delay: 0.6 }} className="text-base text-[#757575] font-sarabun  font-light">
									Hari bahagia ini terasa lebih lengkap jika dirayakan bersama orang-orang terdekat.
								</motion.p>
							</div>

							<motion.div initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8, ease: 'easeOut', delay: 0.8 }} className="w-full bg-[#FFF1E8] rounded-3xl p-8 flex flex-col items-center justify-center shadow-sm mb-12 overflow-hidden">
								<p className="text-[#757575] font-benne text-[20px] mb-2">Undangan Pernikahan</p>

								<div className="text-5xl md:text-6xl text-[#212121] mb-4 flex items-center italic font-benne ">
									<motion.span initial={{ x: -50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.8, ease: 'easeOut', delay: 1 }} className='pr-1'>
										F
									</motion.span>

									<motion.span initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.8, ease: 'easeOut', delay: 1.2 }} className="text-[#D29B80] text-4xl not-italic font-benne">
										&
									</motion.span>

									<motion.span initial={{ x: 50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.8, ease: 'easeOut', delay: 1.4 }} >
										S
									</motion.span>
								</div>

								<div className="w-full max-w-[85%] border-t-[1px] border-[#D39E82] mb-8"></div>
								<CountdownTimer targetDate={new Date('2026-12-20T00:00:00')} />
							</motion.div>

							<motion.div initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8, ease: 'easeOut', delay: 1.6 }} className="flex flex-col items-start">
								<div className="flex gap-2 mb-6">
									<div className="w-3.5 h-3.5 rounded-full bg-[#D89F83]"></div>
									<div className="w-3.5 h-3.5 rounded-full bg-[#FBE0D3]"></div>
									<div className="w-3.5 h-3.5 rounded-full bg-[#FFF2EC]"></div>
								</div>

								<p className="text-base text-[#757575] leading-relaxed mb-16 pr-8 font-sarabun">Kami berharap kamu bisa hadir dan menjadi bagian dari momen yang berarti bagi kami.</p>

								<div className="w-full flex justify-center">
									<div onClick={handleScrollDown} className="w-9 h-14 rounded-full border-[4px] border-[#D39E82] flex flex-col items-center justify-center text-[#D39E82] gap-[3px] animate-bounce cursor-pointer">
										<div className="w-[5px] h-[5px] bg-[#D39E82] rounded-full mt-1"></div>
										<div className="w-[5px] h-[5px] bg-[#D39E82] rounded-full "></div>
										<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5">
											<path d="M6 9l6 6 6-6" />
										</svg>
									</div>
								</div>
							</motion.div>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
};

export default Section1;
