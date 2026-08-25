"use client";

import React, { useState } from 'react';
import { Mail, ExternalLink, Copy, Check, Terminal, Globe, Wifi, Send } from 'lucide-react';
import { socialLinks } from '@/data/links';

import { useOSStore } from '@/store/useOSStore';

export const ContactView: React.FC = () => {
  const { themeColor } = useOSStore();
  const [copied, setCopied] = useState(false);
  const [subject, setSubject] = useState('');
  const [body, setBody] = useState('');

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('rachit29122003@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoUrl = `mailto:rachit29122003@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoUrl;
  };

  return (
    <div className="w-full h-full overflow-y-auto p-4 sm:p-6 space-y-6 font-mono text-xs bg-[#020904]">
      <div
        className="os-panel p-5 glow-green-sm space-y-2 border"
        style={{ borderColor: 'var(--border-bright)' }}
      >
        <div className="flex items-center space-x-2 text-theme">
          <Wifi className="w-5 h-5 animate-pulse text-theme" />
          <h1 className="text-xl sm:text-2xl font-extrabold text-[#E8FFE8]">
            NETWORK DIAGNOSTICS // CONTACT PIPELINE
          </h1>
        </div>
        <p className="text-[#70A080] text-xs">
          Direct email composition pipeline for recruiters, engineering managers, and tech collaborators.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Email Form Section */}
        <div className="os-panel p-6 space-y-4 border flex flex-col justify-between" style={{ borderColor: 'var(--border-dim)' }}>
          <div className="space-y-3">
            <div className="flex items-center space-x-2 text-theme font-bold text-sm border-b pb-2" style={{ borderColor: 'var(--border-dim)' }}>
              <Mail className="w-4 h-4 text-theme" />
              <span>DIRECT EMAIL COMPOSER</span>
            </div>

            <form onSubmit={handleSendEmail} className="space-y-3 pt-1">
              <div className="space-y-1">
                <label className="text-theme font-bold text-[11px] block">RECIPIENT:</label>
                <input
                  type="text"
                  readOnly
                  value="rachit29122003@gmail.com"
                  className="w-full bg-[#030D06] border text-[#E8FFE8] p-2.5 rounded font-mono text-xs focus:outline-none cursor-not-allowed opacity-80"
                  style={{ borderColor: 'var(--border-dim)' }}
                />
              </div>

              <div className="space-y-1">
                <label className="text-theme font-bold text-[11px] block">SUBJECT:</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. SDE Opportunity / Backend Systems Project"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="w-full bg-[#030D06] border text-[#E8FFE8] p-2.5 rounded font-mono text-xs focus:outline-none"
                  style={{ borderColor: 'var(--border-dim)' }}
                />
              </div>

              <div className="space-y-1">
                <label className="text-theme font-bold text-[11px] block">MESSAGE BODY:</label>
                <textarea
                  required
                  rows={5}
                  placeholder="Type your message here..."
                  value={body}
                  onChange={(e) => setBody(e.target.value)}
                  className="w-full bg-[#030D06] border text-[#E8FFE8] p-2.5 rounded font-mono text-xs focus:outline-none resize-none"
                  style={{ borderColor: 'var(--border-dim)' }}
                />
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <button
                  type="submit"
                  style={{ backgroundColor: themeColor, color: '#020904' }}
                  className="flex-1 py-3 font-bold rounded flex items-center justify-center space-x-2 hover:opacity-90 transition-all glow-green-sm cursor-pointer text-xs"
                >
                  <Send className="w-4 h-4" />
                  <span>SEND EMAIL DIRECTLY</span>
                </button>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  style={{ borderColor: themeColor, color: themeColor }}
                  className="py-3 px-4 bg-[#0A1C10] border font-bold rounded flex items-center justify-center space-x-2 hover:bg-white/10 transition-all cursor-pointer text-xs"
                >
                  {copied ? <Check className="w-4 h-4 text-theme" /> : <Copy className="w-4 h-4 text-theme" />}
                  <span>{copied ? 'COPIED!' : 'COPY EMAIL'}</span>
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Online Links Section */}
        <div className="os-panel p-6 space-y-4 border" style={{ borderColor: 'var(--border-dim)' }}>
          <div className="flex items-center space-x-2 text-theme font-bold text-sm border-b pb-2" style={{ borderColor: 'var(--border-dim)' }}>
            <Globe className="w-4 h-4 text-theme" />
            <span>VERIFIED ONLINE PROFILES</span>
          </div>

          <div className="space-y-2.5">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#030D06] hover:bg-[#0A1C10] p-3 rounded border flex items-center justify-between transition-all group cursor-pointer"
                style={{ borderColor: 'var(--border-dim)' }}
              >
                <div>
                  <div className="font-bold text-[#E8FFE8] group-hover:text-theme text-xs">
                    {link.name}
                  </div>
                  <div className="text-[10px] text-[#70A080]">{link.label}</div>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-[#70A080] group-hover:text-theme transition-colors" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="os-panel p-4 border bg-[#030D06] text-theme space-y-1" style={{ borderColor: 'var(--border-dim)' }}>
        <div className="flex items-center space-x-2 text-theme font-bold">
          <Terminal className="w-3.5 h-3.5 text-theme" />
          <span>CLI EQUIVALENT COMMANDS</span>
        </div>
        <div>Try typing: <code className="text-theme font-bold">contact</code> or <code className="text-theme font-bold">ping rachit</code> in the terminal.</div>
      </div>
    </div>
  );
};
