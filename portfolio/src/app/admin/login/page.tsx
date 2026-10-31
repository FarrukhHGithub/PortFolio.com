"use client";
import { useState } from "react";
export default function Login() {
  const [err, setErr] = useState("");
  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const d = Object.fromEntries(new FormData(e.currentTarget));
    const r = await fetch("/api/auth/login", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) });
    if (r.ok) location.href = "/admin"; else setErr((await r.json()).error);
  }
  return (<main style={{ maxWidth: 400, paddingTop: 96 }}>
    <h2>Admin sign in</h2>
    <form onSubmit={submit} className="form">
      <label>Email<input name="email" type="email" required autoComplete="username" /></label>
      <label>Password<input name="password" type="password" required autoComplete="current-password" /></label>
      <button>Sign in</button>{err && <p role="alert">{err}</p>}
    </form></main>);
}
