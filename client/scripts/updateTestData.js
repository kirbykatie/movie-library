import fs from 'fs';
import path from 'path';
import fetch from 'node-fetch';
import simpleTestData from '../src/utils/testData_simple.js';
import fullTestData from '../src/utils/testData_full_old.js';

const apiKey = process.env.MOVIEDB_API; 

async function main() {
  const simpleData = simpleTestData();
  const prevTestData = fullTestData();

  function createSearchRequest(movie) {
    let query = encodeURIComponent(movie.title);
    let year = null;
    if (movie.year) {
      year = `&year=${movie.year}`;
    }
    return (`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=${query}&page=1${year ? year : ``}`)
  }

  async function fetchData(requestURL, title) {
    try {
      let response = await fetch(requestURL);
      let data = await response.json();
      if (data.results.length !== 0) {
        const getIdRequest = `https://api.themoviedb.org/3/movie/${data.results[0].id}?api_key=${apiKey}&language=en-US`;
        response = await fetch(getIdRequest);
        data = await response.json()
        console.log(`${data.title} raw data received from API`)
        return data;
      } else {
        console.log(`\n\n--------------------\n\nUnable to find data on ${title}\n\n--------------------\n\n`);
      }
    } catch(err) {
      console.error(err); 
    }
  }

  function timeout(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  async function createNewMovieList() {
    const movieArr = [];
    for await (const movie of simpleData) {
      await timeout(500);
      const requestURL = createSearchRequest(movie);
      const data = await fetchData(requestURL, movie.title);	
      let movieObj;
      if (data) {
        let prevMatchingMovie = prevTestData.filter(prevMovie => prevMovie.id === data.id);
        if (prevMatchingMovie.length === 1) {
          prevMatchingMovie = prevMatchingMovie[0];
        } else {
          prevMatchingMovie = null;
        }
        movieObj = {
          id: data.id,
          title: data.title,
          description: data.overview,
          year: data.release_date.slice(0,4),
          release_date: data.release_date,
          watched: prevMatchingMovie ? prevMatchingMovie.watched : null,
          rating: prevMatchingMovie ? prevMatchingMovie.rating : null,
          genre: data.genres,
          runtime: data.runtime,
          quality: prevMatchingMovie ? prevMatchingMovie.quality : null,
          subtitles: prevMatchingMovie ? prevMatchingMovie.subtitles : null,
          franchise: prevMatchingMovie ? prevMatchingMovie.franchise : null,
          tags:[],
          poster: `http://image.tmdb.org/t/p/w500${data.poster_path}`,
          backdrop: `http://image.tmdb.org/t/p/w1280${data.backdrop_path}`
        }
      }
      if (movieObj) {
        let movieAlreadyAdded = movieArr.filter(prevMovie => prevMovie.id === movieObj.id);
        if (movieAlreadyAdded.length === 0) {
          console.log(`${movieObj.title} cleaned data adding to array`)
          movieArr.push(movieObj);
        } else {
          console.log(`\n\n--------------------\n\n${movieObj.title} already added to list\n\n--------------------\n\n`);
        }
      } 
      //console.log(finalMovieList)
    }
    return movieArr;
  }

  const finalMovieList = await createNewMovieList();
  //console.log(finalMovieList);

  const __dirname = path.resolve()
  fs.writeFile(__dirname + '/src/utils/testData_full.js',
    `function fullTestData() {
      return (${JSON.stringify(finalMovieList)})
    }
    export default fullTestData`,
    (err) => { 
      if (err) 
        console.error(err); 
      else { 
        console.log("File written successfully\n"); 
      }
    } 
  )
}

main()
