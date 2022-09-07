import { TypeCommands } from './types'
import { Message } from 'discord.js'
import users from './commands/users'
import { v1, v2 } from './commands/cat'
import dog from './commands/dog'
import { agents, armas } from './commands/valval'
import roles from './commands/roles'
import help from './commands/help'
import { registerSchedule, deleteSchedule, deleteFullSchedules, showSchedule, schedules } from './commands/schedules'
import { findPixelArt, pixelsArts } from './commands/pixelArt'

async function selectCommand(command: TypeCommands, args: string[], msg: Message) {
    switch (command) {
        case 'users':
            await users(msg)
        case 'cat': 
            if (args[0] === 'v1') {
                await v1(msg)
            } else if (args[0] === 'v2') {
                await v2(msg)
            }
        case 'dog':
            await dog(args, msg)
        case 'valval':
            if (args[0] === 'agents') {
                await agents(msg)
            } else if (args[0] === 'armas') {
                await armas(msg)
            }
        case 'roles':
            await roles(msg)
        case 'help':
            help(msg)
        case 'schedules':
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
        case 'pixel-art':
            if (args[0]) {
                await findPixelArt(msg, args[0])
            } else {
                await pixelsArts(msg)
            }
        default:
            break
    }
}

export default selectCommand