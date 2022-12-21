import 'dotenv/config'
import { Client, Intents } from 'discord.js'
import { TypeCommands } from './types'
import users from './commands/users'
import { cat, tags } from './commands/cat'
import dog from './commands/dog'
import { agents, armas } from './commands/valval'
import msgHelp from './utils/msgHelp'
import roles from './commands/roles'
import help from './commands/help'
import pixelArt from './commands/pixelArt'
import showPixelArts from './commands/showPixelArts'
import image from './commands/image'
import pin from './commands/pin'
import { blueBright, redBright } from 'chalk'
import commands from './utils/commands'

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
                if (args[0] === 'types') {
                    await tags(msg)
                } else if (args[0]) {
                    await cat(msg, args[0])
                } else {
                    await cat(msg, 'Cute')
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
            } else if (command === 'pixel-art') {
                if (args[0]) {
                    await pixelArt(msg, args[0])
                } else {
                    await showPixelArts(msg)
                }
            } else if (command === 'image') {
                if (args[0]) {
                    await image(msg, args[0])
                } else {
                    await image(msg)
                }
            } else if (command === 'pin') {
                await pin(msg, args[0])
            }
        } else {
            console.log(redBright('>> Command not found'))
            console.log(redBright(`    >> ${msg.content}`))
            
            msgHelp(msg)
        }
    }
})

client.login(process.env.TOKEN)