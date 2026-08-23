"use client";

import React, { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon, X } from 'lucide-react';
import { useOSStore } from '@/store/useOSStore';
import { CommandRegistry } from './CommandRegistry';

export const TerminalWindow: React.FC = () => {
  const {
    currentPath,
    commandHistory,
    addCommandHistory,
    clearCommandHistory,
    setCurrentPath,
    setActiveWorkspace,
    setSelectedProjectSlug
  } = useOSStore();

  const [inputVal, setInputVal] = useState('');
  const [historyIndex, setHistoryIndex] = useState<number>(-1);
  const [pastInputs, setPastInputs] = useState<string[]>([]);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [commandHistory]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = inputVal.trim();
    if (!trimmed) return;

    if (trimmed.toLowerCase() === 'clear') {
      clearCommandHistory();
      setInputVal('');
      setHistoryIndex(-1);
      return;
    }

    const res = CommandRegistry.execute(trimmed, currentPath);

    addCommandHistory({
      id: Math.random().toString(36).substring(7),
      command: trimmed,
      output: res.output,
      timestamp: new Date().toLocaleTimeString(),
      isError: res.isError
    });

    if (res.newPath) setCurrentPath(res.newPath);
    if (res.newWorkspace) setActiveWorkspace(res.newWorkspace);
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
    <div className="w-full h-full flex flex-col bg-[#050A08] border border-[#42F59B]/30 rounded-lg shadow-2xl overflow-hidden font-mono text-xs">
      <div className="bg-[#07100D] border-b border-[#42F59B]/20 px-4 py-2 flex items-center justify-between select-none shrink-0">
        <div className="flex items-center space-x-2 text-[#42F59B]">
          <TerminalIcon className="w-4 h-4" />
          <span className="font-bold tracking-wide">rachit@portfolio:{currentPath}$</span>
        </div>
        <div className="flex items-center space-x-2">
          <span className="text-[10px] text-[#9DB2A8] hidden sm:inline">Type 'help' for commands</span>
          <button
            onClick={() => setActiveWorkspace('desktop')}
            className="text-[#9DB2A8] hover:text-[#FF5C77] transition-colors p-1"
            title="Close Terminal"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div
        className="flex-1 p-4 overflow-y-auto space-y-3"
        onClick={() => inputRef.current?.focus()}
      >
        <div className="text-[#9DB2A8] space-y-1">
          <div>RachitOS Portfolio Kernel v2.5 x86_64</div>
          <div>Type <span className="text-[#42F59B] font-bold">'help'</span> to inspect CLI commands or click items in launcher rail.</div>
        </div>

        {commandHistory.map((item) => (
          <div key={item.id} className="space-y-1">
            <div className="flex items-center space-x-2 text-[#42F59B]">
              <span className="text-[#44E8FF]">rachit@portfolio:{currentPath}$</span>
              <span className="font-bold text-[#F1F7F3]">{item.command}</span>
            </div>
            {item.output && (
              <div className={`pl-3 ${item.isError ? 'text-[#FF5C77]' : 'text-[#8CFFC5]'}`}>
                {item.output}
              </div>
            )}
          </div>
        ))}

        <form onSubmit={handleSubmit} className="flex items-center space-x-2 pt-2">
          <span className="text-[#44E8FF] font-bold shrink-0">rachit@portfolio:{currentPath}$</span>
          <input
            ref={inputRef}
            type="text"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            onKeyDown={handleKeyDown}
            className="flex-1 bg-transparent border-none outline-none text-[#F1F7F3] font-mono text-xs focus:ring-0"
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
