import React from 'react';
import Result from './Result';

function Results({ results, setSelected, setShow }) {
	return (
		<div className="results_container">
			{
				results.map((result, index) => (
					<Result key={index} id={result.imdbID} result={result} setSelected={setSelected} setShow={setShow} />
				))
			}
		</div>
	)
}

export default Results
