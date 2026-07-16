"use client";

export default function PremiumEffects() {
  return (
    <div className="effects-layer">
        <div className="aurora aurora-1"></div>
<div className="aurora aurora-2"></div>
<div className="aurora aurora-3"></div>
<div className="aurora aurora-4"></div>

     {/* Sparkles */}
      {Array.from({ length: 80 }).map((_, i) => (
        <span
          key={`sparkle-${i}`}
          className="sparkle"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 8}s`,
            animationDuration: `${1.5 + Math.random() * 2}s`,
          }}
        />
      ))}

      {/* Gold Dust */}
      {Array.from({ length: 40 }).map((_, i) => (
        <span
          key={`dust-${i}`}
          className="gold-dust"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 10}s`,
            animationDuration: `${8 + Math.random() * 6}s`,
          }}
        />
      ))}

    </div>
  );
}