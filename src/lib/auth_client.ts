import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, User } from "firebase/auth";
import { app } from "@/lib/firebase";

const auth = getAuth(app);

export async function loginWithGoogle() {
  const provider = new GoogleAuthProvider();
  const cred = await signInWithPopup(auth, provider);
  return cred.user;
}

export function logout() {
  return signOut(auth);
}

export function observeAuth(cb: (user: User | null) => void) {
  return onAuthStateChanged(auth, cb);
}