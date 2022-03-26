import { Message } from 'discord.js'
import membersModels from '../../models/member'

async function members(msg: Message) {
    const members = await membersModels.find()
    let messageMembers = 'Participantes: \n\n'

    members.map((member, index) => messageMembers += `${member.name}${index === members.length-1 ? '' : '\n'}`)

    msg.reply(members.length >=1 ? messageMembers : "Não existem usúarios cadastrados \:confused:, digite `!members:register:'seu nome'` para se cadastrar")
}

export default members