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
import { SnakeGame } from '@/components/games/SnakeGame';
import { TetrisGame } from '@/components/games/TetrisGame';
import { MatrixRainOverlay } from '@/components/effects/MatrixRainOverlay';
import { SubtleMatrixBackground } from '@/components/effects/SubtleMatrixBackground';

export default function PortfolioOS() {
  const { booted, activeWorkspace, themeColor } = useOSStore();

  if (!booted) {
    return <BootScreen />;
  }

  return (
    <div className="flex flex-col h-screen w-screen overflow-hidden bg-[#020904] text-[#E8FFE8] font-mono select-none bg-micro-grid relative">
      <SubtleMatrixBackground />
      <CRTOverlay enabled={true} />
      <MatrixRainOverlay />

      <TopBar />

      <div className="flex flex-1 overflow-hidden relative z-10">
        <LauncherRail />

        <main className="flex-1 overflow-hidden p-2 sm:p-4 bg-[#020904]/80 backdrop-blur-xs">
          {activeWorkspace === 'desktop' && (
            <div
              className="w-full h-full flex flex-col items-center justify-center space-y-6 text-center p-6 os-panel border"
              style={{ borderColor: 'var(--border-dim)' }}
            >
              <div className="space-y-2 max-w-2xl">
                <div className="text-theme text-xs font-bold tracking-widest uppercase text-glow-green">
                  SYSTEM READY // DUAL NAVIGATION PORTFOLIO OS
                </div>
                <h1 className="text-3xl sm:text-5xl font-extrabold text-[#E8FFE8] tracking-tight">
                  RACHIT JOSHI
                </h1>
                <p className="text-theme text-sm sm:text-base font-semibold">
                  Backend / Systems / High-Performance C++ / AI Systems
                </p>
                <p className="text-[#70A080] text-xs leading-relaxed pt-2">
                  "Backend engineer building systems, high-performance network tools, distributed services, and AI solutions - usually somewhere between Linux kernel calls, C++, cloud platforms, and clean code."
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-3xl pt-4">
                <div
                  onClick={() => useOSStore.setState({ activeWorkspace: 'projects', currentPath: '~/projects' })}
                  className="os-panel p-4 border hover:scale-102 transition-all cursor-pointer group text-left space-y-1"
                  style={{ borderColor: 'var(--border-dim)' }}
                >
                  <div className="text-theme font-bold text-sm">
                    📁 ~/projects
                  </div>
                  <div className="text-[#70A080] text-xs">
                    Supply Lens, Secure File Vault, shellB, Deribit OEMS & AI models.
                  </div>
                </div>

                <div
                  onClick={() => useOSStore.setState({ activeWorkspace: 'terminal' })}
                  className="os-panel p-4 border hover:scale-102 transition-all cursor-pointer group text-left space-y-1"
                  style={{ borderColor: 'var(--border-dim)' }}
                >
                  <div className="text-theme font-bold text-sm">
                    💻 Terminal CLI
                  </div>
                  <div className="text-[#70A080] text-xs">
                    Execute commands like ls, cd, neofetch, experience, exit.
                  </div>
                </div>

                <div
                  onClick={() => useOSStore.setState({ activeWorkspace: 'experience', currentPath: '~/experience' })}
                  className="os-panel p-4 border hover:scale-102 transition-all cursor-pointer group text-left space-y-1"
                  style={{ borderColor: 'var(--border-dim)' }}
                >
                  <div className="text-theme font-bold text-sm">
                    ⚡ git log
                  </div>
                  <div className="text-[#70A080] text-xs">
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
          {activeWorkspace === 'game-snake' && <SnakeGame />}
          {activeWorkspace === 'game-tetris' && <TetrisGame />}
        </main>

        <HudPanel />
      </div>
    </div>
  );
}
