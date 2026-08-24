import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { KernelPanic404 } from '@/components/effects/KernelPanic404';

describe('Easter Egg Components', () => {
  it('renders KernelPanic404 screen', () => {
    render(<KernelPanic404 />);
    expect(screen.getAllByText(/KERNEL PANIC/i).length).toBeGreaterThan(0);
    expect(screen.getByText(/REBOOT TO DESKTOP/i)).toBeInTheDocument();
  });
});
