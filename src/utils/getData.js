const API = 'https://rickandmortyapi.com/api/character'

const getData = async (id) => {
	const apiUrl = id ? `${API}/${id}` : API
	try {
		const response = await fetch(apiUrl)
		return await response.json()
	} catch (error) {
		console.log(error)
	}
}

export default getData
