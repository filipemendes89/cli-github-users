import axios from 'axios'
import { IGitHubUser, IUserDetails } from '../@types/types'
import { headers } from './commons/getHeaders'
import fetchUserRepos from './fetchUserRepos'

const gitHubUrlGet = 'https://api.github.com/users/'

export default async (username: string): Promise<Omit<IUserDetails, 'additionalInfo'>> => {
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
  }:{ data: IGitHubUser } = await axios.get(`${gitHubUrlGet}${encodeURIComponent(username)}`,  { headers: headers() })
	
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