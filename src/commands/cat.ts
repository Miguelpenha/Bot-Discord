import { Message } from 'discord.js'
import axios from 'axios'

interface IRequest {
    url: string
}

const baseURL = 'https://cataas.com'

async function cat(msg: Message) {
    const { data } = await axios.get<IRequest>(`${baseURL}/cat?json=true`)
    
    msg.reply(`${baseURL}${data.url}`)
}

export default cat