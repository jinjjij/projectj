'use client';

import { useEffect, useState } from "react";
import { loginWithGoogle, logout, observeAuth } from "@/lib/auth_client";


export default function LoginPage() {
  const [user, setUser] = useState<null | { displayName: string | null; email: string | null; photoURL: string | null }>(null);

  useEffect(() => {
    const unsub = observeAuth(u => {
      if (!u) setUser(null);
      else setUser({ displayName: u.displayName, email: u.email, photoURL: u.photoURL });
    });
    return () => unsub();
  }, []);

  const onLogin = async () => {
    try {
      await loginWithGoogle();
    } catch (e) {
      alert("로그인 실패");
      console.error(e);
    }
  };

  const onLogout = async () => {
    await logout();
  };

  return (
    <main className="max-w-md mx-auto p-6 space-y-4">
      <h1 className="text-2xl font-bold">로그인</h1>

      {!user ? (
        <button className="border px-4 py-2 rounded" onClick={onLogin}>
          Google로 로그인
        </button>
      ) : (
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            {user.photoURL && <img src={user.photoURL} alt="avatar" className="w-10 h-10 rounded-full" />}
            <div>
              <div className="font-semibold">{user.displayName || "사용자"}</div>
              <div className="text-sm text-gray-600">{user.email}</div>
            </div>
          </div>
          <div className="flex gap-2">
            <a href="/" className="border px-3 py-1 rounded">홈으로</a>
            <button className="border px-3 py-1 rounded" onClick={onLogout}>로그아웃</button>
          </div>
        </div>
      )}
    </main>
  );
}