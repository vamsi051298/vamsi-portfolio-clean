"use client";

import { profile } from "@/data/profile";

export default function Page() {
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '2rem 1rem', fontFamily: 'system-ui, -apple-system, sans-serif' }}>
      {/* Header */}
      <header style={{ marginBottom: '3rem' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '0.5rem', color: '#1a1a1a' }}>
          {profile.name}
        </h1>
        <p style={{ fontSize: '1.1rem', color: '#666', marginBottom: '0.5rem' }}>
          {profile.title}
        </p>
        <p style={{ color: '#666', marginBottom: '1rem' }}>
          {profile.location}
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
          <a href={`mailto:${profile.email}`} style={{ color: '#0066cc', textDecoration: 'none' }}>
            {profile.email}
          </a>
          <a href={`tel:${profile.phone}`} style={{ color: '#0066cc', textDecoration: 'none' }}>
            {profile.phone}
          </a>
          <a href={profile.links.github} target="_blank" style={{ color: '#0066cc', textDecoration: 'none' }}>
            GitHub
          </a>
          <a href={profile.links.linkedin} target="_blank" style={{ color: '#0066cc', textDecoration: 'none' }}>
            LinkedIn
          </a>
          <a href={profile.links.leetcode} target="_blank" style={{ color: '#0066cc', textDecoration: 'none' }}>
            LeetCode
          </a>
        </div>
      </header>

      {/* Summary */}
      <section style={{ marginBottom: '3rem' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem', color: '#1a1a1a' }}>
          Summary
        </h2>
        <p style={{ color: '#333', lineHeight: '1.6' }}>
          {profile.summary}
        </p>
      </section>

      {/* Experience */}
      <section style={{ marginBottom: '3rem' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem', color: '#1a1a1a' }}>
          Experience
        </h2>
        {profile.experience.map((job) => (
          <div key={job.org} style={{ marginBottom: '2rem' }}>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 'bold', marginBottom: '0.5rem', color: '#1a1a1a' }}>
              {job.role} | {job.org}
            </h3>
            <p style={{ color: '#666', fontSize: '0.9rem', marginBottom: '0.5rem' }}>
              {job.period}
            </p>
            <ul style={{ color: '#333', lineHeight: '1.6', paddingLeft: '1.5rem' }}>
              {job.points.map((pt, i) => (
                <li key={i} style={{ marginBottom: '0.5rem' }}>{pt}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      {/* Projects */}
      <section style={{ marginBottom: '3rem' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem', color: '#1a1a1a' }}>
          Projects
        </h2>
        {profile.projects.map((p) => (
          <div key={p.name} style={{ marginBottom: '2rem' }}>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 'bold', marginBottom: '0.5rem', color: '#1a1a1a' }}>
              {p.name}
            </h3>
            <div style={{ marginBottom: '0.5rem' }}>
              {p.tech.map((t) => (
                <span key={t} style={{ 
                  display: 'inline-block', 
                  background: '#f5f5f5', 
                  padding: '0.2rem 0.5rem', 
                  margin: '0.2rem 0.2rem 0.2rem 0', 
                  borderRadius: '3px', 
                  fontSize: '0.8rem',
                  color: '#333'
                }}>
                  {t}
                </span>
              ))}
            </div>
            <ul style={{ color: '#333', lineHeight: '1.6', paddingLeft: '1.5rem' }}>
              {p.bullets.map((b, i) => (
                <li key={i} style={{ marginBottom: '0.5rem' }}>{b}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      {/* Skills */}
      <section style={{ marginBottom: '3rem' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem', color: '#1a1a1a' }}>
          Skills
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
          <div>
            <h3 style={{ fontSize: '1rem', fontWeight: 'bold', marginBottom: '0.5rem', color: '#1a1a1a' }}>
              Programming
            </h3>
            <p style={{ color: '#333', fontSize: '0.9rem' }}>
              {profile.skills.programming.join(', ')}
            </p>
          </div>
          <div>
            <h3 style={{ fontSize: '1rem', fontWeight: 'bold', marginBottom: '0.5rem', color: '#1a1a1a' }}>
              Frameworks
            </h3>
            <p style={{ color: '#333', fontSize: '0.9rem' }}>
              {profile.skills.frameworks.join(', ')}
            </p>
          </div>
          <div>
            <h3 style={{ fontSize: '1rem', fontWeight: 'bold', marginBottom: '0.5rem', color: '#1a1a1a' }}>
              Cloud & DevOps
            </h3>
            <p style={{ color: '#333', fontSize: '0.9rem' }}>
              {profile.skills.cloudDevOps.join(', ')}
            </p>
          </div>
          <div>
            <h3 style={{ fontSize: '1rem', fontWeight: 'bold', marginBottom: '0.5rem', color: '#1a1a1a' }}>
              Databases
            </h3>
            <p style={{ color: '#333', fontSize: '0.9rem' }}>
              {profile.skills.databases.join(', ')}
            </p>
          </div>
        </div>
      </section>

      {/* Education */}
      <section style={{ marginBottom: '3rem' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem', color: '#1a1a1a' }}>
          Education
        </h2>
        {profile.education.map((e) => (
          <div key={e.school} style={{ marginBottom: '1rem' }}>
            <h3 style={{ fontSize: '1rem', fontWeight: 'bold', marginBottom: '0.25rem', color: '#1a1a1a' }}>
              {e.school}
            </h3>
            <p style={{ color: '#333', fontSize: '0.9rem', marginBottom: '0.25rem' }}>
              {e.degree}
            </p>
            <p style={{ color: '#666', fontSize: '0.8rem' }}>
              {e.period} · GPA {e.gpa}
            </p>
          </div>
        ))}
      </section>

      {/* Footer */}
      <footer style={{ textAlign: 'center', color: '#666', fontSize: '0.9rem', marginTop: '3rem' }}>
        <p>© {new Date().getFullYear()} {profile.name}</p>
      </footer>
    </div>
  );
}
