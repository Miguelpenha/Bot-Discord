import { Message } from 'discord.js'
import { createApi } from 'unsplash-js'

async function image(msg: Message, args: string[]) {
    const unsplash = createApi({
        accessKey: process.env.ACCESS_KEY_UNSPLASH
    })

    let image: any

    if (args[0]) {
        const { response } = await unsplash.search.getPhotos({ query: args[0] })

        image = response.results[0]
    } else {
        const { response } = await unsplash.photos.getRandom({})

        image = response
    }

    if (image) {
        msg.reply(image.links.download)
    } else {
        msg.reply('Houve um erro ao pegar a imagem \:confused:')
    }
}

export default image