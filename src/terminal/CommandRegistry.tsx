import React from 'react';
import { VirtualFSHelper } from './VirtualFS';
import { cliCommands } from '@/data/links';
import { profileData } from '@/data/profile';
import { projectsData } from '@/data/projects';
import { experienceData } from '@/data/experience';

export interface CommandResult {
  output: React.ReactNode;
  newPath?: string;
  selectedProjectSlug?: string;
  isError?: boolean;
  action?: 'exit';
}

export class CommandRegistry {
  static execute(
    inputCommand: string,
    currentPath: string
  ): CommandResult {
    const trimmed = inputCommand.trim();
    if (!trimmed) {
      return { output: null };
    }

    const parts = trimmed.split(' ').filter(Boolean);
    const cmd = parts[0].toLowerCase();
    const args = parts.slice(1);

    if (trimmed.toLowerCase().startsWith('git log')) {
      return {
        output: (
          <div className="space-y-3 font-mono text-xs">
            <div className="text-[#39FF14] font-bold">git log --oneline --graph (Experience Commit Timeline)</div>
            {experienceData.map((exp) => (
              <div key={exp.id} className="border-l-2 border-[#00FF66] pl-3 py-1 space-y-1">
                <div className="text-[#00FF66] font-semibold">
                  * commit {exp.commitHash} ({exp.period})
                </div>
                <div className="text-[#E8FFE8] font-bold">
                  {exp.company} — {exp.role}
                </div>
                <div className="text-[#70A080] text-xs">{exp.summary}</div>
                <div className="text-[#39FF14] text-xs">
                  Impact: {exp.metrics.map((m) => `${m.label}: ${m.value}`).join(' | ')}
                </div>
              </div>
            ))}
          </div>
        )
      };
    }

    switch (cmd) {
      case 'help': {
        return {
          output: (
            <div className="space-y-3 font-mono text-xs">
              <div className="text-[#39FF14] font-bold border-b border-[#39FF14]/30 pb-1">
                RACHIT_PORTFOLIO_OS COMMAND REGISTRY & HELP
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {['Navigation', 'Filesystem', 'Profile', 'Projects', 'System', 'Easter Eggs'].map((cat) => (
                  <div key={cat} className="space-y-1 bg-[#0A1C10] p-2.5 rounded border border-[#39FF14]/20">
                    <div className="text-[#39FF14] font-bold underline">{cat}</div>
                    {cliCommands
                      .filter((c) => c.category === cat)
                      .map((c) => (
                        <div key={c.name} className="flex justify-between text-[11px]">
                          <span className="text-[#00FF66] font-semibold">{c.name}</span>
                          <span className="text-[#70A080] text-[10px]">{c.description}</span>
                        </div>
                      ))}
                  </div>
                ))}
              </div>
            </div>
          )
        };
      }

      case 'ls': {
        const targetPath = args[0] ? VirtualFSHelper.resolveAbsolutePath(currentPath, args[0]) : currentPath;
        const node = VirtualFSHelper.getNodeByPath(targetPath);
        if (!node) {
          return { output: `ls: cannot access '${args[0]}': No such file or directory`, isError: true };
        }
        if (node.type === 'file') {
          return { output: node.name };
        }
        const list = VirtualFSHelper.listDirectory(targetPath);
        return {
          output: (
            <div className="flex flex-wrap gap-4 text-[#39FF14] font-mono">
              {list.map((item, idx) => (
                <span
                  key={idx}
                  className={item.endsWith('/') ? 'text-[#00FF66] font-bold' : 'text-[#E8FFE8]'}
                >
                  {item}
                </span>
              ))}
            </div>
          )
        };
      }

      case 'cd': {
        const targetArg = args[0] || '~';
        const targetPath = VirtualFSHelper.resolveAbsolutePath(currentPath, targetArg);
        const node = VirtualFSHelper.getNodeByPath(targetPath);

        if (!node) {
          return { output: `cd: no such file or directory: ${args[0]}`, isError: true };
        }
        if (node.type !== 'directory') {
          return { output: `cd: not a directory: ${args[0]}`, isError: true };
        }

        let selectedProjectSlug: string | undefined = undefined;
        if (targetPath.startsWith('~/projects/')) {
          const parts = targetPath.split('/');
          const projectSlug = parts[parts.length - 1];
          if (projectSlug && projectsData.some((p) => p.slug === projectSlug)) {
            selectedProjectSlug = projectSlug;
          }
        }

        return {
          output: `Directory changed to ${targetPath}`,
          newPath: targetPath,
          selectedProjectSlug
        };
      }

      case 'pwd': {
        return { output: currentPath };
      }

      case 'cat': {
        if (!args[0]) {
          return { output: 'cat: missing file operand. Usage: cat <file>', isError: true };
        }
        const fileArg = args[0];
        const targetPath = VirtualFSHelper.resolveAbsolutePath(currentPath, fileArg);
        const node = VirtualFSHelper.getNodeByPath(targetPath);

        if (!node) {
          return { output: `cat: ${fileArg}: No such file or directory`, isError: true };
        }
        if (node.type === 'directory') {
          return { output: `cat: ${fileArg}: Is a directory`, isError: true };
        }

        return {
          output: (
            <pre className="whitespace-pre-wrap font-mono text-xs text-[#39FF14] bg-[#030D06] p-3 rounded border border-[#39FF14]/30 overflow-x-auto">
              {node.content || '(empty file)'}
            </pre>
          )
        };
      }

      case 'tree': {
        const lines = VirtualFSHelper.formatTree();
        return {
          output: (
            <pre className="font-mono text-xs text-[#00FF66] whitespace-pre">
              {lines.join('\n')}
            </pre>
          )
        };
      }

      case 'projects': {
        return {
          output: (
            <div className="space-y-3 font-mono text-xs text-[#E8FFE8]">
              <div className="text-[#39FF14] font-bold border-b border-[#39FF14]/30 pb-1">
                CANONICAL REPOSITORIES DATABASE (~/projects)
              </div>
              {['tier1_featured', 'tier2_secondary', 'tier3_experiments'].map((tier) => (
                <div key={tier} className="space-y-1.5">
                  <div className="text-[#39FF14] font-bold uppercase text-[11px]">
                    {tier.replace('_', ' ')}
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {projectsData.filter(p => p.portfolioTier === tier).map((p) => (
                      <div key={p.slug} className="bg-[#0A1C10] p-2 rounded border border-[#39FF14]/20 space-y-1">
                        <div className="flex justify-between items-center text-[#39FF14] font-bold">
                          <span>{p.name}</span>
                          <span className="text-[10px] text-[#00FF66]">{p.year}</span>
                        </div>
                        <div className="text-[#70A080] text-[10px]">{p.shortDescription}</div>
                        <div className="text-[#00FF66] text-[10px]">Path: {p.cliPath}</div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )
        };
      }

      case 'about': {
        return {
          output: (
            <div className="space-y-2 font-mono text-xs text-[#E8FFE8] bg-[#0A1C10] p-3 rounded border border-[#39FF14]/30">
              <div className="text-[#39FF14] font-bold text-sm">{profileData.name} // ENGINEER PROFILE</div>
              <div className="text-[#00FF66]">{profileData.identityLine}</div>
              <div className="pt-2 border-t border-[#39FF14]/20 space-y-1">
                <div><span className="text-[#70A080]">Education:</span> {profileData.education.institution} ({profileData.education.degree}) - CGPA {profileData.education.gpa}</div>
                <div><span className="text-[#70A080]">Languages:</span> {profileData.highlights.coreLanguages.join(', ')}</div>
                <div><span className="text-[#70A080]">Systems:</span> {profileData.highlights.coreSystems.join(', ')}</div>
                <div><span className="text-[#70A080]">Competitive Programming:</span> {profileData.highlights.competitiveProgramming}</div>
              </div>
            </div>
          )
        };
      }

      case 'experience': {
        return {
          output: (
            <div className="space-y-3 font-mono text-xs text-[#E8FFE8]">
              <div className="text-[#39FF14] font-bold border-b border-[#39FF14]/30 pb-1">
                WORK EXPERIENCE SUMMARY (~/experience/experience.log)
              </div>
              {experienceData.map((exp) => (
                <div key={exp.id} className="bg-[#0A1C10] p-3 rounded border border-[#39FF14]/30 space-y-1">
                  <div className="text-[#39FF14] font-bold text-sm">{exp.company} — {exp.role} ({exp.period})</div>
                  <div className="text-[#70A080]">{exp.summary}</div>
                  <div className="text-[#00FF66] font-semibold text-[11px]">
                    Impact: {exp.metrics.map((m) => `${m.label}: ${m.value}`).join(' | ')}
                  </div>
                  <ul className="list-disc list-inside text-[#70A080] text-[11px] pt-1">
                    {exp.highlights.map((h, idx) => (
                      <li key={idx}>{h}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )
        };
      }

      case 'neofetch': {
        return {
          output: (
            <div className="os-panel p-4 border-[#39FF14] glow-green-sm space-y-3 font-mono text-xs max-w-xl my-1 bg-[#030D06]">
              <div className="flex items-center space-x-4 border-b border-[#39FF14]/30 pb-2">
                <div className="text-[#39FF14] font-extrabold text-sm tracking-wider text-glow-green">
                  rachit@rachit-portfolio-os
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[#E8FFE8]">
                <div><span className="text-[#39FF14] font-bold">OS:</span> Rachit Portfolio OS x86_64</div>
                <div><span className="text-[#39FF14] font-bold">Host:</span> VIT Vellore B.Tech IT</div>
                <div><span className="text-[#39FF14] font-bold">Kernel:</span> 6.8.0-rachit-portfolio-os</div>
                <div><span className="text-[#39FF14] font-bold">CGPA:</span> 8.87 / 10</div>
                <div><span className="text-[#39FF14] font-bold">Current Role:</span> SDE Intern @ Hitwicket</div>
                <div><span className="text-[#39FF14] font-bold">Certification:</span> AWS SAA Certified</div>
                <div><span className="text-[#39FF14] font-bold">Shell:</span> shellB C++ custom POSIX REPL</div>
                <div><span className="text-[#39FF14] font-bold">LeetCode:</span> Global Rank #408</div>
              </div>

              <div className="pt-2 border-t border-[#39FF14]/20 text-[11px]">
                <span className="text-[#70A080]">Core Stack: </span>
                <span className="text-[#00FF66] font-semibold">C/C++, Go, Python, Node.js, PostgreSQL, Redis, Docker, AWS</span>
              </div>
            </div>
          )
        };
      }

      case 'resume': {
        return {
          output: (
            <div className="space-y-2 font-mono text-xs text-[#E8FFE8] bg-[#0A1C10] p-3 rounded border border-[#39FF14]/30">
              <div className="text-[#39FF14] font-bold text-sm">RACHIT JOSHI — RESUME SUMMARY</div>
              <div className="text-[#70A080]">Email: rachit29122003@gmail.com | GitHub: github.com/Rachit2912</div>
              <div className="text-[#00FF66] pt-1">PDF Resume available for download in Resume Workspace.</div>
              <div className="text-[#70A080] text-[11px] pt-1">
                Experience: Hitwicket SDE Intern (In-App Purchases, SLT Optimization) | SmartBridge AI Intern
              </div>
            </div>
          )
        };
      }

      case 'contact': {
        return {
          output: (
            <div className="space-y-1 font-mono text-xs text-[#E8FFE8] bg-[#0A1C10] p-3 rounded border border-[#39FF14]/30">
              <div className="text-[#39FF14] font-bold">DIRECT CONTACT DETAILS</div>
              <div>Email: <a href="mailto:rachit29122003@gmail.com" className="text-[#00FF66] underline">rachit29122003@gmail.com</a></div>
              <div>GitHub: <a href="https://github.com/Rachit2912" target="_blank" rel="noreferrer" className="text-[#00FF66] underline">github.com/Rachit2912</a></div>
              <div>LinkedIn: <a href="https://linkedin.com/in/rachit-joshi-" target="_blank" rel="noreferrer" className="text-[#00FF66] underline">linkedin.com/in/rachit-joshi-</a></div>
              <div>X / Twitter: <a href="https://x.com/rachitjoshi29" target="_blank" rel="noreferrer" className="text-[#00FF66] underline">x.com/rachitjoshi29</a></div>
            </div>
          )
        };
      }

      case 'ping': {
        const target = args[0] || 'rachit.server';
        return {
          output: (
            <div className="space-y-1 font-mono text-xs text-[#39FF14]">
              <div>PING {target} (127.0.0.1) 56(84) bytes of data.</div>
              <div>64 bytes from 127.0.0.1: icmp_seq=1 ttl=64 time=0.035 ms</div>
              <div className="text-[#00FF66] font-bold pt-1">
                --- {target} ping statistics --- 0% packet loss. Reachable via rachit29122003@gmail.com
              </div>
            </div>
          )
        };
      }

      case 'whoami': {
        return {
          output: (
            <div className="text-[#39FF14] font-mono text-xs">
              {profileData.identityLine}
            </div>
          )
        };
      }

      case 'sudo': {
        return {
          output: (
            <div className="text-[#FF2A55] font-mono text-xs font-bold">
              [ACCESS DENIED] User 'visitor' is not in the sudoers file. This incident will be reported to Rachit.
            </div>
          ),
          isError: true
        };
      }

      case 'matrix': {
        return {
          output: 'Initiating Matrix visual mode...',
        };
      }

      case '404': {
        return {
          output: 'Simulating System Fault Kernel Panic...',
        };
      }

      case 'coffee': {
        return {
          output: (
            <pre className="text-[#39FF14] font-mono text-xs">
{`
      (  )   (   )  )
     ) (   )  (  (
     ( )  (    ) )
    _____________
   |             |  __
   | PORTFOLIOOS | /  \\
   |   COFFEE    | |  |
   |   BREWING   | \\__/
   |_____________|

Hot cup of developer fuel prepared. Ready to write clean backend code!
`}
            </pre>
          )
        };
      }

      case 'exit': {
        return {
          output: 'Exiting terminal REPL...',
          action: 'exit'
        };
      }

      default: {
        return {
          output: `Command not found: '${cmd}'. Type 'help' to list available system commands.`,
          isError: true
        };
      }
    }
  }
}
