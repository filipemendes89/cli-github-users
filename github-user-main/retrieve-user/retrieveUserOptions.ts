import yargs from 'yargs'

export const retrieveUserOptions = () => {
  return yargs
    .option('location', {
      alias: 'l',
      type: 'string',
      description: 'Github username to find',
      demandOption: false
    })
    .option('language', {
      alias: 'p',
      type: 'string',
      description: 'Github language to be found',
      demandOption: false
    })
}