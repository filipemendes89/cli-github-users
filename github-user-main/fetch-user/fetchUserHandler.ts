import { IArgumentsFetch } from '../../@types/types'
import saveUserData from '../../db/saveUserData'
import fetchUserData from '../../services/fetchUserData'

export const fetchUserHandler = async (argv: IArgumentsFetch) => {
	try {
		const userDetails = await fetchUserData(argv.username)
		await saveUserData(userDetails)
		console.table([userDetails])
	} catch (error) {
		const errorMessage = error.isAxiosError ? error.response.data : error.message
		console.log(errorMessage)
	} finally {
		process.exit()
	}
}