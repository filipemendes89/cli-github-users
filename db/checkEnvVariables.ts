
import fs from 'fs'
import os from 'os'

const tempPath = os.tmpdir()

export const getEnvParameters = function () {

	const envParameters = fs.readFileSync(`${tempPath}/envParameters.json`, {
		encoding: 'utf-8'
	})

	const { token, databaseUrl } = JSON.parse(envParameters)

	return { token, databaseUrl }
}

export const checkEnvVariables = () => {
	const { token, databaseUrl } = getEnvParameters()
	const isTokenOk = Boolean(process.env.token || token)
	const isDataBaseUrlOk = Boolean(process.env.DATABASE_URL || databaseUrl)

	if(!isTokenOk) {
		console.error('GitHub token is not set. Please use command -> gitHubUsers setenv -t yourtoken') 
		return Promise.reject()
	}

	process.env.token = token
	
	if(!isDataBaseUrlOk) {
		console.error('Database URL is not set. Please use command -> gitHubUsers setenv -d yourdatabaseurl')
		return Promise.reject()
	}

	process.env.DATABASE_URL = databaseUrl

	return Promise.resolve()
}