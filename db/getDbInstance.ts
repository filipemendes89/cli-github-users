import dotEnv from 'dotenv'
import pgPromise from 'pg-promise'

dotEnv.config()

const pgp = pgPromise({})
export const db = pgp(process.env.DATABASE_URL)