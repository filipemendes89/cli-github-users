#!/usr/bin/env node

import yargs from 'yargs'
import { checkEnvVariables } from '../db/checkEnvVariables'
import { fetchUserHandler } from './fetch-user/fetchUserHandler'
import { fetchUserOptions } from './fetch-user/fetchUserOptions'
import { retrieveUserHandler } from './retrieve-user/retrieveUserHandler'
import { retrieveUserOptions } from './retrieve-user/retrieveUserOptions'
import { setEnvHandler } from './set-env/setEnvHandler'
import { setEnvOptions } from './set-env/setEnvOptions'

yargs
  .command('fetch', 'fetch and store an user from GitHub', fetchUserOptions, fetchUserHandler, [checkEnvVariables])
  .command('retrieve', 'retrieve the content of an user from database', retrieveUserOptions, retrieveUserHandler, [checkEnvVariables])
  .command('setenv', 'set environment variables', setEnvOptions, setEnvHandler)
  .argv