import { Message } from 'discord.js'
import axios from 'axios'

interface IRequest {
    message: string
}

const baseURL = 'https://dog.ceo/api'

async function dog(msg: Message, args: string[]) {
    const url = args[0] ? `${baseURL}/breed/${args[0]}/images/random` : `${baseURL}/breeds/image/random`

    try {
        const { data } = await axios.get<IRequest>(url)
    
        msg.reply({
            files: [
                data.message
            ]
        })
    } catch {
        if (args[0]) {
            msg.reply('Essa raça não está disponível \:confused:')
        } else {
            msg.reply('Houve um erro ao pegar a foto \:confused:')
        }
    }
}

export default dog