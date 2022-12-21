import { Message } from 'discord.js'
import { createApi } from 'unsplash-js'

async function image(msg: Message, query?: string) {
    const unsplash = createApi({
        accessKey: 'pZEnSkEec2VUCbSZIHivsJAQea4RG5l4jggq9RU-yVQ'
    })

    const image: any = query ? (await unsplash.search.getPhotos({ query })).response.results[0] : (await unsplash.photos.getRandom({})).response
    
    msg.reply(image.links.download)
}

export default image