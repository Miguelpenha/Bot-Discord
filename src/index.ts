import 'dotenv/config'
import mongoose from 'mongoose'
import { Client, Intents } from 'discord.js'
import users from './commands/users'
import { v1, v2 } from './commands/cat'
import dog from './commands/dog'
import { agents, armas } from './commands/valval'
import { register, deleteUser, deleteUseFull, members } from './commands/members'
import msgHelp from './utils/msgHelp'
import roles from './commands/roles'
import help from './commands/help'

mongoose.connect(process.env.URL_MONGO)

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
    const command = args.shift().toLowerCase()
    if (msg.channel.isText()) {
        console.log(msg.content)

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
        } else if (command === 'members') {
            if (args[0]) {
                if (args[0] === 'register' && args[1]) {
                    await register(msg, args)
                } else if (args[0] === 'delete' && args[1]) {
                    await deleteUser(msg, args)
                } else if (args[0] === 'delete') {
                    await deleteUseFull(msg)
                } else {
                    msgHelp(msg)
                }
            } else {
                await members(msg)
            }
        } else if (command === 'roles') {
            await roles(msg)
        } else if (command === 'help') {
            help(msg)
        } else {
            msgHelp(msg)
        }
    }
})

client.login(process.env.TOKEN)