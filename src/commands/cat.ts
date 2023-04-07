import { ICommand } from '../types'
import axios from 'axios'

interface IRequest {
    url: string
}

const baseURL = 'https://cataas.com'

const cat: ICommand = {
    name: 'cat',
    type: 'CHAT_INPUT',
    description: 'Foto de gato',
    run: async interaction => {
        const { data } = await axios.get<IRequest>(`${baseURL}/cat?json=true`)

        await interaction.followUp({
            ephemeral: true,
            content: `${baseURL}${data.url}`
        })
    }
}

export default cat