'use client';

import { useState } from "react";
import { createDevlogPost } from "@/features/devlog/create";
import { SimpleEditor } from "@/components/tiptap-templates/simple/simple-editor";

export default function DevlogEditPage() {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [tagDraft, setTagDraft] = useState("");
  const [tags, setTags] = useState<string[]>([]);
  const [content, setContent] = useState<any>(null);
  const [saving, setSaving] = useState(false);

  const addTag = () => {
    const t = tagDraft.trim();
    if (!t) return;
    if (!tags.includes(t)) setTags([...tags, t]);
    setTagDraft("");
  };
  const removeTag = (t: string) => setTags(tags.filter(x => x !== t));

  const onSave = async () => {
    if (!title || !category || !content) {
      alert("제목/카테고리/본문을 입력하세요.");
      return;
    }
    try {
      setSaving(true);
      const id = await createDevlogPost({ title, category, tags, content });
      // 저장 후 목록이나 상세로 이동(임시로 홈 가기)
      window.location.href = "/devlog";
    } catch (e) {
      console.error(e);
      alert("저장 실패");
    } finally {
      setSaving(false);
    }
  };

  return (
    <main className="max-w-3xl mx-auto p-4 space-y-4">
      <h1 className="text-2xl font-bold">새 글</h1>

      <input
        className="border w-full px-3 py-2"
        placeholder="제목"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        className="border w-full px-3 py-2"
        placeholder="카테고리 (예: dev)"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />

      <div className="space-y-2">
        <div className="flex gap-2">
          <input
            className="border px-2 py-1"
            placeholder="태그 입력"
            value={tagDraft}
            onChange={(e) => setTagDraft(e.target.value)}
            onKeyDown={(e)=>{ if (e.key === 'Enter') { e.preventDefault(); addTag(); } }}
          />
          <button className="border px-2" onClick={addTag}>+</button>
        </div>
        <div className="flex gap-2 flex-wrap">
          {tags.map(t => (
            <span key={t} className="px-2 py-1 rounded-full border">
              #{t} <button onClick={() => removeTag(t)}>×</button>
            </span>
          ))}
        </div>
      </div>

      <SimpleEditor />

      <div className="flex gap-2">
        <button
          className="border px-4 py-2 bg-black text-white"
          onClick={onSave}
          disabled={saving}
        >
          {saving ? "저장 중..." : "저장"}
        </button>
        <a className="border px-4 py-2" href="/devlog">취소</a>
      </div>
    </main>
  );
}
