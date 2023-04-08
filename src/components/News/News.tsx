import Slider from 'ui-kit/Slider/Slider'
import Container from '../../ui-kit/Container/Container'
import styles from './News.module.scss'
import { useState, useEffect } from 'react'
import getNews from '../../services/api/getNews'
import { IItem } from '../../ui-kit/Slider/types'

export interface IArticle {
	url: string
	description: string
	title: string
	urlToImage: string
}

const News: React.FC = () => {
	const [news, setNews] = useState<IItem[] | undefined[]>([])

	const mockImgSrc =
		'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTNemDx32kHbtVSXNMkRyINamV255JkT2r347HXiCI7CIFk3afiF0dG8VmQOkLTuPzprM&usqp=CAU'

	const cutText = (text: string, limit: number) => {
		if (!text) {
			return ''
		}

		text = text.trim()

		if (text.length <= limit) return text

		text = text.slice(0, limit)
		const lastSpace = text.lastIndexOf(' ')

		if (lastSpace > 0) {
			text = text.substring(0, lastSpace)
		}

		return text
	}

	const render: (article?: IArticle) => void = (
		article = {
			urlToImage: mockImgSrc,
			url: '#!',
			description: '',
			title: 'Не удалось загрузить новости! Перезагрузите страницу',
		}
	) => {
		const newObj = {
			img: article?.urlToImage ? article.urlToImage : mockImgSrc,
			title: cutText(article?.title, 60),
			description: cutText(article?.description, 100),
			url: article.url,
		}

		setNews((prev) => [...prev, newObj])
	}

	useEffect(() => {
		getNews(render)
	}, [])

	return (
		<section className={styles.news}>
			<Container>
				<div className={styles.news__wrapper}>
					<h2 className={styles.news__title}>
						Current news from the world of finance
					</h2>
					<h3 className={styles.news__subtitle}>
						We update the news feed every 15 minutes. You can learn more by
						clicking on the news you are interested in.
					</h3>
					<Slider items={news} mockImg={mockImgSrc} />
				</div>
			</Container>
		</section>
	)
}

export default News
