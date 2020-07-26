import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import MovieDetailCard from './MovieDetailCard';

describe('<MovieDetailCard />', () => {
  test('it should mount', () => {
    render(<MovieDetailCard />);
    
    const movieDetailCard = screen.getByTestId('MovieDetailCard');

    expect(movieDetailCard).toBeInTheDocument();
  });
});