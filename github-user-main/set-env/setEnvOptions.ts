import yargs from 'yargs'

export const setEnvOptions = () => {
  return yargs
    .option('token', {
      alias: 't',
      type: 'string',
      description: 'Github token',
      demandOption: false
    })
    .option('databaseUrl', {
      alias: 'd',
      type: 'string',
      description: 'Postgres Database URL',
      demandOption: false
    })
}