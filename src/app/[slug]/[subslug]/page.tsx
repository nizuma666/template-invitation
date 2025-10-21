/* eslint-disable @typescript-eslint/no-explicit-any */
import CheckUrl from "@/service/checkUrl";
import PeachLoveProd from "./PeachLove";
import GreenFlagProd from "./GreenFlag";

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
        return <div>Template tidak ditemukan</div>;
    }
  } catch (error) {
    console.error("Error:", error);
    return <div>Terjadi kesalahan saat memuat data.</div>;
  }
}