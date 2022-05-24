/* eslint-disable camelcase */

exports.shorthands = undefined

exports.up = pgm => {
	pgm.addColumn('users', {
		email: { type: 'string' },
		twitter_user_name: { type: 'string' }
	})
}


