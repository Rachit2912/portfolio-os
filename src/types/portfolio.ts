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

export type DomainCategory =
  | 'backend'
  | 'systems'
  | 'cpp'
  | 'go'
  | 'ai'
  | 'computer-vision'
  | 'cloud'
  | 'developer-tools'
  | 'experiments';

export type PortfolioTier = 'tier1_featured' | 'tier2_secondary' | 'tier3_experiments';

export interface Project {
  id: string;
  name: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  category: DomainCategory;
  categoryLabel: string;
  status: string;
  year: string;
  languages: string[];
  frameworks: string[];
  databases: string[];
  infrastructure: string[];
  technologies: string[];
  problem: string;
  solution: string;
  architecture: string;
  keyFeatures: string[];
  engineeringHighlights: string[];
  challenges: string[];
  outcomes: string[];
  githubUrl: string;
  demoUrl?: string;
  featured: boolean;
  priority: number;
  portfolioTier: PortfolioTier;
  cliCategoryFolder: 'backend' | 'systems' | 'ai' | 'experiments';
  cliPath: string;
  cliCommands: {
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
