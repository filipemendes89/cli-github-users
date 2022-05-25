import { IUserDetails } from '../@types/types'
import { db } from './getDbInstance'

export default async (userData: IUserDetails) => {

	const insertQuery = 'INSERT INTO users(id, name, login, location, email, twitter_user_name, additional_info) VALUES($1, $2, $3, $4, $5, $6, $7:json)'
	const onConflict = ' ON CONFLICT (id) DO UPDATE SET location = $4, additional_info = $7:json'
	await db.none(`${insertQuery} ${onConflict}`,
		[
			userData.id,
			userData.name,
			userData.login,
			userData.location,
			userData.email,
			userData.twitterUserName,
			{ languages: userData.languages.map(language => ({ name: language.toLowerCase() })) }
		])

	return userData.id
}

