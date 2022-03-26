import { Message } from 'discord.js'

async function roles(msg: Message) {
    const rolesMap = (await msg.guild.roles.fetch()).map(role => role)
    let msgRoles = 'Cargos: \n\n'

    rolesMap.map((role, index) => msgRoles += `${role.name.includes('@') ? role.name : `<@&${role.id}>`}${index === rolesMap.length-1 ? '' : '\n'}`)

    msg.reply(msgRoles)
}

export default roles