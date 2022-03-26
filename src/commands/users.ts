import { Message } from 'discord.js'

async function users(msg: Message) {
    const members = await msg.guild.members.fetch()
    let msgMembers = 'Membros do servidor: \n\n'
    let cont = 0
    
    members.map(member => {
        msgMembers += `${member.nickname || member.displayName}${msg.guild.memberCount-1 > cont ? ',\n' : ''}`
        cont ++
    })
    
    msg.reply(msgMembers)
}

export default users