"use client";
import { useState } from "react";

export default function ContactForm() {
  const [state, setState] = useState<"idle" | "sending" | "done" | "error">("idle");
  const [msg, setMsg] = useState("");
  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("sending");
    const data = Object.fromEntries(new FormData(e.currentTarget));
    const r = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) });
    if (r.ok) { setState("done"); (e.target as HTMLFormElement).reset(); }
    else { setState("error"); setMsg((await r.json()).error ?? "Something went wrong."); }
  }
  return (
    <form onSubmit={submit} className="form">
      <label>Name<input name="name" required minLength={2} maxLength={80} /></label>
      <label>Email<input name="email" type="email" required /></label>
      <label>Project details<textarea name="body" required minLength={10} maxLength={2000} rows={5} /></label>
      <input name="website" tabIndex={-1} autoComplete="off" className="hp" aria-hidden />
      <button disabled={state === "sending"}>{state === "sending" ? "Sending" : "Send message"}</button>
      {state === "done" && <p role="status">Message sent. I reply within one working day.</p>}
      {state === "error" && <p role="alert">{msg}</p>}
    </form>
  );
}
