import { IArgumentsRetrieve, IUserDetails } from '../@types/types'
import { db } from './getDbInstance'

export default async (argv: IArgumentsRetrieve): Promise<IUserDetails[]> => {
	const database = db
	const users = await database.map('SELECT * from users', [], (item) => ({
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