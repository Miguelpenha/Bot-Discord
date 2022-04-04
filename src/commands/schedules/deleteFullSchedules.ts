import { Message } from 'discord.js'
import schedulesModels from '../../models/schedule'

async function deleteFullSchedules(msg: Message) {
    if (process.env.ID_ADMIN === msg.author.id) {
        await schedulesModels.deleteMany()
        
        msg.reply('Todas as agendas deletadas com sucesso \:smile:')
    } else {
        msg.reply('Você não tem permissão para excluir essas agendas \:confused:')
    }
}

export default deleteFullSchedules