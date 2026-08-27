import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { MatrixRainOverlay } from '@/components/effects/MatrixRainOverlay';

describe('Easter Egg Components', () => {
  it('renders MatrixRainOverlay component', () => {
    const { container } = render(<MatrixRainOverlay />);
    expect(container).toBeDefined();
  });
});
