import { IArgumentsRetrieve } from '../../@types/types'

export const retrieveUserHandler = async (argv: IArgumentsRetrieve) => {
	try {
		console.log(argv.location)
		console.log(argv.languages)
	} catch (error) {
		if (error.isAxiosError)
			console.log(error.response.data)
	}
}