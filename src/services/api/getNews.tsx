import { IArticle } from '../../components/News/types'

async function getNews(render: (article?: IArticle) => void) {
	const fetchNews: () => Promise<Response> = async () => {
		const data = await fetch(
			'https://ewsapi.org/v2/top-headlines?country=us&category=business&apiKey=b8e220bebe8e422fa69d8f4844730fec'
		)
		return data
	}

	fetchNews()
		.then((response) => response.json())
		.then((response) => {
			for (let i = 0; i <= response.articles.length - 1; i++) {
				render(response.articles[i])
			}
		})
		.catch((error) => {
			render()
			// throw new Error('Error while fetch', error)
			console.log(error)
		})
}

export default getNews
