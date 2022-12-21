import { Message } from 'discord.js'
import axios from 'axios'

async function tags(msg: Message) {
    const tags: string[] = await (await axios.get('https://cataas.com/api/tags')).data
    const footerText = `Veja mais em: https://cataas.com/api/tags`

    let text = ''

    tags.map(tag => {
        const newText = `${text}\n${tag}`

        if ((newText.length+footerText.length) <= 2000) {
            text = newText
        }
    })

    text = `${text}\n\n${footerText}`

    msg.reply({
        content: text
    })
}

export default tags