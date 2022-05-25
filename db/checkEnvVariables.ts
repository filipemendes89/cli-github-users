
import fs from 'fs'
import os from 'os'

const tempPath = os.tmpdir()

export const getEnvParametersFromEnv = () => { 
	if(process.env.token && process.env.DATABASE_URL) 
		return { token: process.env.token, databaseUrl: process.env.DATABASE_URL }
}

export const getEnvParametersFromFile = () => {
	try {
		const envParameters = fs.readFileSync(`${tempPath}/envParameters.json`, {
			encoding: 'utf-8'
		})

		const { token, databaseUrl } = JSON.parse(envParameters)
		return { token, databaseUrl }
	} catch (error) {
		return { token: undefined, databaseUrl: undefined }
	}
}

export const checkEnvVariables = () => {
	const { token, databaseUrl } = getEnvParametersFromEnv() || getEnvParametersFromFile()

	if(!token && !databaseUrl) {
		console.error('Environment variables are not set, please use command gitHubUsers setenv -t yourtoken -d yourdatabaseurl')
		return Promise.reject()
	}
		
	if (!token) {
		console.error('GitHub token is not set. Please use command -> gitHubUsers setenv -t yourtoken')
		return Promise.reject()
	}

	process.env.token = token

	if (!databaseUrl) {
		console.error('Database URL is not set. Please use command -> gitHubUsers setenv -d yourdatabaseurl')
		return Promise.reject()
	}

	process.env.DATABASE_URL = databaseUrl

	return Promise.resolve()
}