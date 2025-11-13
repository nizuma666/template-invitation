import Navbar from "@/components/landing/components/navbar";
import Section1 from "@/components/landing/section1";
import Section2 from "@/components/landing/section2";
import Section3 from "@/components/landing/section3";
import { redirect } from "next/navigation";

export default function Home() {
  return (
    <>
      <Navbar />
      <Section1 />
      <Section2 />
      <Section3 />
    </>
  );
}
