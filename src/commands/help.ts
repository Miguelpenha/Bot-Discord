import { Message } from 'discord.js'
import path from 'path'
import fs from 'fs'

function help(msg: Message) {
    const basePath = path.resolve(__dirname, '..')
    let pathREADME = ''

    if (fs.existsSync(path.resolve(basePath, '..', 'README.md'))) {
        pathREADME = path.resolve(basePath, '..', 'README.md')
    } else {
        pathREADME = path.resolve(basePath, 'README.md')
    }

    msg.reply(fs.readFileSync(pathREADME).toString('utf-8'))
}

export default help