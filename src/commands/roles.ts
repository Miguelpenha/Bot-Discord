import { Message } from 'discord.js'

async function roles(msg: Message) {
    const rolesMap = (await msg.guild.roles.fetch()).map(role => role)
    let msgRoles = '**Cargos**\n\n'

    rolesMap.map(role => (
        msgRoles += `> ${role.name.startsWith('@') ? role.name : `<@&${role.id}>`}\n`
    ))

    msg.reply(msgRoles)
}

export default roles