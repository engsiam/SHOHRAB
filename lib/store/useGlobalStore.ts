import { create } from 'zustand';

export type Project = {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  image: string;
  liveUrl?: string;
  githubUrl?: string;
};

interface GlobalStore {
  menuOpen: boolean;
  toggleMenu: () => void;
  closeMenu: () => void;
  scrollY: number;
  setScrollY: (y: number) => void;
  activeSection: string;
  setActiveSection: (section: string) => void;
  selectedProject: Project | null;
  setSelectedProject: (project: Project | null) => void;
  isProjectModalOpen: boolean;
  toggleProjectModal: () => void;
}

export const useGlobalStore = create<GlobalStore>((set) => ({
  menuOpen: false,
  toggleMenu: () => set((s) => ({ menuOpen: !s.menuOpen })),
  closeMenu: () => set({ menuOpen: false }),
  scrollY: 0,
  setScrollY: (y) => set({ scrollY: y }),
  activeSection: 'hero',
  setActiveSection: (section) => set({ activeSection: section }),
  selectedProject: null,
  setSelectedProject: (project) => set({ selectedProject: project }),
  isProjectModalOpen: false,
  toggleProjectModal: () => set((s) => ({ isProjectModalOpen: !s.isProjectModalOpen })),
}));
