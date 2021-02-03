//React
import React from 'react';

//Variables
import api from "../variables/api";

function Result({ result, setSelected, setShow, id }) {
	const open = (id) => {
    fetch(`${api.base}?apikey=${api.key}&i=${id}`)
    .then((response) => response.json())
    .then((response) => {
      setSelected(response);
      setShow(true);
    });
	};
	
	return (
		<div className="item_card" onClick={() => { open(id)}}>
			<img className="card_image" src={result.Poster} alt={result.Title} />
			<div className="card_body">
				<h2 className="card_title">{result.Title}</h2>
				<span className="year">{result.Year}</span>
			</div>
		</div>
	)
}

export default Result
