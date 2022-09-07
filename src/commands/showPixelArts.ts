import axios from 'axios'
import { Message } from 'discord.js'

interface IArt {
    _id: string
}

async function showPixelArts(msg: Message) {
    const { data: arts } = await axios.get<IArt[]>('https://pixel-arte.vercel.app/api/arts/find')

    let text = ''

    arts.map(art => text = text+`https://pixel-arte.vercel.app/api/arts/find/${art._id}/image\n${art._id}\n`)

    msg.reply(text)
}

export default showPixelArts