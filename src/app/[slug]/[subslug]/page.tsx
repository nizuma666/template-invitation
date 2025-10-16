/* eslint-disable @typescript-eslint/no-explicit-any */
import CheckUrl from "@/service/checkUrl";
import PeachLoveProd from "./clientSide";

export default async function PeachServer({ params }: { params: { slug: string } }) {
  const data = await CheckUrl({ params })

  return (
    <PeachLoveProd data={data}/>
  )
}