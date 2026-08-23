import React from 'react';
import { VirtualFSHelper } from './VirtualFS';
import { cliCommands } from '@/data/links';
import { profileData } from '@/data/profile';
import { projectsData } from '@/data/projects';
import { experienceData } from '@/data/experience';

export interface CommandResult {
  output: React.ReactNode;
  newPath?: string;
  newWorkspace?: 'desktop' | 'terminal' | 'about' | 'projects' | 'experience' | 'resume' | 'contact' | 'easter-egg-matrix' | 'easter-egg-vim' | 'easter-egg-404';
  selectedProjectSlug?: string;
  isError?: boolean;
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
          <div className="space-y-3">
            <div className="text-[#42F59B] font-bold">git log --oneline --graph (Experience Commit Timeline)</div>
            {experienceData.map((exp) => (
              <div key={exp.id} className="border-l-2 border-[#42F59B] pl-3 py-1 space-y-1">
                <div className="text-[#44E8FF] font-semibold">
                  * commit {exp.commitHash} ({exp.period})
                </div>
                <div className="text-[#F1F7F3] font-bold">
                  {exp.company} — {exp.role}
                </div>
                <div className="text-[#9DB2A8] text-xs">{exp.summary}</div>
                <div className="text-[#8CFFC5] text-xs">
                  Impact: {exp.metrics.map((m) => `${m.label}: ${m.value}`).join(' | ')}
                </div>
              </div>
            ))}
          </div>
        ),
        newWorkspace: 'experience',
        newPath: '~/experience'
      };
    }

    switch (cmd) {
      case 'help': {
        return {
          output: (
            <div className="space-y-3 font-mono text-xs">
              <div className="text-[#42F59B] font-bold border-b border-[#42F59B]/20 pb-1">
                RACHIT_OS COMMAND REGISTRY & HELP
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {['Navigation', 'Filesystem', 'Profile', 'Projects', 'System', 'Easter Eggs'].map((cat) => (
                  <div key={cat} className="space-y-1 bg-[#0A1411] p-2 rounded border border-[#42F59B]/10">
                    <div className="text-[#44E8FF] font-bold underline">{cat}</div>
                    {cliCommands
                      .filter((c) => c.category === cat)
                      .map((c) => (
                        <div key={c.name} className="flex justify-between text-[11px]">
                          <span className="text-[#42F59B] font-semibold">{c.name}</span>
                          <span className="text-[#9DB2A8] text-[10px]">{c.description}</span>
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
            <div className="flex flex-wrap gap-4 text-[#8CFFC5]">
              {list.map((item, idx) => (
                <span
                  key={idx}
                  className={item.endsWith('/') ? 'text-[#44E8FF] font-bold' : 'text-[#F1F7F3]'}
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

        let newWorkspace: CommandResult['newWorkspace'] = undefined;
        let selectedProjectSlug: string | undefined = undefined;

        if (targetPath === '~') newWorkspace = 'desktop';
        else if (targetPath.startsWith('~/projects')) {
          newWorkspace = 'projects';
          const projectSlug = targetPath.split('/')[2];
          if (projectSlug) selectedProjectSlug = projectSlug;
        } else if (targetPath.startsWith('~/experience')) newWorkspace = 'experience';
        else if (targetPath.startsWith('~/resume')) newWorkspace = 'resume';
        else if (targetPath.startsWith('~/contact')) newWorkspace = 'contact';

        return {
          output: `Changed directory to ${targetPath}`,
          newPath: targetPath,
          newWorkspace,
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
            <pre className="whitespace-pre-wrap font-mono text-xs text-[#8CFFC5] bg-[#050A08] p-3 rounded border border-[#42F59B]/20 overflow-x-auto">
              {node.content || '(empty file)'}
            </pre>
          )
        };
      }

      case 'tree': {
        const lines = VirtualFSHelper.formatTree();
        return {
          output: (
            <pre className="font-mono text-xs text-[#42F59B] whitespace-pre">
              {lines.join('\n')}
            </pre>
          )
        };
      }

      case 'projects': {
        return {
          output: 'Opening Projects Workspace...',
          newWorkspace: 'projects',
          newPath: '~/projects'
        };
      }

      case 'about': {
        return {
          output: 'Opening About Engineer Workspace...',
          newWorkspace: 'about',
          newPath: '~/about.md'
        };
      }

      case 'experience': {
        return {
          output: 'Opening Experience Timeline...',
          newWorkspace: 'experience',
          newPath: '~/experience'
        };
      }

      case 'neofetch': {
        return {
          output: (
            <div className="os-panel p-4 border-[#42F59B] glow-green-sm space-y-3 font-mono text-xs max-w-xl">
              <div className="flex items-center space-x-4 border-b border-[#42F59B]/30 pb-3">
                <div className="text-[#42F59B] font-extrabold text-lg">
                  RACHIT JOSHI @ PORTFOLIO_OS
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[#F1F7F3]">
                <div><span className="text-[#42F59B] font-bold">OS:</span> RachitOS Linux v2.5 x86_64</div>
                <div><span className="text-[#42F59B] font-bold">Host:</span> VIT Vellore B.Tech IT</div>
                <div><span className="text-[#42F59B] font-bold">Kernel:</span> 6.8.0-rachit-sys</div>
                <div><span className="text-[#42F59B] font-bold">Uptime:</span> 887 days (CGPA 8.87)</div>
                <div><span className="text-[#42F59B] font-bold">Current Role:</span> SDE Intern @ Hitwicket</div>
                <div><span className="text-[#42F59B] font-bold">Certification:</span> AWS SAA Certified</div>
                <div><span className="text-[#42F59B] font-bold">Shell:</span> shellB C++ custom REPL</div>
                <div><span className="text-[#42F59B] font-bold">LeetCode:</span> Global Rank #408</div>
              </div>

              <div className="pt-2 border-t border-[#42F59B]/20">
                <span className="text-[#9DB2A8]">Core Tech Stack: </span>
                <span className="text-[#8CFFC5]">C/C++, Go, Python, Node.js, PostgreSQL, Redis, Docker, AWS</span>
              </div>
            </div>
          ),
          newWorkspace: 'about',
          newPath: '~/about.md'
        };
      }

      case 'resume': {
        return {
          output: 'Loading Resume Workspace...',
          newWorkspace: 'resume',
          newPath: '~/resume'
        };
      }

      case 'contact': {
        return {
          output: 'Opening Network Contact Diagnostic...',
          newWorkspace: 'contact',
          newPath: '~/contact'
        };
      }

      case 'ping': {
        const target = args[0] || 'rachit.server';
        return {
          output: (
            <div className="space-y-1 font-mono text-xs text-[#44E8FF]">
              <div>PING {target} (127.0.0.1) 56(84) bytes of data.</div>
              <div>64 bytes from 127.0.0.1: icmp_seq=1 ttl=64 time=0.042 ms</div>
              <div>64 bytes from 127.0.0.1: icmp_seq=2 ttl=64 time=0.038 ms</div>
              <div className="text-[#42F59B] font-bold pt-1">
                --- {target} ping statistics --- 2 packets transmitted, 0% packet loss. Reachable via rachit29122003@gmail.com
              </div>
            </div>
          )
        };
      }

      case 'whoami': {
        return {
          output: (
            <div className="text-[#8CFFC5] font-mono text-xs">
              {profileData.identityLine}
            </div>
          )
        };
      }

      case 'sudo': {
        return {
          output: (
            <div className="text-[#FF5C77] font-mono text-xs font-bold">
              [ACCESS DENIED] User 'visitor' is not in the sudoers file. This incident will be reported to Rachit.
            </div>
          ),
          isError: true
        };
      }

      case 'vim': {
        return {
          output: 'Launching mini Vim simulator...',
          newWorkspace: 'easter-egg-vim'
        };
      }

      case 'matrix': {
        return {
          output: 'Initiating Matrix visual pulse...',
          newWorkspace: 'easter-egg-matrix'
        };
      }

      case '404': {
        return {
          output: 'Simulating System Fault Kernel Panic...',
          newWorkspace: 'easter-egg-404'
        };
      }

      case 'coffee': {
        return {
          output: (
            <pre className="text-[#44E8FF] font-mono text-xs">
{`
      (  )   (   )  )
     ) (   )  (  (
     ( )  (    ) )
    _____________
   |             |  __
   |  RACHIT_OS  | /  \\
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
          output: 'Returning to Desktop Workspace...',
          newWorkspace: 'desktop',
          newPath: '~'
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
