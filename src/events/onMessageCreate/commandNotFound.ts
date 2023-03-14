import { Message } from 'discord.js'
import { redBright as errorMsg } from 'chalk'

function commandNotFound(msg: Message) {
    console.log(errorMsg('>> Command not found'))
    console.log(errorMsg(`    >> ${msg.content}`))
    
    msg.reply('Esse comando não existe, digite `!help` para ajuda')
}

export default commandNotFound