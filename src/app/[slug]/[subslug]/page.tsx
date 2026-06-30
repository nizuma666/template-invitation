/* eslint-disable @typescript-eslint/no-explicit-any */
import CheckUrl from "@/service/checkUrl";
import PeachLoveProd from "./PeachLove";
import GreenFlagProd from "./GreenFlag";
import { notFound } from "next/navigation";
import BandWProd from "./B&W";
import BumiRenjanaProd from "./BumiRenjana";
import BlueSkyProd from "./BlueSky";

export default async function PeachServer({ params }: { params: Promise<{ slug: string; subslug: string }> }) {
  try {
    const data = await CheckUrl({ params });
    const templateId = data?.cover?.[0]?.template_id;
    console.log("testt id",templateId)

    switch (templateId) {
      case "1":
        return <PeachLoveProd data={data} />;
      case "2":
        return <GreenFlagProd data={data} />;
      case "3":
        return <BandWProd data={data} />;
       case "5":
        return <BumiRenjanaProd data={data} />;
      case "4":
        return <BlueSkyProd data={data} />;
      default:
        return notFound();
    }
  } catch (error) {
    console.error("Error:", error);
    return notFound();
  }
}
