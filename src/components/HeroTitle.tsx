'use client';

import { useState } from 'react';

type TitleStyle = 'hero-title' | 'hero-title-alt' | 'hero-title-futuristic' | 'hero-title-glitch';

interface HeroTitleProps {
  text: string;
  className?: string;
}

export default function HeroTitle({ text, className = '' }: HeroTitleProps) {
  const [titleStyle, setTitleStyle] = useState<TitleStyle>('hero-title-futuristic');

  const titleStyles = {
    'hero-title': 'Orbitron + Noto Sans JP',
    'hero-title-alt': 'Noto Sans JP (Anime)',
    'hero-title-futuristic': 'Orbitron Futuristic',
    'hero-title-glitch': 'Glitch Effect'
  };

  return (
    <div className="relative">
      {/* Style Selector - Hidden in production, useful for testing */}
      {process.env.NODE_ENV === 'development' && (
        <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 z-50">
          <select
            value={titleStyle}
            onChange={(e) => setTitleStyle(e.target.value as TitleStyle)}
            className="text-black text-sm p-2 rounded bg-white border"
          >
            {Object.entries(titleStyles).map(([key, label]) => (
              <option key={key} value={key}>
                {label}
              </option>
            ))}
          </select>
        </div>
      )}
      
      <h1 className={`${titleStyle} ${className}`}>
        {text}
      </h1>
    </div>
  );
}
