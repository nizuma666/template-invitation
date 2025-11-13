import Footer from "@/components/landing/components/footer";
import Navbar from "@/components/landing/components/navbar";
import Section1 from "@/components/landing/section1";
import Section2 from "@/components/landing/section2";
import Section3 from "@/components/landing/section3";
import Section4 from "@/components/landing/section4";
import Section5 from "@/components/landing/section5";

export default function Home() {
  return (
    <>
      <Navbar />
      <Section1 id="home" />
      <Section2 id="fitur" />
      <Section3 id="product" />
      <Section4 />
      <Section5 />
      <Footer />
    </>
  );
}
