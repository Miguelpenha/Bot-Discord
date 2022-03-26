import { Message } from 'discord.js'
import axios from 'axios'

interface Cat {
    id: string
    created_at: string
    tags: string[]
    url: string
}

async function v1(msg: Message) {
    const data: Cat = await (await axios.get('https://cataas.com/cat/cute?json=true')).data
    
    msg.reply(`https://cataas.com/cat/${data.id}`)
}

export default v1