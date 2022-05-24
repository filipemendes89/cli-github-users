/* eslint-disable camelcase */

exports.shorthands = undefined

exports.up = pgm => {
	pgm.createTable('users', {
		id: 'id',
		name: { type: 'varchar(1000)', notNull: true },
		location: { type: 'varchar(1000)', notNull: true },
		languages: { type: 'jsonb', notNull: false },
		createdAt: {
			type: 'timestamp',
			notNull: true,
			default: pgm.func('current_timestamp'),
		},
	})
}

exports.down = pgm => { 
	pgm.dropTable('users', { ifExists: true })
}
