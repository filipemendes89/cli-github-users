import { IUserDetails } from '../@types/types'
import { db } from './getDbInstance'

export default async (userData: IUserDetails) => {
	const database = db
	const id = await database.one(
		'INSERT INTO users(id, name, login, location, email, twitter_user_name, additional_info) VALUES($1, $2, $3, $4, $5, $6, $7:json) RETURNING id',
		[
			userData.id,
			userData.name,
			userData.login,
			userData.location,
			userData.email,
			userData.twitterUserName,
			{ languages: userData.languages.map(language => ({ name: language })) }
		])
	
	return id
}