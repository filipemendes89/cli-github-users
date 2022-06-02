import { IUserDetails } from '../@types/types'
import { db } from './getDbInstance'

export default async (userData: Omit<IUserDetails, 'additionalInfo'>) => {

	const userDataInsert: IUserDetails = {
		additionalInfo:  { 
			languages: userData.languages.map(language => ({ name: language.toLowerCase() })) 
		},
		...userData
	}
	
	const insertQuery = 'INSERT INTO users(id, name, login, location, email, twitter_user_name, additional_info)' 
	const insertValues = 'VALUES($/id/, $/name/, $/login/, $/location/, $/email/, $/twitterUserName/, $/additionalInfo:json/)'
	const onConflict = ' ON CONFLICT (id) DO UPDATE SET location = $/location/, additional_info = $/additionalInfo:json/'
	
	await db().none(`${insertQuery} ${insertValues} ${onConflict}`, userDataInsert)

	return userDataInsert.id
}

