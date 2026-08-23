"use client";

import React from 'react';
import { AlertTriangle, RotateCcw } from 'lucide-react';
import { useOSStore } from '@/store/useOSStore';

export const KernelPanic404: React.FC = () => {
  const { setActiveWorkspace } = useOSStore();

  return (
    <div className="w-full h-full bg-[#050A08] border-2 border-[#FF5C77] rounded-lg p-6 flex flex-col justify-between font-mono text-xs text-[#FF5C77] space-y-4">
      <div className="flex items-center space-x-3 border-b border-[#FF5C77]/30 pb-3">
        <AlertTriangle className="w-6 h-6 animate-pulse" />
        <h1 className="text-lg sm:text-xl font-extrabold tracking-wider">
          KERNEL PANIC // SYSTEM FAULT 0x404
        </h1>
      </div>

      <div className="bg-[#020604] p-4 rounded border border-[#FF5C77]/30 space-y-2 font-mono text-[11px] text-[#F1F7F3] overflow-x-auto">
        <div>[0.000000] Linux version 6.8.0-rachit-sys (gcc 13.2.0) #404 PREEMPT_DYNAMIC</div>
        <div>[0.002100] Kernel panic - not syncing: VFS: Unable to mount root fs on unknown-block(0,0)</div>
        <div>[0.003420] CPU: 0 PID: 1 Comm: init Not tainted 6.8.0-rachit-sys #404</div>
        <div>[0.004110] Call Trace:</div>
        <div>[0.004900]  [&lt;ffffffff81a03e12&gt;] dump_stack_lvl+0x46/0x60</div>
        <div>[0.005500]  [&lt;ffffffff819fe100&gt;] panic+0x118/0x2c0</div>
        <div>[0.006200]  [&lt;ffffffff820014a0&gt;] mount_block_root+0x1f0/0x2a0</div>
        <div className="text-[#FF5C77] font-bold pt-2">
          REASON: Easter egg 404 simulation triggered. No actual damage occurred to RachitOS.
        </div>
      </div>

      <div className="flex justify-end pt-2">
        <button
          onClick={() => setActiveWorkspace('desktop')}
          className="px-5 py-2.5 bg-[#FF5C77] text-[#020604] font-bold rounded flex items-center space-x-2 hover:bg-[#FF5C77]/80 transition-all cursor-pointer"
        >
          <RotateCcw className="w-4 h-4" />
          <span>REBOOT TO DESKTOP</span>
        </button>
      </div>
    </div>
  );
};
