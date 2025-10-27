/* eslint-disable @typescript-eslint/no-explicit-any */
import CheckUrl from "@/service/checkUrl";
import PeachLoveProd from "./PeachLove";
import GreenFlagProd from "./GreenFlag";
import { notFound } from "next/navigation";

export default async function PeachServer({ params }: { params: { slug: string } }) {
  try {
    const data = await CheckUrl({ params });
    const templateId = data?.cover?.[0]?.template_id;

    switch (templateId) {
      case "1":
        return <PeachLoveProd data={data} />;
      case "2":
        return <GreenFlagProd data={data} />;
      default:
        return notFound();
    }
  } catch (error) {
    console.error("Error:", error);
    return notFound();
  }
}