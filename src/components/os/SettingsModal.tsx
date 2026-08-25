"use client";

import React from 'react';
import { X, Settings, RotateCcw, Palette, Check } from 'lucide-react';
import { useOSStore } from '@/store/useOSStore';

interface SettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const PRESET_THEMES = [
  { name: 'Matrix Green (Default)', hex: '#39FF14' },
  { name: 'Cyber Cyan', hex: '#00E5FF' },
  { name: 'Hacker Amber', hex: '#FFB000' },
  { name: 'Neon Crimson', hex: '#FF2A55' },
  { name: 'Electric Violet', hex: '#A66CFF' },
  { name: 'Solar Yellow', hex: '#FFE600' },
];

export const SettingsModal: React.FC<SettingsModalProps> = ({ isOpen, onClose }) => {
  const { themeColor, setThemeColor, resetTheme } = useOSStore();

  if (!isOpen) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#020904]/85 backdrop-blur-md select-none my-auto"
    >
      <div
        className="w-full max-w-md bg-[#030D06] border-2 border-[#39FF14] rounded-lg shadow-2xl glow-green p-5 space-y-5 font-mono text-xs overflow-hidden relative my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex justify-between items-center border-b border-[#39FF14]/30 pb-3">
          <div className="flex items-center space-x-2 text-[#39FF14]">
            <Settings className="w-5 h-5 animate-spin" style={{ animationDuration: '8s' }} />
            <h2 className="text-base font-extrabold tracking-wide text-[#E8FFE8]">
              SYSTEM SETTINGS // THEME
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-1 text-[#70A080] hover:text-[#FF2A55] transition-colors rounded cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Theme customization */}
        <div className="space-y-4">
          <div className="flex items-center space-x-2 text-[#E8FFE8] font-bold">
            <Palette className="w-4 h-4 text-[#39FF14]" />
            <span>PRIMARY SYSTEM ACCENT COLOR</span>
          </div>

          {/* Color Picker Spectrum Input */}
          <div className="flex items-center space-x-3 bg-[#0A1C10] p-3 rounded border border-[#39FF14]/30">
            <input
              type="color"
              value={themeColor}
              onChange={(e) => setThemeColor(e.target.value)}
              className="w-10 h-10 rounded border border-[#39FF14]/50 cursor-pointer bg-transparent"
            />
            <div className="space-y-0.5">
              <div className="text-[#39FF14] font-bold">COLOR PICKER SPECTRUM</div>
              <div className="text-[#70A080] text-[11px]">Selected HEX: <span className="text-[#E8FFE8] font-bold">{themeColor.toUpperCase()}</span></div>
            </div>
          </div>

          {/* Presets */}
          <div className="space-y-2">
            <div className="text-[#70A080] font-semibold text-[11px]">CYBERPUNK COLOR PALETTE PRESETS:</div>
            <div className="grid grid-cols-2 gap-2">
              {PRESET_THEMES.map((preset) => {
                const isSelected = themeColor.toLowerCase() === preset.hex.toLowerCase();
                return (
                  <button
                    key={preset.hex}
                    onClick={() => setThemeColor(preset.hex)}
                    className={`flex items-center justify-between p-2.5 rounded border text-left transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-[#39FF14]/20 border-[#39FF14] text-[#39FF14] font-bold glow-green-sm'
                        : 'bg-[#0A1C10] border-[#39FF14]/20 text-[#E8FFE8] hover:border-[#39FF14]/50'
                    }`}
                  >
                    <div className="flex items-center space-x-2 truncate">
                      <span
                        className="w-3.5 h-3.5 rounded-full border border-white/20 shrink-0"
                        style={{ backgroundColor: preset.hex }}
                      />
                      <span className="text-[11px] truncate">{preset.name}</span>
                    </div>
                    {isSelected && <Check className="w-3.5 h-3.5 text-[#39FF14] shrink-0 ml-1" />}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="border-t border-[#39FF14]/20 pt-3 flex justify-between items-center">
          <button
            onClick={() => resetTheme()}
            className="px-3 py-1.5 bg-[#0A1C10] border border-[#39FF14]/40 text-[#39FF14] rounded flex items-center space-x-1.5 hover:bg-[#39FF14]/15 transition-all cursor-pointer text-xs font-bold"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>RESET TO GREEN</span>
          </button>

          <button
            onClick={onClose}
            className="px-4 py-1.5 bg-[#39FF14] text-[#020904] font-extrabold rounded hover:bg-[#00FF66] transition-all cursor-pointer glow-green-sm text-xs"
          >
            APPLY & CLOSE
          </button>
        </div>
      </div>
    </div>
  );
};
