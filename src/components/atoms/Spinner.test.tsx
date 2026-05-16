import { render, screen } from '@testing-library/react';
import { Spinner } from './Spinner';
import { describe, it, expect } from 'vitest';

describe('Spinner Atom', () => {
  it('renders the loading text correctly', () => {
    // 1. Render the component in isolation
    render(<Spinner />);
    
    // 2. Find the element
    const spinnerElement = screen.getByText(/loading data/i);
    
    // 3. Assert that it exists in the document
    expect(spinnerElement).toBeInTheDocument();
  });
});