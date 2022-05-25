/* eslint-disable quote-props */
import fs from 'fs'
import os from 'os'
import { IArgumentsSetEnv } from '../../@types/types'

const tempPath = os.tmpdir()

export const setEnvHandler = async ({ token, databaseUrl }: IArgumentsSetEnv) => {
	try {
		fs.writeFileSync(`${tempPath}/envParameters.json`, JSON.stringify({ token, databaseUrl }))
		console.log('Environment variables were set')
	} catch (error) {
		const errorMessage = error.isAxiosError ? error.response.data : error.message
		console.error(errorMessage)

	} finally {
		process.exit()
	}
}