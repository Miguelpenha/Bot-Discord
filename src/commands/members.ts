import { ICommand } from '../types'

const members: ICommand = {
    name: 'members',
    type: 'CHAT_INPUT',
    description: 'Membros',
    run: async interaction => {
        const members = await interaction.guild.members.fetch()
        let msgMembers = '**Membros do servidor**\n\n'
        
        members.map(member => (
            msgMembers += `> <@${member.id}>\n`
        ))
        
        interaction.followUp({
            ephemeral: true,
            content: msgMembers
        })
    }
}

export default members