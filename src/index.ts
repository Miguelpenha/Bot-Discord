import 'dotenv/config'
import { Client, Intents } from 'discord.js'
import { blueBright, redBright } from 'chalk'
import commands, { type ICommands, commandsList } from './commands'

const client = new Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES,
        Intents.FLAGS.GUILD_MEMBERS
    ]
})

client.on('ready', async () => console.log('Bot rodando'))

client.on('messageCreate', async msg => {
    const isByBot = msg.author.bot
    const isValidCommand = msg.content.startsWith(process.env.PREFIX)
    if (!isByBot && isValidCommand) {
        const body = msg.content.slice(process.env.PREFIX.length)
        const args = body.split(':')
        const command = args.shift().toLowerCase() as ICommands

        if (commandsList.includes(command)) {
            console.log(blueBright(`>> ${msg.content}`))

            commands[command](msg, args)
        } else {
            console.log(redBright('>> Command not found'))
            console.log(redBright(`    >> ${msg.content}`))
            
            msg.reply('Esse comando não existe, digite `!help` para ajuda')
        }
    }
})

client.login(process.env.TOKEN)