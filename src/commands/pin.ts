import { Message } from 'discord.js'
import axios from 'axios'
import { JSDOM } from 'jsdom'

async function pin(msg: Message, url: string) {
    const { data } = await axios.get(`https://br.pinterest.com/${url}`)
    const html = new JSDOM(data)

    const imagesRaws = html.window.document.body.querySelectorAll('[fetchpriority="auto"]')
    const images = []

    imagesRaws.forEach((image, index) => {
        if (index != 0) {
            const url = image.getAttribute('src')
            const sizeImage = url.split('/')[3]
            const sizes = ['70x', '75x75_RS']

            if (!sizes.includes(sizeImage)) {
                images.push(url)
            }
        }
    })

    msg.reply({
        files: [
            images[Math.floor(Math.random()*images.length)]
        ]
    })
}

export default pin