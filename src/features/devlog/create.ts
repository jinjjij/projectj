import { getFirestore, collection, addDoc, serverTimestamp } from "firebase/firestore";
import { app } from "@/lib/firebase";

export type DevlogPostCreate = {
  title: string;
  category: string;
  tags: string[];
  content: any; // TipTap JSON (editor.getJSON())
};



// Firestore: posts 컬렉션에 문서 추가
export async function createDevlogPost(input: DevlogPostCreate) {
  const db = getFirestore(app);
  const ref = await addDoc(collection(db, "posts"), {
    title: input.title,
    category: input.category,
    tags: input.tags,
    content: input.content,
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
  });
  return ref.id;
}