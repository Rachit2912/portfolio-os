"use client";

import React from 'react';
import { X, Gamepad2, Sparkles, Trophy, Play } from 'lucide-react';
import { useOSStore } from '@/store/useOSStore';

interface GamesFunModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const GamesFunModal: React.FC<GamesFunModalProps> = ({ isOpen, onClose }) => {
  const { setActiveWorkspace, toggleMatrixMode, themeColor } = useOSStore();

  if (!isOpen) return null;

  const handleLaunchSnake = () => {
    setActiveWorkspace('game-snake');
    onClose();
  };

  const handleLaunchTetris = () => {
    setActiveWorkspace('game-tetris');
    onClose();
  };

  const handleLaunchMatrix = () => {
    toggleMatrixMode(true);
    onClose();
  };

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#020904]/85 backdrop-blur-md select-none my-auto"
    >
      <div
        className="w-full max-w-lg bg-[#030D06] border-2 rounded-lg shadow-2xl glow-green p-5 space-y-5 font-mono text-xs overflow-hidden relative my-auto"
        style={{ borderColor: themeColor }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex justify-between items-center border-b pb-3" style={{ borderColor: 'var(--border-dim)' }}>
          <div className="flex items-center space-x-2 text-theme font-bold">
            <Gamepad2 className="w-5 h-5 animate-pulse text-theme" />
            <h2 className="text-base font-extrabold tracking-wide text-[#E8FFE8]">
              GAMES & FUN ARCADE // SELECT MODE
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-1 text-[#70A080] hover:text-[#FF2A55] transition-colors rounded cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Options List */}
        <div className="space-y-3">
          <button
            onClick={handleLaunchSnake}
            className="w-full p-3.5 bg-[#0A1C10] border hover:bg-white/5 rounded flex items-center justify-between transition-all group cursor-pointer text-left"
            style={{ borderColor: 'var(--border-dim)' }}
          >
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-[#030D06] border text-theme group-hover:glow-green-sm rounded" style={{ borderColor: 'var(--border-bright)' }}>
                <Gamepad2 className="w-5 h-5" />
              </div>
              <div className="space-y-0.5">
                <div className="font-bold text-[#E8FFE8] group-hover:text-theme text-sm">
                  Matrix Snake Arcade
                </div>
                <div className="text-[#70A080] text-[11px]">
                  Classic Snake retro game with canvas grid & score tracking (CLI: <code className="text-theme">snake</code>)
                </div>
              </div>
            </div>
            <Play className="w-4 h-4 text-theme group-hover:translate-x-1 transition-transform shrink-0" />
          </button>

          <button
            onClick={handleLaunchTetris}
            className="w-full p-3.5 bg-[#0A1C10] border hover:bg-white/5 rounded flex items-center justify-between transition-all group cursor-pointer text-left"
            style={{ borderColor: 'var(--border-dim)' }}
          >
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-[#030D06] border text-theme group-hover:glow-green-sm rounded" style={{ borderColor: 'var(--border-bright)' }}>
                <Trophy className="w-5 h-5" />
              </div>
              <div className="space-y-0.5">
                <div className="font-bold text-[#E8FFE8] group-hover:text-theme text-sm">
                  Matrix Tetris Arcade
                </div>
                <div className="text-[#70A080] text-[11px]">
                  Tetris block clearing arcade with lines & scoring (CLI: <code className="text-theme">tetris</code>)
                </div>
              </div>
            </div>
            <Play className="w-4 h-4 text-theme group-hover:translate-x-1 transition-transform shrink-0" />
          </button>

          <button
            onClick={handleLaunchMatrix}
            className="w-full p-3.5 bg-[#0A1C10] border hover:bg-white/5 rounded flex items-center justify-between transition-all group cursor-pointer text-left"
            style={{ borderColor: 'var(--border-dim)' }}
          >
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-[#030D06] border text-theme group-hover:glow-green-sm rounded" style={{ borderColor: 'var(--border-bright)' }}>
                <Sparkles className="w-5 h-5" />
              </div>
              <div className="space-y-0.5">
                <div className="font-bold text-[#E8FFE8] group-hover:text-theme text-sm">
                  Matrix Rain Mode
                </div>
                <div className="text-[#70A080] text-[11px]">
                  Full-screen visual pulse digital rain overlay (CLI: <code className="text-theme">matrix</code>)
                </div>
              </div>
            </div>
            <Play className="w-4 h-4 text-theme group-hover:translate-x-1 transition-transform shrink-0" />
          </button>
        </div>

        {/* Footer info */}
        <div className="border-t pt-3 flex justify-between items-center text-[11px] text-[#70A080]" style={{ borderColor: 'var(--border-dim)' }}>
          <span>Press ESC or Q inside any game to exit back to Desktop</span>
          <button
            onClick={onClose}
            style={{ backgroundColor: themeColor, color: '#020904' }}
            className="px-3 py-1 font-extrabold rounded hover:opacity-90 transition-all cursor-pointer text-xs"
          >
            CLOSE
          </button>
        </div>
      </div>
    </div>
  );
};
