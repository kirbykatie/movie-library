import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import MovieContainer from './MovieContainer';

describe('<MovieContainer />', () => {
  test('it should mount', () => {
    render(<MovieContainer />);
    
    const movieContainer = screen.getByTestId('MovieContainer');

    expect(movieContainer).toBeInTheDocument();
  });
});