import Section1 from "@/components/peach-love/section1";
import content from "./content.json"
import Section2 from "@/components/peach-love/section2";
import Section3 from "@/components/peach-love/section3";
import Section4 from "@/components/peach-love/section4";
import Section5 from "@/components/peach-love/section5";
import Section6 from "@/components/peach-love/section6";
import Section7 from "@/components/peach-love/section7";
/* eslint-disable @typescript-eslint/no-explicit-any */
export default function PeachLove() {
  return (
    <div className="w-full max-w-md mx-auto">
      <Section1 content={content?.section1} />
      <Section2 content={content?.section2} />
      <Section3 content={content?.section3} />
      <Section4 content={content?.section4} />
      <Section5 content={content?.section5} />
      <Section6 content={content?.section6} />
      <Section7 />
    </div>
  );
}