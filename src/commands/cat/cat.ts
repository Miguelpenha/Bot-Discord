import { Message } from 'discord.js'
import axios from 'axios'

interface ICat {
    url: string
}

async function cat(msg: Message, tag: string) {
    const data: ICat = await (await axios.get(`https://cataas.com/cat/${tag}?json=true`)).data
    
    msg.reply(`https://cataas.com${data.url}`)
}

export default cat