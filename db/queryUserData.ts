import { IArgumentsRetrieve, IUserDetails } from '../@types/types'
import { db } from './getDbInstance'

const getQueryParams = (argv: IArgumentsRetrieve) => {
  const languageQuery = argv.language ? 'additional_info @> \'{ "languages": [{ "name": "$/language:value/" }] }\'' : '1=1'
  const locationQuery = argv.location ? 'Lower(location) like \'%$/location:value/%\'' : '1=1'

  const params = {
    language: argv.language?.toLowerCase(),
    location: argv.location?.toLowerCase()
  }

  const query = `SELECT * FROM users WHERE ${languageQuery} and ${locationQuery}`
  return { query, params }
}		

export default async (argv: IArgumentsRetrieve): Promise<Omit<IUserDetails, 'additionalInfo'>[]> => {
  const { query, params } = getQueryParams(argv)

  const users = await db().map(query, params, (item) => ({
    id: item.id,
    name: item.name,
    location: item.location,
    login: item.login,
    email: item.email,
    twitterUserName: item.twitter_user_name,
    languages: item.additional_info.languages.map(language => language.name),
  }))
	
  return users
}