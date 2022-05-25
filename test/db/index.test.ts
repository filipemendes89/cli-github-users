import fs from 'fs'
import * as checkEnvVariables from '../../db/checkEnvVariables'
import * as getDbInstance from '../../db/getDbInstance'

describe('DB Functions test', () => {

    test('should return a DB Instance', async () => {
        const db = getDbInstance.db()
        expect(db.none).toBeTruthy()
        expect(db.map).toBeTruthy()
    })

    test('should pass variables check', async () => {        
        await checkEnvVariables.checkEnvVariables()
        expect(process.env.token).toBeTruthy()
        expect(process.env.DATABASE_URL).toBeTruthy()
    })

    test('should fail variables check', async () => {    
        
        const spyReadFile = jest.spyOn(fs,'readFileSync').mockImplementationOnce(() => '')
        const spyConsoleError = jest.spyOn(console,'error')

        process.env.token = '' 
        process.env.DATABASE_URL = ''
        
        try {
            await checkEnvVariables.checkEnvVariables()
        }catch(error){
            expect(spyConsoleError).toBeCalledTimes(1)
            expect(spyReadFile).toBeCalled()
        }
    })

})
