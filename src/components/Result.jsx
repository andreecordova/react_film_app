import React from 'react'

function Result({ result, open, id }) {
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
