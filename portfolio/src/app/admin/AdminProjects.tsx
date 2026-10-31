"use client";
import { useState } from "react";
type P = { id: string; title: string; slug: string; published: boolean };

export default function AdminProjects({ initial }: { initial: P[] }) {
  const [list, setList] = useState(initial);
  const [err, setErr] = useState("");

  async function add(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const body = { title: f.get("title"), slug: f.get("slug"), summary: f.get("summary"),
      stack: String(f.get("stack")).split(",").map(s => s.trim()).filter(Boolean),
      liveUrl: f.get("liveUrl") || null, featured: false, published: true, sortOrder: list.length };
    const r = await fetch("/api/admin/projects", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(body) });
    if (r.ok) { setList([...list, await r.json()]); (e.target as HTMLFormElement).reset(); setErr(""); }
    else setErr("Check the fields. Slug must be lowercase letters, numbers, dashes.");
  }
  async function remove(id: string) {
    if (!confirm("Delete this project?")) return;
    await fetch(`/api/admin/projects/${id}`, { method: "DELETE" });
    setList(list.filter(p => p.id !== id));
  }
  async function logout() { await fetch("/api/auth/logout", { method: "POST" }); location.href = "/admin/login"; }

  return (<section style={{ border: 0, padding: 0 }}>
    <button onClick={logout} style={{ float: "right" }}>Sign out</button>
    <h3>Projects ({list.length})</h3>
    <table><tbody>{list.map(p => <tr key={p.id}><td>{p.title}</td><td>/{p.slug}</td><td><button onClick={() => remove(p.id)}>Delete</button></td></tr>)}</tbody></table>
    <h3 style={{ marginTop: 32 }}>Add project</h3>
    <form onSubmit={add} className="form">
      <label>Title<input name="title" required /></label>
      <label>Slug<input name="slug" required pattern="[a-z0-9-]+" /></label>
      <label>Summary<textarea name="summary" required minLength={10} /></label>
      <label>Stack (comma separated)<input name="stack" placeholder="Next.js, AWS S3" /></label>
      <label>Live URL<input name="liveUrl" type="url" /></label>
      <button>Add project</button>{err && <p role="alert">{err}</p>}
    </form></section>);
}
