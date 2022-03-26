import { Message } from 'discord.js'
import fs from 'fs'
import path from 'path'

function help(msg: Message) {
    if (fs.existsSync(path.resolve(__dirname, '..', '..', 'README.md'))) {
        msg.reply(fs.readFileSync(path.resolve(__dirname, '..', '..', 'README.md')).toString('utf-8'))
    } else {
        msg.reply(fs.readFileSync(path.resolve(__dirname, '..', 'README.md')).toString('utf-8'))
    }
}

export default help