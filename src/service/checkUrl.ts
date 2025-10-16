/* eslint-disable @typescript-eslint/no-explicit-any */
import { db } from "@/service/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";
import { notFound } from "next/navigation";

interface CoverData {
    id: string;
    user_id: string;
    url: string;
    [key: string]: any;
}

async function getDataByField<T>(collectionName: string, field: string, value: string): Promise<T[]> {
    const q = query(collection(db, collectionName), where(field, "==", value));
    const snapshot = await getDocs(q);

    if (snapshot.empty) {
        return [];
    }

    return snapshot.docs.map(doc => {
        const d = doc.data();
        return {
            id: doc.id,
            ...d,
            createdAt: d.createdAt?.toDate().toISOString() || null,
            updatedAt: d.updatedAt?.toDate().toISOString() || null,
        };
    }) as T[];
}
export default async function CheckUrl({ params }: { params: any }) {
    const cover = await getDataByField<CoverData>("cover", "url", params.slug);
    if (cover.length < 1) return notFound();

    const userId = cover[0].user_id;

    // Ambil semua data paralel
    const [acara, gallery, gift, listUndangan, couple] = await Promise.all([
        getDataByField("acara", "user_id", userId),
        getDataByField("gallery", "user_id", userId),
        getDataByField("gift", "user_id", userId),
        getDataByField("listUndangan", "uid", userId),
        getDataByField("couple", "user_id", userId),
    ]);

    if (!acara || !gallery || !gift || !listUndangan) {
        return notFound();
    }

    const findSubSlug = listUndangan.find((item: any) => item.nama === params.subslug )

    if (!findSubSlug) {
        return notFound();
    }

    return { acara, gallery, gift, listUndangan, cover, couple }
}