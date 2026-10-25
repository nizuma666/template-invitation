'use client';

import Image from 'next/image';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import CountdownTimer from './components/countdown_timer';
import PatternBg from './components/pattern_bg';
import Monogram from './components/monogram';
import Reveal from './components/reveal';

const ease = [0.22, 1, 0.36, 1] as const;

const Section1 = ({ onOpen }: { onOpen?: () => void }) => {
	const [isOpened, setIsOpened] = useState(false);

	const handleOpen = () => {
		setIsOpened(true);
		onOpen?.();
	};

	return (
		<div className="w-full relative z-10 min-h-[100dvh] font-akatab">
			<AnimatePresence mode="wait">
				{!isOpened ? (
					<motion.div
						key="cover"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ y: '-100vh', opacity: 0 }}
						transition={{ duration: 1.4, ease: 'easeInOut' }}
						className="relative w-full min-h-[100dvh] overflow-hidden"
					>
						<PatternBg tone="cover" />

						<motion.div
							initial={{ opacity: 0, x: -40, y: -40 }}
							animate={{ opacity: 1, x: 0, y: 0, rotate: [0, 2, 0, -2, 0] }}
							transition={{
								opacity: { duration: 1.8 },
								x: { duration: 1.8, ease },
								y: { duration: 1.8, ease },
								rotate: { duration: 8, repeat: Infinity, ease: 'easeInOut' },
							}}
							style={{ transformOrigin: 'top left' }}
							className="absolute top-0 left-0 w-[200px] pointer-events-none"
						>
							<Image src="/javanera/bunga-kiri-atas.svg" alt="" width={204} height={164} className="w-full h-auto" priority />
						</motion.div>

						<motion.div
							initial={{ opacity: 0, x: 80 }}
							animate={{ opacity: 1, x: 0, rotate: [0, -1.5, 0] }}
							exit={{ opacity: 0, x: 120, transition: { duration: 0.8 } }}
							transition={{
								opacity: { duration: 1.8, delay: 1.6 },
								x: { duration: 1.8, delay: 1.6, ease },
								rotate: { duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 3.4 },
							}}
							style={{ transformOrigin: 'bottom center' }}
							className="absolute bottom-0 right-0 w-[184px] pointer-events-none"
						>
							<Image src="/javanera/wayang-kanan-bawah.webp" alt="" width={184} height={314} className="w-full h-auto" priority />
						</motion.div>

						<div className="relative z-10 flex flex-col min-h-[100dvh] px-8 pt-[150px] pb-12">
							<motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.5, delay: 0.5 }} className="font-adelia text-[28px] text-javanera">
								Arunara
							</motion.p>

							<div className="my-auto flex flex-col">
								<motion.p initial={{ x: -40, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 1.2, ease, delay: 0.7 }} className="text-lg text-javanera">
									the wedding of
								</motion.p>
								<motion.h1 initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1.2, ease, delay: 1 }} className="font-alice text-[52px] leading-[1.1] text-javanera">
									Sari &
									<br />
									Supri
								</motion.h1>
								<motion.p initial={{ x: -40, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 1.2, ease, delay: 1.3 }} className="font-alice text-lg text-javanera mt-3">
									02.02.2027
								</motion.p>
							</div>

							<motion.div initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1.2, ease, delay: 1.9 }} className="flex flex-col items-start">
								<p className="text-javanera">Dear,</p>
								<p className="text-javanera font-bold text-lg mb-4">Ferdian Septiawan</p>
								<motion.button
									onClick={handleOpen}
									animate={{ y: [0, -6, 0] }}
									transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
									whileTap={{ scale: 0.95 }}
									className="bg-javanera-accent text-white font-semibold rounded-full px-6 py-3 shadow-lg cursor-pointer"
								>
									Open Invitation
								</motion.button>
							</motion.div>
						</div>
					</motion.div>
				) : (
					<motion.div key="hero" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} className="relative w-full overflow-hidden flex flex-col items-center text-center pt-14">
						<PatternBg tone="cover" />

						<motion.div initial={{ opacity: 0, scale: 0.6, rotate: -8 }} animate={{ opacity: 1, scale: 1, rotate: 0 }} transition={{ duration: 1.5, ease }} className="relative">
							<Monogram left="S" right="S" />
						</motion.div>

						<motion.p initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1.2, ease, delay: 0.5 }} className="relative mt-8 text-javanera">
							the wedding of
						</motion.p>
						<motion.h1 initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1.2, ease, delay: 0.8 }} className="relative font-alice text-[36px] text-javanera mt-2">
							Sari & Supri
						</motion.h1>
						<motion.p initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1.2, ease, delay: 1.1 }} className="relative font-alice text-lg text-javanera mt-1">
							02.02.2027
						</motion.p>

						<div className="relative mt-8">
							<CountdownTimer targetDate="2027-02-02T08:00:00" />
						</div>

						<div className="relative mt-12 flex flex-col items-center w-full">
							{/* Gunungan rises then sways from its base, like a dalang opening the wayang show */}
							<motion.div
								initial={{ opacity: 0, y: 80 }}
								animate={{ opacity: 1, y: 0, rotate: [0, -3, 0, 3, 0] }}
								transition={{
									opacity: { duration: 1.5, delay: 2.2 },
									y: { duration: 1.5, delay: 2.2, ease },
									rotate: { duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 3.7 },
								}}
								style={{ transformOrigin: 'bottom center' }}
								className="relative z-10 w-[100px] -mb-[48px]"
							>
								<Image src="/javanera/wayang_cover_1.svg" alt="" width={100} height={163} className="w-full h-auto" />
							</motion.div>
							<motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 1.4, delay: 2.4, ease }} className="relative w-[300px] -mb-[26px]">
								<Image src="/javanera/wayang_bawah_cover_1.svg" alt="" width={300} height={65} className="w-full h-auto" />
							</motion.div>
							<Reveal className="w-full bg-javanera text-white px-6 py-8 text-sm leading-relaxed text-left">
								<p>
									Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung dan merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa kasih dan sayang. Sungguh, pada yang demikian itu benar-benar terdapat tanda-tanda (kebesaran Allah) bagi kaum yang berpikir.
								</p>
								<p className="mt-3 font-semibold">QS. Ar-Rum: 21</p>
							</Reveal>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
};

export default Section1;
