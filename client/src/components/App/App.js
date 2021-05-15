import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import MenuOpenIcon from '@material-ui/icons/MenuOpen';
import IconButton from '@material-ui/core/IconButton';
import Switch from '@material-ui/core/Switch';
import Sidebar from '../Sidebar/Sidebar';
import MovieContainer from '../MovieContainer/MovieContainer';

const App = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [isAlpha, setIsAlpha] = useState(true)
  const [includeNotWatched, setIncludeNotWatched] = useState(true)
  const [filters, setFilters] = useState({
    includeNotWatched: true,
    genres: [],
    rating: 0,
  });
  const [genreOptions, setGenreOptions] = useState([])

  //Eventually will save this data in local DB so app won't need to rely on 3rd party API to run
  //Gets genres available in movie DB
  //TODO - remove genre options that are not used in library
  useEffect(() => {
    const requestURL = `https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.MOVIEDB_API}&language=en-US`;
		fetch(requestURL)
			.then((response) => response.json())
			.then((data) => {
				setGenreOptions(data.genres)
      })
  },[])

  const classes = useStyles();

  return (
  <div data-testid="App">
    <Drawer 
      open={sidebarOpen}
      onClose={() => setSidebarOpen(false)}
      classes={{paper: classes.drawer_paper}}
    >
      <Sidebar 
        propFilters={filters}
        genreOptions={genreOptions}
        setFiltersCallback={newFilters => {
          console.log(newFilters)
          setFilters(newFilters)
        }}
        closeSidebarCallback={() => setSidebarOpen(false)}
      />
    </Drawer>
    <header>
      <div className="sidebarToggleBtn">
        <IconButton 
          aria-label="Open Sidebar" 
          classes={{root: classes.sidebarBtn_root}}
          onClick={() => setSidebarOpen(true)}
        >
          <MenuOpenIcon/>
        </IconButton>
      </div>
      <div className="appTitle">
        <h1>Movie Library</h1>
      </div>
      <div className="switchContainer">
        <Switch 
          checked={isAlpha}
          onChange={() => setIsAlpha(!isAlpha)}
          name="alphabeticalSwitch"
        />
        
      </div>
    </header>
    <MovieContainer 
      propsAlpha={isAlpha}
      propsInclude={includeNotWatched}
      filters={filters}
      genreOptions={genreOptions}
    />
  </div>
  )
}

const useStyles = makeStyles({
  sidebarBtn_root: {
    color: "white",
    fill: "white",
    "&:hover, &:focus": {
      backgroundColor: 'rgba(0, 0, 0, 0.25)'
    }
  },
  drawer_paper: {
    padding: '20px'
  }
});

export default App;
