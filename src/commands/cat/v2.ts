import { Message } from 'discord.js'
import axios from 'axios'

interface Cat {
    breeds: string[]
    id: string
    url: string
    width: number
    height: number
}

async function v2(msg: Message) {
    const data: Cat = (await (await axios.get('https://api.thecatapi.com/v1/images/search')).data)[0]
    
    msg.reply({
        files: [
            data.url
        ]
    })
}

export default v2