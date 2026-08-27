"use client";

import React, { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon, X } from 'lucide-react';
import { useOSStore } from '@/store/useOSStore';
import { CommandRegistry } from './CommandRegistry';

const NEOFETCH_PRE_RUN = (
  <div className="os-panel p-4 border-[#39FF14] glow-green-sm space-y-3 font-mono text-xs max-w-xl my-1 bg-[#030D06]">
    <div className="flex items-center space-x-4 border-b border-[#39FF14]/30 pb-2">
      <div className="text-[#39FF14] font-extrabold text-sm tracking-wider text-glow-green">
        guest@rachit-portfolio-os
      </div>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[#E8FFE8]">
      <div><span className="text-[#39FF14] font-bold">OS:</span> Rachit Portfolio OS x86_64</div>
      <div><span className="text-[#39FF14] font-bold">Host:</span> VIT Vellore B.Tech IT</div>
      <div><span className="text-[#39FF14] font-bold">Kernel:</span> 6.8.0-rachit-portfolio-os</div>
      <div><span className="text-[#39FF14] font-bold">CGPA:</span> 8.87 / 10</div>
      <div><span className="text-[#39FF14] font-bold">Current Role:</span> SDE Intern @ Hitwicket</div>
      <div><span className="text-[#39FF14] font-bold">Certification:</span> AWS SAA Certified</div>
      <div><span className="text-[#39FF14] font-bold">Shell:</span> shellB C++ custom POSIX REPL</div>
      <div><span className="text-[#39FF14] font-bold">LeetCode:</span> Global Rank #408</div>
    </div>

    <div className="pt-2 border-t border-[#39FF14]/20 text-[11px]">
      <span className="text-[#70A080]">Core Stack: </span>
      <span className="text-[#00FF66] font-semibold">C/C++, Go, Python, Node.js, PostgreSQL, Redis, Docker, AWS</span>
    </div>
  </div>
);

export const TerminalWindow: React.FC = () => {
  const {
    currentPath,
    commandHistory,
    addCommandHistory,
    clearCommandHistory,
    setCurrentPath,
    setActiveWorkspace,
    setSelectedProjectSlug,
    neofetchHasRun,
    setNeofetchHasRun,
    neofetchCleared,
    setNeofetchCleared,
    themeColor
  } = useOSStore();

  const [inputVal, setInputVal] = useState('');
  const [historyIndex, setHistoryIndex] = useState<number>(-1);
  const [pastInputs, setPastInputs] = useState<string[]>([]);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!neofetchHasRun) {
      setNeofetchHasRun(true);
    }
  }, [neofetchHasRun, setNeofetchHasRun]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [commandHistory]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = inputVal.trim();
    if (!trimmed) return;

    if (trimmed.toLowerCase() === 'clear') {
      clearCommandHistory();
      setNeofetchCleared(true);
      setInputVal('');
      setHistoryIndex(-1);
      return;
    }

    const savedPromptPath = currentPath;
    const res = CommandRegistry.execute(trimmed, currentPath);

    if (trimmed.toLowerCase() === 'matrix') {
      useOSStore.getState().toggleMatrixMode(true);
    } else if (trimmed.toLowerCase() === 'snake') {
      setActiveWorkspace('game-snake');
    } else if (trimmed.toLowerCase() === 'tetris') {
      setActiveWorkspace('game-tetris');
    }

    if (res.action === 'logout') {
      useOSStore.getState().logout('CLI LOGOUT TRIGGERED (shutdown / init 0).');
      setInputVal('');
      return;
    }

    if (res.action === 'exit') {
      setActiveWorkspace('desktop');
      setInputVal('');
      return;
    }

    addCommandHistory({
      id: Math.random().toString(36).substring(7),
      command: trimmed,
      output: res.output,
      timestamp: new Date().toLocaleTimeString(),
      isError: res.isError,
      promptPath: savedPromptPath
    });

    if (res.newPath) setCurrentPath(res.newPath);
    if (res.selectedProjectSlug) setSelectedProjectSlug(res.selectedProjectSlug);

    setPastInputs((prev) => [...prev, trimmed]);
    setInputVal('');
    setHistoryIndex(-1);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (pastInputs.length > 0) {
        const nextIdx = historyIndex === -1 ? pastInputs.length - 1 : Math.max(0, historyIndex - 1);
        setHistoryIndex(nextIdx);
        setInputVal(pastInputs[nextIdx]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex !== -1) {
        const nextIdx = historyIndex + 1;
        if (nextIdx >= pastInputs.length) {
          setHistoryIndex(-1);
          setInputVal('');
        } else {
          setHistoryIndex(nextIdx);
          setInputVal(pastInputs[nextIdx]);
        }
      }
    }
  };

  return (
    <div
      className="w-full h-full flex flex-col bg-[#030D06] border rounded-lg shadow-2xl overflow-hidden font-mono text-xs"
      style={{ borderColor: 'var(--border-bright)' }}
    >
      {/* Window Header */}
      <div className="bg-[#0A1C10] border-b px-4 py-2 flex items-center justify-between select-none shrink-0" style={{ borderColor: 'var(--border-dim)' }}>
        <div className="flex items-center space-x-2 text-theme font-bold">
          <TerminalIcon className="w-4 h-4 text-theme" />
          <span className="tracking-wide">guest@rachit-portfolio-os:{currentPath}$</span>
        </div>
        <div className="flex items-center space-x-2">
          <span className="text-[10px] text-[#70A080] hidden sm:inline">Type 'help' for commands</span>
          <button
            onClick={() => setActiveWorkspace('desktop')}
            className="text-[#70A080] hover:text-[#FF2A55] transition-colors p-1 cursor-pointer"
            title="Close Terminal"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Terminal Body */}
      <div
        className="flex-1 p-4 overflow-y-auto space-y-3 font-mono"
        onClick={() => inputRef.current?.focus()}
      >
        {/* Pre-run Neofetch display only shown once on session load until cleared */}
        {!neofetchCleared && commandHistory.length === 0 && (
          <div className="space-y-1 text-theme">
            <div className="text-theme font-bold">guest@rachit-portfolio-os:~$ neofetch</div>
            {NEOFETCH_PRE_RUN}
            <div className="text-[#70A080] text-[11px] pt-1">
              Rachit Portfolio OS Terminal Ready. Type <span className="text-theme font-bold">'help'</span> for list of commands.
            </div>
          </div>
        )}

        {commandHistory.map((item) => (
          <div key={item.id} className="space-y-1">
            <div className="flex items-center space-x-2">
              <span className="text-theme font-bold">guest@rachit-portfolio-os:{item.promptPath || '~'}$</span>
              <span className="font-bold text-theme">{item.command}</span>
            </div>
            {item.output && (
              <div className={`pl-3 ${item.isError ? 'text-[#FF2A55]' : 'text-theme'}`}>
                {item.output}
              </div>
            )}
          </div>
        ))}

        {/* Command Input Prompt */}
        <form onSubmit={handleSubmit} className="flex items-center space-x-2 pt-2">
          <span className="text-theme font-bold shrink-0">guest@rachit-portfolio-os:{currentPath}$</span>
          <input
            ref={inputRef}
            type="text"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            onKeyDown={handleKeyDown}
            className="flex-1 bg-transparent border-none outline-none text-theme font-mono text-xs focus:ring-0"
            placeholder="Type command here..."
            autoFocus
          />
          <button type="submit" className="hidden">Submit</button>
        </form>

        <div ref={bottomRef} />
      </div>
    </div>
  );
};
