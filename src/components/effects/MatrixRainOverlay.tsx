"use client";

import React, { useEffect, useRef } from 'react';
import { useOSStore } from '@/store/useOSStore';

export const MatrixRainOverlay: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { matrixMode, toggleMatrixMode } = useOSStore();

  useEffect(() => {
    if (!matrixMode) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' || e.key.toLowerCase() === 'q') {
        toggleMatrixMode(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const characters = '01ABCDEFGHIJKLMNOPQRSTUVWXYZ_RACHIT_PORTFOLIO_OS_C++_GO_PYTHON_AWS_GRAPHS_NETWORKING_';
    const fontSize = 14;
    const columns = Math.floor(canvas.width / fontSize);
    const drops: number[] = Array(columns).fill(1);

    const draw = () => {
      ctx.fillStyle = 'rgba(2, 9, 4, 0.09)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = '#39FF14';
      ctx.font = `bold ${fontSize}px monospace`;

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
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [matrixMode, toggleMatrixMode]);

  if (!matrixMode) return null;

  return (
    <div className="fixed inset-0 z-40 pointer-events-none flex flex-col justify-between p-4">
      <canvas ref={canvasRef} className="absolute inset-0 z-0 opacity-80" />
      <div className="relative z-50 pointer-events-auto flex justify-between items-center text-xs font-mono text-[#39FF14] bg-[#020904]/90 p-3 rounded border border-[#39FF14]/50 shadow-2xl glow-green-sm max-w-xl mx-auto w-full">
        <div className="flex items-center space-x-2">
          <span className="w-2.5 h-2.5 rounded-full bg-[#39FF14] animate-pulse"></span>
          <span className="font-bold tracking-wider">MATRIX VISUAL PULSE MODE ACTIVE</span>
        </div>
        <button
          onClick={() => toggleMatrixMode(false)}
          className="px-3 py-1.5 bg-[#39FF14] text-[#020904] font-extrabold rounded hover:bg-[#00FF66] transition-all cursor-pointer glow-green-sm text-xs"
        >
          EXIT MATRIX MODE
        </button>
      </div>
    </div>
  );
};
