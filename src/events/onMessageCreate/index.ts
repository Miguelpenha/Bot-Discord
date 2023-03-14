import { Message } from 'discord.js'
import isCommand from './isCommand'
import { blueBright as infoMsg } from 'chalk'
import commands from '../../commands'
import commandNotFound from './commandNotFound'

async function onMessageCreate(msg: Message) {
    const { validation, command, args } = isCommand(msg)
    
    if (!validation.notValid) {
        if (validation.commandValid) {
            console.log(infoMsg(`>> ${msg.content}`))

            commands[command](msg, args)
        } else if (validation.commandNotFound) {
            commandNotFound(msg)
        }
    }
}

export default onMessageCreate