import { Message } from 'discord.js'
import schedulesModels from '../../models/schedule'
import { Ihorary } from '../../types'

async function registerSchedule(msg: Message, args: string[]) {
    const scheduleExists = await schedulesModels.findOne({name: args[1]})

    if (scheduleExists) {
        msg.reply('Já existe uma agenda com esse nome \:confused:, tente um nome diferente')
    } else {
        const name = args[1]
        const horarys: Ihorary[] = []

        args.shift()
        args.shift()

        let contIndex = 0

        for (let cont = 0;contIndex < args.length/3;cont+=3) {
            horarys.push({
                hour: `${args[cont]}:${args[cont+1]}`,
                task: args[cont+2]
            })

            contIndex++
        }

        await schedulesModels.create({
            name,
            author: msg.author.username,
            horarys
        })


        msg.reply('Agenda cadastrada com sucesso \:smile:')
    }
}

export default registerSchedule