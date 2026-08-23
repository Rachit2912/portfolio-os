"use client";

import React, { useState } from 'react';
import { Terminal, Save, X } from 'lucide-react';
import { useOSStore } from '@/store/useOSStore';

export const VimSimulator: React.FC = () => {
  const { setActiveWorkspace } = useOSStore();
  const [content, setContent] = useState<string>(
    "// Welcome to Vim mini-editor on RachitOS\n// Insert mode active. Edit your note below:\n\nconst engineer = 'Rachit Joshi';\nconst stack = ['C++', 'Go', 'Python', 'Node.js', 'AWS'];\nconsole.log(`Building scalable backends with ${engineer}`);"
  );
  const [statusMsg, setStatusMsg] = useState<string>('"scratchpad.js" [Modified]');

  const handleSave = () => {
    setStatusMsg('"scratchpad.js" 6L, 218B written');
  };

  return (
    <div className="w-full h-full bg-[#050A08] border border-[#42F59B]/40 rounded-lg flex flex-col font-mono text-xs overflow-hidden">
      <div className="bg-[#07100D] border-b border-[#42F59B]/20 px-4 py-2 flex items-center justify-between text-[#42F59B]">
        <div className="flex items-center space-x-2">
          <Terminal className="w-4 h-4" />
          <span className="font-bold">VIM v9.0 // scratchpad.js</span>
        </div>
        <div className="flex items-center space-x-3 text-[10px]">
          <button
            onClick={handleSave}
            className="flex items-center space-x-1 text-[#42F59B] hover:underline cursor-pointer"
          >
            <Save className="w-3 h-3" />
            <span>:w</span>
          </button>
          <button
            onClick={() => setActiveWorkspace('desktop')}
            className="flex items-center space-x-1 text-[#FF5C77] hover:underline cursor-pointer"
          >
            <X className="w-3 h-3" />
            <span>:q!</span>
          </button>
        </div>
      </div>

      <textarea
        value={content}
        onChange={(e) => {
          setContent(e.target.value);
          setStatusMsg('"scratchpad.js" [Modified]');
        }}
        className="flex-1 bg-[#020604] p-4 text-[#8CFFC5] font-mono text-xs border-none outline-none resize-none focus:ring-0 leading-relaxed"
        autoFocus
      />

      <div className="bg-[#42F59B]/10 border-t border-[#42F59B]/20 px-4 py-1.5 flex justify-between items-center text-[11px] text-[#42F59B]">
        <div className="font-bold">-- INSERT --</div>
        <div>{statusMsg}</div>
        <div className="text-[#9DB2A8]">Type :q! or click close to exit</div>
      </div>
    </div>
  );
};
