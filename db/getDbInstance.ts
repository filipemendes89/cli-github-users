import dotEnv from 'dotenv'
import monitor from 'pg-monitor'
import pgPromise from 'pg-promise'

dotEnv.config()

const pgp = pgPromise({
	query(event) {
		console.info([event.query])
		monitor.query(event) // monitor the event;
	},
	error(err, event) {
		monitor.error(err, event)
		console.error([err.message, event.query])
	}
})
export const db = pgp(process.env.DATABASE_URL)