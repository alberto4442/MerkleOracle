// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders MerkleOracle title', () => {
    render(<App />);
    const titleElement = screen.getByText(/MerkleOracle/i);
    expect(titleElement).toBeInTheDocument();
});
