import { describe, it, expect } from 'vitest';
import { VirtualFSHelper } from './VirtualFS';
import { CommandRegistry } from './CommandRegistry';

describe('VirtualFS & CommandRegistry Behavior', () => {
  it('VirtualFS lists directory contents correctly', () => {
    const rootList = VirtualFSHelper.listDirectory('~');
    expect(rootList).toContain('about.md');
    expect(rootList).toContain('projects/');
    expect(rootList).toContain('experience/');
  });

  it('CommandRegistry cd command updates path without exiting terminal', () => {
    const res = CommandRegistry.execute('cd projects', '~');
    expect(res.newPath).toBe('~/projects');
  });

  it('CommandRegistry cd ~ resets path to ~ in terminal', () => {
    const res = CommandRegistry.execute('cd ~', '~/projects');
    expect(res.newPath).toBe('~');
  });

  it('CommandRegistry neofetch produces Arch Linux metadata card', () => {
    const res = CommandRegistry.execute('neofetch', '~');
    expect(res.output).toBeDefined();
  });
});
