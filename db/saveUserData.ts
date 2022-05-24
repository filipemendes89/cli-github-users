import { IUserDetails } from '../@types/types'
import { db } from './getDbInstance'

export default async (userData:IUserDetails) => {
	const database = db
	const id = await database.one(
		'INSERT INTO users(id, name, login, location) VALUES($1, $2, $3, $4) RETURNING id', 
		[
			userData.id,
			userData.name, 
			userData.login,
			userData.location
		])
	return id
}