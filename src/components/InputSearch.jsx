//React
import React from 'react';

//Functions
import filteredMovies from '../functions/filteredMovies';
import checkResponse from '../functions/checkResponse';

//Variables
import api from "../variables/api";

function InputSearch({query, setQuery, setResults}) {
	const change = (e) => {
    const value = e.target.value; 
    setQuery(value);
  };

  const search = (e) => {
    if (e.key === "Enter") {
      fetch(`${api.base}?apikey=${api.key}&s=${query}&type=movie`)
      .then((response) => response.json())
      .then((response) => {
        let has_response = checkResponse(response);
        let movies = has_response ? response.Search : [];
        let real_data = movies.length > 0 ? filteredMovies(movies) : [ 'empty' ];
        
        setResults(real_data);
        setQuery("");
      });
    }
  };

	return (
		<div className="search_box">
			<input 
				type="text" 
				className="input_field"
				aria-label="Films or Series search" 
				placeholder="Search..."
				onChange={change}
				value={query}
				onKeyPress={search} 
			/>
		</div>
	)
}


export default InputSearch;