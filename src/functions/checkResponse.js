const checkResponse = (response) => {
	return response.hasOwnProperty('Response') ? (response.Response === 'True') ? true : false : false;
	
}

export default checkResponse;