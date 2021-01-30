const filteredMovies = (movies) => {
	return movies.filter(movie => movie.Poster != 'N/A');
}

export default filteredMovies;