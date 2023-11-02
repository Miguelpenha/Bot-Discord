import { discloud, streamToFile } from 'discloud.app'
import { blueBright, greenBright as success } from 'chalk'
import fs from 'fs'
import path from 'path'

async function commit() {
    const pathDefault = path.resolve(__dirname, '..', '..')
    const pathZip = path.resolve(pathDefault, 'Bot-Discord.zip')

    await discloud.login(process.env.TOKEN_DISCLOUD)

    console.log(blueBright('>> Commit sendo iniciado...'))

    const stream = fs.createReadStream(pathZip)
    const file = await streamToFile(stream, 'Bot-Discord.zip')

    const update = await discloud.apps.update(process.env.APP_ID_DISCLOUD, { file })

    console.log(success(`>> ${update.message}`))
    
    fs.rmSync(pathZip, { recursive: true })

    fs.rmSync(path.resolve(pathDefault, 'dist'), { recursive: true })
}

export default commit