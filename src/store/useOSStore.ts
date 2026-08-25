import { create } from 'zustand';

export type WorkspaceTab =
  | 'desktop'
  | 'terminal'
  | 'about'
  | 'projects'
  | 'experience'
  | 'resume'
  | 'contact'
  | 'game-snake'
  | 'game-tetris'
  | 'easter-egg-matrix';

export interface CommandHistoryItem {
  id: string;
  command: string;
  output: string | React.ReactNode;
  timestamp: string;
  isError?: boolean;
  promptPath?: string;
}

interface OSState {
  booted: boolean;
  activeWorkspace: WorkspaceTab;
  currentPath: string;
  selectedProjectSlug: string | null;
  matrixMode: boolean;
  crtEnabled: boolean;
  terminalFocused: boolean;
  logoutMessage: string | null;
  commandHistory: CommandHistoryItem[];
  themeColor: string;
  isDarkMode: boolean;
  neofetchHasRun: boolean;
  neofetchCleared: boolean;

  // Actions
  setBooted: (booted: boolean) => void;
  setActiveWorkspace: (workspace: WorkspaceTab) => void;
  setCurrentPath: (path: string) => void;
  setSelectedProjectSlug: (slug: string | null) => void;
  toggleMatrixMode: (enabled?: boolean) => void;
  toggleCRT: (enabled?: boolean) => void;
  setTerminalFocused: (focused: boolean) => void;
  addCommandHistory: (item: CommandHistoryItem) => void;
  clearCommandHistory: () => void;
  setThemeColor: (color: string) => void;
  toggleDarkMode: () => void;
  resetTheme: () => void;
  setNeofetchHasRun: (hasRun: boolean) => void;
  setNeofetchCleared: (cleared: boolean) => void;
  logout: (msg?: string) => void;
}

export const useOSStore = create<OSState>((set) => ({
  booted: false,
  activeWorkspace: 'desktop',
  currentPath: '~',
  selectedProjectSlug: 'supply-lens',
  matrixMode: false,
  crtEnabled: true,
  terminalFocused: false,
  logoutMessage: null,
  commandHistory: [],
  themeColor: '#39FF14',
  isDarkMode: true,
  neofetchHasRun: false,
  neofetchCleared: false,

  setBooted: (booted) => set({ booted }),
  setActiveWorkspace: (activeWorkspace) => set({ activeWorkspace }),
  setCurrentPath: (currentPath) => set({ currentPath }),
  setSelectedProjectSlug: (selectedProjectSlug) => set({ selectedProjectSlug }),
  toggleMatrixMode: (enabled) => set((state) => ({ matrixMode: enabled ?? !state.matrixMode })),
  toggleCRT: (enabled) => set((state) => ({ crtEnabled: enabled ?? !state.crtEnabled })),
  setTerminalFocused: (terminalFocused) => set({ terminalFocused }),
  addCommandHistory: (item) => set((state) => ({ commandHistory: [...state.commandHistory, item] })),
  clearCommandHistory: () => set({ commandHistory: [] }),
  setThemeColor: (themeColor) => {
    if (typeof document !== 'undefined') {
      const root = document.documentElement;
      root.style.setProperty('--sys-green', themeColor);
      root.style.setProperty('--primary-green', themeColor);
      root.style.setProperty('--theme-accent', themeColor);
      root.style.setProperty('--border-dim', `${themeColor}40`);
      root.style.setProperty('--border-bright', `${themeColor}B3`);
    }
    set({ themeColor });
  },
  toggleDarkMode: () => {
    set((state) => {
      const nextDarkMode = !state.isDarkMode;
      if (typeof document !== 'undefined') {
        const root = document.documentElement;
        if (nextDarkMode) {
          root.style.setProperty('--bg-0', '#020904');
          root.style.setProperty('--bg-1', '#05140A');
          root.style.setProperty('--panel', '#0A1C10');
          root.style.setProperty('--terminal', '#030D06');
          root.style.setProperty('--text-primary', '#E8FFE8');
          root.style.setProperty('--text-secondary', '#70A080');
        } else {
          root.style.setProperty('--bg-0', '#F2F6F3');
          root.style.setProperty('--bg-1', '#E1E9E3');
          root.style.setProperty('--panel', '#FFFFFF');
          root.style.setProperty('--terminal', '#FAFCFA');
          root.style.setProperty('--text-primary', '#08170C');
          root.style.setProperty('--text-secondary', '#3D6146');
        }
      }
      return { isDarkMode: nextDarkMode };
    });
  },
  resetTheme: () => {
    if (typeof document !== 'undefined') {
      const root = document.documentElement;
      root.style.setProperty('--sys-green', '#39FF14');
      root.style.setProperty('--primary-green', '#00FF66');
      root.style.setProperty('--theme-accent', '#39FF14');
      root.style.setProperty('--border-dim', 'rgba(57, 255, 20, 0.25)');
      root.style.setProperty('--border-bright', 'rgba(57, 255, 20, 0.7)');
      root.style.setProperty('--bg-0', '#020904');
      root.style.setProperty('--bg-1', '#05140A');
      root.style.setProperty('--panel', '#0A1C10');
      root.style.setProperty('--terminal', '#030D06');
      root.style.setProperty('--text-primary', '#E8FFE8');
      root.style.setProperty('--text-secondary', '#70A080');
    }
    set({ themeColor: '#39FF14', isDarkMode: true });
  },
  setNeofetchHasRun: (neofetchHasRun) => set({ neofetchHasRun }),
  setNeofetchCleared: (neofetchCleared) => set({ neofetchCleared }),
  logout: (msg = "LOGGED OUT SUCCESSFULLY. SESSION TERMINATED.") => set({
    booted: false,
    activeWorkspace: 'desktop',
    logoutMessage: msg,
    neofetchHasRun: false,
    neofetchCleared: false,
    commandHistory: [],
  }),
}));
