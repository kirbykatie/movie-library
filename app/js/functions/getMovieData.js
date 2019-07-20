	//TODO - Refactor fetchData to work for any MovieDB call (like get movie data, search movies, get genres) and rely on the other funcs to create the query and recieve the data
	//TODO - also fetch config data from MovieDB to get accurate image data: https://developers.themoviedb.org/3/configuration/get-api-configuration

	const apiKey = process.env.MOVIEDB_API; 

	function createSearchRequest(movie) {
		let query = encodeURIComponent(movie.title);
		let year = null;
		if (movie.year) {
			year = `&year=${movie.year}`;
		}
		return (`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=${query}&page=1${year ? year : ``}`)
	}

	function fetchData(requestURL, callback) {
		fetch(requestURL, callback)
			.then((response) => response.json())
			.then((data) => {
				console.log(data);
				const getIdRequest = `https://api.themoviedb.org/3/movie/${data.results[0].id}?api_key=${apiKey}&language=en-US`;
				return fetch(getIdRequest);
			})
			.then((response) => response.json())
			.then((data) => { 
				console.log(data);
				callback(data);
			})
			.catch(error => console.error('Error:', error));
	}

	function fetchGenres(callback) {
		const requestURL = `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}&language=en-US`;
		fetch(requestURL, callback)
			.then((response) => response.json())
			.then((data) => {
				console.log(data);
				callback(data);
			})
	}

export { fetchData, createSearchRequest, fetchGenres };
