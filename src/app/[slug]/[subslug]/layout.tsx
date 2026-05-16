import CheckUrl from "@/service/checkUrl";
import type { Metadata } from "next";

type Props = {
  children: React.ReactNode;
  params: Promise<{ slug: string; subslug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  try {
    const data = await CheckUrl({ params });
    const cover = data?.cover?.[0];

    const title = `${cover?.pengantin_pria} & ${cover?.pengantin_wanita}`;
    const description = `Undangan pernikahan ${cover?.pengantin_pria} & ${cover?.pengantin_wanita}. Dibuat dengan ❤️ menggunakan Arunara.`;
    const ogImage = cover?.image_cover ?? "https://arunara.id/android-chrome-512x512.png";

    return {
      // ✅ Override OG saja yang relevan
      openGraph: {
        title,
        // description,
        description: "Bagikan kisah cintamu secara indah dengan undangan digital interaktif dari Arunara.",
        // url: `https://arunara.id/${(await params).slug}/${(await params).subslug}`,
        siteName: "Arunara",       // warisan bisa di-override eksplisit
        images: [{ url: ogImage, width: 1200, height: 630 }],
        type: "website",
      },
      // ✅ Override Twitter card
      twitter: {
        card: "summary_large_image",
        title,
        description,
        images: [ogImage],
        creator: "@arunara_id",
      },
    };
  } catch {
    return { title: "Undangan Digital | Arunara" };
  }
}

export default function SubslugLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}