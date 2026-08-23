"use client";

import React, { useState } from 'react';
import { Mail, ExternalLink, Copy, Check, Terminal, Globe, Wifi } from 'lucide-react';
import { socialLinks } from '@/data/links';

export const ContactView: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('rachit29122003@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full h-full overflow-y-auto p-4 sm:p-6 space-y-6 font-mono text-xs">
      <div className="os-panel p-5 border-[#42F59B]/40 glow-green-sm space-y-2">
        <div className="flex items-center space-x-2 text-[#42F59B]">
          <Wifi className="w-5 h-5 animate-pulse" />
          <h1 className="text-xl sm:text-2xl font-extrabold text-[#F1F7F3]">
            NETWORK DIAGNOSTICS // CONTACT PIPELINE
          </h1>
        </div>
        <p className="text-[#9DB2A8] text-xs">
          Direct communication pipeline for recruiters, engineering managers, and collaborators.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="os-panel p-6 space-y-4 border-[#42F59B]/30 flex flex-col justify-between">
          <div className="space-y-3">
            <div className="flex items-center space-x-2 text-[#42F59B] font-bold text-sm border-b border-[#42F59B]/20 pb-2">
              <Mail className="w-4 h-4" />
              <span>DIRECT EMAIL PIPELINE</span>
            </div>

            <div className="text-xs text-[#9DB2A8]">
              Primary contact for backend, software engineering, and systems opportunities.
            </div>

            <div className="bg-[#050A08] p-4 rounded border border-[#42F59B]/30 space-y-2">
              <div className="text-[10px] text-[#44E8FF]">RECIPIENT EMAIL ADDRESS:</div>
              <div className="text-sm font-bold text-[#F1F7F3] select-all">
                rachit29122003@gmail.com
              </div>
            </div>
          </div>

          <div className="pt-4 flex flex-col sm:flex-row gap-3">
            <button
              onClick={handleCopyEmail}
              className="flex-1 py-3 bg-[#42F59B] text-[#020604] font-bold rounded flex items-center justify-center space-x-2 hover:bg-[#8CFFC5] transition-all glow-green-sm cursor-pointer"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-[#020604]" />
                  <span>COPIED TO CLIPBOARD!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  <span>COPY EMAIL ADDRESS</span>
                </>
              )}
            </button>

            <a
              href="mailto:rachit29122003@gmail.com"
              className="py-3 px-4 bg-[#0A1411] border border-[#44E8FF]/40 text-[#44E8FF] font-bold rounded flex items-center justify-center space-x-2 hover:bg-[#44E8FF]/10 transition-all cursor-pointer"
            >
              <ExternalLink className="w-4 h-4" />
              <span>SEND EMAIL</span>
            </a>
          </div>
        </div>

        <div className="os-panel p-6 space-y-4 border-[#44E8FF]/30">
          <div className="flex items-center space-x-2 text-[#44E8FF] font-bold text-sm border-b border-[#44E8FF]/20 pb-2">
            <Globe className="w-4 h-4" />
            <span>VERIFIED ONLINE PROFILES</span>
          </div>

          <div className="space-y-2.5">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#050A08] hover:bg-[#0A1411] p-3 rounded border border-[#42F59B]/20 hover:border-[#42F59B]/60 flex items-center justify-between transition-all group cursor-pointer"
              >
                <div>
                  <div className="font-bold text-[#F1F7F3] group-hover:text-[#42F59B] text-xs">
                    {link.name}
                  </div>
                  <div className="text-[10px] text-[#9DB2A8]">{link.label}</div>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-[#9DB2A8] group-hover:text-[#42F59B] transition-colors" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="os-panel p-4 border-[#42F59B]/20 bg-[#050A08] text-[#8CFFC5] space-y-1">
        <div className="flex items-center space-x-2 text-[#42F59B] font-bold">
          <Terminal className="w-3.5 h-3.5" />
          <span>CLI EQUIVALENT COMMANDS</span>
        </div>
        <div>Try typing: <code className="text-[#44E8FF]">contact</code> or <code className="text-[#44E8FF]">ping rachit</code> in the terminal.</div>
      </div>
    </div>
  );
};
