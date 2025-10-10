import Section1 from "@/components/peach-love/section1";
import content from "./content.json"
import Section2 from "@/components/peach-love/section2";
/* eslint-disable @typescript-eslint/no-explicit-any */
export default function PeachLove() {
  return (
    <div className="w-full">
      <Section1 content={content?.section1} />
      <Section2 content={content?.section2} />
    </div>
  );
}