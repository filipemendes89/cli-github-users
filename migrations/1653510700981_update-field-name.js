/* eslint-disable camelcase */

exports.shorthands = undefined

exports.up = pgm => {
	pgm.alterColumn('users', 'name', { notNull: false })
	pgm.alterColumn('users', 'login', { notNull: true })
}
