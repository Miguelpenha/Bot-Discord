import { Message } from 'discord.js'
import membersModels from '../../models/member'

async function deleteUser(msg: Message, args: string[]) {
    if (process.env.ID_ADMIN === msg.author.id) {
        await membersModels.deleteOne({name: args[1]})
        
        msg.reply('Usúario deletado com sucesso \:smile:')
    } else {
        msg.reply('Você não tem permisão para excluir um usuário \:confused:')
    }
}

export default deleteUser