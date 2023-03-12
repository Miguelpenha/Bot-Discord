import { Message } from 'discord.js'

async function members(msg: Message) {
    const members = await msg.guild.members.fetch()
    let msgMembers = '**Membros do servidor**\n\n'
    
    members.map(member => (
        msgMembers += `> <@${member.id}>\n`
    ))
    
    msg.reply(msgMembers)
}

export default members