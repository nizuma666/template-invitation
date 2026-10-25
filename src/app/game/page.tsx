"use client"
import { useEffect, useRef, useState } from "react"
import { AnimatePresence, MotionConfig, motion } from "motion/react"
import World from "@/components/game/world"
import { Hud } from "@/components/game/ui"
import Title from "@/components/game/stages/title"
import Walk from "@/components/game/stages/walk"
import Hearts from "@/components/game/stages/hearts"
import Memory from "@/components/game/stages/memory"
import Story from "@/components/game/stages/story"
import ChestStage from "@/components/game/stages/chest"
import Wish from "@/components/game/stages/wish"
import Ending from "@/components/game/stages/ending"

const LAST = 7

export default function Game() {
  const [stage, setStage] = useState(0)
  const [music, setMusic] = useState(false)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  // ?stage=N jumps straight to a level, handy for testing a single stage
  useEffect(() => {
    const s = Number(new URLSearchParams(window.location.search).get("stage"))
    if (s >= 0 && s <= LAST) setStage(s)
  }, [])

  useEffect(() => {
    const pause = () => {
      if (document.hidden && audioRef.current) {
        audioRef.current.pause()
        setMusic(false)
      }
    }
    document.addEventListener("visibilitychange", pause)
    return () => {
      document.removeEventListener("visibilitychange", pause)
      audioRef.current?.pause()
    }
  }, [])

  const toggleMusic = async () => {
    // Created on the first tap: mobile blocks autoplay, and nothing is downloaded before then
    audioRef.current ??= Object.assign(new Audio("/music/game-gamelan.mp3"), { loop: true })
    const a = audioRef.current
    try {
      if (a.paused) await a.play()
      else a.pause()
    } catch {
      // blocked by the browser: stay silent
    }
    setMusic(!a.paused)
  }

  const start = () => {
    setStage(1)
    if (!audioRef.current || audioRef.current.paused) toggleMusic()
  }
  const next = () => setStage((s) => Math.min(s + 1, LAST))

  const screens = [
    <Title key={0} onStart={start} />,
    <Walk key={1} onNext={next} />,
    <Hearts key={2} onNext={next} />,
    <Memory key={3} onNext={next} />,
    <Story key={4} onNext={next} />,
    <ChestStage key={5} onNext={next} />,
    <Wish key={6} onNext={next} />,
    <Ending key={7} onJump={setStage} onRestart={() => setStage(0)} />,
  ]

  return (
    <MotionConfig reducedMotion="user">
      <main className="fixed inset-0 flex justify-center bg-[#E7DCD4] select-none">
        <div className="relative h-full w-full max-w-md overflow-hidden bg-[#FFF0D9] shadow-2xl">
          <World stage={stage} />
          {stage > 0 && <Hud stage={stage} total={LAST} music={music} onMusic={toggleMusic} />}
          <AnimatePresence mode="wait">
            <motion.div key={stage} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }} className="absolute inset-0">
              {screens[stage]}
            </motion.div>
          </AnimatePresence>
        </div>
      </main>
    </MotionConfig>
  )
}
