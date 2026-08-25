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
  neofetchHasRun: boolean;

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
  resetTheme: () => void;
  setNeofetchHasRun: (hasRun: boolean) => void;
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
  neofetchHasRun: false,

  setBooted: (booted) => set({ booted }),
  setActiveWorkspace: (activeWorkspace) => set({ activeWorkspace }),
  setCurrentPath: (currentPath) => set({ currentPath }),
  setSelectedProjectSlug: (selectedProjectSlug) => set({ selectedProjectSlug }),
  toggleMatrixMode: (enabled) => set((state) => ({ matrixMode: enabled ?? !state.matrixMode })),
  toggleCRT: (enabled) => set((state) => ({ crtEnabled: enabled ?? !state.crtEnabled })),
  setTerminalFocused: (terminalFocused) => set({ terminalFocused }),
  addCommandHistory: (item) => set((state) => ({ commandHistory: [...state.commandHistory, item] })),
  clearCommandHistory: () => set({ commandHistory: [] }),
  setThemeColor: (themeColor) => set({ themeColor }),
  resetTheme: () => set({ themeColor: '#39FF14' }),
  setNeofetchHasRun: (neofetchHasRun) => set({ neofetchHasRun }),
  logout: (msg = "LOGGED OUT SUCCESSFULLY. SESSION TERMINATED.") => set({
    booted: false,
    activeWorkspace: 'desktop',
    logoutMessage: msg,
    neofetchHasRun: false,
  }),
}));
