import axios from 'axios'
import { IUserDetails } from '../@types/types'
import { headers } from './commons/getHeaders'
import fetchUserRepos from './fetchUserRepos'

const gitHubUrlGet = 'https://api.github.com/users/'

export default async (username: string): Promise<IUserDetails> => {
	const {
		data: {
			id,
			login,
			location,
			email,
			name,
			twitter_username: twitterUserName,
			repos_url: reposUrl
		}
	} = await axios.get(`${gitHubUrlGet}${encodeURIComponent(username)}`,  { headers })
	
	const languages = await fetchUserRepos(reposUrl)

	return {
		id,
		name,
		login,
		location,
		email,
		twitterUserName,
		languages
	}
}