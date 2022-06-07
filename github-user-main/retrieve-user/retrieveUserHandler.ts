import { IArgumentsRetrieve } from '../../@types/types'
import queryUserData from '../../db/queryUserData'

export const retrieveUserHandler = async (argv: IArgumentsRetrieve) => {
  try {
    const users = await queryUserData(argv)
    console.table(users)
  } catch (error) {
    throw new Error(error)
  }
}