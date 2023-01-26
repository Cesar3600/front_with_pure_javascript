import getData from '../utils/getData'
import getHash from '../utils/getHash'

const Character = async () => {
	const id = getHash()
	const {
		name,
		image,
		episode,
		status,
		species,
		gender,
		origin: { name: nameOrigin },
		location: { name: nameLocation }
	} = await getData(id)

	const view = `
  <div class="Characters-inner">
    <article class="Characters-card">
      <img src="${image}" alt="${name}" />
      <h2>${name}</h2>
    </article>
    <article class="characters-card">
      <h3>Total Episodes:${episode.length}</h3>
      <ul>${episode.map(
			(epi) =>
				`<li>Episode number ${
					epi.split('/')[epi.split('/').length - 1]
				}</li>`
		)}</ul>
      <h3>Status:${status}</h3>
      <h3>Species:${species}</h3>
      <h3>Gender:${gender}</h3>
      <h3>Origin:${nameOrigin}</h3>
      <h3>Last Location:${nameLocation}</h3>
    </article>
  </div>
  `
	return view
}

export default Character
