/* eslint-disable @typescript-eslint/no-explicit-any */
import { db } from "@/service/firebase";
import { addDoc, collection, getDocs, query, where } from "firebase/firestore";
import { notFound } from "next/navigation";
import { adminDb } from "./firebase-admin";

interface CoverData {
    id: string;
    user_id: string;
    url: string;
    [key: string]: any;
}

export async function getDataByField<T>(
  collectionName: string,
  field: string,
  value: string
): Promise<T[]> {

  const snapshot = await adminDb
    .collection(collectionName)
    .where(field, "==", value)
    .get();

  if (snapshot.empty) {
    return [];
  }

  return snapshot.docs.map((doc) => {
    const d = doc.data();

    return {
      id: doc.id,
      ...d,
      createdAt: d.createdAt?.toDate?.()?.toISOString?.() || null,
      updatedAt: d.updatedAt?.toDate?.()?.toISOString?.() || null,
    };
  }) as T[];
}

export async function addAcara(data: { nama: string; kehadiran: string; pesan: string; user_id: string }) {
    try {
        const docRef = await addDoc(collection(db, "greeting"), {
            nama: data.nama,
            kehadiran: data.kehadiran,
            pesan: data.pesan,
            user_id: data.user_id,
        });
        return { id: docRef.id };
    } catch (error) {
        console.error("Gagal menambah acara:", error);
        return null;
    }
}
export default async function CheckUrl({ params }: { params: Promise<{ slug: string; subslug: string }> }) {
    const { slug, subslug } = await params;
    const decodedSlug = decodeURIComponent(slug);
    const cover = await getDataByField<CoverData>("cover", "url", decodedSlug);

    if (cover.length < 1) {
        return notFound();
    }

    const userId = cover[0].user_id;
console.log('[CheckUrl] userId:', userId);
    const [acara, gallery, gift, listUndangan, couple, greeting, story] = await Promise.all([
        getDataByField("acara", "user_id", userId),
        getDataByField("gallery", "user_id", userId),
        getDataByField("gift", "user_id", userId),
        getDataByField("listUndangan", "uid", userId),
        getDataByField("couple", "user_id", userId),
        getDataByField("greeting", "user_id", userId),
         getDataByField("story", "user_id", userId),
    ]);

    if (!acara || !gallery || !gift || !listUndangan || !couple || !greeting || !story) {
        return notFound();
    }
    const decodeSubslug = decodeURIComponent(subslug)

    const findSubSlug = listUndangan.find((item: any) => item.nama === decodeSubslug);  

    if (!findSubSlug) {
        return notFound();
    }

    return { acara, gallery, gift, listUndangan, cover, couple, greeting, story}
}
