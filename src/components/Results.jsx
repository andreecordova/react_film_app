import React from 'react';
import Result from './Result';

function Results({results, open}) {
	return (
		<div className="results_container">
			{
				results.map((result, index) => (
					<Result key={index} id={result.imdbID} result={result} open={open} />
				))
			}
		</div>
	)
}

export default Results
