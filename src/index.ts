import 'dotenv/config'
import mongoose from 'mongoose'
import { Client, Intents } from 'discord.js'
import { TypeCommands } from './types'
import { blueBright, redBright } from 'chalk'
import commands from './utils/commands'
import msgHelp from './utils/msgHelp'
import selectCommand from './selectCommand'

mongoose.connect(process.env.NODE_ENV === 'production' ? process.env.URL_MONGO_PRODUCTION : process.env.URL_MONGO_DEVELOPMENT)

const client = new Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES,
        Intents.FLAGS.GUILD_MEMBERS
    ]
})

client.on('ready', () => console.log('Bot rodando'))

client.on('messageCreate', async msg => {
    if (msg.author.bot) return
    if (!msg.content.startsWith(process.env.PREFIX)) return
    
    const commandBody = msg.content.slice(process.env.PREFIX.length)
    const args = commandBody.split(':')
    const command = args.shift().toLowerCase() as TypeCommands

    if (msg.channel.isText()) {
        if (commands.includes(command)) {
            console.log(blueBright(`>> ${msg.content}`))

            await selectCommand(command, args, msg)
        } else {
            console.log(redBright('>> Command not found'))
            console.log(redBright(`    >> ${msg.content}`))
            
            msgHelp(msg)
        }
    }
})

client.login(process.env.TOKEN)