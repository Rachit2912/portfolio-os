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
  { name: 'Electric Violet', hex: '#A66CFF' },
  { name: 'Neon Crimson', hex: '#FF2A55' },
  { name: 'Solar Yellow', hex: '#FFE600' },
  { name: 'Amber Gold', hex: '#FFB000' },
  { name: 'Hot Pink', hex: '#FF007F' },
];

export const SettingsModal: React.FC<SettingsModalProps> = ({ isOpen, onClose }) => {
  const { themeColor, setThemeColor, resetTheme } = useOSStore();

  if (!isOpen) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-6 bg-[#020904]/85 backdrop-blur-md select-none my-auto overflow-y-auto"
    >
      <div
        className="w-full max-w-md bg-[#030D06] border-2 rounded-lg shadow-2xl glow-green p-4 sm:p-5 space-y-4 font-mono text-xs overflow-hidden relative my-auto max-h-[90vh] flex flex-col justify-between"
        style={{ borderColor: themeColor }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex justify-between items-center border-b border-white/20 pb-3">
          <div className="flex items-center space-x-2" style={{ color: themeColor }}>
            <Settings className="w-5 h-5" style={{ color: themeColor }} />
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

        {/* Theme customization presets */}
        <div className="space-y-4">
          <div className="flex items-center space-x-2 text-[#E8FFE8] font-bold">
            <Palette className="w-4 h-4" style={{ color: themeColor }} />
            <span>SELECT NEON THEME PRESET</span>
          </div>

          <div className="space-y-2">
            <div className="text-[#70A080] font-semibold text-[11px]">7 PRESET NEON COLOR THEMES:</div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {PRESET_THEMES.map((preset) => {
                const isSelected = themeColor.toLowerCase() === preset.hex.toLowerCase();
                return (
                  <button
                    key={preset.hex}
                    onClick={() => setThemeColor(preset.hex)}
                    style={{
                      borderColor: isSelected ? preset.hex : 'rgba(255,255,255,0.15)',
                      backgroundColor: isSelected ? `${preset.hex}25` : '#0A1C10',
                      color: isSelected ? preset.hex : '#E8FFE8'
                    }}
                    className="flex items-center justify-between p-2.5 rounded border text-left transition-all cursor-pointer font-bold"
                  >
                    <div className="flex items-center space-x-2 truncate">
                      <span
                        className="w-3.5 h-3.5 rounded-full border border-white/20 shrink-0"
                        style={{ backgroundColor: preset.hex }}
                      />
                      <span className="text-[11px] truncate">{preset.name}</span>
                    </div>
                    {isSelected && <Check className="w-3.5 h-3.5 shrink-0 ml-1" style={{ color: preset.hex }} />}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="border-t border-white/15 pt-3 flex justify-between items-center">
          <button
            onClick={() => resetTheme()}
            style={{ color: '#39FF14', borderColor: '#39FF1440' }}
            className="px-3 py-1.5 bg-[#0A1C10] border rounded flex items-center space-x-1.5 hover:bg-[#39FF14]/15 transition-all cursor-pointer text-xs font-bold"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>RESET DEFAULT GREEN</span>
          </button>

          <button
            onClick={onClose}
            style={{ backgroundColor: themeColor, color: '#020904' }}
            className="px-4 py-1.5 font-extrabold rounded transition-all cursor-pointer glow-green-sm text-xs"
          >
            APPLY & CLOSE
          </button>
        </div>
      </div>
    </div>
  );
};
