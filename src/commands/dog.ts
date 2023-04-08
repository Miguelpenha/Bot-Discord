import { ApplicationCommandOptionData } from 'discord.js'
import { ICommand } from '../types'
import axios from 'axios'

interface IRequest {
    message: string
}

const baseURL = 'https://dog.ceo/api'

const options: ApplicationCommandOptionData[] = [
    {
        name: 'breed',
        type: 'STRING',
        description: 'Raça do cachorro'
    }
]

const dog: ICommand = {
    name: 'dog',
    options: options,
    type: 'CHAT_INPUT',
    description: 'Foto de cachorro',
    run: async interaction => {
        const { value: breed } = interaction.options.get('breed') || { value: null }
        const url = breed ? `${baseURL}/breed/${breed}/images/random` : `${baseURL}/breeds/image/random`

        try {
            const { data } = await axios.get<IRequest>(url)
            
            await interaction.followUp({
                ephemeral: true,
                files: [data.message]
            })
        } catch {
            if (breed) {
                interaction.followUp('Essa raça não está disponível \:confused:')
            } else {
                interaction.followUp('Houve um erro ao pegar a foto \:confused:')
            }
        }
    }
}

export default dog