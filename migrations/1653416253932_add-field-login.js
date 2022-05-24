/* eslint-disable camelcase */

exports.shorthands = undefined

exports.up = pgm => {
	pgm.addColumn('users', {
		login: { type: 'string' }
	})
	pgm.alterColumn('users', 'name', { type:'string' })
	pgm.alterColumn('users', 'location', { type:'string' })
}

