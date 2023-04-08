import axios from 'axios'
import { IArticle } from '../../components/News/News'

export async function getNews(render: (article?: IArticle) => void) {
	try {
		await axios
			.get(
				`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`
			)
			.then((response) => {
				return response.data
			})
			.then((data) => {
				for (let i = 0; i <= data.articles.length - 1; i++) {
					render(data.articles[i])
				}
			})
	} catch (error) {
		render()
		console.error(`Failed to load news! Error status: ${error}`)
	}
}

export default getNews
