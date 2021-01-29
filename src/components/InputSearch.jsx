import React from 'react';
import PropTypes from 'prop-types';

function InputSearch({query, change, search}) {
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