import { discloud, streamToFile } from 'discloud.app'
import { blueBright, greenBright as success } from 'chalk'
import fs from 'fs'
import path from 'path'

async function commit() {
    await discloud.login(process.env.TOKEN_DISCLOUD)

    console.log(blueBright('>> Commit sendo iniciado...'))

    const stream = fs.createReadStream(path.resolve(__dirname, '..', '..', 'Bot-Discord.zip'))
    const file = await streamToFile(stream, 'Bot-Discord.zip')

    const update = await discloud.apps.update(process.env.APP_ID_DISCLOUD, { file })

    console.log(success(`>> ${update.message}`))
}

export default commit