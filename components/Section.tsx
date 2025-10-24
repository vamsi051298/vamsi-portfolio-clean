import { ReactNode } from "react";

export default function Section({ id, title, children }: { id: string; title: string; children: ReactNode }) {
  return (
    <section id={id} className="section">
      <div className="wrap">
        <h2 className="text-glow">{title}</h2>
        {children}
      </div>
    </section>
  );
}
