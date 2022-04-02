import { Message } from 'discord.js'
import schedulesModels from '../../models/schedule'

async function deleteSchedule(msg: Message, args: string[]) {
    const schedule = await schedulesModels.findOne({ name: args[1] })

    if (schedule) {
        if (process.env.ID_ADMIN === msg.author.id || msg.author.username === schedule.author) {
            await schedulesModels.deleteOne({name: args[1]})
            
            msg.reply('Agenda deletada com sucesso \:smile:')
        } else {
            msg.reply('Você não tem permissão para excluir essa agenda \:confused:')
        }
    } else {
        msg.reply('Essa agenda não existe \:confused:')
    }
}

export default deleteSchedule