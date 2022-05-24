import { IArgumentsRetrieve } from '../../@types/types'
import queryUserData from '../../db/queryUserData'

export const retrieveUserHandler = async (argv: IArgumentsRetrieve) => {
	try {
		const users = await queryUserData(argv)
		console.table(users)
	} catch (error) {
		const errorMessage = error.isAxiosError ? error.response.data : error.message
		console.log(errorMessage)
		
	} finally {
		process.exit()
	}
}