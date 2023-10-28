import { ICommand } from '../types'
import axios from 'axios'

interface IRequest {
    _id: string
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
            content: `${baseURL}/cat/${data._id}`
        })
    }
}

export default cat