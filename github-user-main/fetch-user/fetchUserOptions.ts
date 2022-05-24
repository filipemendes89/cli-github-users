import yargs from 'yargs'

export const fetchUserOptions = () => {
	return yargs
		.option('username', {
			alias: 'u',
			type: 'string',
			description: 'Github username to find',
			demandOption: true
		})
}