import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders LanguageWire Translation', () => {
    render(<App />);
    const linkElement = screen.getByText(/LanguageWire Translation/i);
    expect(linkElement).toBeInTheDocument();
});
