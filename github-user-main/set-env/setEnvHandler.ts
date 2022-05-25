/* eslint-disable quote-props */
import { exec } from 'child_process'
import { IArgumentsSetEnv } from '../../@types/types'

export const setEnvHandler = async (argv: IArgumentsSetEnv) => {
	try {
		exec('echo $token', { env: { 'token': process.env.token || argv.token } }, (error, stdout, stderr) =>	console.log(stdout, stderr, error))

		exec('echo $DATABASE_URL', { env: { 'DATABASE_URL': process.env.DATABASE_URL || argv.databaseUrl } }, (error, stdout, stderr) =>	console.log(stdout, stderr, error))

		console.log('Environment variables were set')
	} catch (error) {
		const errorMessage = error.isAxiosError ? error.response.data : error.message
		console.error(errorMessage)

	} finally {
		process.exit()
	}
}