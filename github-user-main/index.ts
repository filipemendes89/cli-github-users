#!/usr/bin/env node

import yargs from 'yargs'
import { fetchUserHandler } from './fetch-user/fetchUserHandler'
import { fetchUserOptions } from './fetch-user/fetchUserOptions'
import { retrieveUserHandler } from './retrieve-user/retrieveUserHandler'
import { retrieveUserOptions } from './retrieve-user/retrieveUserOptions'

yargs
	.command('fetch', 'fetch and store an user from GitHub', fetchUserOptions, fetchUserHandler)
	.command('retrieve', 'retrieve the content of an user from database', retrieveUserOptions, retrieveUserHandler)
	.argv
