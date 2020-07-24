import React, { useState, useEffect } from 'react';
import MovieContainer from '../MovieContainer/MovieContainer';

const App = () => {
  return (
  <div data-testid="App">
    <header>
      <h1>Movie Library</h1>
    </header>
    <MovieContainer />
  </div>
  )
}

export default App;
