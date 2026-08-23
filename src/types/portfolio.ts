export interface Profile {
  name: string;
  title: string;
  tagline: string;
  identityLine: string;
  education: {
    institution: string;
    degree: string;
    period: string;
    gpa: string;
    location: string;
  };
  highlights: {
    role: string;
    currentStory: string;
    coreLanguages: string[];
    coreSystems: string[];
    engineeringInterests: string[];
    competitiveProgramming: string;
  };
  achievements: Array<{
    title: string;
    subtitle?: string;
    date?: string;
    badge?: string;
  }>;
}

export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  commitHash: string;
  summary: string;
  highlights: string[];
  metrics: Array<{
    label: string;
    value: string;
  }>;
  technologies: string[];
}

export interface Project {
  slug: string;
  name: string;
  path: string;
  tagline: string;
  tier: 'featured' | 'secondary' | 'lab';
  status: string;
  year: string;
  languages: string[];
  technologies: string[];
  problem: string;
  solution: string;
  architecture: string;
  keyFeatures: string[];
  engineeringDecisions: string[];
  challenges: string[];
  outcomes: string[];
  repoUrl: string;
  liveUrl?: string;
  demoUrl?: string;
  commands: {
    open: string;
    cat: string;
    cd: string;
  };
  readmeContent: string;
}

export interface SocialLink {
  name: string;
  label: string;
  url: string;
  icon: string;
}

export interface CLICommand {
  name: string;
  description: string;
  category: 'Navigation' | 'Filesystem' | 'Profile' | 'Projects' | 'System' | 'Easter Eggs';
  usage: string;
}

export interface VirtualFileNode {
  name: string;
  type: 'file' | 'directory';
  path: string;
  content?: string;
  children?: VirtualFileNode[];
  executable?: boolean;
}
