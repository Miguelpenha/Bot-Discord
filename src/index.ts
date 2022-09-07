import 'dotenv/config'
import mongoose from 'mongoose'
import { Client, Intents } from 'discord.js'
import { TypeCommands } from './types'
import users from './commands/users'
import { v1, v2 } from './commands/cat'
import dog from './commands/dog'
import { agents, armas } from './commands/valval'
import msgHelp from './utils/msgHelp'
import roles from './commands/roles'
import help from './commands/help'
import { registerSchedule, showSchedule, deleteSchedule, deleteFullSchedules, schedules } from './commands/schedules'
import pixelArt from './commands/pixelArt'
import showPixelArts from './commands/showPixelArts'
import { blueBright, redBright } from 'chalk'
import commands from './utils/commands'

mongoose.connect(process.env.NODE_ENV === 'production' ? process.env.URL_MONGO_PRODUCTION : process.env.URL_MONGO_DEVELOPMENT)

const client = new Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES,
        Intents.FLAGS.GUILD_MEMBERS
    ]
})

client.on('ready', async () => console.log('Bot rodando'))

client.on('messageCreate', async msg => {
    if (msg.author.bot) return
    if (!msg.content.startsWith(process.env.PREFIX)) return
    
    const commandBody = msg.content.slice(process.env.PREFIX.length)
    const args = commandBody.split(':')
    const command = args.shift().toLowerCase() as TypeCommands

    if (msg.channel.isText()) {
        if (commands.includes(command)) {
            console.log(blueBright(`>> ${msg.content}`))

            if (command === 'users') {
                await users(msg)
            } else if (command === 'cat') {
                if (args[0] === 'v1') {
                    await v1(msg)
                } else if (args[0] === 'v2') {
                    await v2(msg)
                }
            } else if (command === 'dog') {
                await dog(args, msg)
            } else if (command === 'valval') {
                if (args[0] === 'agents') {
                    await agents(msg)
                } else if (args[0] === 'armas') {
                    await armas(msg)
                }
            } else if (command === 'roles') {
                await roles(msg)
            } else if (command === 'help') {
                help(msg)
            } else if (command === 'schedules') {
                if (args[0]) {
                    if (args[0] === 'register' && args[1] && args[2]) {
                        await registerSchedule(msg, args)
                    } else if (args[0] === 'delete' && args[1]) {
                        await deleteSchedule(msg, args)
                    } else if (args[0] === 'delete') {
                        await deleteFullSchedules(msg)
                    } else if (args[0]) {
                        await showSchedule(msg, args)
                    }
                } else {
                    await schedules(msg)
                }
            } else if (command === 'pixel-art') {
                if (args[0]) {
                    await pixelArt(msg, args[0])
                } else {
                    await showPixelArts(msg)
                }
            }
        } else {
            console.log(redBright('>> Command not found'))
            console.log(redBright(`    >> ${msg.content}`))
            
            msgHelp(msg)
        }
    }
})

client.login(process.env.TOKEN)