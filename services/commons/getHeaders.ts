import * as dotenv from 'dotenv'

dotenv.config()

export const headers = () => ({
	Authorization: `Bearer ${process.env.token}`
})