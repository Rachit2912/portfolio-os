import { create } from 'zustand';

export type WorkspaceTab =
  | 'desktop'
  | 'terminal'
  | 'about'
  | 'projects'
  | 'experience'
  | 'resume'
  | 'contact'
  | 'easter-egg-matrix'
  | 'easter-egg-vim'
  | 'easter-egg-404';

export interface CommandHistoryItem {
  id: string;
  command: string;
  output: string | React.ReactNode;
  timestamp: string;
  isError?: boolean;
}

interface OSState {
  booted: boolean;
  activeWorkspace: WorkspaceTab;
  currentPath: string;
  selectedProjectSlug: string | null;
  matrixMode: boolean;
  crtEnabled: boolean;
  terminalFocused: boolean;
  commandHistory: CommandHistoryItem[];

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
}

export const useOSStore = create<OSState>((set) => ({
  booted: false,
  activeWorkspace: 'desktop',
  currentPath: '~',
  selectedProjectSlug: 'secure-file-vault',
  matrixMode: false,
  crtEnabled: true,
  terminalFocused: false,
  commandHistory: [],

  setBooted: (booted) => set({ booted }),
  setActiveWorkspace: (activeWorkspace) => set({ activeWorkspace }),
  setCurrentPath: (currentPath) => set({ currentPath }),
  setSelectedProjectSlug: (selectedProjectSlug) => set({ selectedProjectSlug }),
  toggleMatrixMode: (enabled) => set((state) => ({ matrixMode: enabled ?? !state.matrixMode })),
  toggleCRT: (enabled) => set((state) => ({ crtEnabled: enabled ?? !state.crtEnabled })),
  setTerminalFocused: (terminalFocused) => set({ terminalFocused }),
  addCommandHistory: (item) => set((state) => ({ commandHistory: [...state.commandHistory, item] })),
  clearCommandHistory: () => set({ commandHistory: [] }),
}));
