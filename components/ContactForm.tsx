"use client";

import { useState } from "react";

export default function ContactForm() {
  const [state, setState] = useState<"idle"|"sending"|"done"|"error">("idle");
  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const fd = new FormData(e.target as HTMLFormElement);
    const payload = Object.fromEntries(fd.entries());
    setState("sending");
    try {
      const r = await fetch("/api/contact", { method: "POST", body: JSON.stringify(payload) });
      if (r.ok) setState("done"); else setState("error");
    } catch {
      setState("error");
    }
  };
  return (
    <form onSubmit={onSubmit} className="glass rounded-2xl p-5 border border-white/10">
      <div className="grid md:grid-cols-2 gap-3">
        <input name="name" placeholder="Your name" required className="rounded-lg bg-white/5 px-3 py-2 border border-white/10" />
        <input name="email" placeholder="Your email" type="email" required className="rounded-lg bg-white/5 px-3 py-2 border border-white/10" />
      </div>
      <input name="subject" placeholder="Subject" className="mt-3 w-full rounded-lg bg-white/5 px-3 py-2 border border-white/10" />
      <textarea name="message" placeholder="Message" rows={5} className="mt-3 w-full rounded-lg bg-white/5 px-3 py-2 border border-white/10" />
      <button disabled={state==="sending"} className="mt-4 rounded-xl px-4 py-2 bg-white/10 border border-white/20 hover:bg-white/20">
        {state==="sending" ? "Sending..." : state==="done" ? "Sent" : "Send"}
      </button>
      {state==="error" && <p className="mt-2 text-red-300">Could not send. Try again.</p>}
    </form>
  );
}
