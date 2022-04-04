import { Message } from 'discord.js'

async function pixelArt(msg: Message, args: string[]) {
    msg.reply(`https://pixel-arte.vercel.app/api/arts/find/${args[0]}/image`)
}

export default pixelArt