import axios from 'axios'
import { IGitHubLanguages, IGitHubRepo } from '../@types/types'
import { headers } from './commons/getHeaders'

export default async (reposUrl: string): Promise<FlatArray<any[], number>> => {
  const { data: items }:{ data: IGitHubRepo[] } = await axios.get(reposUrl, { 
    headers: headers() 
  })
	
  const languages = await Promise.all(
    await items.map(
      async (element) => {
        const { data } : { data: IGitHubLanguages } = await axios.get(
          element.languages_url, 
          { 
            headers: headers() 
          })
        return Object.keys(data)
      })
  )

  return [...new Set(languages.flat(Infinity))]
}