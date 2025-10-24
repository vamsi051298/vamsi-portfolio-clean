"use client";

import { profile } from "@/data/profile";
import NavMenu from "@/components/NavMenu";
import Section from "@/components/Section";
import ProjectCard from "@/components/ProjectCard";
import ContactForm from "@/components/ContactForm";

export default function Page() {
  return (
    <main id="home">
      <NavMenu />

      {/* Hero */}
      <section className="section">
        <div className="wrap">
          <h1>{profile.name}</h1>
          <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', marginBottom: '1rem' }}>
            {profile.title}
          </p>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem' }}>
            {profile.location}
          </p>
          <div className="contact-info">
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
            <a href={`tel:${profile.phone}`}>{profile.phone}</a>
            <a href={profile.links.github} target="_blank">GitHub</a>
            <a href={profile.links.linkedin} target="_blank">LinkedIn</a>
            <a href={profile.links.leetcode} target="_blank">LeetCode</a>
          </div>
        </div>
      </section>

      {/* Summary */}
      <Section id="summary" title="Summary">
        <div className="card">
          <p>{profile.summary}</p>
        </div>
      </Section>

      {/* Work Experience */}
      <Section id="experience" title="Work Experience">
        <div className="space-y-6">
          {profile.experience.map((job) => (
            <div key={job.org} className="card">
              <div className="flex flex-wrap items-baseline gap-3 mb-4">
                <h3>{job.role}</h3>
                <span style={{ color: 'var(--text-secondary)' }}>| {job.org}</span>
                <span className="ml-auto text-sm" style={{ color: 'var(--text-secondary)' }}>{job.period}</span>
              </div>
              <ul className="list-disc pl-6 space-y-2">
                {job.points.map((pt, i) => <li key={i}>{pt}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      {/* Projects */}
      <Section id="projects" title="Projects">
        <div className="space-y-6">
          {profile.projects.map((p) => (
            <div key={p.name} className="card">
              <h3>{p.name}</h3>
              <div className="mt-3 mb-4">
                {p.tech.map((t) => (
                  <span key={t} className="tech-tag">{t}</span>
                ))}
              </div>
              <ul className="list-disc pl-6 space-y-2">
                {p.bullets.map((b, i) => <li key={i}>{b}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      {/* Technical Skills */}
      <Section id="skills" title="Technical Skills">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="card">
            <h3>Programming</h3>
            <div className="mt-3">
              {profile.skills.programming.map((skill) => (
                <span key={skill} className="tech-tag">{skill}</span>
              ))}
            </div>
            <hr className="sep" />
            <h3>Frameworks</h3>
            <div className="mt-3">
              {profile.skills.frameworks.map((skill) => (
                <span key={skill} className="tech-tag">{skill}</span>
              ))}
            </div>
          </div>
          <div className="card">
            <h3>Cloud & DevOps</h3>
            <div className="mt-3">
              {profile.skills.cloudDevOps.map((skill) => (
                <span key={skill} className="tech-tag">{skill}</span>
              ))}
            </div>
            <hr className="sep" />
            <h3>Databases & Messaging</h3>
            <div className="mt-3">
              {profile.skills.databases.map((skill) => (
                <span key={skill} className="tech-tag">{skill}</span>
              ))}
            </div>
          </div>
          <div className="card">
            <h3>System Design</h3>
            <div className="mt-3">
              {profile.skills.systemDesign.map((skill) => (
                <span key={skill} className="tech-tag">{skill}</span>
              ))}
            </div>
          </div>
          <div className="card">
            <h3>Testing & Monitoring</h3>
            <div className="mt-3">
              {profile.skills.testing.map((skill) => (
                <span key={skill} className="tech-tag">{skill}</span>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Education */}
      <Section id="education" title="Education">
        <div className="grid md:grid-cols-2 gap-6">
          {profile.education.map((e) => (
            <div key={e.school} className="card">
              <h3>{e.school}</h3>
              <p className="mt-2">{e.degree}</p>
              <p className="mt-1" style={{ color: 'var(--text-secondary)' }}>{e.period} · GPA {e.gpa}</p>
            </div>
          ))}
        </div>
      </Section>

      <footer className="py-10 text-center" style={{ color: 'var(--text-secondary)' }}>
        <p>© {new Date().getFullYear()} {profile.name}</p>
        <p className="mt-2">Built with Next.js, TypeScript, and lots of ☕</p>
      </footer>
    </main>
  );
}
