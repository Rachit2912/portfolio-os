"use client";

import React from 'react';
import { useOSStore } from '@/store/useOSStore';
import { CRTOverlay } from '@/components/effects/CRTOverlay';
import { BootScreen } from '@/components/os/BootScreen';
import { TopBar } from '@/components/os/TopBar';
import { LauncherRail } from '@/components/os/LauncherRail';
import { HudPanel } from '@/components/os/HudPanel';
import { TerminalWindow } from '@/terminal/TerminalWindow';
import { AboutView } from '@/components/workspaces/AboutView';
import { ProjectsView } from '@/components/workspaces/ProjectsView';
import { ExperienceView } from '@/components/workspaces/ExperienceView';
import { ResumeView } from '@/components/workspaces/ResumeView';
import { ContactView } from '@/components/workspaces/ContactView';
import { VimSimulator } from '@/components/effects/VimSimulator';
import { KernelPanic404 } from '@/components/effects/KernelPanic404';
import { MatrixRainOverlay } from '@/components/effects/MatrixRainOverlay';

export default function PortfolioOS() {
  const { booted, activeWorkspace, crtEnabled } = useOSStore();

  if (!booted) {
    return <BootScreen />;
  }

  return (
    <div className="flex flex-col h-screen w-screen overflow-hidden bg-[#020604] text-[#F1F7F3] font-mono select-none bg-micro-grid">
      <CRTOverlay enabled={crtEnabled} />
      <MatrixRainOverlay />

      <TopBar />

      <div className="flex flex-1 overflow-hidden relative">
        <LauncherRail />

        <main className="flex-1 overflow-hidden p-2 sm:p-4 bg-[#020604]/80">
          {activeWorkspace === 'desktop' && (
            <div className="w-full h-full flex flex-col items-center justify-center space-y-6 text-center p-6 os-panel border-[#42F59B]/20">
              <div className="space-y-2 max-w-2xl">
                <div className="text-[#42F59B] text-xs font-bold tracking-widest uppercase">
                  SYSTEM READY // DUAL NAVIGATION PORTFOLIO OS
                </div>
                <h1 className="text-3xl sm:text-5xl font-extrabold text-[#F1F7F3] tracking-tight">
                  RACHIT JOSHI
                </h1>
                <p className="text-[#44E8FF] text-sm sm:text-base font-semibold">
                  Backend / Systems / Cloud / AI Experiments
                </p>
                <p className="text-[#9DB2A8] text-xs leading-relaxed pt-2">
                  "Backend engineer building systems, tools and experiments - usually somewhere between Linux, distributed backends, C++, cloud and curiosity."
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-3xl pt-4">
                <div
                  onClick={() => useOSStore.setState({ activeWorkspace: 'projects', currentPath: '~/projects' })}
                  className="os-panel p-4 border-[#42F59B]/30 hover:border-[#42F59B] hover:scale-102 transition-all cursor-pointer group text-left space-y-1"
                >
                  <div className="text-[#42F59B] font-bold text-sm group-hover:text-[#8CFFC5]">
                    📁 ~/projects
                  </div>
                  <div className="text-[#9DB2A8] text-xs">
                    Explore Vault, shellB, Deribit OEMS & CV models.
                  </div>
                </div>

                <div
                  onClick={() => useOSStore.setState({ activeWorkspace: 'terminal' })}
                  className="os-panel p-4 border-[#44E8FF]/30 hover:border-[#44E8FF] hover:scale-102 transition-all cursor-pointer group text-left space-y-1"
                >
                  <div className="text-[#44E8FF] font-bold text-sm group-hover:text-[#8CFFC5]">
                    💻 Terminal CLI
                  </div>
                  <div className="text-[#9DB2A8] text-xs">
                    Execute real commands like ls, cd, neofetch, git log.
                  </div>
                </div>

                <div
                  onClick={() => useOSStore.setState({ activeWorkspace: 'experience', currentPath: '~/experience' })}
                  className="os-panel p-4 border-[#A66CFF]/30 hover:border-[#A66CFF] hover:scale-102 transition-all cursor-pointer group text-left space-y-1"
                >
                  <div className="text-[#A66CFF] font-bold text-sm group-hover:text-[#8CFFC5]">
                    ⚡ git log
                  </div>
                  <div className="text-[#9DB2A8] text-xs">
                    Hitwicket SDE impact metrics & SmartBridge AI work.
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeWorkspace === 'terminal' && <TerminalWindow />}
          {activeWorkspace === 'about' && <AboutView />}
          {activeWorkspace === 'projects' && <ProjectsView />}
          {activeWorkspace === 'experience' && <ExperienceView />}
          {activeWorkspace === 'resume' && <ResumeView />}
          {activeWorkspace === 'contact' && <ContactView />}
          {activeWorkspace === 'easter-egg-vim' && <VimSimulator />}
          {activeWorkspace === 'easter-egg-404' && <KernelPanic404 />}
        </main>

        <HudPanel />
      </div>
    </div>
  );
}
