"use client";

import React, { useEffect, useRef } from 'react';
import { useOSStore } from '@/store/useOSStore';

export const MatrixRainOverlay: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { matrixMode, toggleMatrixMode } = useOSStore();

  useEffect(() => {
    if (!matrixMode) return;
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const characters = '01ABCDEFGHIJKLMNOPQRSTUVWXYZRACHIT_OS_C++_GO_PYTHON_AWS';
    const fontSize = 14;
    const columns = Math.floor(canvas.width / fontSize);
    const drops: number[] = Array(columns).fill(1);

    const draw = () => {
      ctx.fillStyle = 'rgba(2, 6, 4, 0.08)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = '#42F59B';
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = characters.charAt(Math.floor(Math.random() * characters.length));
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };

    const interval = setInterval(draw, 40);

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', handleResize);
    };
  }, [matrixMode]);

  if (!matrixMode) return null;

  return (
    <div className="fixed inset-0 z-40 pointer-events-auto flex flex-col justify-between p-4 bg-[#020604]/80 backdrop-blur-xs">
      <canvas ref={canvasRef} className="absolute inset-0 z-0" />
      <div className="relative z-10 flex justify-between items-center text-xs font-mono text-[#42F59B] bg-[#0A1411]/90 p-3 rounded border border-[#42F59B]/40">
        <div>MATRIX VISUAL PULSE MODE ACTIVE</div>
        <button
          onClick={() => toggleMatrixMode(false)}
          className="px-3 py-1 bg-[#42F59B] text-[#020604] font-bold rounded hover:bg-[#8CFFC5] transition-all cursor-pointer"
        >
          EXIT MATRIX MODE
        </button>
      </div>
    </div>
  );
};
