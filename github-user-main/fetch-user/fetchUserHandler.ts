import { IArgumentsFetch } from '../../@types/types'
import saveUserData from '../../db/saveUserData'
import fetchUserData from '../fetchUserData'

export const fetchUserHandler = async (argv: IArgumentsFetch) => {
	try {
		const userDetails = await fetchUserData(argv.username)
		await saveUserData(userDetails)
		console.table([userDetails])
	} catch (error) {
		if (error.isAxiosError)
			console.log(error.response.data)
	}
}