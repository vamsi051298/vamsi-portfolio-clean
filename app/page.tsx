"use client";

import { profile } from "@/data/profile";
import ThreeBackground from "@/components/ThreeBackground";
import HeroIntro from "@/components/HeroIntro";
import NavMenu from "@/components/NavMenu";
import Section from "@/components/Section";
import ProjectCard from "@/components/ProjectCard";
import MetricBadge from "@/components/MetricBadge";
import ContactForm from "@/components/ContactForm";
import { motion } from "framer-motion";

export default function Page() {
  return (
    <main id="home">
      <HeroIntro />
      <ThreeBackground />
      <NavMenu />

      {/* Hero */}
      <section className="section pt-28">
        <div className="wrap">
          <h1 className="text-glow">{profile.name}</h1>
          <p className="mt-3 max-w-2xl">{profile.tagline}</p>
          <div className="mt-4 flex flex-wrap items-center gap-2">
            <a className="rounded-full bg-white/10 px-3 py-1 border border-white/15" href={profile.links.github} target="_blank">GitHub</a>
            <a className="rounded-full bg-white/10 px-3 py-1 border border-white/15" href={profile.links.linkedin} target="_blank">LinkedIn</a>
            <a className="rounded-full bg-white/10 px-3 py-1 border border-white/15" href={profile.links.leetcode} target="_blank">LeetCode</a>
            <a className="rounded-full bg-white/10 px-3 py-1 border border-white/15" href={`mailto:${profile.email}`}>Email</a>
          </div>
        </div>
      </section>

      {/* About */}
      <Section id="about" title="About">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="glass rounded-2xl p-5 border border-white/10">
            <p className="mb-2">{profile.summary[0]}</p>
            <p>{profile.summary[1]}</p>
          </div>
          <div className="glass rounded-2xl p-5 border border-white/10">
            <h3 className="mb-2">What drives me</h3>
            <p>
              I care about systems that are reliable, observable, and pleasant to use. I like turning complex constraints into simple flows. 
              I mentor, document, and automate, so teams move faster with confidence.
            </p>
          </div>
        </div>
      </Section>

      {/* Core Principles */}
      <Section id="principles" title="Core Principles">
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {profile.principles.map((p) => (
            <motion.div
              key={p.title}
              whileHover={{ y: -3 }}
              className="glass rounded-2xl p-4 border border-white/10 text-center"
            >
              <h3 className="text-white">{p.title}</h3>
              <p className="text-sm mt-1">{p.text}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Experience */}
      <Section id="experience" title="Experience">
        <div className="space-y-6">
          {profile.experience.map((job) => (
            <div key={job.org} className="glass rounded-2xl p-5 border border-white/10">
              <div className="flex flex-wrap items-baseline gap-3">
                <h3 className="text-xl font-semibold">{job.role}</h3>
                <span className="text-white/70">— {job.org}</span>
                <span className="ml-auto text-sm opacity-80">{job.period}</span>
              </div>
              <ul className="list-disc pl-5 mt-3 space-y-1">
                {job.points.map((pt, i) => <li key={i}>{pt}</li>)}
              </ul>
              <div className="mt-3">
                {job.metrics.map((m) => <MetricBadge key={m.label} label={m.label} value={m.value} />)}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Projects */}
      <Section id="projects" title="Projects">
        <div className="grid md:grid-cols-2 gap-5">
          {profile.projects.map((p) => (
            <ProjectCard key={p.name} name={p.name} tech={p.tech} bullets={p.bullets} metrics={p.metrics} />
          ))}
        </div>
      </Section>

      {/* Skills */}
      <Section id="skills" title="Skills">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="glass rounded-2xl p-5 border border-white/10">
            <h3 className="mb-2">Programming</h3>
            <p>{profile.skills.programming.join(" · ")}</p>
            <hr className="sep" />
            <h3 className="mb-2">Frameworks</h3>
            <p>{profile.skills.frameworks.join(" · ")}</p>
          </div>
          <div className="glass rounded-2xl p-5 border border-white/10">
            <h3 className="mb-2">Cloud & DevOps</h3>
            <p>{profile.skills.cloudDevOps.join(" · ")}</p>
            <hr className="sep" />
            <h3 className="mb-2">Data</h3>
            <p>{profile.skills.data.join(" · ")}</p>
          </div>
          <div className="glass rounded-2xl p-5 border border-white/10">
            <h3 className="mb-2">System Design</h3>
            <p>{profile.skills.design.join(" · ")}</p>
          </div>
          <div className="glass rounded-2xl p-5 border border-white/10">
            <h3 className="mb-2">Testing & Monitoring</h3>
            <p>{profile.skills.testing.join(" · ")}</p>
          </div>
        </div>
      </Section>

      {/* Education */}
      <Section id="education" title="Education">
        <div className="grid md:grid-cols-2 gap-5">
          {profile.education.map((e) => (
            <div key={e.school} className="glass rounded-2xl p-5 border border-white/10">
              <h3 className="font-semibold">{e.school}</h3>
              <p className="text-sm mt-1">{e.degree}</p>
              <p className="text-xs mt-1 opacity-80">{e.period} · GPA {e.gpa}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Contact */}
      <Section id="contact" title="Contact">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="glass rounded-2xl p-5 border border-white/10">
            <h3 className="mb-2">Reach out</h3>
            <p>Email: <a href={`mailto:${profile.email}`}>{profile.email}</a></p>
            <p>Phone: <a href={`tel:${profile.phone}`}>{profile.phone}</a></p>
            <p className="mt-2">
              Prefer a quick note? Use the form and I will respond soon.
            </p>
          </div>
          <ContactForm />
        </div>
      </Section>

      <footer className="py-10 text-center text-white/60">
        © {new Date().getFullYear()} {profile.name}
      </footer>
    </main>
  );
}
