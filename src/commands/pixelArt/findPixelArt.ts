import { Message } from 'discord.js'
import domain from './utils/domain'

async function findPixelArt(msg: Message, arg: string) {
    msg.reply(`${domain}/arts/find/${arg}/image`)
}

export default findPixelArt