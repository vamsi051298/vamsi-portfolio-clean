"use client";

export default function ThreeBackground() {
  return (
    <div className="fixed inset-0 -z-10">
      {/* Image texture base for authenticity */}
      <img
        src="/bg-aurora.jpg"
        alt="Aurora Starry Background"
        className="absolute inset-0 h-full w-full object-cover"
        aria-hidden
      />
      {/* Simple CSS-based starry background */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 via-purple-900/30 to-green-900/20">
        <div className="absolute inset-0 opacity-60">
          {Array.from({ length: 100 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>
      </div>
      <div className="readable-gradient" />
    </div>
  );
}
