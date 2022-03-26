import { Message } from 'discord.js'

function msgHelp(msg: Message) {
    msg.reply('Esse comando não existe, digite `!help` para ajuda')
}

export default msgHelp