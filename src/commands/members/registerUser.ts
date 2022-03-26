import { Message } from 'discord.js'
import membersModels from '../../models/member'

async function register(msg: Message, args: string[]) {
    const memberExists = await membersModels.findOne({nickName: msg.author.username})

    if (memberExists) {
        msg.reply('Esse usúario já está cadastrado \:confused:')
    } else {
        await membersModels.create({
            name: args[1],
            nickName: msg.author.username
        })

        msg.reply('Usúario cadastrado com sucesso \:smile:')
    }
}

export default register