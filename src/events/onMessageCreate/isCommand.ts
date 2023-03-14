import { Message } from 'discord.js'
import { type ICommands, commandsList } from '../../commands'

function isCommand(msg: Message) {
    const isBot = msg.author.bot
    const isValid = msg.content.startsWith(process.env.PREFIX)
    
    if (!isBot && isValid) {
        const body = msg.content.slice(process.env.PREFIX.length)
        const args = body.split(process.env.PREFIX_ARGS)
        const command = args.shift().toLowerCase() as ICommands

        if (commandsList.includes(command)) {
            return { 
                args,
                command,
                validation: {
                    commandValid: true
                }
            }
        } else {
            return { 
                validation: {
                    commandNotFound: true
                }
            }
        }
    } else {
        return {
            validation: {
                notValid: true
            }
        }
    }
}

export default isCommand