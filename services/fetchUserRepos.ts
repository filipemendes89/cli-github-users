import axios from 'axios'
import { headers } from './commons/getHeaders'

export default async (reposUrl: string): Promise<Array<string>> => {
	const { data: items } = await axios.get(reposUrl, { headers: headers() })
	const languages = await Promise.all(
		await items.map(
			async (element) => {
				const { data } = await axios.get(element.languages_url, { headers: headers() })
				return Object.keys(data)
			})
	)

	return [...new Set(languages.flat(Infinity))]
}