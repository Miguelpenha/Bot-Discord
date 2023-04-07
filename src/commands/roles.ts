import { ICommand } from '../types'

const roles: ICommand = {
    name: 'roles',
    type: 'CHAT_INPUT',
    description: 'Cargos',
    run: async interaction => {
        const rolesMap = (await interaction.guild.roles.fetch()).map(role => role)
        let msgRoles = '**Cargos**\n\n'

        rolesMap.map(role => (
            msgRoles += `> ${role.name.startsWith('@') ? role.name : `<@&${role.id}>`}\n`
        ))

        interaction.followUp({
            ephemeral: true,
            content: msgRoles
        })
    }
}

export default roles