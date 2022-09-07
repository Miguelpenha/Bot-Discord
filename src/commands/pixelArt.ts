import { Message } from 'discord.js'

async function pixelArt(msg: Message, arg: string) {
    msg.reply(`https://pixel-arte.vercel.app/api/arts/find/${arg}/image`)
}

export default pixelArt