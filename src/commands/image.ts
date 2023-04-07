import { ApplicationCommandOptionData } from 'discord.js'
import { ICommand } from '../types'
import { createApi } from 'unsplash-js'

const options: ApplicationCommandOptionData[] = [
    {
        name: 'query',
        type: 'STRING',
        description: 'Pesquisa'
    }
]

const image: ICommand = {
    name: 'image',
    options: options,
    type: 'CHAT_INPUT',
    description: 'Foto',
    run: async interaction => {
        const { value: query } = interaction.options.get('query') || { value: null }
        const unsplash = createApi({
            accessKey: process.env.ACCESS_KEY_UNSPLASH
        })
    
        let image: any
    
        if (query) {
            const { response } = await unsplash.search.getPhotos({ query: query as string })
    
            image = response.results[0]
        } else {
            const { response } = await unsplash.photos.getRandom({})
    
            image = response
        }
    
        if (image) {
            interaction.followUp({
                ephemeral: true,
                content: image.links.download
            })
        } else {
            interaction.followUp('Houve um erro ao pegar a imagem \:confused:')
        }
    }
}

export default image