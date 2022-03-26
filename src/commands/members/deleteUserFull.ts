import { Message } from 'discord.js'
import membersModels from '../../models/member'

async function deleteUseFull(msg: Message) {
    if (process.env.ID_ADMIN === msg.author.id) {
        await membersModels.deleteMany()!
        
        msg.reply('Usúarios deletados com sucesso \:smile:')
    } else {
        msg.reply('Você não tem permisão para excluir um usuário \:confused:')
    }
}

export default deleteUseFull