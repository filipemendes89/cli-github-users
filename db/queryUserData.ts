import { IArgumentsRetrieve, IUserDetails } from '../@types/types'
import { db } from './getDbInstance'

const getQueryParams = (argv: IArgumentsRetrieve) => {
	const languageQuery = argv.language ? 'additional_info @> \'{ "languages": [{ "name": "$1:raw" }] }\'' : '1=1'
	const locationQuery = argv.location ? 'Lower(location) like \'%$2:raw%\'' : '1=1'

	const params = [
		argv.language.toLowerCase(),
		argv.location?.toLowerCase()
	]

	const query = `SELECT * FROM users WHERE ${languageQuery} and ${locationQuery}`
	return { query, params }
}		

export default async (argv: IArgumentsRetrieve): Promise<IUserDetails[]> => {
	const { query, params } = getQueryParams(argv)

	const users = await db.map(query, params, (item) => ({
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