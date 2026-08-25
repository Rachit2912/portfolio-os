"use client";

import React from 'react';
import { X, Gamepad2, Sparkles, Trophy, Play } from 'lucide-react';
import { useOSStore } from '@/store/useOSStore';

interface GamesFunModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const GamesFunModal: React.FC<GamesFunModalProps> = ({ isOpen, onClose }) => {
  const { setActiveWorkspace, toggleMatrixMode } = useOSStore();

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
        className="w-full max-w-lg bg-[#030D06] border-2 border-[#39FF14] rounded-lg shadow-2xl glow-green p-5 space-y-5 font-mono text-xs overflow-hidden relative my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex justify-between items-center border-b border-[#39FF14]/30 pb-3">
          <div className="flex items-center space-x-2 text-[#39FF14]">
            <Gamepad2 className="w-5 h-5 animate-pulse" />
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
            className="w-full p-3.5 bg-[#0A1C10] border border-[#39FF14]/30 hover:border-[#39FF14] hover:bg-[#39FF14]/15 rounded flex items-center justify-between transition-all group cursor-pointer text-left"
          >
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-[#030D06] border border-[#39FF14]/40 rounded text-[#39FF14] group-hover:glow-green-sm">
                <Gamepad2 className="w-5 h-5" />
              </div>
              <div className="space-y-0.5">
                <div className="font-bold text-[#E8FFE8] group-hover:text-[#39FF14] text-sm">
                  Matrix Snake Arcade
                </div>
                <div className="text-[#70A080] text-[11px]">
                  Classic Snake retro game with canvas grid & score tracking (CLI: <code className="text-[#00FF66]">snake</code>)
                </div>
              </div>
            </div>
            <Play className="w-4 h-4 text-[#39FF14] group-hover:translate-x-1 transition-transform shrink-0" />
          </button>

          <button
            onClick={handleLaunchTetris}
            className="w-full p-3.5 bg-[#0A1C10] border border-[#39FF14]/30 hover:border-[#39FF14] hover:bg-[#39FF14]/15 rounded flex items-center justify-between transition-all group cursor-pointer text-left"
          >
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-[#030D06] border border-[#39FF14]/40 rounded text-[#39FF14] group-hover:glow-green-sm">
                <Trophy className="w-5 h-5" />
              </div>
              <div className="space-y-0.5">
                <div className="font-bold text-[#E8FFE8] group-hover:text-[#39FF14] text-sm">
                  Matrix Tetris Arcade
                </div>
                <div className="text-[#70A080] text-[11px]">
                  Tetris block clearing arcade with lines & scoring (CLI: <code className="text-[#00FF66]">tetris</code>)
                </div>
              </div>
            </div>
            <Play className="w-4 h-4 text-[#39FF14] group-hover:translate-x-1 transition-transform shrink-0" />
          </button>

          <button
            onClick={handleLaunchMatrix}
            className="w-full p-3.5 bg-[#0A1C10] border border-[#39FF14]/30 hover:border-[#39FF14] hover:bg-[#39FF14]/15 rounded flex items-center justify-between transition-all group cursor-pointer text-left"
          >
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-[#030D06] border border-[#39FF14]/40 rounded text-[#39FF14] group-hover:glow-green-sm">
                <Sparkles className="w-5 h-5" />
              </div>
              <div className="space-y-0.5">
                <div className="font-bold text-[#E8FFE8] group-hover:text-[#39FF14] text-sm">
                  Matrix Rain Mode
                </div>
                <div className="text-[#70A080] text-[11px]">
                  Full-screen visual pulse digital rain overlay (CLI: <code className="text-[#00FF66]">matrix</code>)
                </div>
              </div>
            </div>
            <Play className="w-4 h-4 text-[#39FF14] group-hover:translate-x-1 transition-transform shrink-0" />
          </button>
        </div>

        {/* Footer info */}
        <div className="border-t border-[#39FF14]/20 pt-3 flex justify-between items-center text-[11px] text-[#70A080]">
          <span>Press ESC or Q inside any game to exit back to Desktop</span>
          <button
            onClick={onClose}
            className="px-3 py-1 bg-[#39FF14] text-[#020904] font-extrabold rounded hover:bg-[#00FF66] transition-all cursor-pointer text-xs"
          >
            CLOSE
          </button>
        </div>
      </div>
    </div>
  );
};
