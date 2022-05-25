
export const checkEnvVariables = () => {
	const isTokenOk = Boolean(process.env.token)
	const isDataBaseUrlOk = Boolean(process.env.DATABASE_URL)

	if(!isTokenOk) {
		console.error('GitHub token is not set. Please use command -> gitHubUsers setenv -t yourtoken')
		return Promise.reject()
	}
	
	if(!isDataBaseUrlOk) {
		console.error('GitHub token is not set. Please use command -> gitHubUsers setenv -d yourdatabaseurl')
		return Promise.reject()
	}

	return Promise.resolve()
}