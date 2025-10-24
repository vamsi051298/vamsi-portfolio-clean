"use client";

import { profile } from "@/data/profile";
import ThreeBackground from "@/components/ThreeBackground";
import InteractiveCursor from "@/components/InteractiveCursor";
import HeroIntro from "@/components/HeroIntro";
import NavMenu from "@/components/NavMenu";
import Section from "@/components/Section";
import ProjectCard from "@/components/ProjectCard";
import ContactForm from "@/components/ContactForm";

export default function Page() {
  return (
    <main id="home">
      <HeroIntro />
      <ThreeBackground />
      <InteractiveCursor />
      <NavMenu />

      {/* Hero */}
      <section className="section">
        <div className="wrap">
          <div className="glass-card floating">
            <h1>{profile.name}</h1>
            <h2 style={{ fontSize: '1.8rem', fontWeight: '400', color: 'var(--text-secondary)', marginBottom: '3rem' }}>
              {profile.title}
            </h2>
            <div className="contact-info">
              <a href={`mailto:${profile.email}`} className="interactive">Email: {profile.email}</a>
              <a href={`tel:${profile.phone}`} className="interactive">Mobile: {profile.phone}</a>
              <span>Location: {profile.location}</span>
            </div>
            <div className="contact-info">
              <a href={profile.links.github} target="_blank" className="interactive">GitHub: github.com/vamsi051298</a>
              <a href={profile.links.linkedin} target="_blank" className="interactive">LinkedIn: linkedin.com/in/vssvamsikrishnachirala</a>
              <a href={profile.links.leetcode} target="_blank" className="interactive">LeetCode: leetcode.com/vamsi051298</a>
            </div>
          </div>
        </div>
      </section>

      {/* Summary */}
      <Section id="summary" title="Summary">
        <div className="glass-card">
          <p>{profile.summary}</p>
        </div>
      </Section>

      {/* Work Experience */}
      <Section id="experience" title="Work Experience">
        <div className="space-y-8">
          {profile.experience.map((job, index) => (
            <div key={job.org} className={`glass-card ${index % 2 === 0 ? 'floating' : ''}`} style={{ animationDelay: `${index * 0.5}s` }}>
              <div className="flex flex-wrap items-baseline gap-3 mb-6">
                <h3>{job.role}</h3>
                <span style={{ color: 'var(--text-secondary)' }}>| {job.org}</span>
                <span className="ml-auto text-sm" style={{ color: 'var(--text-secondary)' }}>{job.period}</span>
              </div>
              <ul className="list-disc pl-6 space-y-3">
                {job.points.map((pt, i) => <li key={i}>{pt}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      {/* Projects */}
      <Section id="projects" title="Projects">
        <div className="space-y-8">
          {profile.projects.map((p, index) => (
            <div key={p.name} className={`glass-card ${index % 2 === 1 ? 'floating' : ''}`} style={{ animationDelay: `${index * 0.3}s` }}>
              <h3>{p.name}</h3>
              <div className="mt-4 mb-6">
                {p.tech.map((t) => (
                  <span key={t} className="tech-tag">{t}</span>
                ))}
              </div>
              <ul className="list-disc pl-6 space-y-3">
                {p.bullets.map((b, i) => <li key={i}>{b}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      {/* Technical Skills */}
      <Section id="skills" title="Technical Skills">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="glass-card floating">
            <h3>Programming</h3>
            <div className="mt-4">
              {profile.skills.programming.map((skill) => (
                <span key={skill} className="tech-tag">{skill}</span>
              ))}
            </div>
            <hr className="sep" />
            <h3>Frameworks</h3>
            <div className="mt-4">
              {profile.skills.frameworks.map((skill) => (
                <span key={skill} className="tech-tag">{skill}</span>
              ))}
            </div>
          </div>
          <div className="glass-card floating" style={{ animationDelay: '0.5s' }}>
            <h3>Cloud & DevOps</h3>
            <div className="mt-4">
              {profile.skills.cloudDevOps.map((skill) => (
                <span key={skill} className="tech-tag">{skill}</span>
              ))}
            </div>
            <hr className="sep" />
            <h3>Databases & Messaging</h3>
            <div className="mt-4">
              {profile.skills.databases.map((skill) => (
                <span key={skill} className="tech-tag">{skill}</span>
              ))}
            </div>
          </div>
          <div className="glass-card floating" style={{ animationDelay: '1s' }}>
            <h3>System Design</h3>
            <div className="mt-4">
              {profile.skills.systemDesign.map((skill) => (
                <span key={skill} className="tech-tag">{skill}</span>
              ))}
            </div>
          </div>
          <div className="glass-card floating" style={{ animationDelay: '1.5s' }}>
            <h3>Testing & Monitoring</h3>
            <div className="mt-4">
              {profile.skills.testing.map((skill) => (
                <span key={skill} className="tech-tag">{skill}</span>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Education */}
      <Section id="education" title="Education">
        <div className="grid md:grid-cols-2 gap-8">
          {profile.education.map((e, index) => (
            <div key={e.school} className={`glass-card floating`} style={{ animationDelay: `${index * 0.5}s` }}>
              <h3>{e.school}</h3>
              <p className="mt-3">{e.degree}</p>
              <p className="mt-2" style={{ color: 'var(--text-secondary)' }}>{e.period} · GPA {e.gpa}</p>
            </div>
          ))}
        </div>
      </Section>

      <footer className="py-16 text-center" style={{ color: 'var(--text-secondary)' }}>
        <div className="glass-card">
          <p>© {new Date().getFullYear()} {profile.name}</p>
          <p className="mt-2">Built with Next.js, TypeScript, and lots of ☕</p>
        </div>
      </footer>
    </main>
  );
}
