import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { VimSimulator } from '@/components/effects/VimSimulator';
import { KernelPanic404 } from '@/components/effects/KernelPanic404';

describe('Easter Egg Components', () => {
  it('renders VimSimulator editor', () => {
    render(<VimSimulator />);
    expect(screen.getByText(/VIM v9.0/i)).toBeInTheDocument();
  });

  it('renders KernelPanic404 screen', () => {
    render(<KernelPanic404 />);
    expect(screen.getAllByText(/KERNEL PANIC/i).length).toBeGreaterThan(0);
    expect(screen.getByText(/REBOOT TO DESKTOP/i)).toBeInTheDocument();
  });
});
