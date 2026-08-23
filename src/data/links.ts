import { SocialLink, CLICommand } from '../types/portfolio';

export const socialLinks: SocialLink[] = [
  {
    name: "GitHub",
    label: "github.com/Rachit2912",
    url: "https://github.com/Rachit2912",
    icon: "github"
  },
  {
    name: "LinkedIn",
    label: "linkedin.com/in/rachit-joshi-",
    url: "https://linkedin.com/in/rachit-joshi-",
    icon: "linkedin"
  },
  {
    name: "X / Twitter",
    label: "x.com/RachitJoshi29",
    url: "https://x.com/RachitJoshi29",
    icon: "twitter"
  },
  {
    name: "LeetCode",
    label: "leetcode.com/u/Rachit_Joshi/",
    url: "https://leetcode.com/u/Rachit_Joshi/",
    icon: "code"
  },
  {
    name: "Email",
    label: "rachit29122003@gmail.com",
    url: "mailto:rachit29122003@gmail.com",
    icon: "mail"
  }
];

export const cliCommands: CLICommand[] = [
  {
    name: "help",
    description: "List available CLI commands grouped by category",
    category: "Navigation",
    usage: "help"
  },
  {
    name: "ls",
    description: "List contents of virtual directory",
    category: "Filesystem",
    usage: "ls [path]"
  },
  {
    name: "cd",
    description: "Change current virtual working directory",
    category: "Navigation",
    usage: "cd [path]"
  },
  {
    name: "pwd",
    description: "Print working directory path",
    category: "Filesystem",
    usage: "pwd"
  },
  {
    name: "cat",
    description: "Render file content",
    category: "Filesystem",
    usage: "cat [file]"
  },
  {
    name: "tree",
    description: "Display virtual filesystem directory tree",
    category: "Filesystem",
    usage: "tree"
  },
  {
    name: "projects",
    description: "Open the projects workspace view",
    category: "Projects",
    usage: "projects"
  },
  {
    name: "about",
    description: "Open the about engineer workspace",
    category: "Profile",
    usage: "about"
  },
  {
    name: "experience",
    description: "Open experience timeline workspace",
    category: "Profile",
    usage: "experience"
  },
  {
    name: "git log",
    description: "View commit history experience log",
    category: "Profile",
    usage: "git log"
  },
  {
    name: "neofetch",
    description: "Display system profile card",
    category: "System",
    usage: "neofetch"
  },
  {
    name: "resume",
    description: "Open HTML resume view",
    category: "Profile",
    usage: "resume"
  },
  {
    name: "contact",
    description: "Open contact panel",
    category: "Profile",
    usage: "contact"
  },
  {
    name: "ping",
    description: "Simulate network ping check",
    category: "System",
    usage: "ping [target]"
  },
  {
    name: "whoami",
    description: "Print concise identity line",
    category: "Profile",
    usage: "whoami"
  },
  {
    name: "clear",
    description: "Clear terminal screen buffer",
    category: "System",
    usage: "clear"
  },
  {
    name: "sudo",
    description: "Execute root privileges check (Easter Egg)",
    category: "Easter Eggs",
    usage: "sudo"
  },
  {
    name: "vim",
    description: "Launch mini vim text editor (Easter Egg)",
    category: "Easter Eggs",
    usage: "vim"
  },
  {
    name: "matrix",
    description: "Trigger Matrix rain effect (Easter Egg)",
    category: "Easter Eggs",
    usage: "matrix"
  },
  {
    name: "404",
    description: "Trigger kernel panic fault screen (Easter Egg)",
    category: "Easter Eggs",
    usage: "404"
  },
  {
    name: "coffee",
    description: "Brew developer coffee (Easter Egg)",
    category: "Easter Eggs",
    usage: "coffee"
  },
  {
    name: "exit",
    description: "Return to visual desktop GUI workspace",
    category: "Navigation",
    usage: "exit"
  }
];
