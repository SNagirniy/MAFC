'use client';

import { useEffect, useState } from 'react';
import s from './font_size_swither.module.scss';

const MOBILE_BREAKPOINT = 768;

export default function Topbar() {
  const [fontSize, setFontSize] = useState(16);
  const [limits, setLimits] = useState({ min: 14, max: 20 });

  // визначаємо мобайл / десктоп
  const updateLimits = () => {
    const isMobile = window.innerWidth < MOBILE_BREAKPOINT;

    const min = isMobile ? 14 : 16;
    const max = isMobile ? 18 : 20;

    setLimits({ min, max });

    return { min, max };
  };

  // ініціалізація
  useEffect(() => {
    const { min, max } = updateLimits();

    const saved = localStorage.getItem('fontSize');
    const initial = saved ? Number(saved) : min;

    setFontSize(Math.min(Math.max(initial, min), max));
  }, []);

  // слухаємо resize
  useEffect(() => {
    const onResize = () => {
      const { min, max } = updateLimits();
      setFontSize(prev => Math.min(Math.max(prev, min), max));
    };

    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  // застосовуємо розмір
  useEffect(() => {
    document.documentElement.style.setProperty(
      '--base-font-size',
      `${fontSize}px`
    );
    localStorage.setItem('fontSize', fontSize.toString());
  }, [fontSize]);

  return (
    <div className={s.container}>
      <button
        aria-label="Зменшити шрифт"
        onClick={() => setFontSize(v => Math.max(v - 2, limits.min))}
        className={s.button}
      >
        A−
      </button>

      <button
        aria-label="Стандартний шрифт"
        onClick={() => setFontSize(limits.min)}
        className={s.button}
      >
        A
      </button>

      <button
        aria-label="Збільшити шрифт"
        onClick={() => setFontSize(v => Math.min(v + 2, limits.max))}
        className={s.button}
      >
        A+
      </button>
    </div>
  );
}