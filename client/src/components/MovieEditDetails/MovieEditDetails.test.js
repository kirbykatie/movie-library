import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import MovieEditDetails from './MovieEditDetails';

describe('<MovieEditDetails />', () => {
  test('it should mount', () => {
    render(<MovieEditDetails />);
    
    const movieEditDetails = screen.getByTestId('MovieEditDetails');

    expect(movieEditDetails).toBeInTheDocument();
  });
});