import { VirtualFileNode } from '../types/portfolio';
import { projectsData } from './projects';
import { experienceData } from './experience';
import { profileData } from './profile';

const categories: Array<'backend' | 'systems' | 'ai' | 'experiments'> = ['backend', 'systems', 'ai', 'experiments'];

const projectCategoryNodes: VirtualFileNode[] = categories.map((cat) => {
  const catProjects = projectsData.filter((p) => p.cliCategoryFolder === cat);
  return {
    name: cat,
    type: 'directory',
    path: `~/projects/${cat}`,
    children: catProjects.map((p) => ({
      name: p.slug,
      type: 'directory',
      path: `~/projects/${cat}/${p.slug}`,
      children: [
        {
          name: 'README.md',
          type: 'file',
          path: `~/projects/${cat}/${p.slug}/README.md`,
          content: p.readmeContent
        },
        {
          name: 'architecture.info',
          type: 'file',
          path: `~/projects/${cat}/${p.slug}/architecture.info`,
          content: `Project: ${p.name}\nCategory: ${p.categoryLabel}\nGitHub: ${p.githubUrl}\nDemo: ${p.demoUrl || 'N/A'}\nStack: ${p.technologies.join(', ')}\n\nProblem:\n${p.problem}\n\nSolution:\n${p.solution}\n\nArchitecture:\n${p.architecture}\n`
        }
      ]
    }))
  };
});

export const virtualFileSystem: VirtualFileNode = {
  name: "~",
  type: "directory",
  path: "~",
  children: [
    {
      name: "about.md",
      type: "file",
      path: "~/about.md",
      content: `# ${profileData.name}

> ${profileData.identityLine}

## Education
- **${profileData.education.institution}** (${profileData.education.period})
  ${profileData.education.degree} — CGPA: **${profileData.education.gpa}**

## Core Technical Focus
- **Languages**: ${profileData.highlights.coreLanguages.join(", ")}
- **Systems & Cloud**: ${profileData.highlights.coreSystems.join(", ")}
- **Story**: ${profileData.highlights.currentStory}
- **Competitive Programming**: ${profileData.highlights.competitiveProgramming}

## Selected Achievements
${profileData.achievements.map(a => `- **${a.title}** (${a.badge})`).join("\n")}
`
    },
    {
      name: "projects",
      type: "directory",
      path: "~/projects",
      children: [
        ...projectCategoryNodes,
        {
          name: "summary.txt",
          type: "file",
          path: "~/projects/summary.txt",
          content: projectsData.map(p => `[${p.portfolioTier.toUpperCase()}] ${p.name} (${p.categoryLabel}) - ${p.githubUrl}`).join("\n")
        }
      ]
    },
    {
      name: "experience",
      type: "directory",
      path: "~/experience",
      children: [
        {
          name: "experience.log",
          type: "file",
          path: "~/experience/experience.log",
          content: experienceData.map(exp => `
[${exp.period}] ${exp.company} // ${exp.role}
Commit: ${exp.commitHash}
Location: ${exp.location}
Summary: ${exp.summary}
Metrics: ${exp.metrics.map(m => `${m.label}: ${m.value}`).join(" | ")}
Tech: ${exp.technologies.join(", ")}
--------------------------------------------------------------------------------
`).join("\n")
        }
      ]
    },
    {
      name: "resume",
      type: "directory",
      path: "~/resume",
      children: [
        {
          name: "resume.md",
          type: "file",
          path: "~/resume/resume.md",
          content: `# ${profileData.name} — Resume
Email: rachit29122003@gmail.com | GitHub: github.com/Rachit2912 | LinkedIn: linkedin.com/in/rachit-joshi-

## Summary
${profileData.identityLine}

## Experience
${experienceData.map(e => `### ${e.company} — ${e.role} (${e.period})
${e.summary}
Key Impact: ${e.metrics.map(m => `${m.label}: ${m.value}`).join(", ")}
`).join("\n")}

## Education
${profileData.education.institution} - ${profileData.education.degree} (${profileData.education.period}) — CGPA: ${profileData.education.gpa}

## Top Skills
Languages: ${profileData.highlights.coreLanguages.join(", ")}
Frameworks & Databases: ${profileData.highlights.coreSystems.join(", ")}
`
        }
      ]
    },
    {
      name: "contact",
      type: "directory",
      path: "~/contact",
      children: [
        {
          name: "connect.sh",
          type: "file",
          executable: true,
          path: "~/contact/connect.sh",
          content: `#!/usr/bin/env bash
# Rachit Joshi Direct Contact Shell
echo "Email: rachit29122003@gmail.com"
echo "GitHub: https://github.com/Rachit2912"
echo "LinkedIn: https://linkedin.com/in/rachit-joshi-"
echo "Status: Open to Backend & Systems Engineering Roles"
`
        }
      ]
    },
    {
      name: "easter-eggs",
      type: "directory",
      path: "~/easter-eggs",
      children: [
        {
          name: "matrix.sh",
          type: "file",
          executable: true,
          path: "~/easter-eggs/matrix.sh",
          content: "Run 'matrix' CLI command to initiate terminal pulse sequence."
        },
        {
          name: "coffee.sh",
          type: "file",
          executable: true,
          path: "~/easter-eggs/coffee.sh",
          content: "Run 'coffee' CLI command to brew developer fuel."
        }
      ]
    }
  ]
};
