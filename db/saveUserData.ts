import { IUserDetails } from '../@types/types'
import { db } from './getDbInstance'
import { queryById } from './queryUserData'

export default async (userData: IUserDetails) => {
	const alreadySaved = queryById(userData.id)

	if (!alreadySaved) {
		await db.one(
			'INSERT INTO users(id, name, login, location, email, twitter_user_name, additional_info) VALUES($1, $2, $3, $4, $5, $6, $7:json)',
			[
				userData.id,
				userData.name,
				userData.login,
				userData.location,
				userData.email,
				userData.twitterUserName,
				{ languages: userData.languages.map(language => ({ name: language })) }
			])
	}

	return userData.id
}