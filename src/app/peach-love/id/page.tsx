"use client"
import Section1 from "@/components/peach-love/section1";
import content from "./content.json"
import Section2 from "@/components/peach-love/section2";
import Section3 from "@/components/peach-love/section3";
import Section4 from "@/components/peach-love/section4";
import Section5 from "@/components/peach-love/section5";
import Section6 from "@/components/peach-love/section6";
import Section7 from "@/components/peach-love/section7";
import { useEffect, useState } from "react";
import Image from "next/image";
import onMusic from "!/onMusic.svg"
import offMusic from "!/offMusic.svg"
/* eslint-disable @typescript-eslint/no-explicit-any */
export default function PeachLove() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);
  useEffect(() => {
    if (!isOpen) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, []);
  return (
    <div className="w-full max-w-md mx-auto relative h-dvh">
      <Image src={onMusic} alt="music" width={40} height={40} className="fixed bottom-5 right-5 z-99 animate-spin" />
      <Section1 content={content?.section1} onOpen={() => setIsOpen(true)} />
      <Section2 content={content?.section2} />
      <Section3 content={content?.section3} />
      <Section4 content={content?.section4} />
      <Section5 content={content?.section5} />
      <Section6 content={content?.section6} />
      <Section7 />
    </div>
  );
}