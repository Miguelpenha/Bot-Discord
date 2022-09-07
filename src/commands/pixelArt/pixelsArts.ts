import { Message } from 'discord.js'
import axios from 'axios'
import domain from './utils/domain'

interface IArt {
    _id: string
}

async function pixelsArts(msg: Message) {
    const { data: arts } = await axios.get<IArt[]>(`${domain}/arts/find`)

    let text = ''

    arts.map(art => text = text+`${domain}/arts/find/${art._id}/image\n${art._id}\n`)

    msg.reply(text)
}

export default pixelsArts