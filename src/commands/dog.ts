import { Message } from 'discord.js'
import axios from 'axios'

interface Dog {
    message: string
    status: string
}

async function dog(args: string[], msg: Message) {
    try {
        const data: Dog = await (await axios.get(args[0] ? `https://dog.ceo/api/breed/${args[0]}/images/random` : 'https://dog.ceo/api/breeds/image/random')).data
    
        msg.reply({
            files: [
                data.message
            ]
        })
    } catch {
        msg.reply(args[0] ? 'Essa raça não está disponível \:confused:' : 'Houve um erro ao pegar a foto \:confused:')
    }
}

export default dog