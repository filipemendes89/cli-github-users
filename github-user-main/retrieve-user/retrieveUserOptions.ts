import yargs from 'yargs'

export const retrieveUserOptions = () => {
	return yargs
		.option('location', {
			alias: 'l',
			type: 'string',
			description: 'Github username to find',
			demandOption: false
		})
		.option('languages', {
			alias: 'pl',
			type: 'array',
			description: 'Github languages to find split by spaces ex: javascript typescript',
			demandOption: false
		})
}