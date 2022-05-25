import dotEnv from 'dotenv'
import monitor from 'pg-monitor'
import pgPromise from 'pg-promise'

dotEnv.config()

const pgp = pgPromise({
	query(event) {
		if (process.env.NODE_ENV === 'development')
			monitor.query(event) // monitor the event;
	},
	error(err, event) {
		if (process.env.NODE_ENV === 'development')
			monitor.error(err, event)
	}
})

export const db = () => pgp(process.env.DATABASE_URL)