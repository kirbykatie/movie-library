import React, { useState, useEffect } from 'react';
import Switch from '@material-ui/core/Switch';
import { purple } from '@material-ui/core/colors';
import MovieContainer from '../MovieContainer/MovieContainer';

const App = () => {
  const [isAlpha, setIsAlpha] = useState(true)
  const [includeNotWatched, setIncludeNotWatched] = useState(true)

  return (
  <div data-testid="App">
    <header>
      <div className="appTitle">
        <h1>Movie Library</h1>
      </div>
      <div className="switchContainer">
        <Switch 
          checked={isAlpha}
          onChange={() => setIsAlpha(!isAlpha)}
          name="alphabeticalSwitch"
        />
        <input type="checkbox" 
          checked={includeNotWatched}
          onChange={() => setIncludeNotWatched(!includeNotWatched)}>
        </input>
      </div>
    </header>
    <MovieContainer 
      propsAlpha={isAlpha}
      propsInclude={includeNotWatched}
    />
  </div>
  )
}

export default App;
