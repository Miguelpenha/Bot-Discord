import { Message } from 'discord.js'
import schedulesModels from '../../models/schedule'

async function showSchedule(msg: Message, args: string[]) {
    const schedule = await schedulesModels.findOne({ name: args[0] })

    if (schedule) {
        let messageSchedule = `**Nome**: ${schedule.name}\n**Autor**: ${schedule.author}\n\n`

        schedule.horarys.map((horary, index) => messageSchedule += `**${horary.hour}**: ${horary.task}${index === schedule.horarys.length-1 ? '' : '\n'}`)

        msg.reply(messageSchedule)
    } else {
        msg.reply('Essa agenda não existe \:confused:')
    }
}

export default showSchedule