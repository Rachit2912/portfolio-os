"use client";

import React, { useState, useEffect } from 'react';

interface CRTOverlayProps {
  enabled?: boolean;
}

export const CRTOverlay: React.FC<CRTOverlayProps> = ({ enabled = true }) => {
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  if (!enabled || reducedMotion) return null;

  return (
    <div
      className="crt-overlay"
      aria-hidden="true"
      data-testid="crt-overlay"
    />
  );
};
